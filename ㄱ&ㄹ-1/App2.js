// import logo from './logo.svg';
import React, { Component } from 'react';
import './w3.css';
import './App2.css';

import default_p from './default_p.jpg';
import star_p from './star.png';
import icon1_p from './icon1.png';
import icon2_p from './icon2.png';
import icon3_p from './icon3.png';

function w3_open() {
      document.getElementById("mySidebar").style.display = "block";
      document.getElementById("myOverlay").style.display = "block";
}
function w3_close() {
      document.getElementById("mySidebar").style.display = "none";
      document.getElementById("myOverlay").style.display = "none";
}

class App2 extends Component {
  render () {
    return (
      <div class="App2">
        <nav class="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding w3-center navstyle" id="mySidebar"><br/>
          <a href="javascript:void(0)" onclick={w3_close} class="w3-button w3-hide-large w3-display-topleft close_menu">Close Menu</a>
          <div class="w3-container">
            <h1><b>AIRANG</b></h1>
            <h5><b>...</b>님, 환영합니다!</h5>
            <p class="t10">NOW PLAYING - "별과 고양이"</p>
            <img src={default_p} class="dImg"/>
          </div>
          <div class="w3-bar-block marginT15">
            <img src = {icon2_p} class="width7"/>
            &emsp;&emsp;
            <img src = {icon1_p} class="width7"/>
            &emsp;&emsp;
            <img src = {icon3_p} class="width7"/>
            <div class="row tList" >
              <div class="listContents" class="op7">
                <p class="tBlack"><img src = {star_p} class="width7"/> &nbsp; "별과 고양이" <span class="time">02:26</span></p>
              </div>
              <div class="listContents" class="op4">
                <p class="tBlack"><img src = {star_p} class="width7"/> &nbsp; "엄마, 힘내세요" <span class="time">02:26</span></p>
              </div>
              <div class="listContents" class="op4">
                <p class="tBlack"><img src = {star_p} class="width7"/> &nbsp; "별자리" <span class="time">02:26</span></p>
              </div>
              <div class="listContents" class="op4">
                <p class="tBlack"><img src = {star_p} class="width7"/> &nbsp; "채소가 좋아" <span class="time">02:26</span></p>
              </div>
            </div>
          </div>
          <div class="w3-center tList tBlack">
            <a href="#" onclick={w3_close} class="w3-bar-item w3-button w3-hover-white"><img src = {star_p} class="width7"/> &nbsp; 내 프로필</a>
            <br/><br/>
            <a href="/" onclick={w3_close} class="w3-bar-item w3-button w3-hover-white"><img src = {star_p} class="width7"/> &nbsp; 내 프로젝트</a>
            <br/><br/>
            <a href="#services" onclick={w3_close} class="w3-bar-item w3-button w3-hover-white"><img src = {star_p} class="width7"/> &nbsp; 설정</a>
          </div>
          <div class="leftLast tBlack">
            <a href="#designers" onclick={w3_close}>도움말</a>
            &emsp;&emsp;&emsp;
            <a href="#packages" onclick={w3_close}>로그아웃</a>
          </div>
        </nav>

        <div>
        <header class="w3-container w3-top w3-hide-large w3-red w3-xlarge w3-padding">
          <a href="javascript:void(0)" class="w3-button w3-red w3-margin-right" onclick={w3_open}>☰</a>
          <span>AIRANG</span>
        </header>
        </div>

        <div class="w3-overlay w3-hide-large closeDiv" onclick={w3_close} title="close side menu" id="myOverlay"></div>

        <div class="w3-main rightMargin">

          <div class="w3-container" id="showcase">
            <h1 class="w3-jumbo"><b>Interior Design</b></h1>
            <h1 class="w3-xxxlarge w3-text-red"><b>Showcase.</b></h1>
            <hr class="w3-round redBox"/>
          </div>

          <div class="w3-row-padding">
            <div class="w3-half">
              <img src={default_p} class="dImg" onclick="onClick(this)" alt="Concrete meets bricks"/>
              <img src={default_p} class="dImg" onclick="onClick(this)" alt="Light, white and tight scandinavian design"/>
              <img src={default_p} class="dImg" onclick="onClick(this)" alt="White walls with designer chairs"/>
            </div>

            <div class="w3-half">
              <img src={default_p} class="dImg" onclick="onClick(this)" alt="Windows for the atrium"/>
              <img src={default_p} class="dImg" onclick="onClick(this)" alt="Bedroom and office in one space"/>
              <img src={default_p} class="dImg" onclick="onClick(this)" alt="Scandinavian design"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App2;
