import React, { useState, useEffect } from "react";
import "./calculadora.css";
import rts from "/public/assets/rts.json"

const Calculadora = () =>{
    const [isLoading, setIsLoading] = useState(true);

  
  
    return (
      <div className="embed-container">
  
          <iframe
            title="Sitio Web Incrustado"
            src={rts["a"]}
            className="embedded-website"
            onLoad={() => setIsLoading(false)}
            allow="fullscreen"
            allowFullScreen
          />
      </div>
    );
}

export default Calculadora