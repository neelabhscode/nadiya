import { cn } from "../../lib/utils";

export function Section({ id, className, children }) {
  return (
    <section id={id} className={cn("py-12 sm:py-16", className)}>
      {children}
    </section>
  );
}
