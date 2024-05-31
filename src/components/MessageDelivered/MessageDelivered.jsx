import './index.css';
//  id: uuid(),
//           user: messagefrom,
//           message: messageEntered,
//           profileInitial: messagefrom[0],
//           messageSentTime: time,

const MessageDelivered = (props) => {
  const { messageDetails } = props;
  console.log('MessageDetails Inside', messageDetails);
  return (
    <div className='message-delivered-container'>
      <ul className='all-messages-conatiner'>
        {messageDetails.map((eachMessage) => (
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
              <div className='each-message'>{eachMessage.message}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageDelivered;
