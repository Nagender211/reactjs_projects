import React, { Component } from 'react';
import Maneger from './Maneger';
import { v4 as uuid4 } from 'uuid';
import './Manger.css'

class PasswordManeger extends Component {
    state = {
        websites: [],
        filteredWebsites: [],  // New state to store filtered websites
        username: '',
        password: '',
        websiteName: '',
        showPassword: true,
        count: 0,
    };

    onWebsite = (e) => {
        this.setState({
            websiteName: e.target.value,
        });
    };

    onUsername = (e) => {
        this.setState({
            username: e.target.value,
        });
    };

    onPassword = (e) => {
        this.setState({
            password: e.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { websites, websiteName, username, password } = this.state;
        const newList = {
            id: uuid4(),
            name: websiteName,
            username,
            password,
        };

        this.setState((prev) => ({
            websites: [...websites, newList],
            filteredWebsites: [...websites, newList],  // Update filtered list as well
            websiteName: '',
            username: '',
            password: '',
            count: prev.count + 1,
        }));
    };

    toggleEvent = () => {
        this.setState((pre) => ({
            showPassword: !pre.showPassword,
        }));
    };

    maskPassword = (password) => {
        return '•'.repeat(password.length);
    };

    onDelete = (id) => {
        const { websites } = this.state;
        const DelteList = websites.filter((eachwebsite) => eachwebsite.id !== id);
        this.setState((prev) => ({
            websites: DelteList,
            filteredWebsites: DelteList,  // Update filtered list as well
            count: prev.count - 1,
        }));
    };

    onSearch = (e) => {
        const searchInput = e.target.value.toLowerCase();
        const { websites } = this.state;

        // If input is empty, show all websites
        if (!searchInput) {
            this.setState({ filteredWebsites: websites });
            return;
        }

        const filteredWebsites = websites.filter((website) =>
            website.name.toLowerCase().includes(searchInput)
        );
        this.setState({ filteredWebsites,count: filteredWebsites.length});
    };

    render() {
        const { filteredWebsites, websiteName, username, password, showPassword, count } = this.state;

        return (
            <div className="container">
    <input
        type="search"
        placeholder="Please search by website name"
        onChange={this.onSearch}
        className="search-input"
    />
    <div className="flex-container">
        <div className="form-section">
            <form>
                <input
                    type="text"
                    placeholder="Enter your website name"
                    onChange={this.onWebsite}
                    value={websiteName}
                />
                <input
                    type="text"
                    placeholder="Enter your username"
                    onChange={this.onUsername}
                    value={username}
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    onChange={this.onPassword}
                    value={password}
                />
                <button type="submit" onClick={this.onSubmit}>
                    Submit
                </button>
            </form>
            <button onClick={this.toggleEvent} className="toggle-password-btn">
                {showPassword ? "Show Password" : "Hide Password"}
            </button>
        </div>

        <div className="content-section">
            <h1>Stored Passwords: {count}</h1>
            {filteredWebsites.map((eachwebsite) => (
                <Maneger
                    key={eachwebsite.id}
                    website={eachwebsite}
                    maskPassword={this.maskPassword}
                    showPassword={showPassword}
                    onDelete={this.onDelete}
                />
            ))}
        </div>
    </div>
           </div>

        );
    }
}

export default PasswordManeger;
