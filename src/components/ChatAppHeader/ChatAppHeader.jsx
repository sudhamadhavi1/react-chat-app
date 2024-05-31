import { BsPeople } from 'react-icons/bs';
import './index.css';

const ChatAppHeader = () => {
  return (
    <div className='header-container'>
      <div className='header-left-section'>
        <h1 className='channel-name'>Introductions</h1>
        <p className='description'>This Channel Is For Company Wide Chatter</p>
      </div>
      <div className='header-right-section'>
        <p className='curret-users'>3</p>
        <div className='total-users'>100</div>
        <BsPeople className='people-icon' />
      </div>
    </div>
  );
};

export default ChatAppHeader;
