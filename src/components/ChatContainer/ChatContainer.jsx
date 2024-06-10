import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import InputEmoji from 'react-input-emoji';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

import MessageDelivered from '../MessageDelivered/MessageDelivered';
import './index.css';

const userNames = [
  { user: 'Alan', backgroundColor: '#90E16D' },
  { user: 'Bob', backgroundColor: '#E89F86' },
  { user: 'Carol', backgroundColor: '#B2E5EE' },
  { user: 'Dean', backgroundColor: '#DBB2EE' },
  { user: 'Elin', backgroundColor: '#dbdc64' },
];

const custom = [
  {
    id: 'github',
    name: 'GitHub',
    emojis: [
      {
        id: 'octocat',
        name: 'Octocat',
        keywords: ['github'],
        skins: [{ src: './octocat.png' }],
      },
      {
        id: 'shipit',
        name: 'Squirrel',
        keywords: ['github'],
        skins: [
          { src: './shipit-1.png' },
          { src: './shipit-2.png' },
          { src: './shipit-3.png' },
          { src: './shipit-4.png' },
          { src: './shipit-5.png' },
          { src: './shipit-6.png' },
        ],
      },
    ],
  },
  {
    id: 'gifs',
    name: 'GIFs',
    emojis: [
      {
        id: 'party_parrot',
        name: 'Party Parrot',
        keywords: ['dance', 'dancing'],
        skins: [{ src: './party_parrot.gif' }],
      },
    ],
  },
];

const ChatContainer = () => {
  const [text, setText] = useState('');
  const [messagelist, setMessageList] = useState([]);
  // const [emojiData, setEmojiData] = useState(null);

  // useEffect(() => {
  //   const fetchEmojiData = async () => {
  //     const response = await fetch(
  //       'https://cdn.jsdelivr.net/npm/@emoji-mart/data'
  //     );
  //     const data = await response.json();
  //     setEmojiData(data);
  //   };

  //   fetchEmojiData();
  // }, []);

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

      {/* <div>
        <Picker data={emojiData} theme='dark' onEmojiSelect={console.log} />
      </div> */}
    </div>
  );
};

export default ChatContainer;
