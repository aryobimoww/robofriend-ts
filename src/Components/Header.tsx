import React from 'react';
import CardButton from './CardButton';

interface Iprop{

}
interface Istate{

}

// In most cases, instead of writing shouldComponentUpdate()
// by hand, you can inherit from React.PureComponent. It is
// equivalent to implementing shouldComponentUpdate() with a
// shallow comparison of current and previous props and state.

class Header extends React.Component<Iprop,Istate> {
  shouldComponentUpdate(nextProps:Iprop, nextState:Istate) {
    return false
  }
  render():JSX.Element {
    console.log('header')
    return (
      <div>
        <h1 className='f1'>RoboFriends</h1>
        <CardButton color={'red'} />
      </div>
    );
  }
};

export default Header;