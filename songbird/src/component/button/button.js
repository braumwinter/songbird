import React, {
    Component
} from "react";

import { BUTTON_TEXT } from './../../const/const';

import {
    BUTTON,
    BUTTON_ACTIVE,
    BUTTON_DISABLED
} from './../../const/class_name';

import './button.scss';

class Button extends Component {
    constructor(props) {
        super(props);

        this.click_next_question = this.click_next_question.bind(this);
    }

    click_next_question() {
        this.props.show_next_question();
    }

    render() {
        const is_activated_button = this.props.is_activate_button;

        if(is_activated_button) {
            return (
                <button 
                    className = {BUTTON + ' ' + BUTTON_ACTIVE}
                    key = { BUTTON }
                    onClick = {this.click_next_question}
                >
                    { BUTTON_TEXT }
                </button>
            )

        } else {
            return (
                <button 
                    className = {BUTTON + ' ' + BUTTON_DISABLED}
                    key = { BUTTON }
                >
                    { BUTTON_TEXT }
                </button>
            )
        }
    }
}

export default Button;
