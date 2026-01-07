import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpeg";
import testimonial2 from "@/assets/testimonial-2.jpeg";
import testimonial3 from "@/assets/testimonial-3.jpeg";
import testimonial4 from "@/assets/testimonial-4.jpeg";
import testimonial5 from "@/assets/testimonial-5.jpeg";
import testimonial6 from "@/assets/testimonial-6.jpeg";

const testimonialImages = [
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  testimonial5,
  testimonial6,
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-12 md:py-16 bg-cream">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 z-10 bg-card rounded-full p-2 shadow-card hover:shadow-card-hover transition-shadow"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 z-10 bg-card rounded-full p-2 shadow-card hover:shadow-card-hover transition-shadow"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonialImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] min-w-0 px-2"
                >
                  <div className="bg-card rounded-2xl p-3 shadow-card">
                    <img
                      src={image}
                      alt={`Depoimento de cliente ${index + 1}`}
                      className="w-full h-auto rounded-xl object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonialImages.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === selectedIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
