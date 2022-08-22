import './style/keymix.css';
import '../node_modules/bpg-banner/css/bpg-banner.min.css';
import '../node_modules/bpg-banner-caps/css/bpg-banner-caps.min.css';
import Navbar from './header/Navbar';
import TopHeader from './header/TopHeader';
import Home from './home/Home';
import { ka } from './data/ka.js';
import { en } from './data/en.js';
import { useState } from 'react';
function App() {
  const [defLang, setDefLang] = useState(ka);

  function changeLanguage() {
    defLang === ka ? setDefLang(en) : setDefLang(ka);
  }

  return (
    <div>
      <TopHeader changeLanguage={changeLanguage} />
      <Navbar data={defLang.navbar} />
      <Home />
    </div>
  );
}

export default App;
