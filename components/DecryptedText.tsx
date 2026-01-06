import React, { useEffect, useState, useRef } from 'react';

// Inspired by ReactBits Decrypted Text
interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  className?: string;
  reveal?: boolean;
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export const DecryptedText: React.FC<DecryptedTextProps> = ({ 
  text, 
  speed = 50, 
  maxIterations = 10, 
  className = "",
  reveal = true
}) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!reveal) return;

    let iteration = 0;

    clearInterval(intervalRef.current as number);

    intervalRef.current = window.setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current as number);
      }

      iteration += 1 / 3;
    }, speed);

    return () => clearInterval(intervalRef.current as number);
  }, [text, speed, reveal]);

  return <span className={className}>{displayText}</span>;
};