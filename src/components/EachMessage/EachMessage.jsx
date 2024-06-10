import './index.css';
import { AiOutlineLike } from 'react-icons/ai';
import { useState } from 'react';

const EachMessage = (props) => {
  const { eachMessage } = props;
  const [count, setCount] = useState(0);

  const onClickLike = () => {
    setCount(count + 1);
  };

  return (
    <li key={eachMessage.id} className='each-message-conatiner'>
      <div
        className='user-profile'
        style={{
          backgroundColor: `${eachMessage.messagefrom.backgroundColor}`,
        }}
      >
        <p className='letter'>{eachMessage.profileInitial}</p>
      </div>
      <div className='right-section'>
        <div className='top-section'>
          <h1 className='user-name'>{eachMessage.messagefrom.user}</h1>
          <span className='time'>{eachMessage.messageSentTime}</span>
        </div>
        <div className='each-message'>
          {eachMessage.message}
          <button type='button' onClick={onClickLike} className='like-button'>
            <AiOutlineLike className='like-icon' />
          </button>
          {count > 0 ? <p className='count'>{count}</p> : null}
        </div>
      </div>
    </li>
  );
};

export default EachMessage;
