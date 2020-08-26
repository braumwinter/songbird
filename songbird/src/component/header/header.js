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
        const total_score = this.props.score;
        // console.log('header score ', total_score);
        return (
            <header className="header">
                <div className="logo">
                    <h1>Song<span className="color_logo">bird</span></h1>
                </div>
                <div className="score">Score: <span id="score">{total_score}</span></div>
            </header>
        )
    }
}

export default Header;