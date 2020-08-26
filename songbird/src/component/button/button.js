import React, {
    Component
} from "react";

import {BUTTON, BUTTON_ACTIVE, BUTTON_DISABLED} from './../../const/class_name';
import './button.scss';

class Button extends Component {
    constructor(props) {
        super(props);
        this.text = 'NEXT';
        this.state = {
            activate_button: props.is_activate_button,
        };

        this.click_next_question = this.click_next_question.bind(this);
    }

    click_next_question() {
        this.props.show_next_question();
        // console.log('click');
    }

    render() {
        // const is_activated_button = this.state.activate_button;
        const is_activated_button = this.props.is_activate_button;
        // let button_class;
        console.log(is_activated_button);

        if(is_activated_button) {
            // button_class = BUTTON + ' ' + BUTTON_ACTIVE;
            return (
                <button 
                    className = {BUTTON + ' ' + BUTTON_ACTIVE}
                    onClick = {this.click_next_question}
                >
                    {this.text}
                </button>
            )

        } else {
            //button_class = BUTTON + ' ' + BUTTON_DISABLED;
            return (
                <button 
                    className = {BUTTON + ' ' + BUTTON_DISABLED}
                    // onClick = {this.next_question}
                >
                    {this.text}
                </button>
            )
        }

        /*return (
            <button 
                className = {button_class}
                onClick = {this.next_question}
            >
                {this.text}
            </button>
        )*/
    }
}

export default Button;