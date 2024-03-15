import React,{useState} from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './'; 
import TeamIcon from '../assets/team.png';
import LogoutIcon from '../assets/logout.png';

const cookies = new Cookies();

const SideBar = ()=>(
  <div className="channel-list__sidebar">
      <div className='channel-list__sidebar__icon1'>
          <div className='icon1__inner'>
              <img src={TeamIcon} alt='Team' width="30"/>
          </div>

      </div>
      <div className='channel-list__sidebar__icon2'>
          <div className='icon1__inner'>
              <img src={LogoutIcon} alt='Logout' width="30"/>
          </div>

      </div>

  </div>
)

const TeamHeader = () =>(
  <div className='channel-list__header'>
      <p className='channel-list__header__text'>Team  Channels</p>

  </div>
)

const ChanellListContainer = () => {
  return (
    <div>ChanellListContainer</div>
  )
}

export default ChanellListContainer