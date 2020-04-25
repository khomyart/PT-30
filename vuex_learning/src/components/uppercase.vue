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
import {mapGetters} from 'vuex';

export default {
    name: 'uppercase',
    data() {
        return {
            borderColor: 'green',
        }
    },
    computed: {
        ...mapGetters({
            inputString: 'getInputString',
        }),
        uppercase: function() { 
            return this.inputString.toUpperCase() 
        },
    }
}
</script>

<style>

</style>