import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselSection() {
  const carousels = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];
  const itemsPerCarousel = 5;

  useEffect(() => {
    const intervals = carousels.map((carouselRef) =>
      setInterval(() => {
        if (carouselRef.current) {
          const nextButton = carouselRef.current.querySelector(
            "[data-carousel-next]"
          ) as HTMLElement | null;
          nextButton?.click();
        }
      }, 3000)
    );
    return () => intervals.forEach((i) => clearInterval(i));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 space-y-6">
      {carousels.map((carouselRef, carouselIndex) => (
        <Carousel
          key={carouselIndex}
          ref={carouselRef}
          className="w-128 h-50" // wider than tall
        >
          <CarouselContent className="h-45">
            {Array.from({ length: itemsPerCarousel }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1 h-full">
                  <Card className="h-full">
                    <CardContent className="flex items-center justify-center h-full p-4">
                      <span className="text-2xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white" />
          <CarouselNext className="bg-white" />
        </Carousel>
      ))}
    </div>
  );
}
