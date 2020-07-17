import React from 'react';
import logo from './logo.svg';
import './App.css';
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
  return (
    <a href="#" onClick={handleClick}>
      Tìm hiểu về React
    </a>
  );
}
function UserGreeting(props) {
  return <h1>Chào mừng bạn đã quay lại</h1>;
}

function GuestGreeting(props) {
  return <h1>Hãy đăng nhập. Nếu chưa có tài khoản, vui lòng tạo tài khoản mới</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (! isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ĐĂNG KÝ' : 'ĐĂNG KÍ THÀNH CÔNG'}

//       </button>
//     );
//   }
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <h1 className="App-title"> <ActionLink /></h1></p>
        {/* <Toggle/> */}
        <Greeting/>
      </header>
    </div>
  );
}

export default App;
