<template>
    <div class="lowercase interface" :style="{ border: `1px solid ${borderColor}` }">
        <div class="interface-name">
            uppercase
        </div>
        <div class="interface-content">
            {{ uppercase }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'uppercase',
    props: {
        inputValue: String
    }, 
    computed: {
        uppercase: function() { 
            return this.inputValue.toUpperCase() 
        },
    },
    data() {
        return {
            borderColor: 'green',
        }
    }
}
</script>

<style>

</style>