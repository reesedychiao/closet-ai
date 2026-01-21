import Header from "./components/Header";
import Chat from "./components/Chat";
import CarouselSection from "./components/Carousel";

function App() {
  return (
    <div className="bg-background flex flex-col min-h-screen px-8">
      <Header />
      <div className="grid grid-cols-2 gap-4">
        <Chat />
        <CarouselSection />
      </div>
    </div>
  );
}

export default App;
