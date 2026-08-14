import { useEffect } from "react";

const revealed = new WeakSet<Element>();

/**
 * Reveals elements marked with `data-reveal` as they scroll into view.
 *
 * Uses the Web Animations API rather than class/attribute toggling so the DOM
 * markup stays identical to the server-rendered HTML (no hydration mismatch),
 * and a single IntersectionObserver that unobserves each element after its
 * first reveal, keeping the cost negligible.
 */
export function useScrollReveal(key?: string) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (elements.length === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const show = (el: HTMLElement, animate: boolean) => {
      revealed.add(el);
      const delay = Number.parseFloat(getComputedStyle(el).getPropertyValue("--reveal-delay")) || 0;
      el.animate(
        [
          { opacity: 0, transform: "translateY(8px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: animate ? 250 : 0,
          delay: animate ? delay : 0,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "forwards",
        },
      );
    };

    if (reduced || !("IntersectionObserver" in window)) {
      elements.forEach((el) => show(el, false));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target as HTMLElement, true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    elements.forEach((el) => {
      if (revealed.has(el)) {
        show(el, false);
        return;
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [key]);
}
