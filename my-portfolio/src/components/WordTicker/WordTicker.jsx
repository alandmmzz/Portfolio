import React from "react";
import "./WordTicker.css";

export default function WordTicker({
  words = ["Frontend", "UX/UI", "React", "Diseño", "Accesibilidad", "Frontend", "UX/UI", "React", "Diseño", "Accesibilidad", "Frontend", "UX/UI", "React", "Diseño", "Accesibilidad", "Frontend", "UX/UI", "React", "Diseño", "Accesibilidad"],
  duration = 15,
  className = "",
  pauseOnHover = true,
}) {
  const pauseStyle = pauseOnHover ? "word-ticker--pause-on-hover" : "";

  return (
    <div className="word-ticker-container-container" >
        <div className="word-ticker-container" >
            <div
            className={`word-ticker ${className} ${pauseStyle}`}
            style={{ "--ticker-duration": `${duration}s` }}
            >
                <div className="word-ticker__inner">
                    {words.map((w, i) => (
                    <span className="word-ticker__item" key={i}>
                        {w}
                    </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}
