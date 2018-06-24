import React from 'react';
import Subtn from '../../images/skiddleupBTN.png';
import Sdbtn from '../../images/skiddledownBTN.png';
import Eubtn from '../../images/EBupBTN.png';
import Edbtn from '../../images/EBdownBTN.png';
import './bilety.css';

class BiletyPage extends React.Component {
  render (){
    return (
      <div>
        <a href="https://www.skiddle.com/e/13237502">
          <img
            className="skiddle"
            src={Subtn}
            atl="Skiddle"
            onMouseOver={e => (e.currentTarget.src = {Sdbtn})}
            onMouseOut={e => (e.currentTarget.src = {Subtn})}
          />
        </a>
        <a href="https://www.eventbrite.co.uk/e/tajemniczy-smak-lata-tickets-46566961034">
          <img
            className="eventbrite"
            src={Eubtn}
            atl="Eventbrite"
            onMouseOver={e => (e.currentTarget.src = {Edbtn})}
            onMouseOut={e => (e.currentTarget.src = {Eubtn})}
          />
        </a>
      </div>
    );
  }
}

export default BiletyPage;
