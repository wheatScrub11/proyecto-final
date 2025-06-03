import React, { useState, useEffect } from "react";
import "./minigame.css";
import rts from "/public/assets/rts.json"

const Minigame = () => {
    const [isLoading, setIsLoading] = useState(true);
  
  
    return (
      <div className="embed-container">
  
          <iframe
            title="Sitio Web Incrustado"
            src={rts["e"]}
            className="embedded-website"
            onLoad={() => setIsLoading(false)}
            allow="fullscreen"
            allowFullScreen
          />
      </div>
    );
};

export default Minigame;
