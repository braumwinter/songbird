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
        /*this.current_topic = props.current_topic;
        this.correct_answer = props.correct_answer;
        this.is_show = props.is_show;
        this.message = '<p>Послушайте плеер.</p> <p>Выберите птицу из списка</p>';
        this.bird_number = props.show_index; // props.bird_number
        this.bird_theme = props.show_topic; // props.bird_theme
        this.name = BIRD[this.bird_theme][this.bird_number].name;
        this.latin = BIRD[this.bird_theme][this.bird_number].latin;
        this.file_name = BIRD[this.bird_theme][this.bird_number].file;
        this.image = IMAGE_PATH + this.file_name + IMAGE_EXTENSION;
        this.audio = AUDIO_PATH + this.file_name + AUDIO_EXTENSION;
        this.text = BIRD[this.bird_theme][this.bird_number].info;*/
        this.state = {
            is_show: props.is_show,
            topic: props.show_topic,
            index: props.show_index,
        };
    }

    render() {
        // console.log('info is_show ', this.state.is_show);
        const is_show = this.props.is_show;
        const topic = this.props.show_topic;
        const index = this.props.show_index;
        // console.log('info is_show ', is_show);

        if (!is_show) {
            return (
                <div className={INFO_BIRD + ' ' + INFO_BIRD_BLOCK}>
                    <p>Послушайте плеер.</p>
                    <p>Выберите птицу из списка</p>
                </div>
            );
        } else {
            
            // console.log(topic, index);
            const name = BIRD[topic][index].name;
            const latin = BIRD[topic][index].latin;
            const file_name = BIRD[topic][index].file;
            const image = IMAGE_PATH + file_name + IMAGE_EXTENSION;
            const audio = AUDIO_PATH + file_name + AUDIO_EXTENSION;
            const text = BIRD[topic][index].info;
            return (
                <div key={INFO_BIRD} className={INFO_BIRD}>
                    <div key={INFO_CARD} className={INFO_CARD}>
                        <img 
                            key={INFO_BIRD_IMAGE} 
                            className={INFO_BIRD_IMAGE} 
                            src={image} 
                            alt={file_name}
                            />
                        <div 
                            key={INFO_CARD_BODY} 
                            className={INFO_CARD_BODY}
                        >
                            <h2 
                                key={INFO_BIRD_NAME} 
                                className={INFO_BIRD_NAME}
                            >
                                {name}
                            </h2>
                            <h3 
                                key={INFO_BIRD_LATIN} 
                                className={INFO_BIRD_LATIN}
                            >
                                {latin}
                            </h3>
                            <div key={INFO_BIRD_AUDIO} className={INFO_BIRD_AUDIO}>
                                <audio controls>
                                    <source src={audio} type="audio/mpeg" />
                                        Тег audio не поддерживается вашим браузером.
                                </audio>
                            </div>
                        </div>
                    </div>
                    <p key={INFO_BIRD_TEXT} className={INFO_BIRD_TEXT}>{text}</p>
                </div>
            )
        }

    }
}

export default Info_bird;