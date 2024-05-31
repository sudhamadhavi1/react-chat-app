import './App.css';
import ChatAppHeader from '../src/components/ChatAppHeader/ChatAppHeader';
import ChatContainer from './components/ChatContainer/ChatContainer';

function App() {
  return (
    <div className='container'>
      <ChatAppHeader />
      <hr className='horizontal-line' />
      <ChatContainer />
    </div>
  );
}

export default App;
