Vue.component('task', {
    template: "<li><slot></slot></li>"
});

let app = new Vue({
   el: '#vueApp6'
});