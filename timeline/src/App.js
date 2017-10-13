import React, { Component } from 'react';
import './App.css';
// testing React-day-5
import Content from './components/Content';

import MessageList from './components/MessageList';
import EncounterList from './components/EncounterList';
import Encounter from './components/Encounter';
import firebase from 'firebase';

const activities = [
  {
    timestamp: new Date().getTime(),
    text: "Ate lunch",
    user: {
      id: 1, name: 'Nate',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: 'Ari', text: 'Me too!' }]
  },
  {
    timestamp: new Date().getTime(),
    text: "Woke up early for a beautiful run",
    user: {
      id: 2, name: 'Ari',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: 'Nate', text: 'I am so jealous' }]
  },
]


class App extends Component {
  constructor() {
    // Configure Firebase realtime data source (test repo)
    var config = {
      apiKey: "AIzaSyBZSmg1KtjWuCsdQzhqoB0KRPK5-eZ6zRo",
      authDomain: "whodiditalktotest.firebaseapp.com",
      databaseURL: "https://whodiditalktotest.firebaseio.com",
      projectId: "whodiditalktotest",
      storageBucket: "whodiditalktotest.appspot.com",
      messagingSenderId: "478743607097"
    };
    firebase.initializeApp(config);
    super();

    // TODO: pull in remote data
    // This currently pulls in a local array of data
    this.state = {
      encounters: [
        {
          "Date": "2017-08-17",
          "Person": "Donna Troy",
          "Event": "PDXWIT Summer Soiree",
          "Location": "",
          "Topics": "Zapproved current internship program"
        },
        {
          "Date": "2017-08-17",
          "Person": "Bobbie Morse",
          "Event": "PDXWIT Summer Soiree",
          "Location": "",
          "Topics": "Going on vacation"
        },
        {
          "Date": "2017-08-31",
          "Person": "Pepper Potts",
          "Event": "Consciousness Hacking meetup",
          "Location": "",
          "Topics": ""
        },
        {
          "Date": "2017-08-31",
          "Person": "Zatanna",
          "Event": "Consciousness Hacking meetup",
          "Location": "",
          "Topics": "Mark Goldby (7 years as a patient), crystal in shell casing"
        },
        {
          "Date": "2017-09-01",
          "Person": "Pepper Potts",
          "Event": "AgilePDX Pub Lunch",
          "Location": "",
          "Topics": "Alistair Cockburn poetry"
        },
        {
          "Date": "2017-09-01",
          "Person": "Tony Stark",
          "Event": "AgilePDX Pub Lunch",
          "Location": "",
          "Topics": "Working as Product Owner, Digital Strategist in an Agency"
        },
        {
          "Date": "2017-09-02",
          "Person": "Volstagg",
          "Event": "",
          "Location": "Ground Breaker Gastropub",
          "Topics": "Baby shower, baby boy arriving January 2018"
        },
        {
          "Date": "2017-08-29",
          "Person": "Jean Grey",
          "Event": "",
          "Location": "Elevator Commons",
          "Topics": "UX meetups, design career, current employer actively discouraging above-and-beyond"
        },
        {
          "Date": "2017-08-17",
          "Person": "Jean Grey",
          "Event": "PDXWIT Summer Soiree",
          "Location": "",
          "Topics": "side hustles - wedding site, wedding professionals consulting, career coaching"
        },
        {
          "Date": "2017-08-24",
          "Person": "Jean-Paul Beaubier",
          "Event": "ProductTank PDX",
          "Location": "",
          "Topics": "leaving Digimarc, getting divorced, going to travel"
        },
        {
          "Date": "2017-08-24",
          "Person": "Felicia Hardy",
          "Event": "ProductTank PDX",
          "Location": "",
          "Topics": "leaving comScore, happy to give me background on company"
        },
        {
          "Date": "2017-08-06",
          "Person": "Benjamin Grimm",
          "Event": "High Church of Lean Coffee",
          "Location": "",
          "Topics": "we've met multiple times, had extended conversations"
        }
      ]
    }
  }

  renderEncounter(i) {
    return <Encounter valuePerson={this.state.encounters[i].Person} 
                      valueDate={this.state.encounters[i].Date}
                      valueEvent={this.state.encounters[i].Event} />;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Timeline</h1>
        </div>
        <div className="Timeline">
          <Content activities={activities} />
          <EncounterList db={firebase} />
          <MessageList db={firebase} />
          {/* {this.renderEncounter(0)}
          {this.renderEncounter(1)}
          {this.renderEncounter(2)}
          {this.renderEncounter(3)}
          {this.renderEncounter(4)}
          {this.renderEncounter(5)}
          {this.renderEncounter(6)}
          {this.renderEncounter(7)}
          {this.renderEncounter(8)}
          {this.renderEncounter(9)}
          {this.renderEncounter(10)}
          {this.renderEncounter(11)} */}
        </div>
      </div>
    );
  }
}

export default App;
