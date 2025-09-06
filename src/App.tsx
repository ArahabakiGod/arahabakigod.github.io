import Main from "./components/main/Main";
import { useInitializeTheme } from "./stores/themeStore";

function App() {
  useInitializeTheme();

  return (
    <div className="h-200">
      <Main />
    </div>
  );
}

export default App;
