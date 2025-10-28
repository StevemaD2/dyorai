'use client';

export default function AIChat() {
  return (
    <div className="flex h-full flex-col">
      <iframe
        src="https://iagentesiframe.vercel.app/"
        className="h-full w-full border-0"
        title="AI Agent"
        allow="microphone; camera; display-capture; autoplay; clipboard-write"
      ></iframe>
    </div>
  );
}