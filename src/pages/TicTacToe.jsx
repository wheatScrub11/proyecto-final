import React, { useState, useEffect } from "react";
import "./tictactoe.css";

const TicTacToe = () =>{
    const [isLoading, setIsLoading] = useState(true);
    const websiteUrl = "https://wheatscrub11.github.io/TicTacToe/"; 
  
  
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

export default TicTacToe