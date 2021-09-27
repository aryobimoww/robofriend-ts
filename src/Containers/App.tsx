import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import Header from '../Components/Header';
import './App.css';

export interface IRobot{
  name:string;
  email:string;
  id:number;
}
interface IAppProps{

}
interface IAppState{
  robots:Array<IRobot>;
  searchField:string;
}

class App extends React.Component<IAppProps,IAppState> {
  constructor(props:IAppProps) {
    super(props)
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount():void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  onSearchChange = (event : React.SyntheticEvent<HTMLInputElement>):void => {
    this.setState({ searchField: event.currentTarget.value })
  }

  render() : JSX.Element {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot: { name: string; }) =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <Header/>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default App;