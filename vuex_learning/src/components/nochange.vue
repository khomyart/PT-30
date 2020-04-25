<template>
    <div class="lowercase interface" :style="{ border: `1px solid ${borderColor}` }">
        <div class="interface-name">
            nochange
        </div>
        <div class="interface-content">
            {{ inputValue }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'nochange',
    props: {
        inputValue: String
    },
    data() {
        return {
            borderColor: 'pink',
        }
    }
}
</script>

<style>

</style>