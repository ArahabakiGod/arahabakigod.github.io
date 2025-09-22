import Main from "./components/main/Main";
import { useInitializeLanguage } from "./stores/languageStore";
import { useInitializeTheme } from "./stores/themeStore";

function App() {
  useInitializeTheme();
  useInitializeLanguage();

  return (
    <div className="">
      <Main />
    </div>
  );
}

export default App;
