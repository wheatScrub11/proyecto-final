import React, { useState, useEffect } from "react";
import "./minigame.css";

const Minigame = () => {
    const [isLoading, setIsLoading] = useState(true);
    const websiteUrl = "https://wheatscrub11.github.io/Mulligan/"; // Reemplaza con tu URL
  
  
    return (
      <div className="embed-container">
  
          <iframe
            title="Sitio Web Incrustado"
            src={websiteUrl}
            className="embedded-website"
            onLoad={() => setIsLoading(false)}
            allow="fullscreen"
            allowFullScreen
          />
      </div>
    );
};

export default Minigame;
