<template>
    <div class="lowercase interface" :style="{ border: `1px solid ${borderColor}` }">
        <div class="interface-name">
            togglecase
        </div>
         <div class="interface-content">
            {{ togglecase }}
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'togglecase',
    data() {
        return {
            borderColor: 'blue',
        }
    },
    computed: {
        ...mapGetters({
            inputString: 'getInputString',
        }),
        togglecase: function() {
            let tempArray = this.inputString.split('');
            let resultArray = [];
            let resultString= '';

            resultArray = tempArray.map((elem) => {
                if (elem == elem.toLowerCase()) {
                    return elem.toUpperCase();
                }

                if (elem == elem.toUpperCase()) {
                    return elem.toLowerCase();
                }
            })

            resultString = resultArray.join('');

            return resultString;
        }
    }
}
</script>

<style>

</style>