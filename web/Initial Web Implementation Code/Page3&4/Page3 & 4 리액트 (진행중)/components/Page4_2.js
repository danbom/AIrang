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


class Page4_2 extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
    }
}
  componentDidMount() {}
  render () {
    return (
      /*<div className="App">
          <Switch>
            <Route exact path='/' component={Api_test} /> // root 경로일 경우 라우팅
            <Route path='/Api_test' component={Api_test} />
          </Switch>
      </div>*/
      <div className="vertical">
          <Navigator/>

          <div className="upper_bar">
            <input type="button" className="img-button" />
          </div>
          <div className="info">
            <h1>가사 생성</h1>
          </div>
          
          {/* 악보 & 가사 파트*/}
          <section className="center lyricWhite">
            <div className="score">
              <img src={score_img} />
            </div>
            <div className="lyrics2">
              <h2>가사</h2>
              <br />
              <p>사이좋게 오늘도 공부 잘하자</p>
              <p>학교 종이 땡땡땡 어서 모이자</p>
              <p>선생님이 우리를 기다리신다</p>
              <p>학교 종이 땡땡땡 어서 모이자</p>
            </div>
          </section>
          <div className="confirm-button">
            <button id="btn" type="submit"><img className="nextBtn" src={playBtn} />작사하기</button>
          </div>
        </div>
    );
  }
}

export default App;
