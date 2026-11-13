import ReactMarkdown from 'react-markdown';

interface ChatMarkdownRendererProps {
  text: string;
}

export default function ChatMarkdownRenderer({
  text,
}: ChatMarkdownRendererProps) {
  return <ReactMarkdown>{text}</ReactMarkdown>;
}