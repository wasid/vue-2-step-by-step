Vue.component('coupon', {

    template: `
    
        <div>
            <input placeholder="enter coupon" @blur="testCoupon" @focus="removeMsg">
        </div>
    `,
    
    
    methods: {
        testCoupon(){
           this.$emit('applied');
       },
       
       removeMsg(){
           this.$emit('removed');
       },
    }
});



let app = new Vue({
   
   el: '#vueApp11',
   
   data: {
       
       validCouponApplied: false
        
    },
   
   methods: {
       couponApplied(){
           this.validCouponApplied = true
       },
       
       couponRemoved(){
           this.validCouponApplied = false
       },
       
   }
       
});