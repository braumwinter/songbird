import React, {
    Component
} from "react";

import BIRD from './../../const/birds';

import {
    IMAGE_PATH,
    IMAGE_EXTENSION,
    IMAGE_BIRD,
    AUDIO_PATH,
    AUDIO_EXTENSION,
    STRING_HIDDEN_NAME,
    STRING_AUDIO_NOT_SUPPORTED,
    AUDIO_QUESTION_ID
} from './../../const/const';

import {
    CURRENT_QUESTION,
    IMAGE_QUESTION,
    INFO_QUESTION,
    NAME_QUESTION,
    AUDIO_QUESTION
} from './../../const/class_name';

import './question.scss';

class Question extends Component {
    render() {
        const is_answer = this.props.is_answer;
        const current_topic = this.props.current_topic;
        const correct_answer = this.props.correct_answer;
        const audio_name = BIRD[current_topic][correct_answer].file;
        const audio = AUDIO_PATH + audio_name + AUDIO_EXTENSION;
        let image, file_name, image_name, name;

        if (!is_answer) {
            image_name = IMAGE_BIRD;
            image = IMAGE_PATH + image_name + IMAGE_EXTENSION;
            name = STRING_HIDDEN_NAME;
        } else {
            file_name = BIRD[current_topic][correct_answer].file;;
            image = IMAGE_PATH + file_name + IMAGE_EXTENSION;
            name = BIRD[current_topic][correct_answer].name;
        }

        return (
            <div className = { CURRENT_QUESTION } key = { CURRENT_QUESTION }>
                <img
                    className = { IMAGE_QUESTION }
                    key = { IMAGE_QUESTION }
                    src = { image }
                    alt = { name }
                />
                <div className = { INFO_QUESTION } key = { INFO_QUESTION }>
                    <h2 className = { NAME_QUESTION } key = { NAME_QUESTION } >{ name }</h2>
                    <div className = { AUDIO_QUESTION } key = { AUDIO_QUESTION }>
                        <audio controls id = { AUDIO_QUESTION_ID } key = { AUDIO_QUESTION_ID }>
                            <source src = { audio } type = 'audio/mpeg' />
                            { STRING_AUDIO_NOT_SUPPORTED }
                        </audio>
                    </div>
                </div>
            </div>
        )
    }
}

export default Question;
