import React, {
    Component
} from "react";

import {
    STRING_SONG,
    STRING_BIRD,
    STRING_SCORE
} from './../../const/const';

import {
    HEADER,
    LOGO,
    COLOR_LOGO,
    SCORE,
    TOTAL_SCORE,
} from './../../const/class_name';

import './header.scss';

class Header extends Component {
    render() {
        const total_score = this.props.score;

        return (
            <header className = { HEADER } key = { HEADER }>
                <div className = { LOGO } key = { LOGO }>
                    <h1>
                        { STRING_SONG }
                        <span className = { COLOR_LOGO }>
                            { STRING_BIRD }
                        </span>
                    </h1>
                </div>
                <div className = { SCORE } key = { SCORE }>
                    { STRING_SCORE }
                    <span
                        className = { TOTAL_SCORE }
                        key = { TOTAL_SCORE }
                        id = { TOTAL_SCORE }>
                            { total_score }
                        </span>
                    </div>
            </header>
        )
    }
}

export default Header;
