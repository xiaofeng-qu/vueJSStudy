// Handle text
var app = new Vue({
    el: '#app',
    data:{
        message: 'Hellow Vue!'
    }
});

// Add hover message
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleDateString()
    }
});

/* 
   Show or hide message
   if statement
*/
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

/*
    Todo list
    for loop
*/
var app4 = new Vue({
    el: "#app-4",
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Leanrn Vue' },
            { text: 'Build something awesome' }
        ]
    }
});

// Reverse text
var app5 = new Vue({
    el: "#app-5",
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
});

// Handle form information
var app6 = new Vue({
    el: "#app-6",
    data: {
        message: 'Hello Vue!'
    }
});