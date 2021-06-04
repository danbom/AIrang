import React, { Component } from 'react';
const axios = require('axios');

class App extends Component {
  state = {
    response: '',
  };
  
  //페이지 로드시 실행 GET TEST
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    try {
      const response = await fetch('/users');
      const body = await response.json();
      alert(body.message)
      if (response.status !== 200) throw Error(body.message);
      return body;
    } catch (error) {
      alert(error)
    }
  };
  //post 호출하기 버튼 클릭시 node api post 호출
  submitClick = async e => {
    axios.post('/users', {
    })
    .then( response => {
        alert(response.data.message)
    })  
  
  }
  
render() {
    return (
        <div>
            <button className="s_bt" type="submit" onClick={this.submitClick}>post 호출</button>
        </div>
    );
  }
}

export default App;