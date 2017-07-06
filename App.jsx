import React from 'react'
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import Another from './components/Another.jsx'
import Prostate from './components/Prostate.jsx'
import PropValidation from './components/PropValidation.jsx'
import SetStateHandle from './components/SetStateHandle.jsx'
import Force from './components/Force.jsx'
import FindNode from './components/FindNode.jsx'
import LifeCycle from './components/LifeCycle.jsx'
import Form from './components/Form.jsx'
import Events from './components/EventsLesson.jsx'
import ClearInput from './components/ClearInput.jsx'
import  AttrKey from './components/AttrKey.jsx'
import Footer from './components/Footer.jsx'

import todoApp from './reducers/reducers.js'
import To from './components/To.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


class App extends React.Component {

  render() {
    return (
      <div style={{marginLeft: 10}}>
        <Header />
        <Content />
        <Another someText="Quote title" author="Winston Churchill" />
        <Prostate />
        <PropValidation />
        <SetStateHandle />
        <Force />
        <FindNode />
        <LifeCycle />
        <Form />
        <Events />
        <ClearInput />
        <AttrKey />
        <Footer />
        <Provider store={createStore(todoApp)}>
          <To />
        </Provider>
      </div>
    );
  }
}


export default App;
