<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <input v-model="inputValue">
    </div>
    <div class="container">
        <lowercase />
        <uppercase :inputValue = "inputValue" />
        <togglecase :inputValue = "inputValue" />
        <mirror :inputValue = "inputValue" />
        <nochange :inputValue = "inputValue" />
    </div>
  </div>
</template>

<script>
import lowercase from './components/lowercase';
import uppercase from './components/uppercase';
import togglecase from './components/togglecase';
import mirror from './components/mirror';
import nochange from './components/nochange';

import {mapActions} from 'vuex';

export default {
  name: 'App',
  components: {
    lowercase,
    uppercase,
    togglecase,
    mirror,
    nochange,
  }, 
  data: function() {
    return {
      inputValue: '',
    }
  },
  watch: {
    inputValue: function() {
      this.updateInput(this.inputValue);
    }
  },
  methods: {
    ...mapActions({
      updateInput: 'updateInputString'
    }),
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

div {
  margin: 10px;
}

.container {
  display: flex;
  justify-content: center;
}

.interface-name {
  font-size: 15px;
  text-decoration: underline;
}

.interface-content {
  color: red;
  font-weight: bolder;
  font-size: 20px;
}

</style>
