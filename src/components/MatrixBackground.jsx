import React, { useEffect, useRef } from 'react';
import { letters } from '../variables';
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

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = Array(columns).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(255, 255, 255, .1)'; // Fading background color
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + 'px monospace'; // Added to ensure the text renders properly

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#ececec'; // Matric letter color
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }

    const intervalId = setInterval(draw, 33);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <Canvas ref={canvasRef}></Canvas>;
}

export default MatrixBackground;
