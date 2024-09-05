
import { Component } from 'react';
import './App.css';
import DebuggCounter from './componets/DebuggCounter/DebuggCounter';
import Withdarw from './componets/WithDarw/Withdarw';
import HistroyDdelete from './componets/HistroeDelete/HistroyDdelete';
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

// const intialgoogleSuggestionList=[
//   {
//     id: 1,
//     title: "Nagender"
//   },
//   {
//     id: 2,
//     title: "Miles"
//   },
//   {
//     id: 3,
//     title: "Esther"
//   },
//   {
//     id: 4,
//     title: "Floyd"
//   },{
//     id: 5,
//     title: "Jacob"
//   },{
//     id: 6,
//     title: "Ashley"
//   }
// ]


// const intialhistoyList=[{
//   id: 1,
//   title: 'React JS Tutorial Part 1',
//   date: '2022-01-01',
//   content: 'This is the first part of React JS tutorial'
// },
//   {
//     id: 2,
//     title: 'React JS Tutorial Part 2',
//     date: '2022-01-02',
//     content: 'This is the second part of React JS tutorial'
//   },
//   {
//     id: 3,
//     title: 'React JS Tutorial Part 3',
//     date: '2022-01-03',
//     content: 'This is the third part of React JS tutorial'
//   },
//   {
//     id: 4,
//     title: 'React JS Tutorial Part 4',
//     date: '2022-01-04',
//     content: 'This is the fourth part of React JS tutorial'
//   },
//   {
//     id: 5,
//     title: 'React JS Tutorial Part 5',
//     date: '2022-01-05',
//     content: 'This is the fifth part of React JS tutorial'
//   },{
//     id: 6,
//     title: 'React JS Tutorial Part 6',
//     date: '2022-01-06',
//     content: 'This is the sixth part of React JS tutorial'
//   }



// ]















class App extends Component{
  // state ={
  //   'searchState': ' ',
  //    histoyList: intialhistoyList
  // }
  // rendrCondition=()=>{
  //   const {isLoooged}=this.state;
  //   if(isLoooged === true){
  //     return <button>Logout</button>
  //   }
  //   return <button>Loggoin</button>
  // }
  // onSerachChange = (event)=>{
    
  //  this.setState({
  //   'searchState': event.target.value,
  //  })
  //   console.log(this.state.searchState);
  // }
  // updateWithArrow=(id)=>{
  //   console.log(`user is arrowed the ${id}`)
  //    const updatedList=this.state.histoyList.filter(eachItem => eachItem.id!== id)
  //   this.setState({
  //     histoyList: updatedList,
  //   })
  // }
  render() {
    // const {isLoooged}=this.state;
    // let autho;
    // if(isLoooged === true){
    //   autho = <button>Logout</button>
    // }else{
    //   autho = <button>Login</button>
    // }
  //   const {searchState,histoyList} = this.state;
  //   console.log(searchState);
  //   const searchResult = histoyList.filter(eachItem =>eachItem.title.includes(searchState));
  //   if(!histoyList){
  //     console.log("NO logs are found")
  // }
      return (
      <div>
         {/* <Welcome /> */}
         {/* <LightDarkMode /> */}
         {/* <ShowHide /> */}
         {/* <EvenOdd /> */}
         {/* <LoginLogin /> */}
          {/* <RandomNumber /> */}
          {/* <Withdarw /> */}
          {/* < /> */}
          <DebuggCounter/>
        
         {/* {this.rendrCondition()}
          */}
          {/* {isLoooged && <button>Logout</button>}
          {!isLoooged && <button>Loggoin</button>} */}
          {/* <SpeedoMeter /> */}
          {/* <div className="list-container">
              <h1 className="title">Wel come to the Google List</h1>
              <input type='search' onChange={this.onSerachChange} />
              <ul>
                
              {searchResult.length === 0 ? (
                      <p>No history is found</p> // Display this if searchResult is empty
                                        ) : (
                        searchResult.map((eachItem) => (
                          <HistroyDdelete 
                            histoyList={eachItem} 
                            key={eachItem.id} 
                            updateWithArrow={this.updateWithArrow} 
                          />
    ))
  )}
              </ul>
              </div> */}
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
