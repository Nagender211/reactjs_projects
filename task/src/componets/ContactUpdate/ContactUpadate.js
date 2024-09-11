import React, { Component } from 'react'
import ContactIteams from './ContactIteams'
import {v4 as uuid4} from 'uuid'


const contactList=[{
    id:uuid4(),
    name:'Jane Doe',
    phoneNumber:'0987654321',
    isFavorite: false,
},

    {
        id:uuid4(),
        name:'Nani',
        phoneNumber:'1234567890',
        isFavorite: true,
    },
    {
        id:uuid4(),
        name:'Rachel',
        phoneNumber:'5555555555',
        isFavorite: false,
    },
    {
        id:uuid4(),
        name:'John Doe',
        phoneNumber:'9999999999',
        isFavorite: false,
    },
    {
        id:uuid4(),
        name:'Emily',
        phoneNumber:'7777777777',
        isFavorite: false,
    }

]



class ContactUpadate extends Component{
    state={
        name: '',
        phoneNumber: '',
        contacts: contactList,
    }

    toggleEventFfav=(id)=>{
        this.setState(pre=>({
            contacts: pre.contacts.map(eachContact=>{
                if(id===eachContact.id){
                    return {...eachContact, isFavorite: !eachContact.isFavorite}
                }
                return eachContact
            })
           

        }))
    }




    onAddConatact=(e)=>{
        e.preventDefault();
        const {name,phoneNumber}=this.state
        const newList={
            id: uuid4(),
            name,
            phoneNumber,
        }
        this.setState(pre=>({
            contacts: [...pre.contacts,newList],
            name: '',
            phoneNumber: '',
        }))
        // const newContact={
        //     id: uuid4(),
        //     name: this.state.name,
        //     phoneNumber: this.state.phoneNumber,
        // }
        // this.setState({
        //     contacts:[...this.state.contacts, newContact],
        //     name: '',
        //     phoneNumber: '',
        // })
        // console.log(this.state.contacts)
        // console.log(this.state.name)
        // console.log(this.state.phoneNumber)

    }

    nameUadate=(e)=>{
        // console.log(e.target.value)
        this.setState({
            name: e.target.value
        })
    }
    phoneNumberUpdate=(e)=>{
        // console.log(e.target.value)
        this.setState({
            phoneNumber: e.target.value
        })
    }
    render(){
        // const {nameUadate}=this.state
        const {contacts,name,phoneNumber}=this.state;
        return(
            <div><h1>Hello world I am here to teach you sominthing </h1>
            <form>
                <input type='text' placeholder='Enter your name' onChange={this.nameUadate} value={name}/>
                <input type='text' placeholder='Enter your Phone Number'onChange={this.phoneNumberUpdate} value={phoneNumber}/>
                <button type='submit' onClick={this.onAddConatact}>Add Contact</button>
            </form>
            {/* <table>
                <tr>
                    <td>Name</td>
                    <td>Phone Number</td>
                </tr>
            </table>
             */}
             {contacts.map(eachIteam=>(
                <ContactIteams key={eachIteam.id} contactDeaitles={eachIteam} toggleEventFfav={this.toggleEventFfav}/>
             ))

             }
           
            </div>
          
        )
    }
}
export default ContactUpadate
