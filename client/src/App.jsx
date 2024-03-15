import React,{useState} from 'react';
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';


import {ChanellContainer, ChanellListContainer} from './components';
// import ChanellContainer  from './components/ChanellContainer';
// import ChanellListContainer  from './components/ChanellContainer';


import './App.css';


const cookies = new Cookies();

const apikey ='ckcvw6pygqnc';
const authToken= cookies.get("token"); 
const client = StreamChat.getInstance(apikey);




function App() {
 
  return (
    <div className='app__wrapper'>
        <Chat client={client} theme="team light">
          <ChanellListContainer/>
            <ChanellContainer/>
        </Chat>

    </div>
  );
}

export default App