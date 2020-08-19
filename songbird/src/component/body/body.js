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

class Body extends Component {
    constructor(props) {
        super(props);
        this.current_question = 0;
        this.current_topic = 0;
        this.correct_index = Math.floor(Math.random() * (MAXIMUM_QUESTIONS - MINIMUM_QUESTIONS));
        
        this.answers = select_answers(BIRD[this.current_question]);
        this.correct_answer = this.answers[this.correct_index];
    }

    render() {
        console.log(this.correct_index);
        console.log(this.answers);
        console.log(this.correct_answer);
        return (
            <div>
                <Topic_list current_question = {this.current_question}/>
                <Question current_topic = {this.current_topic} correct_answer = {this.correct_answer}/>
                <Answer_options current_topic = {this.current_topic} correct_answer = {this.correct_answer} correct_index = {this.correct_index} answers = {this.answers}/>
                <Info_bird show = 'false' current_topic = {this.current_topic} correct_answer = {this.correct_answer}/>
                <Button/>
            </div>
        )
    }
}

export default Body;
