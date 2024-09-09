
import { Component } from 'react';
import './App.css';

import SwitchContet from './componets/SwitchContent/SwitchContet';
import Header from './componets/SwitchContent/Header';

import TabItem from './componets/SwitchContent/TabItem';



import FeedBackApp from './componets/FeedbackApp/FeedBackApp';
import FriutCount from './componets/FriutCounter/FriutCount';
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

// const FeedBackList=[{
//   id: 1,
//   title: 'Good',
//   description: 'This app is great',
//   rating: 5
// },
//   {
//     id: 2,
//     title: 'Bad',
//     description: 'This app is not great',
//     rating: 1
//   },
//   {
//     id: 3,
//     title: 'Neutral',
//     description: 'This app is ok',
//     rating: 3
//   }
// ]






const tabsList = [
  {tabId: 'STATIC', displayText: 'Static'},
  {tabId: 'RESPONSIVE', displayText: 'Responsive'},
  {tabId: 'DYNAMIC', displayText: 'Dynamic'},
]

const projectsList = [
  {
    projectId: 0,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
    title: 'Music Page',
    description:
      'The music page enables the users to browse through the images of all-time favorite music albums.',
  },
  {
    projectId: 1,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    title: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
  },
  {
    projectId: 2,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
    title: 'Advanced Technologies',
    description:
      'A website that gives you a basic understanding of Advanced Technologies.',
  },
     {
       projectId: 3,
       category: 'STATIC',
       imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s2-img.png',
       title: 'Happy Meals',
       description: 'Discover the best foods in over 1,000 restaurants.',
     },
  {
    projectId: 4,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
    title: 'VR Website',
    description:
      'VR Website enables users to explore AR and VR Products and Industry happenings.',
  },
  {
    projectId: 5,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
  },
  {
    projectId: 6,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
  },
 {
   projectId: 7,
   category: 'RESPONSIVE',
   imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r1-img.png',
   title: 'Design',
   description:
     'A website to showcase the best features and give more information about the Design tool.',
 },
  {
    projectId: 8,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
  },
  {
    projectId: 9,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
  },
  {
    projectId: 10,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
  },
]











class App extends Component{





  // state={
  //   activeTabId: tabsList[0].tabId,
  // }
  // clickTabItem = tabValue => {
  //   this.setState({activeTabId: tabValue})
  // }
  state={activeTabId: tabsList[0].tabId}










  // state ={
  //   message: '',
  //   isFeedbackSelected: false
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


  // btnClicked=(id)=>{
  //   let message='';
  //   if(id===1){
  //     message="Good Thank you for your feedback";
      
  //   }
  //   else if(id===2){
  //     message="Bad Sorry for your feedback";
      
  //   }
  //   else if(id===3){
  //     message="Neutral Thank you for your feedback";
      
  //   }
  //   this.setState({
  //     message: message,
  //     isFeedbackSelected: true

  //   })
  // }







  // getFilteredProjects = () => {
  //   const {activeTabId} = this.state
  //   const filteredProjects = projectsList.filter(
  //     eachprojectDetails => eachprojectDetails.category === activeTabId,
  //   )
  //   return filteredProjects
  // }

    getFilteredProjets=()=>{
      const {activeTabId}=this.state;
      const filteredProjects=projectsList.filter(eacjProject=> eacjProject.category===activeTabId)
      return filteredProjects;
    }
    updateTabList=(tabId)=>{
      this.setState({activeTabId: tabId})
    }















  render() {
      const filteredProjects=this.getFilteredProjets();












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
  //   console.log(searchResult);
      // const {message,isFeedbackSelected}=this.state;






      // const {activeTabId}=this.state
      // const filteredProjects = this.getFilteredProjects()















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
          {/* <DebuggCounter/> */}
          {/* <FriutCount /> */}
          {/* <FeedBackApp /> */}
         {/* {this.rendrCondition()}
          */}
          {/* {isLoooged && <button>Logout</button>}
          {!isLoooged && <button>Loggoin</button>} */}
          {/* <SpeedoMeter /> */}
          {/* <div className="list-container">
              <h1 className="title">Wel come to te Google List</h1>
              <h1 href="#" target='_blank'>{title}</h1>
              <input type='search' onChange={this.onSerachChange} />
              {isFeedbackSelected ? (
            <h2>{message}</h2>
          ) : (
            <ul>
              {FeedBackList.map((eachitem) => (
                <FeedBackApp
                  FeedBackItem={eachitem}
                  key={eachitem.id}
                  btnClicked={this.btnClicked}
                />
              ))}
            </ul>
          )}
              </div> */}
               <div className="app-container">
        <Header />
        <h1 className="title">Projects</h1>
        <p className="description">
          Your skills and achievements showcase your strengths and abilities.
          Speak about any new skills or software you learnt to perform the
          project responsibilities.
        </p>

        <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              clickTabItem={this.clickTabItem}
              // isActive={activeTabId === tabDetails.tabId}
              updateTabList={this.updateTabList}
            />
          ))}
        </ul>

        <ul className="project-list-container">
          {filteredProjects.map(projectDetails => (
            <SwitchContet
              key={projectDetails.projectId}
              projectDetails={projectDetails}
            />
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
