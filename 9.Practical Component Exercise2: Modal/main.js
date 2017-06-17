Vue.component('tabs', {

    template: `
    
        <div>
            <div class="tabs">
              <ul>
                <li v-for="singletab in alltabs" :class="{ 'is-active' : singletab.isActive }">
                    <a :href="singletab.href" @click="clicked(singletab)">{{ singletab.name }}</a>
                </li>
              </ul>
            </div>
            
            <div class="tab-details">
                <slot></slot>
            </div>
        </div>
    `,
    
    data(){
       
       return{ alltabs: [] };
        
    },
    
    methods: {
        clicked(selectedtab){ // @click="clicked(singletab)
            this.alltabs.forEach(single_tab => {
                single_tab.isActive = (single_tab.name == selectedtab.name);
            });
        }
    },
    
    created() {
        this.alltabs = this.$children;
    }
});

Vue.component('tab', {
    template: `
        <div  v-if="isActive">
            <slot></slot>
        </div>
    `,
    props: {
       
       name: { reqired: true },
       
       selected: { default: false }
       
    },
    
    data() {
        return {
            isActive: false
        }
        
    },
    
    computed: {
        
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },
    
    mounted() {
        this.isActive = this.selected
    }
    
  
    
});

let app = new Vue({
   el: '#vueApp10',
       
});