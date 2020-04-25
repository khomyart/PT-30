<template>
    <div class="lowercase interface" :style="{ border: `1px solid ${borderColor}` }">
        <div class="interface-name">
            nochange
        </div>
        <div class="interface-content">
            {{ inputString }}
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'nochange',
    data() {
        return {
            borderColor: 'pink',
        }
    },
    computed: {
        ...mapGetters({
            inputString: 'getInputString'
        })
    }
}
</script>

<style>

</style>