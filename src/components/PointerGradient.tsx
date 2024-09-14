import { useEffect, useState } from "react";

export default function PointerGradient() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const mouseMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;

      setMouseX(x);
      setMouseY(y);
    };

    document.addEventListener("mousemove", mouseMove);

    return () => {
      document.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-20 h-screen w-screen bg-red-500/10"
      style={{
        background: `radial-gradient(300px at ${mouseX}px ${mouseY}px, rgba(120, 119, 198, 0.1), transparent 80%)`,
      }}
    ></div>
  );
}
