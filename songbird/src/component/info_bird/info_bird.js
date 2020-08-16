import React, {
    Component
} from "react";

import BIRD from './../../const/birds';


class Info_bird extends Component {
    constructor(props) {
        super(props);
        this.current_topic = props.current_topic;
        this.correct_answer = props.correct_answer;
        this.show = props.show;
        this.message = 'click';
    }

    render() {


                    if(this.show){
                        return(this.message);
                    } else {
                        return (
                            <div>
                            <img src='#' alt="" />
                            <h2>aaaaaaaaaaaaaaaaaaaaaa </h2>
                            <div>
                            <audio controls>
                                <source src={this.audio} type="audio/mpeg" />
                                    Тег audio не поддерживается вашим браузером.
                            </audio>
                            </div>
                            </div>
                        )
                    }

    }
}

export default Info_bird;