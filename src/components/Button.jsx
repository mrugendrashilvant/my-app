import React, { Component } from 'react';
import JqxButton from '../assets/jqwidgets-react/react_jqxbuttons.js';

export default class Button extends Component {
    componentDidMount() {
        this.refs.myButton.on('click', (e) => {
            alert("Button was clicked")
        })
    }
    render() {

        return (
            <JqxButton ref='myButton' width={120} height={40} value={"click me"} />
        );
    }
}
