import React, { useState, useEffect } from "react";
import "./tictactoe.css";
import rts from "/public/assets/rts.json"

const TicTacToe = () =>{
    const [isLoading, setIsLoading] = useState(true);
  
  
    return (
      <div className="embed-container">
  
          <iframe
            title="Sitio Web Incrustado"
            src={rts["d"]}
            className="embedded-website"
            onLoad={() => setIsLoading(false)}
            allow="fullscreen"
            allowFullScreen
          />
      </div>
    );
}

export default TicTacToe