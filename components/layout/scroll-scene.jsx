import { cn } from "../../lib/utils";

export function ScrollScene({
  id,
  z = 10,
  runwayVh = 200,
  className,
  sceneRef,
  children,
}) {
  return (
    <div ref={sceneRef} style={{ minHeight: `${runwayVh}vh` }}>
      <section
        id={id}
        className={cn("relative sticky top-0 h-dvh overflow-hidden", className)}
        style={{ zIndex: z }}
      >
        {children}
      </section>
    </div>
  );
}
