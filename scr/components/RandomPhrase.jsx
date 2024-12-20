import React, { useState, useEffect } from "react";

export default function RandomPhrase() {
  const [phrase, setPhrase] = useState("");
  const phrases = [
    "Apaixonado por tecnologia e inovação!",
    "Desenvolvedor em Constante Aprendizado!",
    "Aprendendo Lógica e Hooks do React!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      setPhrase(phrases[randomIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return <p>{phrase}</p>;
}
