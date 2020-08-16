import React, {
    Component
} from "react";

import './topic_list.scss';
import MENU from './../../const/menu';
import { MENU_LIST, MENU_ITEM, ACTIVE_ITEM } from './../../const/class_name';

class Topic_list extends Component {
    constructor(props) {
        super(props);
        this.active_item = props.current_question;
    }

    render() {
        return (
            <ul className={MENU_LIST} key={MENU_LIST}>
                {
                    MENU.map((item, index) => {
                        if (index == this.active_item) {
                            return (<li className={MENU_ITEM + ' ' + ACTIVE_ITEM} id={MENU_ITEM + '_' + index} key={MENU_ITEM + '_' + index}>
                                {item}
                            </li>)
                        } else {
                            return (
                                <li className={MENU_ITEM} id={MENU_ITEM + '_' + index} key={MENU_ITEM + '_' + index}>
                                    {item}
                                </li>
                            )
                        }
                    }
                    )
                }
            </ul>
        )
    }
}

export default Topic_list;