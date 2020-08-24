import React, {
    Component
} from "react";

import BIRD from './../../const/birds';
import './info_bird.scss';
import { INFO_BIRD, INFO_BIRD_IMAGE, INFO_BIRD_NAME, INFO_BIRD_AUDIO, INFO_BIRD_TEXT, INFO_CARD, INFO_CARD_BODY, INFO_BIRD_LATIN, INFO_BIRD_BLOCK } from './../../const/class_name';

import { IMAGE_PATH, IMAGE_EXTENSION, AUDIO_PATH, AUDIO_EXTENSION } from './../../const/const';


class Info_bird extends Component {
    constructor(props) {
        super(props);
        this.current_topic = props.current_topic;
        this.correct_answer = props.correct_answer;
        this.show = props.show;
        this.message = '<p>Послушайте плеер.</p> <p>Выберите птицу из списка</p>';
        this.bird_number = 1; // props.bird_number
        this.bird_theme = 1; // props.bird_theme
        this.name = BIRD[this.bird_theme][this.bird_number].name;
        this.latin = BIRD[this.bird_theme][this.bird_number].latin;
        this.file_name = BIRD[this.bird_theme][this.bird_number].file;
        this.image = IMAGE_PATH + this.file_name + IMAGE_EXTENSION;
        this.audio = AUDIO_PATH + this.file_name + AUDIO_EXTENSION;
        this.text = BIRD[this.bird_theme][this.bird_number].info;
    }

    render() {
        if (this.show) {
            return (
                <div className={INFO_BIRD + ' ' + INFO_BIRD_BLOCK}>
                    <p>Послушайте плеер.</p>
                    <p>Выберите птицу из списка</p>
                </div>
            );
        } else {
            return (
                <div key={INFO_BIRD} className={INFO_BIRD}>
                    <div key={INFO_CARD} className={INFO_CARD}>
                        <img key={INFO_BIRD_IMAGE} className={INFO_BIRD_IMAGE} src={this.image} alt={this.file_name} />
                        <div key={INFO_CARD_BODY} className={INFO_CARD_BODY}>
                            <h2 key={INFO_BIRD_NAME} className={INFO_BIRD_NAME}>{this.name}</h2>
                            <h3 key={INFO_BIRD_LATIN} className={INFO_BIRD_LATIN}>{this.latin}</h3>
                            <div key={INFO_BIRD_AUDIO} className={INFO_BIRD_AUDIO}>
                                <audio controls>
                                    <source src={this.audio} type="audio/mpeg" />
                                        Тег audio не поддерживается вашим браузером.
                                </audio>
                            </div>
                        </div>
                    </div>
                    <p key={INFO_BIRD_TEXT} className={INFO_BIRD_TEXT}>{this.text}</p>
                </div>
            )
        }

    }
}

export default Info_bird;