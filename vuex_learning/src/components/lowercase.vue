<template>
    <div class="lowercase interface" :style="{ border: `1px solid ${borderColor}` }">
        <div class="interface-name">
            lowercase
        </div>
        <div class="interface-content">
            {{ lowercase }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'lowercase',
    props: {
        inputValue: String
    },
    computed: {
        lowercase: function() { 
            return this.inputValue.toLowerCase() 
        },
    },
    data() {
        return {
            borderColor: 'red',
        }
    }
}
</script>

<style>

</style>