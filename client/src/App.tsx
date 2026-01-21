import Header from "./components/Header";
import Chat from "./components/Chat";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="bg-background flex flex-col min-h-screen px-8">
      <Header />
      <div className="flex flex-1">
        <Chat />
        <Carousel />
      </div>
    </div>
  );
}

export default App;
