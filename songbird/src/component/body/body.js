/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import React, {
    Component
} from "react";

import BIRD from './../../const/birds';

import Topic_list from './../topic_list/topic_list';
import Question from './../question/question';
import Answer_options from './../answer_options/answer_options';
import Info_bird from './../info_bird/info_bird';
import Button from './../button/button';

import {
    MAXIMUM_QUESTIONS,
    MINIMUM_QUESTIONS,
    MAXIMUM_SCORE,
    FIRST_QUESTION,
    FIRST_TOPIC,
    FIRST_INDEX,
    TRUE,
    STRING_CORRECT_ANSWER,
    AUDIO_CORRECT,
    AUDIO_ERROR,
    AUDIO_WIN,
    AUDIO_LOSE,
    AUDIO_QUESTION_ID,
    AUDIO_PATH,
    AUDIO_EXTENSION
} from './../../const/const';

import {
    BODY,
    ABOUT,
    ANSWER_INDICATOR,
    CORRECT_ANSWER,
    ERROR_ANSWER
} from './../../const/class_name';

import { select_answers } from './../../script/select_answers';

import './body.scss';

class Body extends Component {
    constructor(props) {
        super(props);
        this.current_question = FIRST_QUESTION;
        this.current_topic = FIRST_TOPIC;
        this.correct_index = Math.floor(Math.random() * (MAXIMUM_QUESTIONS - MINIMUM_QUESTIONS));
        this.answers = select_answers(BIRD[this.current_question]);
        this.correct_answer = this.answers[this.correct_index];

        this.state = {
            is_answer: false,
            is_show: false,
            show_topic: FIRST_TOPIC,
            show_index: FIRST_INDEX,
            activate_button: false,
            current_question: FIRST_QUESTION,
            current_topic: FIRST_TOPIC,
            correct_index: this.correct_index,
            answers: this.answers,
            correct_answer: this.correct_answer,
            is_correct_answer: false,
            score: MAXIMUM_SCORE,
            is_guessed: false,
            is_end: false,
        };

        this.show_info = this.show_info.bind(this);
        this.show_answer = this.show_answer.bind(this);

        this.show_next_question = this.show_next_question.bind(this);
        this.check_answers = this.check_answers.bind(this);
    }

    show_info(topic, data) {
        this.setState({
            is_show: true,
            show_topic: topic,
            show_index: data,
        })
    }

    show_answer() {
        this.setState({
            is_answer: true,
            activate_button: true,
        })
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

        const audio_name = BIRD[next_topic][correct_answer].file;
        const audio = AUDIO_PATH + audio_name + AUDIO_EXTENSION;
        const player = document.getElementById(AUDIO_QUESTION_ID);
        player.setAttribute('src', audio);

        const indicators = document.getElementsByClassName(ANSWER_INDICATOR);
        const array_indicators = Array.from(indicators);

        array_indicators.forEach((item) => {
            item.className = ANSWER_INDICATOR;
        });
    }

    check_answers(selected_answer, index) {
        const is_guessed = this.state.is_guessed;
        const id_span = ANSWER_INDICATOR + '_' + index;
        let audio_path;

        if (!is_guessed) {
            if (selected_answer === TRUE) {
                const score = this.state.score;

                this.setState({
                    is_answer: true,
                    activate_button: true,
                    score: MAXIMUM_SCORE,
                    flag: true,
                })

                document.getElementById(id_span).classList.add(CORRECT_ANSWER);

                const player = document.getElementById(AUDIO_QUESTION_ID);
                player.pause();

                audio_path = AUDIO_CORRECT;

                this.props.change_score(score);
            } else {
                const change_score = this.state.score - 1;

                this.setState({
                    score: change_score,
                })

                audio_path = AUDIO_ERROR;

                document.getElementById(id_span).classList.add(ERROR_ANSWER);
            }

            const audio = new Audio(audio_path);
            audio.play();
        }
    }

    render() {
        const is_answer = this.state.is_answer;
        const is_show_info_bird = this.state.is_show;
        const show_topic_info_bird = this.state.show_topic;
        const show_index_info_bird = this.state.show_index;
        const activate_button = this.state.activate_button;

        const current_question = this.state.current_question;
        const current_topic = this.state.current_topic;
        const correct_index = this.state.correct_index;

        const answers = this.state.answers;
        const correct_answer = this.state.correct_answer;
        const is_correct_answer = this.state.is_correct_answer;

        console.log(STRING_CORRECT_ANSWER, BIRD[current_topic][correct_answer].name);

        return (
            <div className={BODY} key={BODY}>
                <Topic_list
                    current_question={current_question}
                />
                <Question
                    is_answer={is_answer}
                    current_topic={current_topic}
                    correct_answer={correct_answer}
                />
                <div className={ABOUT} key={ABOUT}>
                    <Answer_options
                        current_topic={current_topic}
                        correct_index={correct_index}
                        answers={answers}
                        show_info={this.show_info}
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
