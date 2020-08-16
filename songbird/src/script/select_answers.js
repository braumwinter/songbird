import { MAXIMUM_QUESTIONS } from './../const/const';

export function select_answers(obj){
    const array = [];

    for(const key in obj) {
        array.push(key);
    }

    shuffle_array(array);

    array.length = MAXIMUM_QUESTIONS;

    return array;
}

function shuffle_array(array) {
    let current_index = array.length;
    let temporary_value, random_index;

    while (0 !== current_index) {

        random_index = Math.floor(Math.random() * current_index);
        current_index -= 1;

        temporary_value = array[current_index];
        array[current_index] = array[random_index];
        array[random_index] = temporary_value;
    }

    return array;
}