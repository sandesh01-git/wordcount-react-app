import Navbar from './Components/Navbar';
import './App.css';
import TextUtils from './Components/TextUtils';

function App() {
  return (
    <>
   <Navbar />
   <div className="container my-3">
<TextUtils heading="This is heading" />
   </div>

   </>
  );
}

export default App;
