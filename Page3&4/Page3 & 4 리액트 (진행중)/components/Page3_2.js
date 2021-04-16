//client/src/components/App.js
import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router";

import Api_test from './Api_test'

/*Api_test 경로로 유입된 호출은 Api_test.js로 이동시킴*/ 

//css
import '../css/basic_style.css';
import '../css/style_alpha.css';

//Nav
import Navigator from './Navigator';

//img
import playBtn from '../css/playBtn.png';
import playBtn2 from '../css/playBtn2.png';
import score_img from '../css/score_img2.png';


class App extends Component {
/*  constructor (props) {
    super(props);
    
    this.state = {
    }
} */
  componentDidMount() {}
  render () {
    return (
      /*<div className="App">
          <Switch>
            <Route exact path='/' component={Api_test} /> // root 경로일 경우 라우팅
            <Route path='/Api_test' component={Api_test} />
          </Switch>
      </div>*/
      <div>
      <Navigator/>
          <div className="info">
            <h1>동요 생성</h1>
            <h3>노래 선택</h3>
          </div>
          
        {/* 악보 & 가사 파트*/}
        <section className="center">
          <h3>노래를 1개 선택해주세요.</h3>
          <div className="row">
            <div className="radio">
              <input type="radio" id="song1" name="song" value="song1"></input>
            </div>
            <div className="column" id="soundTag1"></div>
          </div>
          <div className="row">
            <div className="radio">
              <input type="radio" id="song2" name="song" value="song2"></input>
            </div>
            <div className="column" id="soundTag2"></div>
          </div>
          <div className="row">
            <div className="radio">
              <input type="radio" id="song3" name="song" value="song3"></input>
            </div>
            <div className="column" id="soundTag3"></div>
          </div>
        </section>
        <div className="confirm-button">
          <button id="btn" type="submit"><img class="nextBtn" src={playBtn}/>다음</button>
        </div>
      </div>
    );
  }
}

export default App;
