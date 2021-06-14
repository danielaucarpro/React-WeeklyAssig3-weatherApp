import React from 'react';
import './Header.css'
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Consumer from "../API/WeatherAPI";


export default class Header extends React.Component {
    state = {
        enteredSearch: '',
        isCelsius: true
    }

    changeTemperature = () => {
        console.log(this.state.isCelsius)
        this.setState({
            isCelsius: !this.state.isCelsius
        })
        this.props.temperature(this.state.isCelsius);
    }

    searchHandler = (e, dispatch) => {
        e.preventDefault();
        console.log(e.target.value)
        this.setState({
            enteredSearch: e.target.value
        })
        dispatch({ type: 'CHANGE_CITY', payload: this.state.enteredSearch });
    }

    submitHandler = (e, dispatch) => {
        e.preventDefault();
        console.log(this.state.enteredSearch)
        this.props.onSaveHandle(this.state.enteredSearch) 
        this.setState({ enteredSearch: '' })
    }

    render() {
        return (
            <>
                <Consumer>
                        <Nav>
                            <div className='header-container'>
                                <h1 className='header-h1'>Weather API</h1>
                                <form className='header-form'>
                                    <button onClick={this.changeTemperature} className='degree-button'>C°/F°</button>
                                    <div className='icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="search-icon" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </div>
                                    <input onChange={this.searchHandler} className='search-input' type="search" placeholder="Search" aria-label="Search" />
                                    <button className='search-button' type="submit">Search</button>
                                </form>
                            </div>
                        </Nav>
                </Consumer>
            </>
        );
    }
}

// onSubmit={this.submitHandler.bind(this.props.dispatch)}