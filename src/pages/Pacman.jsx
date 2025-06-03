import React, { useState, useEffect } from "react";
import "./pacman.css";
import rts from "/public/assets/rts.json"

const Pacman = () =>{
    const [isLoading, setIsLoading] = useState(true);
  
  
    return (
      <div className="embed-container">
  
          <iframe
            title="Sitio Web Incrustado"
            src={rts["c"]}
            className="embedded-website"
            onLoad={() => setIsLoading(false)}
            allow="fullscreen"
            allowFullScreen
          />
      </div>
    );
}

export default Pacman