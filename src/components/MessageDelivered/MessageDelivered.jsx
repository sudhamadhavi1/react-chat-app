import './index.css';
import { AiOutlineLike } from 'react-icons/ai';
import EachMessage from '../EachMessage/EachMessage';

const MessageDelivered = (props) => {
  const { messageDetails } = props;
  console.log('MessageDetails Inside', messageDetails);
  return (
    <div className='message-delivered-container'>
      <ul className='all-messages-conatiner'>
        {messageDetails.map((eachMessage) => (
          <EachMessage eachMessage={eachMessage} />
        ))}
      </ul>
    </div>
  );
};

export default MessageDelivered;
