<template>
  <div>
    <h3>基础用法</h3>
    <vs-button>default</vs-button>
    <vs-button type="primary">primary</vs-button>
    <vs-button type="info">info</vs-button>
    <vs-button type="success">success</vs-button>
    <vs-button type="warning">warning</vs-button>
    <vs-button type="danger">danger</vs-button>
    <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
  </div>
</template>

<script>
import btn from '../../../packages/button/src/button';
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs';
Vue.use(VueHighlightJS);

export default {data() {
    return {
      code1: `
      <vs-button>default</vs-button>
      <vs-button type="primary">primary</vs-button>
       `
        .replace(/^\s*/gm, '')
        .trim(),
      code2: `
       <s-button disabled type="primary">disabled</s-button>    
       `
        .replace(/^\s*/gm, '')
        .trim(),
      code3: `
        <s-button  icon="home"  type="primary">home</s-button>
        <s-button  icon="phone-fill" type="primary" icon-position="right">call</s-button>
        <s-button  icon="visible"  type="primary">show password</s-button>
       `
        .replace(/^\s*/gm, '')
        .trim(),
      code4: `
       <s-button  loading icon="download"  type="primary">加载中</s-button>
       `
        .replace(/^\s*/gm, '')
        .trim(),
      code5: `
        <s-button-group>
          <s-button icon="left" icon-position="left">prev</s-button>
          <s-button>middle</s-button>
          <s-button icon="right" icon-position="right">next</s-button>
        </s-button-group>
       `
        .replace(/^ {8}/gm, '')
        .trim(),
    };
  },
  components: {
    'vs-button': btn,
  },
};
</script>
<style scoped></style>
