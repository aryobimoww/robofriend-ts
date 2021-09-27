import * as React from 'react';

interface IState{
count:number;
}
interface IProps{
  color:string;

}
class CounterButton extends React.Component<IProps,IState> {
  constructor(props:IProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  public shouldComponentUpdate(nextProps:IProps , nextState:IState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render():JSX.Element {
    console.log('counter');
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton