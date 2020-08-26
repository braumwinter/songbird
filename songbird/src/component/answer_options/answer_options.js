import React, {
    Component
} from "react";

import BIRD from './../../const/birds';

import {
    TRUE,
    FALSE,
    DATA_ANSWER,
    DATA_INDEX,
    DATA_KEY,
    DATA_TOPIC
 } from './../../const/const';

import {
    ANSWER_LIST,
    ANSWER_ITEM,
    ANSWER_INDICATOR
} from './../../const/class_name';

import './answer_options.scss';

class Answer_options extends Component {
    constructor(props) {
        super(props);

        this.show_info_bird = this.show_info_bird.bind(this);
    }

    show_info_bird(event) {
        const event_target = event.currentTarget;

        const selected_answer = event_target.getAttribute(DATA_ANSWER);
        const index = event_target.getAttribute(DATA_INDEX);

        const data = event_target.getAttribute(DATA_KEY);
        const topic = event_target.getAttribute(DATA_TOPIC);

        this.props.show_info(topic, data);
        this.props.check_answers(selected_answer, index);
    }

    render() {
        const array_answers = this.props.answers;
        const correct_index = this.props.correct_index;
        const current_topic = this.props.current_topic;

        return (
            <ul className={ANSWER_LIST} key={ANSWER_LIST}>
                {
                    array_answers.map((item, index) => {
                        if (index === correct_index) {
                            return (
                                <li
                                    className = { ANSWER_ITEM }
                                    key = { ANSWER_ITEM + '_' + index }
                                    id = { ANSWER_ITEM + '_' + index }
                                    data-answer = { TRUE }
                                    data-topic = { current_topic }
                                    data-key = { item }
                                    data-index = { index }
                                    onClick = { this.show_info_bird }
                                >
                                    <span
                                        className = { ANSWER_INDICATOR }
                                        key = { ANSWER_INDICATOR + '_' + index }
                                        id = { ANSWER_INDICATOR + '_' + index }
                                    ></span>
                                    { BIRD[current_topic][item].name }
                                </li>
                            )
                        } else {
                            return (
                                <li
                                    className = { ANSWER_ITEM }
                                    key = { ANSWER_ITEM + '_' + index }
                                    id = { ANSWER_ITEM + '_' + index }
                                    data-answer = { FALSE }
                                    data-topic = { current_topic }
                                    data-key = { item }
                                    data-index = { index }
                                    onClick = { this.show_info_bird }
                                >
                                    <span
                                        className = { ANSWER_INDICATOR }
                                        key = { ANSWER_INDICATOR + '_' + index }
                                        id = { ANSWER_INDICATOR + '_' + index }
                                    ></span>
                                    { BIRD[current_topic][item].name }
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
