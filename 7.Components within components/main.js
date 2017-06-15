Vue.component('task', {
    template: "<li><slot></slot></li>"
});

Vue.component('task-list', {
    template: "<div><task v-for='task in tasks'>{{task.info}}</task></div>",
   
   data() { 
           return{
           
           tasks:
           
            [
               {info: "task 1", done: false},
               {info: "task 2", done: true},
               {info: "task 3", done: false},
               {info: "task 4", done: true},
               {info: "task 5", done: true},
               {info: "task 6", done: true}
               
            ]
       }
   },
});

let app = new Vue({
   el: '#vueApp7'
});