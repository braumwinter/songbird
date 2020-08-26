import React, {
    Component
} from "react";

import './../../style/style.scss';

import Header from './../header/header';
import Body from './../body/body';

import { CONTAINER } from './../../const/class_name';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        };

        this.change_score = this.change_score.bind(this);
    }

    change_score(score){
        // console.log('SCORE = ', score);
        const total_score = this.state.score + score;
        this.setState({
            score: total_score
        });
    }

    render() {
        const total_score = this.state.score;
        // console.log('container score ', total_score);
        return (
            <div className={CONTAINER} key={CONTAINER}>
                <Header 
                    score={total_score}
                    change_score = {this.change_score}
                />
                <Body 
                    change_score = {this.change_score}
                />
            </div>
        )
    }
}


export default Container;

