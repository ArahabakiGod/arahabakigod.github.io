import Main from "./components/main/Main";
import { useInitializeLanguage } from "./stores/languageStore";
import { useInitializeTheme } from "./stores/themeStore";

function App() {
  useInitializeTheme();
  useInitializeLanguage();

  return (
    <div className="h-200">
      <Main />
    </div>
  );
}

export default App;
