// import './App.css';
import './index.css'
import SingIn from './components/Auth/singIn';
import Chat from './components/chat/chat';
import Messages from './components/Messages/message';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
       <Route path='/' element={<SingIn />} />
       <Route path='/chat' element={<Chat />} />
      </Routes>
      {/* <Messages /> */}
     
    </div>
  );
}

export default App;
