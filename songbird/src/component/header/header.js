import React, {
    Component
} from "react";

import './header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total_score: 0
        };
    }

    render() {
        return (
            <header className="header">
                <div className="logo">
                    <h1>Song<span className="color_logo">bird</span></h1>
                </div>
                <div className="score">Score: <span id="score">{this.state.total_score}</span></div>
            </header>
        )
    }
}

export default Header;