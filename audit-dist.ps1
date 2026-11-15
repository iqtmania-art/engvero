$ErrorActionPreference = "Stop"
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

if (-not (Test-Path .\dist)) {
    Write-Host "dist\ not found. Run 'npm run build' first." -ForegroundColor Red
    exit 1
}

$distRoot = (Resolve-Path .\dist).Path
$htmlFiles = Get-ChildItem -Path $distRoot -Recurse -File -Filter "*.html"

# Build map of all valid routes
$validRoutes = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)
foreach ($f in $htmlFiles) {
    if ($f.Name -eq "index.html") {
        $rel = $f.DirectoryName.Substring($distRoot.Length).Replace('\', '/')
        [void]$validRoutes.Add($(if ($rel -eq "") { "/" } else { "$rel/" }))
    } else {
        $rel = $f.FullName.Substring($distRoot.Length).Replace('\', '/')
        [void]$validRoutes.Add($rel)
    }
}

$titles = @{}
$brokenLinks = @()
$seoIssues = @()

foreach ($f in $htmlFiles) {
    $route = if ($f.Name -eq "index.html") {
        $r = $f.DirectoryName.Substring($distRoot.Length).Replace('\', '/')
        if ($r -eq "") { "/" } else { "$r/" }
    } else {
        $f.FullName.Substring($distRoot.Length).Replace('\', '/')
    }

    $html = [System.IO.File]::ReadAllText($f.FullName, $utf8NoBom)

    # Check title uniqueness
    if ($html -match '<title>(.*?)</title>') {
        $t = $Matches[1].Trim()
        if ($titles.ContainsKey($t)) {
            $seoIssues += "[DUP TITLE] $route shares title with $($titles[$t]): '$t'"
        } else {
            $titles[$t] = $route
        }
    } else {
        $seoIssues += "[NO TITLE] $route"
    }

    # Check meta description & canonical
    if ($html -notmatch '<meta[^>]+name=["'']description["'']') { $seoIssues += "[NO DESC] $route" }
    if ($html -notmatch '<link[^>]+rel=["'']canonical["'']')  { $seoIssues += "[NO CANONICAL] $route" }

    # Check internal <a href="/..."> links
    $linkMatches = [regex]::Matches($html, '<a\b[^>]*\bhref=["''](/[^"'']*)["'']')
    foreach ($m in $linkMatches) {
        $href = $m.Groups[1].Value.Split('#')[0].Split('?')[0]
        if ([string]::IsNullOrWhiteSpace($href)) { continue }
        if ($href -match '\.(css|js|png|jpe?g|webp|svg|ico|xml|txt|json|pdf|woff2?)$') { continue }

        $normalized = if ($href -eq "/") { "/" } elseif ($href.EndsWith("/")) { $href } else { "$href/" }
        if (-not $validRoutes.Contains($normalized) -and -not $validRoutes.Contains($href)) {
            $brokenLinks += "[404 LINK] On $route -> $href"
        }
    }
}

Write-Host "`n=== DIST AUDIT ($($htmlFiles.Count) HTML files) ===" -ForegroundColor Cyan
if ($brokenLinks.Count -eq 0) {
    Write-Host "[PASS] 0 broken internal links found!" -ForegroundColor Green
} else {
    Write-Host "[FAIL] Broken internal links:" -ForegroundColor Red
    $brokenLinks | Sort-Object -Unique | ForEach-Object { Write-Host "  $_" }
}

if ($seoIssues.Count -eq 0) {
    Write-Host "[PASS] All pages have unique titles, descriptions, and canonicals!" -ForegroundColor Green
} else {
    Write-Host "[WARN] SEO metadata issues:" -ForegroundColor Yellow
    $seoIssues | ForEach-Object { Write-Host "  $_" }
}
