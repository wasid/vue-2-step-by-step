<template>
    <div>
        <h2>
            Counter Is: {{ counter }} 
        </h2>
        <button @click="counter += 3">Add Counter</button>
    </div>
</template>

<script>
    export default{
        data(){
            return {counter: 0}
        }
    }
</script>
<style>

</style>
