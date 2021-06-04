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

/*
function final_click() {
  let songTitle = $('#songTitle');
  let description = $('#description');
  let btn = $('#btn');

  $(btn).on('click',function(){
    if($(songTitle).val() == "") {
      $(songTitle).next('label').addClass('warning');
      setTimeout(function() {
        $('label').removeClass('warning');
        },1500);
      }
    if($(description).val() == "") {
      $(description).next('label').addClass('warning');
      setTimeout(function() {
        $('label').removeClass('warning');
        },1500);
       }
    });
}
*/

class Page4_3 extends Component {
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
          <section className="center inline-block">
          <div className="final_score">
            <img src={score_img}/>
          </div>
            <div className="final_info">
              <h1>제목</h1>
              <form action="">
              <div className="int-area bgWhite">
                  <input type="text" name-="songTitle" id="songTitle" autocomplete="off" required/>
                  <label for="id">필수</label>
                </div>
              </form>

              <h1>가사</h1>
              <form action="">
                <div className="int-area">
                  <textarea autocomplete="off" required name-= "description" id="description"></textarea>
                  <label for="id">필수</label>
                </div>
              </form>
            </div>
            <div className="confirm-button final_confirm">
                <button id="btn" type="submit"><img class="nextBtn" src={playBtn}/>완료</button>
            </div>
        </section>
        </div>

    );
  }
}

export default Page4_3;