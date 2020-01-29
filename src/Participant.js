import React from 'react';
import './Participant.css';
import chatEvents from './chatEvents'
import participantList from './participantList'

class Participant extends React.Component {
    
    constructor(props){
        super(props);
        
        this.state={
            page:'participantScreen',
            chat:chatEvents,
            input:''
        }
   
    }
    static defaultProps = {
        screen:'participantScreen',
        list: participantList
    }

    componentDidMount(){
        this.setState({page: this.props.screen})
    }

    componentWillReceiveProps=()=>{
        this.setState({page: this.props.screen})
    }

    handleText=(event)=>{
        this.setState({
            input:event.target.value
        })
    }
    
    screenChoice=()=>{
            let current = participantList.list ;
            let filtered = current.filter(participant => participant.inSession === true);
            let display = filtered.map((filtered) => 
            <div className="participantBox" key={filtered.id}>
                <img src={filtered.avatar} alt='avatar' />
                <div className="avatarSeperator">
                    <h2 key={filtered.id}>{filtered.name}</h2>
                    <p>{filtered.onStage === true? "onStage" : "inSession" }</p>
                </div>
            </div>
        );
      

        if(this.state.page == 'participantScreen' || this.state.page == ''){
            return(
             <div className="outerParticipantContainer">
                <div className="participant" key={filtered.id}>
                    {display}  
                </div>  
             </div>  
            )
        } else if(this.state.page == 'chatScreen'){
            return(
                
                <div className='chatContainer'>
                    <form>
                        {this.state.chat ? this.state.chat.chatEvents.map((chat, index) => {
                            return(
                                <ul key={index}>
                                    {chat.message}
                                    {chat.type === 'thumbs-up' ? <span className='chatE'>'thumbs-up'</span> : null}
                                    {chat.type === 'thumbs-down' ? <span className='chatE'>'thumbs-down' </span>: null}
                                    {chat.type === 'raise-hand' ? <span className='chatE'>'A hand is raised'</span> : null}
                                    {chat.type === 'clap' ? <span className='chatE'>'Clap!' </span>: null}
                                    {chat.type === 'join' ? <span className='chatE'>'join'</span> : null}
                                    {chat.type === 'leave' ? <span className='chatE'>'leave'</span> : null}
                                    {chat.type === 'join-stage' ? <span className='chatE'>'join-stage'</span> : null}
                                    {chat.type === 'leave-stage' ? <span className='chatE'>'leave-stage' </span>: null}
                                </ul>
                            )
                        }) : null}
                        <div className='inputText'>{this.state.input}</div>
                  
        <input type="text" className="chatInput" name="chat" onChange={this.handleText}></input>
                    </form>
                </div>
            )
        }
    }
    
    render(){
        


        return(
            <div>{this.props.list ? this.screenChoice() : null}</div>   
        )
    }
}

export default Participant