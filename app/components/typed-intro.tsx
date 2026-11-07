"use client";

import { useEffect, useState } from "react";

const fullName = "Caio Araujo";

export default function TypedIntro() {
  const [name, setName] = useState("");
  const [showRole, setShowRole] = useState(false);

  useEffect(() => {
    let index = 0;
    const typing = window.setInterval(() => {
      index += 1;
      setName(fullName.slice(0, index));
      if (index >= fullName.length) {
        window.clearInterval(typing);
        window.setTimeout(() => setShowRole(true), 250);
      }
    }, 105);

    return () => window.clearInterval(typing);
  }, []);

  return (
    <div className="hero-heading">
      <p className="eyebrow"><span className="status-dot" /> Olá, eu sou</p>
      <h1 id="hero-title" aria-label="Caio Araujo">
        <span aria-hidden="true">{name}</span>
        <span className="typing-caret" aria-hidden="true" />
      </h1>
      <p className={`hero-role${showRole ? " is-visible" : ""}`} aria-live="polite">
        Fullstack developer
      </p>
    </div>
  );
}
