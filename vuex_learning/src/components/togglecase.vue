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
export default {
    name: 'togglecase',
    props: {
        inputValue: String
    },
    computed: {
        togglecase: function() {
            let tempArray = this.inputValue.split('');
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
    },
    data() {
        return {
            borderColor: 'blue',
        }
    }
}
</script>

<style>

</style>