import React, { useState, useEffect } from "react";
import "./pomodoro.css";
import rts from "/public/assets/rts.json"

const Pomodoro = () =>{
    const [isLoading, setIsLoading] = useState(true);
  
  
    return (
      <div className="embed-container">
  
          <iframe
            title="Sitio Web Incrustado"
            src={rts["b"]}
            className="embedded-website"
            onLoad={() => setIsLoading(false)}
            allow="fullscreen"
            allowFullScreen
          />
      </div>
    );
}

export default Pomodoro