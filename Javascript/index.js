var app = new Vue({
    el: '#app',
    data:{
        message: 'Hellow Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleDateString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

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