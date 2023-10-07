

import Navbar from './navbar/navbar';
import Popup from './popup/popup-model'
// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Footer from './footer/footer';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Popup/>
     <Footer/>
    </div>
  );
}

export default App;
library.add(fab, fas, far)