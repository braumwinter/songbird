import React, {
    Component
} from "react";

import BIRD from './../../const/birds';

import { ANSWER_LIST, ANSWER_ITEM, ANSWER_INDICATOR, CORRECT_ANSWER, ERROR_ANSWER } from './../../const/class_name';

import './answer_options.scss';

class Answer_options extends Component {
    constructor(props) {
        super(props);
        /*this.current_topic = props.current_topic;
        this.correct_answer = props.correct_answer;
        this.correct_index = props.correct_index;
        this.answers = props.answers;*/
        this.state = {
            current_topic: props.current_topic,
            correct_answer: props.correct_answer,
            correct_index: props.correct_index,
            answers: props.answers,
        };
        this.score = 5;
        this.is_answer = false;

        this.show_info_bird = this.show_info_bird.bind(this);
    }

    show_info_bird(event) {
        const event_target = event.currentTarget;
        // console.log(event_target.getAttribute('data-answer'));
        const chosen_answer = event_target.getAttribute('data-answer');
        // console.log(answer);
        const index = event_target.getAttribute('data-index');
        const id_span = ANSWER_INDICATOR + '_' + index;
        const data = event_target.getAttribute('data-key');
        const topic = event_target.getAttribute('data-topic');
        // console.log('topic ', topic, 'data ', data);

        this.props.show_info(topic, data);
        this.props.check_answers(chosen_answer, index);

        /*if (!this.is_answer) {
            if (answer === 'true') {
                document.getElementById(id_span).classList.add(CORRECT_ANSWER);
                this.is_answer = true;
                // this.props.show_answer();
                // this.props.transfer_change_score(this.score);
            } else {
                document.getElementById(id_span).classList.add(ERROR_ANSWER);
                // this.score--;
            }
        }*/
        // console.log(this.score);

    }

    render() {
        const array_answers = this.props.answers;
        const correct_index = this.props.correct_index;
        // const correct_answer = this.props.correct_answer;
        const current_topic = this.props.current_topic;

        return (
            <ul className={ANSWER_LIST} key={ANSWER_LIST}>
                {
                    array_answers.map((item, index) => {
                        if (index === correct_index) {
                            return (
                                <li
                                    className={ANSWER_ITEM}
                                    key={ANSWER_ITEM + '_' + index}
                                    id={ANSWER_ITEM + '_' + index}
                                    data-answer='true'
                                    data-topic={current_topic}
                                    data-key={item}
                                    data-index={index}
                                    onClick={this.show_info_bird}
                                >
                                    <span
                                        className={ANSWER_INDICATOR}
                                        key={ANSWER_INDICATOR + '_' + index}
                                        id={ANSWER_INDICATOR + '_' + index}
                                    ></span>
                                    {BIRD[current_topic][item].name}
                                </li>
                            )
                        } else {
                            return (
                                <li
                                    className={ANSWER_ITEM}
                                    key={ANSWER_ITEM + '_' + index}
                                    id={ANSWER_ITEM + '_' + index}
                                    data-answer='false'
                                    data-topic={current_topic}
                                    data-key={item}
                                    data-index={index}
                                    onClick={this.show_info_bird}
                                >
                                    <span
                                        className={ANSWER_INDICATOR}
                                        key={ANSWER_INDICATOR + '_' + index}
                                        id={ANSWER_INDICATOR + '_' + index}
                                    ></span>
                                    {BIRD[current_topic][item].name}
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
