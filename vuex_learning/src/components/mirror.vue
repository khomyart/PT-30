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
import {mapGetters} from 'vuex';

export default {
    name: 'mirror',
    data() {
        return {
            borderColor: 'orange',
        }
    },
    computed: {
        ...mapGetters({
            inputString: 'getInputString'
        }),
        mirror: function() {
            let tempArray = this.inputString.split('');
            let resultString = '';

            tempArray.reverse();

            resultString = tempArray.join('');

            return resultString;
        }
    }
}
</script>

<style>

</style>