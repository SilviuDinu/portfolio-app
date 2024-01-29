import useDimensions from '@hooks/useDimensions';
import { useEffect, useRef } from 'react';
import './style.scss';

const Loader = ({ duration }: { duration?: number }) => {
  const characters = 'LOADING';
  const canvasRef = useRef(null);
  const [, width, height] = useDimensions();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -100));

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = Math.floor(Math.random() * -20);
        } else {
          drops[i]++;
        }
      }

      requestAnimationFrame(draw);
    }

    draw();
  }, [width, height]);

  const loaderStyle = duration
    ? {
        animation: `fadeInOut ${duration}ms infinite`,
      }
    : {};

  return (
    <div
      className='loader'
      style={loaderStyle}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Loader;
