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
import {mapGetters} from 'vuex';

export default {
    name: 'lowercase',
    data() {
        return {
            borderColor: 'red',
        }
    },
    computed: {
        ...mapGetters({
            inputString: 'getInputString',
        }),
        lowercase: function() {
            return this.inputString.toLowerCase();
        }
    }
}
</script>