import React, {
    Component
} from "react";

import BIRD from './../../const/birds';

import {
    IMAGE_PATH,
    IMAGE_EXTENSION,
    AUDIO_PATH,
    AUDIO_EXTENSION,
    STRING_LISTEN_PLAYER,
    STRING_SHOOSE_BIRD,
    STRING_AUDIO_NOT_SUPPORTED
} from './../../const/const';

import {
    INFO_BIRD,
    INFO_BIRD_IMAGE,
    INFO_BIRD_NAME,
    INFO_BIRD_AUDIO,
    INFO_BIRD_TEXT,
    INFO_CARD,
    INFO_CARD_BODY,
    INFO_BIRD_LATIN,
    INFO_BIRD_BLOCK
} from './../../const/class_name';

import './info_bird.scss';

class Info_bird extends Component {
    render() {
        const is_show = this.props.is_show;
        const topic = this.props.show_topic;
        const index = this.props.show_index;

        if (!is_show) {
            return (
                <div className = { INFO_BIRD + ' ' + INFO_BIRD_BLOCK } key = { INFO_BIRD }>
                    <p>{ STRING_LISTEN_PLAYER }</p>
                    <p>{ STRING_SHOOSE_BIRD }</p>
                </div>
            );
        } else {
            const name = BIRD[topic][index].name;
            const latin = BIRD[topic][index].latin;
            const file_name = BIRD[topic][index].file;
            const image = IMAGE_PATH + file_name + IMAGE_EXTENSION;
            const audio = AUDIO_PATH + file_name + AUDIO_EXTENSION;
            const text = BIRD[topic][index].info;

            return (
                <div className = { INFO_BIRD } key = { INFO_BIRD }>
                    <div className = { INFO_CARD } key = { INFO_CARD }>
                        <img
                            className = { INFO_BIRD_IMAGE }
                            key = { INFO_BIRD_IMAGE }
                            src = { image }
                            alt = { file_name }
                            />
                        <div className = { INFO_CARD_BODY } key = { INFO_CARD_BODY }>
                            <h2 className = { INFO_BIRD_NAME } key = { INFO_BIRD_NAME }>
                                { name }
                            </h2>
                            <h3 className = { INFO_BIRD_LATIN } key = { INFO_BIRD_LATIN }>
                                { latin }
                            </h3>
                            <div className = { INFO_BIRD_AUDIO } key = { INFO_BIRD_AUDIO }>
                                <audio controls>
                                    <source src = { audio } type = "audio/mpeg" />
                                        { STRING_AUDIO_NOT_SUPPORTED }
                                </audio>
                            </div>
                        </div>
                    </div>
                    <p className = { INFO_BIRD_TEXT } key = { INFO_BIRD_TEXT }>{ text }</p>
                </div>
            )
        }
    }
}

export default Info_bird;
