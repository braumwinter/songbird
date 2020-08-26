/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import React, {
    Component
} from "react";

import BIRD from './../../const/birds';

import Topic_list from './../topic_list/topic_list';
import Question from './../question/question';
import { select_answers } from './../../script/select_answers';
import { MAXIMUM_QUESTIONS, MINIMUM_QUESTIONS } from './../../const/const';
import Answer_options from './../answer_options/answer_options';
import Info_bird from './../info_bird/info_bird';
import Button from './../button/button';
import { BODY, ABOUT } from './../../const/class_name';
import './body.scss';
import{ ANSWER_INDICATOR, CORRECT_ANSWER, ERROR_ANSWER} from './../../const/class_name';

class Body extends Component {
    constructor(props) {
        super(props);
        this.current_question = 0;
        this.current_topic = 0;
        this.correct_index = Math.floor(Math.random() * (MAXIMUM_QUESTIONS - MINIMUM_QUESTIONS));

        this.answers = select_answers(BIRD[this.current_question]);
        this.correct_answer = this.answers[this.correct_index];
        this.state = {
            // current_question: 0,
            // current_topic: 0,
            // answers: select_answers(BIRD[this.current_question]),

            // correct_index: Math.floor(Math.random() * (MAXIMUM_QUESTIONS - MINIMUM_QUESTIONS)),
            // correct_answer: this.answers[this.correct_index],
            is_answer: false,
            is_show: false,
            show_topic: 0,
            show_index: 0,
            activate_button: false,
            current_question: 0,
            current_topic: 0,
            correct_index: this.correct_index,
            answers: this.answers,
            correct_answer: this.correct_answer,
            is_correct_answer: false,
            score: 5,
            flag: false,
            is_end: false,
        };

        this.show_info = this.show_info.bind(this);
        this.show_answer = this.show_answer.bind(this);
        this.transfer_change_score = this.transfer_change_score.bind(this);
        this.show_next_question = this.show_next_question.bind(this);
        this.check_answers = this.check_answers.bind(this);
    }

    transfer_change_score(score) {
        // console.log('SCORE = ', score);
        this.props.change_score(score);
    }

    show_info(topic, data) {
        // console.log('body topic ', topic, 'data ', data);
        this.setState({
            is_show: true,
            show_topic: topic,
            show_index: data,
        })

        // console.log('body is_show ', this.state.is_show);
        // console.log('body show_index ', this.state.show_index);
    }

    show_answer() {
        this.setState({
            is_answer: true,
            activate_button: true,
        })
        // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    }

    show_next_question() {
        const next_question = this.state.current_question + 1;
        const next_topic = this.state.current_topic + 1;
        const random_number = Math.floor(Math.random() * (MAXIMUM_QUESTIONS - MINIMUM_QUESTIONS));
        const array_answers = select_answers(BIRD[next_topic]);
        const correct_answer = array_answers[random_number];

        this.setState({
            current_question: next_question,
            is_answer: false,
            activate_button: false,
            current_topic: next_topic,
            is_show: false,
            correct_index: random_number,
            answers: array_answers,
            correct_answer: correct_answer,
            flag: false,
        })

        this.correct_index = Math.floor(Math.random() * (MAXIMUM_QUESTIONS - MINIMUM_QUESTIONS));
        this.answers = select_answers(BIRD[next_topic]);
        this.correct_answer = this.answers[this.correct_index];

        // console.log('correct_index ', this.correct_index);
        // console.log('correct_answer ', this.correct_answer);
        // console.log('answers ', this.answers);
        // console.log('click');
        const indicators = document.getElementsByClassName(ANSWER_INDICATOR);
        const array_indicators = Array.from(indicators);
        // console.log(array_indicators);
        array_indicators.forEach((item) => {
            item.className = ANSWER_INDICATOR;
        });
    }

    check_answers(chosen_answer, index) {
        const flag = this.state.flag;
        const id_span = ANSWER_INDICATOR + '_' + index;

        if(!flag){
            if (chosen_answer === 'true') {
                console.log('true answer');

                const score = this.state.score;

                this.setState({
                    is_answer: true,
                    activate_button: true,
                    score: 5,
                    flag: true,
                })

                document.getElementById(id_span).classList.add(CORRECT_ANSWER);

                this.transfer_change_score(score);
            } else {
                console.log('false answer');

                const change_score = this.state.score - 1;

                this.setState({
                    score: change_score,
                })

                document.getElementById(id_span).classList.add(ERROR_ANSWER);
            }
        }
        // const class_name = ANSWER_INDICATOR + '*';
        
    }

    render() {
        // console.log('correct_index ', this.correct_index);
        // console.log('body is_show ', this.state.is_show);
        // console.log('body show_topic ', this.state.show_topic);
        // console.log('body show_index ', this.state.show_index);
        // console.log('body show_index ', this.state.show_index);
        // console.log(this.answers);

        const is_answer = this.state.is_answer;
        const is_show_info_bird = this.state.is_show;
        const show_topic_info_bird = this.state.show_topic;
        const show_index_info_bird = this.state.show_index;
        const activate_button = this.state.activate_button;
        // console.log('activate_button ', activate_button);
        const current_question = this.state.current_question;
        const current_topic = this.state.current_topic;
        const correct_index = this.state.correct_index;

        const answers = this.state.answers;
        const correct_answer = this.state.correct_answer;
        const is_correct_answer = this.state.is_correct_answer;


        console.log('CORRECT ANSWER - ', BIRD[current_topic][correct_answer].name);
        return (
            <div className={BODY}>
                <Topic_list
                    current_question={current_question}
                />
                <Question
                    is_answer={is_answer}
                    current_topic={current_topic}
                    correct_answer={correct_answer}
                />
                <div className={ABOUT}>
                    <Answer_options
                        current_topic={current_topic}
                        correct_answer={correct_answer}
                        correct_index={correct_index}
                        answers={answers}
                        is_correct_answer={is_correct_answer}
                        show_info={this.show_info}
                        show_answer={this.show_answer}
                        transfer_change_score={this.transfer_change_score}
                        check_answers={this.check_answers}
                    />
                    <Info_bird
                        is_show={is_show_info_bird}
                        show_topic={show_topic_info_bird}
                        show_index={show_index_info_bird}
                    />
                </div>
                <Button
                    is_activate_button={activate_button}
                    show_next_question={this.show_next_question}
                />
            </div>
        )
    }
}

export default Body;
