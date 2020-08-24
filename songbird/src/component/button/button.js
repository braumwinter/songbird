import React, {
    Component
} from "react";

import {BUTTON, BUTTON_ACTIVE, BUTTON_DISABLED} from './../../const/class_name';
import './button.scss';

class Button extends Component {
    constructor(props) {
        super(props);
        this.text = 'NEXT';
    }

    render() {
        return (
            <button className = {BUTTON + ' ' + BUTTON_DISABLED}>
                {this.text}
            </button>
        )
    }
}

export default Button;