
import { Component } from 'react';
import './App.css';
import Withdarw from './componets/WithDarw/Withdarw';
import GoogleSsearch from './componets/GoogleSearchSuugg/GoogleSsearch';
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
// const toDoList =[{
//  id: 1,
//   "title": "Complete React JS Tutorial",
  
// },
//   {
//    id: 2,
//     "title": "Complete React JS Tutorial Part 2",
//   },
//   {
//    id: 3,
//     "title": "Complete React JS Tutorial Part 3",
//   },
//   {
//    id: 4,
//     "title": "Complete React JS Tutorial Part 4",
//   },
//   {
//    id: 5,
//     "title": "Complete React JS Tutorial Part 5",
//   },
//   {
//    id: 6,
//     "title": "Complete React JS Tutorial Part 6",
//   }
// ]

const intialgoogleSuggestionList=[
  {
    id: 1,
    title: "Nagender"
  },
  {
    id: 2,
    title: "Miles"
  },
  {
    id: 3,
    title: "Esther"
  },
  {
    id: 4,
    title: "Floyd"
  },{
    id: 5,
    title: "Jacob"
  },{
    id: 6,
    title: "Ashley"
  }
]













class App extends Component{
  state ={
    'searchState': ' ',
    googleSuggestionList: intialgoogleSuggestionList


  }
  // rendrCondition=()=>{
  //   const {isLoooged}=this.state;
  //   if(isLoooged === true){
  //     return <button>Logout</button>
  //   }
  //   return <button>Loggoin</button>
  // }
  onSerachChange = (event)=>{
   this.setState({
    'searchState': event.target.value,
   })
    // console.log(this.state.searchState);
  }
  updateWithArrow=(title)=>{
    console.log(`user is arrowed the ${title}`)
    
    this.setState({
      'searchState': title
    });

  }
  render() {
    // const {isLoooged}=this.state;
    // let autho;
    // if(isLoooged === true){
    //   autho = <button>Logout</button>
    // }else{
    //   autho = <button>Login</button>
    // }
    const {searchState,googleSuggestionList} = this.state;
    console.log(searchState);
    const searchResult = googleSuggestionList.filter(eachItem => eachItem.title.toLowerCase().includes(searchState.toLowerCase()));    return (
      <div>
         {/* <Welcome /> */}
         {/* <LightDarkMode /> */}
         {/* <ShowHide /> */}
         {/* <EvenOdd /> */}
         {/* <LoginLogin /> */}
          {/* <RandomNumber /> */}
          {/* <Withdarw /> */}
          {/* < /> */}

         {/* {this.rendrCondition()}
          */}
          {/* {isLoooged && <button>Logout</button>}
          {!isLoooged && <button>Loggoin</button>} */}
          {/* <SpeedoMeter /> */}
          <div className="list-container">
              <h1 className="title">Wel come to the Google List</h1>
              <input type='search' onChange={this.onSerachChange}  value={searchState} />
              <ul>
                {searchResult.map((eachItem) => (
                  <GoogleSsearch googleSuggestionList={eachItem} key={eachItem.id} updateWithArrow={this.updateWithArrow}/>
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
