import React from 'react';
import './App.css'
import Participant from './Participant';
import participantList from './participantList';
import Stage from './Stage';
import StageBottom from './StageBottom';
import chatEvents from './chatEvents';
import ChatMenu from './ChatMenu';


class App extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
        participants:{participantList},
        chat:{chatEvents},
        current:'',
  }
}

  handleChatEvent=(event)=>{
     this.setState({
       current : 'chatScreen'
      })
     console.log(this.state.current)
  }

  handleParticipantEvent=(event)=>{
    this.setState({
      current : 'participantScreen'
     })
    console.log(this.state.current)
 }


render(){
  return (
    <main className="App" >
      <Participant list={this.state.participants} screen={this.state.current}/>
      <Stage list={this.state.participants}/>
      <StageBottom />
      <ChatMenu handleChatEvent={this.handleChatEvent} handleParticipantEvent={this.handleParticipantEvent} />
    </main>
  );
}
}

export default App;
