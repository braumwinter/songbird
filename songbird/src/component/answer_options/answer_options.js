import React, {
    Component
} from "react";

import BIRD from './../../const/birds';

import { ACTIVE_ITEM, ANSWER_LIST, ANSWER_ITEM, ANSWER_INDICATOR, CORRECT_ANSWER, ERROR_ANSWER } from './../../const/class_name';

import './answer_options.scss';

class Answer_options extends Component {
    constructor(props) {
        super(props);
        this.current_topic = props.current_topic;
        this.correct_answer = props.correct_answer;
        this.correct_index = props.correct_index;
        this.answers = props.answers;
        this.state = {
            current_topic: props.current_topic,
            correct_answer: props.correct_answer,
            correct_index: props.correct_index,
            answers: props.answers,
        };

        this.show_info_bird = this.show_info_bird.bind(this);
    }

    show_info_bird(event) {
        const event_target = event.currentTarget;
        console.log(event_target.getAttribute('data-answer'));
    }

    render() {
        const arr = this.answers;
        return (
            <ul className={ANSWER_LIST} key={ANSWER_LIST}>
                {
                    arr.map((item, index) => {
                        if(index === this.correct_index) {
                            return(
                            <li 
                                className={ANSWER_ITEM} 
                                key={ANSWER_ITEM + '_' + index}
                                data-answer = 'true'
                                dats-topic = {this.current_topic}
                                data-key = {item}
                                onClick={this.show_info_bird}
                            >
                            <span className = {ANSWER_INDICATOR}></span>
                            {BIRD[this.current_topic][item].name}
                            </li>
                        )
                        } else {
                            return(
                            <li 
                                className={ANSWER_ITEM} 
                                key={ANSWER_ITEM + '_' + index}
                                data-answer = 'false'
                                dats-topic = {this.current_topic}
                                data-key = {item}
                                onClick={this.show_info_bird}
                            >
                            <span className = {ANSWER_INDICATOR}></span>
                            {BIRD[this.current_topic][item].name}
                            </li>
                        )
                        }
                    })
                }
            </ul>
        )
    }
}

export default Answer_options;
