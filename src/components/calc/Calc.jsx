import React, { useState, useEffect, useRef } from 'react';
import './calc.css';

const Calculadora = () => {
  const [globalCurrentString, setGlobalCurrentString] = useState([]);
  const [holder2, setHolder2] = useState(0);
  const [holder3, setHolder3] = useState(0);
  const [holder4, setHolder4] = useState(0);
  const [holder6, setHolder6] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [result, setResult] = useState('0');
  
  const bodyRef = useRef(null);
  const mainContainerRef = useRef(null);
  const colorModeButtonRef = useRef(null);
  const circleRef = useRef(null);
  const circleTextRef = useRef(null);
  const stringValueRef = useRef(null);
  const equalValueRef = useRef(null);
  const equalBorderRef = useRef(null);
  const buttonsRef = useRef([]);

  // Math operations (identical to original)
  const add = (a, b) => parseFloat(a) + parseFloat(b);
  const subtract = (a, b) => parseFloat(a) - parseFloat(b);
  const multiply = (a, b) => parseFloat(a) * parseFloat(b);
  const divide = (a, b) => {
    let result = a / b;
    let rounded = Math.round((result + Number.EPSILON) * 1000) / 1000;
    return parseFloat(rounded);
  };

  const operate = ([a, operator, b]) => {
    if (operator === "+") {
      return [add(a, b)];
    } else if (operator === "−") {
      return [subtract(a, b)];
    } else if (operator === "x") {
      return [multiply(a, b)];
    } else if (operator === "/") {
      return [divide(a, b)];
    }
  };

  const concatBeforeAfterOperator = (arr) => {
    let a = "";
    let b = "";
    let indexOfOperator = arr.indexOf("+");
    let currentOperator = "+";
    
    if (indexOfOperator === -1) {
      indexOfOperator = arr.indexOf("−");
      currentOperator = "−";
    }
    if (indexOfOperator === -1) {
      indexOfOperator = arr.indexOf("/");
      currentOperator = "/";
    }
    if (indexOfOperator === -1) {
      indexOfOperator = arr.indexOf("x");
      currentOperator = "x";
    }
    
    for (let i = 0; i < indexOfOperator; ++i) {
      a += arr[i];
    }
    for (let i = indexOfOperator + 1; i < arr.length; ++i) {
      b += arr[i];
    }

    return [parseFloat(a), currentOperator, parseFloat(b)];
  };

  const sus = () => {
    let arrayToOperate = concatBeforeAfterOperator(globalCurrentString);
    let operationResult = operate(arrayToOperate);
    
    if (isNaN(operationResult[0])){
      setGlobalCurrentString([]);
      setResult("Not posible!");
    } else {
      setGlobalCurrentString(operationResult);
      setResult(operationResult[0]);
    }
  };

  const pasteStringOnMainBox = () => {
    return globalCurrentString.join("");
  };

  // Button handlers (identical logic to original)
  const forAllNumberFunction = (number) => {
    setHolder4(0);
    const newString = [...globalCurrentString, number];
    setGlobalCurrentString(newString);
  };

  const forAllOperatorsFunction = (operator) => {
    let holder = 0;
    setHolder4(prev => prev + 1);
    
    let newString = [...globalCurrentString, operator];

    if (holder4 >= 1) {
      newString = newString.slice(0, newString.length - 2);
      newString.push(operator);
    }
        
    if (["+", "−", "/", "x"].includes(newString[0])) {
      newString = newString.slice(0, newString.length - 1);
    }
        
    for (let i = 0; i < newString.length; ++i) {
      if (["+", "−", "/", "x"].includes(newString[i])) {
        ++holder;
      }
    }

    if (holder === 2) {
      holder = 0;
      newString = newString.slice(0, newString.length - 1);
      sus();
      newString = [...globalCurrentString, operator];
      setGlobalCurrentString(newString);
    } else {
      setGlobalCurrentString(newString);
    }
  };

  const forTheEqualFunction = () => {
    let a = 0, b = 0, c = 0, d = 0;

    globalCurrentString.forEach(element => {
      if (element === "+") ++a;
      if (element === "−") ++b;
      if (element === "/") ++c;
      if (element === "x") ++d;
    });

    if (globalCurrentString.length === 0) {
      return;
    }

    if (a === 1 || b === 1 || c === 1 || d === 1) {
      const lastElement = globalCurrentString[globalCurrentString.length - 1];
      if (!["+", "−", "/", "x"].includes(lastElement)) {
        sus();
      }
    }
  };

  const forThePointFunction = () => {
    let whatsThatIndex;
    let newString = [...globalCurrentString, "."];

    globalCurrentString.forEach(element => {
      if (["+", "−", "/", "x"].includes(element)) {
        whatsThatIndex = globalCurrentString.indexOf(element);
      }
    });

    if (whatsThatIndex !== undefined) {
      newString = [...globalCurrentString, "."];
      for (let i = whatsThatIndex; i < newString.length; ++i) {
        if (newString[i] === ".") {
          const zz2 = newString.indexOf(".");
          for (let k = zz2 + 1; k < newString.length; ++k) {
            if (newString[k] === ".") {
              newString.pop();
            }
          }
        }
      }
    } else {
      for (let i = 0; i < newString.length; ++i) {
        if (newString[i] === ".") {
          const zz2 = newString.indexOf(".");
          for (let k = zz2 + 1; k < newString.length; ++k) {
            if (newString[k] === ".") {
              newString.pop();
            }
          }
        }
      }
    }
    setGlobalCurrentString(newString);
  };

  const handleCClick = () => {
    try {
      const newString = globalCurrentString.slice(0, globalCurrentString.length - 1);
      setGlobalCurrentString(newString);
    } catch (e) {}
    setHolder4(0);
  };

  const handleACClick = () => {
    setGlobalCurrentString([]);
    setResult('0');
  };

  const handlePosNegClick = () => {
    let whatsThatIndex2;
    let newString = [...globalCurrentString];

    globalCurrentString.forEach(element => {
      if (["+", "−", "/", "x"].includes(element)) {
        whatsThatIndex2 = globalCurrentString.indexOf(element);
      }
    });

    if (whatsThatIndex2 !== undefined) {
      if (holder3 === 0) {
        newString.splice(whatsThatIndex2 + 1, 0, "-");
        setHolder3(1);
      } else {
        newString.splice(whatsThatIndex2 + 1, 1);
        setHolder3(0);
      }
    } else {
      if (holder2 === 0) {
        newString.unshift("-");
        setHolder2(1);
      } else {
        newString.shift();
        setHolder2(0);
      }
    }
    setGlobalCurrentString(newString);
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    setHolder6(newMode ? 1 : 0);

    // Apply the exact same class changes as original
    if (bodyRef.current) {
      newMode ? bodyRef.current.classList.add("toWhite") : bodyRef.current.classList.remove("toWhite");
    }
    if (mainContainerRef.current) {
      newMode ? mainContainerRef.current.classList.add("toWhite") : mainContainerRef.current.classList.remove("toWhite");
    }
    if (colorModeButtonRef.current) {
      newMode ? colorModeButtonRef.current.classList.add("lightMain") : colorModeButtonRef.current.classList.remove("lightMain");
    }
    if (circleRef.current) {
      newMode ? circleRef.current.classList.add("circleLightMain") : circleRef.current.classList.remove("circleLightMain");
    }
    if (circleTextRef.current) {
      newMode ? circleTextRef.current.classList.add("lORdLightMain") : circleTextRef.current.classList.remove("lORdLightMain");
      circleTextRef.current.textContent = newMode ? "Dark" : "Light";
    }
    if (stringValueRef.current) {
      stringValueRef.current.style.color = newMode ? "black" : "white";
    }
    if (equalValueRef.current) {
      equalValueRef.current.style.color = newMode ? "black" : "white";
    }
    if (equalBorderRef.current) {
      equalBorderRef.current.style.borderBottom = newMode ? "1px solid #0000000c" : "1px solid #ffffff0c";
    }
  };

  // Button press effect (identical to original)
  useEffect(() => {
    const handleMouseDown = (e) => {
      if (buttonsRef.current.includes(e.target)) {
        e.target.style.cssText = "cursor:default;background-color:yellow;transform:scale(0.92, 0.92);color:black;";
      }
    };

    const handleMouseUp = () => {
      buttonsRef.current.forEach(btn => {
        if (btn) btn.style.cssText = "cursor:pointer;";
      });
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Keyboard support (identical to original)
  useEffect(() => {
    const handleKeyDown = (e) => {
      const whatIsTheKey = e.key;
      const differentOperators = ["/", "x", "−", "+"];

      if (/[0-9]/.test(whatIsTheKey)) {
        forAllNumberFunction(parseFloat(whatIsTheKey));
      } else if (whatIsTheKey === "/") {
        forAllOperatorsFunction(differentOperators[0]);
      } else if (whatIsTheKey === "*" || whatIsTheKey === "x") {
        forAllOperatorsFunction(differentOperators[1]);
      } else if (whatIsTheKey === "-") {
        forAllOperatorsFunction(differentOperators[2]);
      } else if (whatIsTheKey === "+") {
        forAllOperatorsFunction(differentOperators[3]);
      } else if (whatIsTheKey === "Backspace") {
        handleCClick();
      } else if (whatIsTheKey === ".") {
        forThePointFunction();
      } else if (whatIsTheKey === "Enter") {
        forTheEqualFunction();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [globalCurrentString, holder4]);

  // Update result display whenever globalCurrentString changes
  useEffect(() => {
    if (globalCurrentString.length === 0) {
      setResult('0');
      return;
    }
    
    try {
      const arrayToOperate = concatBeforeAfterOperator(globalCurrentString);
      const operationResult = operate(arrayToOperate);
      setResult(isNaN(operationResult[0]) ? "Not posible!" : operationResult[0]);
    } catch {
      setResult('0');
    }
  }, [globalCurrentString]);

  return (
    <div className="body" ref={bodyRef}>
      <div className="main-container" ref={mainContainerRef}>
        <div className="text-main-container">
          <div className="color-mode" ref={colorModeButtonRef} onClick={toggleDarkMode}>
            <div className="circle" ref={circleRef}></div>
            <div className="lORd unselectable" ref={circleTextRef}>Light</div>
          </div>
          <div className="the-equal" ref={equalBorderRef}>
            <div className="simbol">=</div>
            <div className="the-equal-value" ref={equalValueRef}>{result}</div>
          </div>
          <div className="the-string">
            <div className="the-string-value" ref={stringValueRef}>{pasteStringOnMainBox()}</div>
          </div>
        </div>
        <div className="main-grid">
          <button className="btn blue c" ref={el => buttonsRef.current[0] = el} onClick={handleCClick}>C</button>
          <button className="btn blue ac" ref={el => buttonsRef.current[1] = el} onClick={handleACClick}>AC</button>
          <button className="btn blue pos-neg" ref={el => buttonsRef.current[2] = el} onClick={handlePosNegClick}>+/-</button>
          <button className="btn isOperator blue divide" ref={el => buttonsRef.current[3] = el} onClick={() => forAllOperatorsFunction("/")}>/</button>
          
          <button className="btn isNumber obscure seven" ref={el => buttonsRef.current[4] = el} onClick={() => forAllNumberFunction(7)}>7</button>
          <button className="btn isNumber obscure eight" ref={el => buttonsRef.current[5] = el} onClick={() => forAllNumberFunction(8)}>8</button>
          <button className="btn isNumber obscure nine" ref={el => buttonsRef.current[6] = el} onClick={() => forAllNumberFunction(9)}>9</button>
          <button className="btn isOperator blue multiply" ref={el => buttonsRef.current[7] = el} onClick={() => forAllOperatorsFunction("x")}>x</button>
          
          <button className="btn isNumber obscure four" ref={el => buttonsRef.current[8] = el} onClick={() => forAllNumberFunction(4)}>4</button>
          <button className="btn isNumber obscure five" ref={el => buttonsRef.current[9] = el} onClick={() => forAllNumberFunction(5)}>5</button>
          <button className="btn isNumber obscure six" ref={el => buttonsRef.current[10] = el} onClick={() => forAllNumberFunction(6)}>6</button>
          <button className="btn isOperator blue minus" ref={el => buttonsRef.current[11] = el} onClick={() => forAllOperatorsFunction("−")}>-</button>
          
          <button className="btn isNumber obscure one" ref={el => buttonsRef.current[12] = el} onClick={() => forAllNumberFunction(1)}>1</button>
          <button className="btn isNumber obscure two" ref={el => buttonsRef.current[13] = el} onClick={() => forAllNumberFunction(2)}>2</button>
          <button className="btn isNumber obscure three" ref={el => buttonsRef.current[14] = el} onClick={() => forAllNumberFunction(3)}>3</button>
          <button className="btn isOperator blue plus" ref={el => buttonsRef.current[15] = el} onClick={() => forAllOperatorsFunction("+")}>+</button>
          
          <button className="btn isNumber obscure zero" ref={el => buttonsRef.current[16] = el} onClick={() => forAllNumberFunction(0)}>0</button>
          <button className="btn obscure point" ref={el => buttonsRef.current[17] = el} onClick={forThePointFunction}>.</button>
          <button className="btn orange equals" ref={el => buttonsRef.current[18] = el} onClick={forTheEqualFunction}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculadora;