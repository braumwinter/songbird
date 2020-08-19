import React, {
    Component
} from "react";

import './button.scss';

class Button extends Component {
    constructor(props) {
        super(props);
        this.text = 'NEXT';
    }

    render() {
        return (
            <button>{this.text}</button>
        )
    }
}

export default Button;