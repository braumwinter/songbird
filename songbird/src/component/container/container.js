import React, {
    Component
} from "react";

import Header from './../header/header';
import Body from './../body/body';

import { CONTAINER } from './../../const/class_name';

import './container.scss';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        };

        this.change_score = this.change_score.bind(this);
        this.reset_score = this.reset_score.bind(this);
    }

    change_score(score){
        const total_score = this.state.score + score;

        this.setState({
            score: total_score
        });
    }

    reset_score(){
        this.setState({
            score: 0,
        });
    }

    render() {
        const total_score = this.state.score;

        return (
            <div className = { CONTAINER } key = { CONTAINER }>
                <Header
                    score = { total_score }
                />
                <Body
                    change_score = { this.change_score }
                    reset_score = { this.reset_score }
                />
            </div>
        )
    }
}

export default Container;
