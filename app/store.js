import Vue from 'nativescript-vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        event: [],
        sessions: [],
        speakers: []
    },
    mutations: {
        updateEvent (state, event) {
            state.event = event
        },
        updateSessions (state, sessions) {
            state.sessions = sessions
        },
        updateSpeakers (state, speakers) {
            state.speakers = speakers
        }
    },
    actions: {
        getEvent (context) {
            axios.get('/events/' + process.env.EVENT_SLUG)
                .then((response) => {
                    context.commit('updateEvent', response.data.data)
                })
        }
    }
});
