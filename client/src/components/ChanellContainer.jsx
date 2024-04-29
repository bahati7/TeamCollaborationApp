import React from 'react';
import {Channel, useChatContext, MessageSimple} from 'stream-chat-react';

import {ChannelInner, CreateChannel,EditChannel} from './';

const ChanellContainer = ({isCreating,setIsCreating,isEditing,setIsEditing,createType}) => {
  const {channel}=useChatContext();

  if(isCreating){
    return(
        <div className='h-full w-full'>
          <CreateChannel createType={createType} setIsCreating={setIsCreating}/>

        </div>
    )
  }
  if(isEditing){
    return(
        <div className='h-full w-full'>
          <EditChannel setIsEditing={setIsEditing}/>

        </div>

    )
  }

  const EmptyState=()=>{
    <div className='channel-empty__container'>
      <p className='channel-empty__first'>This  channel is empty. start typing here</p>
      <p className='channel-empty__second'>Send messages and more</p>

    </div>
  }

  return (
    <div className='h-full w-full'>
        <Channel
          EmptyStateIndicator={EmptyState}
          Message={(messageProps,i)=> <MessageSimple key={i} {...messageProps} />}
        >
            <ChannelInner setIsEditing={setIsEditing}/>
        </Channel>
    </div>
  )
}

export default ChanellContainer