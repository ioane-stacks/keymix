import './keymix.css';
import '../node_modules/bpg-banner/css/bpg-banner.min.css';
import '../node_modules/bpg-banner-caps/css/bpg-banner-caps.min.css';
import Navbar from './Navbar';
import Slider from './Slider';
import TopHeader from './TopHeader';
import { ka } from './ka.js';
import { en } from './en.js';
import { useState } from 'react';

function App() {
  const [defLang, setDefLang] = useState(ka);

  function changeLanguage() {
    defLang === ka? setDefLang(en) : setDefLang(ka);
  }

  return (
    <div>
      <TopHeader changeLanguage={changeLanguage} />
      <Navbar data={defLang.navbar} />
      <Slider />
    </div>
  );
}

export default App;
