import React, { Component } from 'react';
import ActiveEventRegistrationDetails from './ActiveEventRegistrationDetails';
import './EventItem.css';  // Import the CSS file




const register={
    initail: '',
    succes: 'SUCCES',
    register: 'REGISTER',
    over: 'OVER'
}

const eventItem = [
  {
    id: 1,
    imageUrl:
      'https://i.pinimg.com/736x/ff/32/08/ff3208c948e1c960dc46443bb5fe7c39.jpg',
    name: 'Canada Dance Festival',
    location: 'canada,usa',
  },
  {
    id: 2,
    imageUrl:
      'https://i.pinimg.com/originals/df/69/6f/df696f42578a5b607e1874bf8cd60a3a.jpg',
    name: 'Puthanalkkal Kalavel',
    location: 'Karnataka, India',
  },
  {
    id: 3,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIcUIcSPgBuJ5BD0WVeZhM6KIYtuVQ9YRuEhSyfkuoB7JKi_cLQYJ_0FE1xDUeZ6-zRtA&usqp=CAU',
    name: 'Nithyapothuna',
    location: 'kerala, India',
  },
  {
    id: 4,
    imageUrl:
      'https://i.pinimg.com/736x/38/ab/9d/38ab9d87c1f88eb5b5dc50206e826812.jpg',
    name: 'Shivam',
    location: 'Andhara pradesh, India',
  },
  {
    id: 5,
    imageUrl:
      'https://i.pinimg.com/736x/a8/69/3e/a8693e2fc6bfec6ab59752ea172942d2.jpg',
    name: 'Kathakali',
    location: 'Tamil Nadu, India',
  },
  {
    id: 6,
    imageUrl:
      'https://www.shutterstock.com/image-photo/beautiful-indian-dancer-bright-traditional-260nw-2169259809.jpg',
    name: 'Coinal Fest',
    location: 'wasington, USA',
  }
];

class EventItem extends Component {
  state = {
    eventList: eventItem,
    satus: register.initail,
  };
  onClick=(id)=>{
    
    if(id===1){
        console.log("the id is the 1")
        this.setState({satus: register.register})
    }else if(id===2){
       console.log("the id is the 2")
       this.setState({satus: register.succes})
    }else if(id===3){
       console.log("the id is the 3")
       this.setState({satus: register.over})
    }
    else if(id===4){
       console.log("the id is the 4")
       this.setState({satus: register.succes})
    }else if(id===5){
       console.log("the id is the 5")
       this.setState({satus: register.register})
    }else{
       console.log("the id is the 6")
       this.setState({satus: register.over})
    }

  }
  renderEventList() {
    const { eventList } = this.state;
    return (
        <div className="container">
        {eventList.map(event => (
          <div className="event-item" key={event.id}>
            <ActiveEventRegistrationDetails event={event} key={event.id} onClick={this.onClick}/>
          </div>
        ))}
      </div>

    )
    
  }
  renderinitail=()=>{
    return (
        <div>
            <h1>Please select the imgae to know the registraion are not if not than please Registr for the event </h1>
        </div>
    )
  }
  renderSucces=()=>{
    return (
        <div>
            <h1>Registration Succesful</h1>
            {/* <h2>Please Register for the event</h2> */}
        </div>
    )
  }
  renderRigister=()=>{
    return (
        <div>
            
           <h1><button>REGISTER</button></h1> 
        </div>
    )
  }
  renderOver=()=>{
    return (
        <div>
            <h1>No more register is avaliable pleae consult the event maneger to register</h1>
        </div>
    )
  }

  render() {
    
    const {satus}=this.state;
    return (
      <div>
        {this.renderEventList()}
        {satus === register.initail && this.renderinitail()}
        {satus === register.succes && this.renderSucces()}
        {satus === register.register && this.renderRigister()}
        {satus === register.over && this.renderOver()}

      </div>
    )
    
  }
}

export default EventItem;
