import { useEffect, useState } from "react";

export default function Chat() {
  const examples = [
    "Do I already own a yellow dress?",
    "Should I invest in another cashmere sweater?",
    "Show me all of my polka dot items",
  ];

  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (query || isFocused) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setPlaceholderIndex((prev) => (prev + 1) % examples.length);
        setVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [query, isFocused, examples.length]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8">
      <h1 className="text-2xl mb-4">Ask away!</h1>
      <div className="relative w-128">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full border rounded-3xl border-text py-2 px-4 focus:outline-none bg-gray-100"
        />
        {!query && !isFocused && (
          <span
            className={`
              pointer-events-none
              absolute inset-y-0 left-0
              flex items-center
              px-4
              text-gray-700
              text-base
              leading-normal
              transition-opacity transition-transform duration-300
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-1"
              }
            `}
          >
            {examples[placeholderIndex]}
          </span>
        )}
      </div>
    </div>
  );
}
