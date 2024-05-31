import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import InputEmoji from 'react-input-emoji';

import MessageDelivered from '../MessageDelivered/MessageDelivered';
import './index.css';

const userNames = [
  { user: 'Alan', backgroundColor: '#90E16D' },
  { user: 'Bob', backgroundColor: '#E89F86' },
  { user: 'Carol', backgroundColor: '#B2E5EE' },
  { user: 'Dean', backgroundColor: '#DBB2EE' },
  { user: 'Elin', backgroundColor: '#dbdc64' },
];

const ChatContainer = () => {
  const [text, setText] = useState('');
  const [messagelist, setMessageList] = useState([]);
  function handleOnEnter(text) {
    const randomIndex = Math.floor(Math.random() * userNames.length);
    const messagefrom = userNames[randomIndex];
    const today = new Date();
    const time = today.getHours() + ':' + today.getMinutes();
    setMessageList([
      ...messagelist,
      {
        id: uuid(),
        messagefrom: messagefrom,
        message: text,
        profileInitial: messagefrom.user[0],
        messageSentTime: time,
      },
    ]);
  }

  return (
    <div className='chat-conatiner'>
      <MessageDelivered messageDetails={messagelist} />
      <InputEmoji
        value={text}
        onChange={setText}
        cleanOnEnter
        onEnter={handleOnEnter}
        placeholder='Type Message'
        theme='dark'
        className='input-emoji'
      />
    </div>
  );
};

export default ChatContainer;
