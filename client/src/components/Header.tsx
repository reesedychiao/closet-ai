export default function Header() {
  return (
    <header className="flex bg-background items-center justify-between px-8 py-4">
      <div className="flex items-center">
        <img
          src="../../public/closet.png"
          alt="Closet AI Logo"
          className="w-16 h-16"
        />
        <h1 className="text-xl text-text">Closet AI</h1>
      </div>
      <div className="flex items-center">
        <a href="/chat">
          <button className="text-text hover:bg-primary active:bg-accent py-2 px-4 rounded-lg m-2">
            Chat
          </button>
        </a>
        <a href="/closet">
          <button className="text-text hover:bg-primary active:bg-accent py-2 px-4 rounded-lg m-2">
            My Closet
          </button>
        </a>
        <a href="/profile">
          <img
            src="../../public/user.png"
            alt="User Icon"
            className="w-10 h-10 mx-2"
          />
        </a>
      </div>
    </header>
  );
}
