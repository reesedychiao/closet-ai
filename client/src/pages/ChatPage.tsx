import CarouselSection from "../components/Carousel";
import ChatSection from "../components/Chat";

export default function Chat() {
  return (
    <div className="flex flex-row justify-around">
      <ChatSection />
      <CarouselSection />
    </div>
  );
}
