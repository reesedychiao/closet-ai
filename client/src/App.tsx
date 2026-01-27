import { Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Chat from "./pages/ChatPage";
import Closet from "./pages/ClosetPage";
import ItemPage from "./pages/ItemPage";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Chat />} />
        <Route path="chat" element={<Chat />} />
        <Route path="closet" element={<Closet />} />
        <Route path="items/:id" element={<ItemPage />} />
      </Route>
    </Routes>
  );
}

export default App;
