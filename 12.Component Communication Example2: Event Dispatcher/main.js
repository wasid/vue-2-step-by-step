window.Evnt = new class{
    
    constructor(){
        this.vue = new Vue();
    }
    
    fire(evnt, data){
        
        this.vue.$emit(evnt, data);
        
    }
    
    listen(evnt, callback){
        
        this.vue.$on(evnt, callback);
        
    }
};

Vue.component('coupon', {

    template: `
    
        <div>
            <input placeholder="enter coupon" @blur="testCoupon" @focus="removeMsg">
        </div>
    `,
    
    
    methods: {
        testCoupon(){
           Evnt.fire('applied');
       },
       
        removeMsg(){
           Evnt.fire('removed');
       },
    }
});



let app = new Vue({
   
   el: '#vueApp12',
   
   data: {
       
       validCouponApplied: false
        
    },
   
   created() {
       
           Evnt.listen('applied', ()  => this.validCouponApplied = true);
           
           Evnt.listen('removed', ()  => this.validCouponApplied = false);

   }
       
});