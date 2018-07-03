import React from 'react';
import './bilety.css';

class BiletyPage extends React.Component {
  render (){
    return (
      <div>
        <a href="https://www.skiddle.com/e/13237502">
          <div className="skiddle" alt="img"/>
        </a>
        <a href="https://www.eventbrite.co.uk/e/tajemniczy-smak-lata-tickets-46566961034">
          <div className="eventbrite" alt="img"/>
        </a>
      </div>
    );
  }
}

export default BiletyPage;
