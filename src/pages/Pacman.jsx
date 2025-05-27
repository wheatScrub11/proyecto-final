import React, { useState, useEffect } from "react";
import "./pacman.css";

const Pacman = () =>{
    const [isLoading, setIsLoading] = useState(true);
    const websiteUrl = "https://wheatscrub11.github.io/pacman/"; 
  
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
}

export default Pacman