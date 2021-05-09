import React, {
    Component
} from "react";

import MENU from './../../const/menu';

import {
    MENU_LIST,
    MENU_ITEM,
    ACTIVE_ITEM
} from './../../const/class_name';

import './topic_list.scss';

class Topic_list extends Component {
    render() {
        const actived_item = this.props.current_question;

        return (
            <ul className = { MENU_LIST } key = { MENU_LIST }>
                {
                    MENU.map((item, index) => {
                        if (index === actived_item) {
                            return (
                                <li
                                    className = { MENU_ITEM + ' ' + ACTIVE_ITEM }
                                    key = { MENU_ITEM + '_' + index }
                                    id = { MENU_ITEM + '_' + index }>
                                        { item }
                                </li>)
                        } else {
                            return (
                                <li
                                    className = { MENU_ITEM }
                                    key = { MENU_ITEM + '_' + index }
                                    id = { MENU_ITEM + '_' + index }>
                                        { item }
                                </li>
                            )
                        }
                    })
                }
            </ul>
        )
    }
}

export default Topic_list;
