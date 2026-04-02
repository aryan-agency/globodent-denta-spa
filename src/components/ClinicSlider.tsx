import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import clinic1 from "@/assets/clinic-1.png";
import clinic2 from "@/assets/clinic-2.png";
import clinic3 from "@/assets/clinic-3.png";
import clinic4 from "@/assets/clinic-4.png";
import clinic5 from "@/assets/clinic-5.png";
import clinic6 from "@/assets/clinic-6.png";
import clinic7 from "@/assets/clinic-7.png";

const images = [clinic1, clinic2, clinic3, clinic4, clinic5, clinic6, clinic7];

const ClinicSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), []);

  useEffect(() => {
    const id = setInterval(next, 3000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-muted img-zoom">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Globodent Dental Spa clinic interior ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full bg-card/90 backdrop-blur-sm text-foreground h-10 w-10 rounded-full flex items-center justify-center shadow-lg hover:bg-card transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full bg-card/90 backdrop-blur-sm text-foreground h-10 w-10 rounded-full flex items-center justify-center shadow-lg hover:bg-card transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClinicSlider;
