import React from 'react';
import './ChatMenu.css';

class ChatMenu extends React.Component {

    handleChatEvent=()=>{
        //console.log('hello')
        this.props.handleChatEvent()
    }

    handleParticipantEvent=()=>{
        //console.log('there')
        this.props.handleParticipantEvent()
    }
    
    
    render(props) {
        
        return (
            <div className="menu">
                <button type="button" onClick={() => this.handleChatEvent()}>Chat</button>
                <button type="button" onClick={() =>this.handleParticipantEvent()}>Participants</button>
                <button type="button">Settings</button>
                <button type="button">Copy Session Url</button>
                <button type="button">See FAQ</button>
            </div>
        );
    }
}

export default ChatMenu