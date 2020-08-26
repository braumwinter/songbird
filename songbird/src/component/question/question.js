import React, {
    Component
} from "react";

import './question.scss';

import { IMAGE_PATH, IMAGE_EXTENSION, IMAGE_BIRD, AUDIO_PATH, AUDIO_EXTENSION } from './../../const/const';
import BIRD from './../../const/birds';
import { CURRENT_QUESTION, IMAGE_QUESTION, INFO_QUESTION, NAME_QUESTION, AUDIO_QUESTION } from './../../const/class_name';

class Question extends Component {
    constructor(props) {
        super(props);
        this.image_name = IMAGE_BIRD;
        this.image = IMAGE_PATH + this.image_name + IMAGE_EXTENSION;
        // this.image = './../../assets/img/bird.jpg';
        this.name = '*******';
        this.audio_name = BIRD[props.current_topic][props.correct_answer].file;
        this.audio = AUDIO_PATH + this.audio_name + AUDIO_EXTENSION;
        this.background_image = `background-image: url("${IMAGE_PATH + this.image + IMAGE_EXTENSION}");`;
    }

    render() {
        const is_answer = this.props.is_answer;
        let image, audio, audio_name, file_name, image_name, name; //, background_image;

        if(!is_answer){
            image_name = IMAGE_BIRD;
            image = IMAGE_PATH + image_name + IMAGE_EXTENSION;
            name = '*******';
            audio_name = BIRD[this.props.current_topic][this.props.correct_answer].file;
            audio = AUDIO_PATH + audio_name + AUDIO_EXTENSION;
            // background_image = `background-image: url("${IMAGE_PATH + this.image + IMAGE_EXTENSION}");`;
        } else {
            file_name = BIRD[this.props.current_topic][this.props.correct_answer].file;;
            image = IMAGE_PATH + file_name + IMAGE_EXTENSION;
            name = BIRD[this.props.current_topic][this.props.correct_answer].name;
            audio = AUDIO_PATH + file_name + AUDIO_EXTENSION;
            // background_image = `background-image: url("${IMAGE_PATH + image + IMAGE_EXTENSION}");`;
        }
        return (
            <div className = {CURRENT_QUESTION}>
                <img className = {IMAGE_QUESTION} src = {image} alt = {name} />
                <div className = {INFO_QUESTION}>
                    <h2 className = {NAME_QUESTION}>{name}</h2>
                    <div className = {AUDIO_QUESTION}>
                        <audio controls>
                            <source src = {audio} type="audio/mpeg" />
                                Тег audio не поддерживается вашим браузером.
                        </audio>
                    </div>
                </div>
            </div>
        )
    }
}

export default Question;