import React, { useState } from "react";

export default function ExpandableSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Ver Menos" : "Ver Mais"}
      </button>
      {expanded && (
        <p>Essa é uma seção expansível com mais informações sobre mim!</p>
      )}
    </section>
  );
}
