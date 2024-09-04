import { useEffect, forwardRef, useRef } from 'react';

const DeskMovement = forwardRef(({ triggerFinalMove, onDeskAnimationComplete }, ref) => {
  const animationHasRun = useRef(false); // Ref para controlar si la animación ya ha corrido

  useEffect(() => {
    // Solo ejecutar la animación si no ha corrido antes
    if (triggerFinalMove && !animationHasRun.current && ref.current) {
      animationHasRun.current = true; // Marcar que la animación ya ha empezado

      const moveDuration = 2; // Duración de cada movimiento en segundos
      const rotationDuration = 1; // Duración de la rotación en segundos

      const startPositionY = ref.current.position.y;
      const finalPositionYUp = startPositionY + 3;
      const finalPositionX = ref.current.position.x - 7;
      const finalPositionYDown = startPositionY - 0.5;

      // Función para animar posiciones
      const animateProperty = (property, from, to, duration, onComplete) => {
        const startTime = performance.now();
        const animate = (time) => {
          const elapsed = (time - startTime) / 1000;
          const progress = Math.min(elapsed / duration, 1);
          ref.current.position[property] = from + (to - from) * progress;

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else if (onComplete) {
            onComplete();
          }
        };
        requestAnimationFrame(animate);
      };

      // Función para animar rotación
      const animateRotation = (from, to, duration, onComplete) => {
        const startTime = performance.now();
        const animate = (time) => {
          const elapsed = (time - startTime) / 1000;
          const progress = Math.min(elapsed / duration, 1);
          ref.current.rotation.y = from + (to - from) * progress;

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else if (onComplete) {
            onComplete();
          }
        };
        requestAnimationFrame(animate);
      };

      // Secuencia de animaciones
      animateProperty('y', startPositionY, finalPositionYUp, moveDuration, () => {
        animateProperty('x', ref.current.position.x, finalPositionX, moveDuration, () => {
          animateRotation(ref.current.rotation.y, ref.current.rotation.y + Math.PI, rotationDuration, () => {
            animateProperty('y', ref.current.position.y, finalPositionYDown, moveDuration, () => {
              
              if (onDeskAnimationComplete) onDeskAnimationComplete(); // Llamar cuando termine la animación
            });
          });
        });
      });
    }
  }, [triggerFinalMove, ref, onDeskAnimationComplete]);

  return null;
});

export default DeskMovement;
