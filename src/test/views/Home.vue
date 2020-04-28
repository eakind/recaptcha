<template>
  <div class="home">
    <div class="panel">
      <button @click="clickHandler" v-tooltip="toolTipObj">切换语言</button>
    </div>
    <re-captcha ref="recaptcha" v-if="changeLang" :lang="lang" @back="callback"
      sitekey="6LfYnuYUAAAAADc9Bc37totohmNLNEALnqJTFv7f"></re-captcha>
  </div>
</template>

<script>
import { get } from '@/api/server';
import ReCaptcha from '@/components/ReCaptcha.vue';
export default {
  name: 'Home',
  data: () => {
    return {
      lang: 'en',
      changeLang: true,
      toolTipObj: {
        content: 'testst',
        pos: 'top'
      }
    };
  },
  components: {
    ReCaptcha
  },
  mounted () {
    this.init();
  },
  methods: {
    clickHandler () {
      this.changeLang = false;
      this.lang === 'en' ? this.lang = 'zh-CN' : this.lang = 'en';
      setTimeout(() => {
        this.changeLang = true;
      }, 0);
    },
    async init () {
      let param = {};
      let res = await get('test', param);
      console.log(res);
    },
    callback (flag) {
      console.log(flag);
    }
  }
};
</script>
<style scoped lang="scss">
.panel{
  height: 300px;
  width: 100px;
  margin: 0px auto;
  padding-top: 100px;
  // overflow: hidden;
}
</style>
