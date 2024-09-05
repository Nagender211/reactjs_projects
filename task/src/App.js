
import { Component } from 'react';
import './App.css';
import TodoList from './componets/TodoList/TodoList';
import SearchDestinication from './componets/SearchDestination/SearchDestinication';
import RandomNumber from './componets/RandomNumber/RandomNumber';
import LoginLogin from './componets/LoginLogout/LoginLogin';
import EvenOdd from './componets/EvenOdd/EvenOdd';
import ShowHide from './componets/ShowHide/ShowHide';
import LightDarkMode from './componets/LightDarkMode/LightDarkMode';
import Condistional from './componets/Conditional/Condistional';
import Counter from './componets/Counter/Counter';
import FruitsCounter from './componets/Fruits Counter/FruitsCounter';
import SpeedoMeter from './componets/SpeeddoMeter/SpeedoMeter';
import Welcome from './componets/Welcome/Welcome';
// import ReusableBanners from './componets/Reusable Banners/ReusableBanners';
// import UserProfile from './componets/UserProfile/UserProfile';

// const insitalUserProfileList=[
//   {
//     uniqueNo: 1,
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
//     name: 'Esther Howard',
//     role: 'Software Developer'
//   },
//   {
//     uniqueNo: 2,
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
//     name: 'Floyd Miles',
//     role: 'Software Developer'
//   },
//   {
//     uniqueNo: 3,
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png', 
//     name: 'Nagender Miles',
//     role: 'Software Developer'
//   }]
const toDoList =[{
 id: 1,
  "title": "Complete React JS Tutorial",
  
},
  {
   id: 2,
    "title": "Complete React JS Tutorial Part 2",
  },
  {
   id: 3,
    "title": "Complete React JS Tutorial Part 3",
  },
  {
   id: 4,
    "title": "Complete React JS Tutorial Part 4",
  },
  {
   id: 5,
    "title": "Complete React JS Tutorial Part 5",
  },
  {
   id: 6,
    "title": "Complete React JS Tutorial Part 6",
  }
]
class App extends Component{
  state ={
    toDoList: toDoList,

  }
  // rendrCondition=()=>{
  //   const {isLoooged}=this.state;
  //   if(isLoooged === true){
  //     return <button>Logout</button>
  //   }
  //   return <button>Loggoin</button>
  // }
  // onSerachChange = (event)=>{
  //   this.setState({
  //     "searchInput": event.target.value,
  //   })
  // }
  deleteUser=(id)=>{
    console.log(`user is deleted the ${id}`)
    
    const updatedList=this.state.toDoList.filter(eachItem => eachItem.id!== id)
    this.setState({
      toDoList: updatedList,
    })

  }
  render() {
    // const {isLoooged}=this.state;
    // let autho;
    // if(isLoooged === true){
    //   autho = <button>Logout</button>
    // }else{
    //   autho = <button>Login</button>
    // }
    // const {searchInput,SearchDestionList} = this.state;
    // console.log(searchInput);
    // const searchResult=SearchDestionList.filter(eachItem => eachItem.name.includes(searchInput))
    return (
      <div>
         {/* <Welcome /> */}
         {/* <LightDarkMode /> */}
         {/* <ShowHide /> */}
         {/* <EvenOdd /> */}
         {/* <LoginLogin /> */}
          {/* <RandomNumber /> */}


         {/* {this.rendrCondition()}
          */}
          {/* {isLoooged && <button>Logout</button>}
          {!isLoooged && <button>Loggoin</button>} */}
          {/* <SpeedoMeter /> */}
          <div className="list-container">
              <h1 className="title">Wel come to the todolist</h1>
              {/* <input type='search' onChange={this.onSerachChange}/> */}
              <ul>
                {this.state.toDoList.map((eachItem) => (
                  <TodoList toDoList={eachItem} key={eachItem.id} deleteUser={this.deleteUser}/>
                ))}
              </ul>
              </div>
      </div>
    ) 
  }
}
//   <div>
//     <Counter />
   
//     <FruitsCounter />
   
//   </div>
// )



export default App;
