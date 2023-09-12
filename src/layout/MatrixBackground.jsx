import React, { useEffect, useRef, useContext } from 'react';
import { DarkModeContext } from '../hooks/Context';
import { letters, matrixDict } from '../helpers/variables';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

function MatrixBackground() {
  const canvasRef = useRef(null);
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      // Fading background color
      if (darkMode) {
        ctx.fillStyle = matrixDict.darkBackground;
      } else {
        ctx.fillStyle = matrixDict.lightBackground;
      }

      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + 'px monospace'; // Added to ensure the text renders properly

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];

        // Matric letter color
        if (darkMode) {
          ctx.fillStyle = matrixDict.darkColor;
        } else {
          ctx.fillStyle = matrixDict.lightColor;
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }

    const intervalId = setInterval(() => draw(darkMode), 33);

    return () => {
      clearInterval(intervalId);
    };
  }, [darkMode]);

  return <Canvas darkmode={darkMode.toString()} ref={canvasRef}></Canvas>;
}

export default MatrixBackground;
