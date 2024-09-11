import React, { Component } from 'react'
import AppoinetmentConter from './AppoinetmentConter'
import { v4 as uuid4 } from 'uuid'
import './AppointmentsApp.css'  // Import CSS

class AppointmentsApp extends Component {

    state = {
        appoinetmentList: [],
        text: '',
        date: '',
        isFavorite: false
    }

    onTextinput = (e) => {
        this.setState({ text: e.target.value })
    }

    onChageDate = (e) => {
        this.setState({ date: e.target.value })
    }

    onBook = (e) => {
        e.preventDefault()
        const { text, date } = this.state
        const newList = {
            id: uuid4(),
            text,
            date,
        }

        this.setState(prevState => ({
            appoinetmentList: [...prevState.appoinetmentList, newList],
            text: '',
            date: ''
        }))
    }

    toggleEvenFav = (id) => {
        this.setState(prevState => ({
            appoinetmentList: prevState.appoinetmentList.map(eachContact => {
                if (id === eachContact.id) {
                    return { ...eachContact, isFavorite: !eachContact.isFavorite }
                }
                return eachContact
            })
        }))
    }

    render() {
        const { appoinetmentList, text, date } = this.state
        return (
            <div className="app-container">
                <form className="app-form" onSubmit={this.onBook}>
                    <input type='text' onChange={this.onTextinput} value={text} placeholder="Enter Appointment Name" />
                    <input type='date' value={date} onChange={this.onChageDate} />
                    <button type='submit'>Book Now</button>
                </form>
                <div className="app-title">
                    <h1>Appointments</h1>
                </div>
                {appoinetmentList.map(eachAppoienment => (
                    <AppoinetmentConter key={eachAppoienment.id} appointment={eachAppoienment} toggleEvenFav={this.toggleEvenFav} />
                ))}
            </div>
        )
    }
}

export default AppointmentsApp
