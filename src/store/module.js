import * as types from './type'
import Vue from 'vue'

const state = {
    language: 'en',
    menuindex: '2',
}

const actions = {

}

const mutations = {
    [types.CHANGE_LANGUAGE](state,language){
        state.language = language
    },
    [types.CUR_HEADERMENUITEM](state,menuindex){
        state.menuindex = menuindex
    }
}

const getters = {

}

export default {
    state,
    actions,
    mutations,
    getters
}

