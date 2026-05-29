"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  animate,
} from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fashion Blogger",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    content:
      "The quality exceeded my expectations. Everything feels premium and the shipping was incredibly fast. My new go-to shop for minimalist fashion.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Designer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    content:
      "Beautifully curated collection. The attention to detail in both products and packaging is remarkable. Truly a premium experience.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Interior Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    content:
      "I've been a customer for months and the consistency in quality is impressive. The minimalist aesthetic perfectly matches my style.",
    rating: 4,
  },
  {
    name: "James Park",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    content:
      "Finally, a brand that understands modern minimalism. Every piece feels intentional and well-crafted. Highly recommended.",
    rating: 5,
  },
  {
    name: "Olivia Martinez",
    role: "Lifestyle Influencer",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
    content:
      "The packaging alone is a work of art. Every unboxing feels like a special occasion. Absolutely love this brand.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Architect",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    content:
      "Rare to find a brand that balances aesthetics with sustainability so seamlessly. Every purchase feels meaningful.",
    rating: 4,
  },
];

const GAP = 24;

function StarRating({ rating, size }: { rating: number; size: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${size} ${
            i < rating
              ? "fill-yellow-500 text-yellow-500"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const x = useMotionValue(0);
  const [cardWidth, setCardWidth] = useState(340);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const controlsRef = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    function measure() {
      setContainerWidth(container!.clientWidth);
      const firstCard = inner!.children[0] as HTMLElement | undefined;
      if (firstCard) {
        const w = firstCard.offsetWidth;
        if (w > 0) setCardWidth(w);
      }
    }

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  const totalWidth = (cardWidth + GAP) * testimonials.length;

  useEffect(() => {
    if (!isInView || totalWidth <= 0 || !containerWidth) return;

    const controls = animate(x, [0, -totalWidth], {
      duration: testimonials.length * 3,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });
    controlsRef.current = controls;

    return () => controls.stop();
  }, [isInView, totalWidth, containerWidth, x]);

  useEffect(() => {
    if (!controlsRef.current) return;
    if (isHovered) {
      controlsRef.current.pause();
    } else {
      controlsRef.current.play();
    }
  }, [isHovered]);

  const duplicated = [...testimonials, ...testimonials];

  return (
    <section ref={sectionRef} className="py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-2 block text-sm font-medium text-muted-foreground">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Loved by Thousands
          </h2>
        </motion.div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background via-background/80 to-transparent" />

        <div ref={containerRef} className="overflow-x-clip">
          <motion.div
            ref={innerRef}
            style={{ x }}
            className="flex gap-6 px-4 sm:px-6 lg:px-8"
          >
            {duplicated.map((testimonial, i) => (
              <motion.div
                key={`${testimonial.name}-${i}`}
                whileHover={{ scale: 1.04, y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="flex w-[300px] flex-shrink-0 cursor-grab flex-col rounded-2xl border border-transparent bg-background p-6 shadow-lg shadow-black/5 transition-colors duration-300 hover:border-border hover:shadow-xl hover:shadow-black/10 active:cursor-grabbing sm:w-[340px]"
                role="group"
                aria-roledescription="slide"
                aria-label={`Testimonial from ${testimonial.name}`}
              >
                <StarRating rating={testimonial.rating} size="h-4 w-4" />
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3 border-t pt-4">
                  <div
                    className="h-10 w-10 flex-shrink-0 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: "url(" + testimonial.image + ")" }}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">
                      {testimonial.name}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}