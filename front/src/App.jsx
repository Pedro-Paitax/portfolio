import Default from "./default/index.jsx";
import LanguageSelector from "./firstPage/languageSelector/lS.jsx";
import { i18n } from "./translate/i18n";
function App() {
  return (
    <>
      <Default />
      {/* <h1>{i18n.t('messages.app')}</h1> */}
      <LanguageSelector />
    </>
  );
}

export default App;
