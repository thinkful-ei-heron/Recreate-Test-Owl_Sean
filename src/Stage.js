import React from 'react';
import './Stage.css';
import participantList from './participantList'



class Stage extends React.Component {

    static defaultProps = {
        list: participantList
    }
     
    render(props) {
        let current = participantList.list;
        let filtered = current.filter(participant => participant.onStage === true);

        let display = filtered.map((filtered) => 
            <div className="stageBox" key={filtered.id}>
                <h2 key={filtered.id}>{filtered.name}</h2>
                <img src={filtered.avatar} alt='avatar' />
            </div>
        );

        return(
            <div className="stage">
                {display}
            </div>
        );
     }
}

export default Stage