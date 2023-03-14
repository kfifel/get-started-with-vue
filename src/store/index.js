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
                {
                    id: 1,
                    text: 'How can you use Vue.js to create a dynamic frontend for a Laravel application?',
                    answers: [
                      { id: 1, text: 'By using Vue.js components to create interactive UI elements' },
                      { id: 2, text: 'By using Vue.js to handle AJAX requests from the Laravel backend' },
                      { id: 3, text: 'By using Laravel Blade templates to include Vue.js components' },
                      { id: 4, text: 'By using Vue.js to generate HTML and send it to the Laravel backend' },
                    ],
                    correctAnswer: 1,
                    explanation: 'Vue.js can be used to create dynamic frontend components that can be included in Laravel Blade templates to create an interactive UI.',
                    userAnswer: null
                },
                {
                    id: 2,
                    text: 'How can you use Laravel routing system to handle requests from a Vue.js frontend?',
                    answers: [
                        { id: 1, text: 'By defining routes in the Laravel backend that correspond to Vue.js components' },
                        { id: 2, text: 'By using Vue.js to handle all routing within the application' },
                        { id: 3, text: 'By using Laravel to generate a RESTful API that the Vue.js frontend can consume' },
                        { id: 4, text: 'By using Laravel to handle all frontend routing and page rendering' },
                    ],
                    correctAnswer: 1,
                    explanation: 'Laravel routing system can be used to define routes that map to Vue.js components, allowing the backend to handle requests from the frontend.',
                    userAnswer: null
                },
                {
                    id: 3,
                    text: 'How can you use Vue.js components within a Laravel Blade template?',
                    answers: [
                        { id: 1, text: 'By including the Vue.js component as a tag within the Blade template' },
                        { id: 2, text: 'By using Laravel to generate a JSON response that includes the Vue.js component data' },
                        { id: 3, text: 'By using Vue.js to generate the entire HTML template and sending it to the Laravel backend' },
                        { id: 4, text: 'By using Laravel to generate an AJAX request that retrieves the Vue.js component data' },
                    ],
                    correctAnswer: 1,
                    explanation: 'Vue.js components can be included within Laravel Blade templates as custom HTML tags, allowing the Vue.js component to be rendered within the Blade template.',
                    userAnswer: null
                },
                {
                    id: 4,
                    text: 'How can you use Laravel to handle authentication within a Vue.js frontend?',
                    answers: [
                        { id: 1, text: 'By using Laravel Sanctum to generate API tokens for Vue.js requests' },
                        { id: 2, text: 'By using Vue.js to handle all authentication within the frontend' },
                        { id: 3, text: 'By using Laravel Passport to generate OAuth2 tokens for Vue.js requests' },
                        { id: 4, text: 'By using Laravel to generate a session cookie that is used for authentication' },
                    ],
                    correctAnswer: 1,
                    explanation: 'You can use Laravel Sanctum to generate API tokens for Vue.js requests to authenticate users and protect routes and resources.',
                    userAnswer: null
                },
                {
                    id: 5,
                    text: 'What is the difference between Vue.js and React?',
                    answers: [
                    { id: 1, text: 'Vue.js is a full-fledged framework, while React is a library' },
                    { id: 2, text: 'Vue.js uses two-way data binding, while React uses one-way data flow' },
                    { id: 3, text: 'Vue.js has a simpler API and is easier to learn, while React has a steeper learning curve' },
                    { id: 4, text: 'Vue.js is more performant than React, especially for large-scale applications' },
                    ],
                    correctAnswer: 3,
                    explanation: 'Vue.js is often considered to have a simpler API and be easier to learn, while React is known for its more advanced and powerful features, which can make it more challenging for beginners.',
                    userAnswer: null
                },
                {
                    id: 6,
                    text: 'What is Vuex in Vue.js?',
                    answers: [
                    { id: 1, text: 'A package manager for Vue.js' },
                    { id: 2, text: 'A state management library for Vue.js' },
                    { id: 3, text: 'A build tool for Vue.js applications' },
                    { id: 4, text: 'A testing framework for Vue.js applications' },
                    ],
                    correctAnswer: 2,
                    explanation: 'Vuex is a state management library for Vue.js, which provides a centralized store for managing application state and facilitates communication between components.',
                    userAnswer: null
                },
                {
                    id: 7,
                    text: 'What is Laravel Mix?',
                    answers: [
                    { id: 1, text: 'A build tool for Laravel applications' },
                    { id: 2, text: 'A testing framework for Laravel applications' },
                    { id: 3, text: 'A package manager for Laravel applications' },
                    { id: 4, text: 'A command-line interface for Laravel applications' },
                    ],
                    correctAnswer: 1,
                    explanation: 'Laravel Mix is a build tool for Laravel applications that simplifies the process of building and compiling frontend assets such as CSS and JavaScript.',
                    userAnswer: null
                },
            ],
        }
    },

    getters: {
        getQuestion(state){
            return [...state.questions].sort(()=>Math.random() - 0.5);
        },
        getCorrectAnswers(state){
            let countCorrectAnswers = 0;
            state.questions.forEach(e=>{
                if(e.userAnswer)
                    countCorrectAnswers++
            });
            return countCorrectAnswers;
        },
        searchQuestionById(state, id) {
            const [question] = state.questions.filter(question => question.id === id);
            return question??null;
        }
    },

    mutations: {
        setCorrectAnswer(state, id) {
            const [question] = state.questions.filter(question => question.id === id);
            if (question) {
                question.userAnswer = true;
            }
        },
        setWrongAnswer(state, id) {
            let [question] = state.questions.filter(question => question.id === id);
            if (question) {
                question.userAnswer = false;
            }
        },
    }
});

export default store;