<template>
    <div class="lowercase interface" :style="{ border: `1px solid ${borderColor}` }">
        <div class="interface-name">
            mirror
        </div>
        <div class="interface-content">
            {{ mirror }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'mirror',
    props: {
        inputValue: String
    },
    computed: {
        mirror: function() {
            let tempArray = this.inputValue.split('');
            let resultString = '';

            tempArray.reverse();

            resultString = tempArray.join('');

            return resultString;
        }
    },
    data() {
        return {
            borderColor: 'orange',
        }
    }
}
</script>

<style>

</style>