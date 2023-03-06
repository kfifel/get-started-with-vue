import { createStore } from "vuex"

const store = createStore({
    state(){
        return {
            user: {
                id: 1,
                first_name: 'khalid',
                last_name: 'fifel',
                email: 'khalid.fifel@mail.com'
            },
            questions: [
                
            ]

        }
    }
});

export default store;