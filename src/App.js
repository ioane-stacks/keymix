import './keymix.css';
import '../node_modules/bpg-banner/css/bpg-banner.min.css';
import Navbar from './Navbar';
import Slider from './Slider';
import TopHeader from './TopHeader';

function App() {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <Slider />
    </div>
  );
}

export default App;
