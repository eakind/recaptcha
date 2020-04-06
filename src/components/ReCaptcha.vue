<template>
  <div class="re-captcha"  ref="grecaptcha">
  </div>
</template>
<script>
// zh-CN 中国简体 zh-HK 香港繁体 en 美国英语
export default {
  props: {
    sitekey: {
      type: String
    },
    lang: {
      type: String,
      default: 'zh-CN'
    }
  },
  mounted () {
    this.initRecaptcha();
  },
  methods: {
    initRecaptcha () {
      window.ReCaptchaLoaded = this.loaded;
      let script = document.createElement('script');
      let url = 'https://recaptcha.net/recaptcha/api.js?';
      let param = `onload=ReCaptchaLoaded&render=explicit&hl=${this.lang}`;
      script.src = url + param;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    },
    loaded () {
      window.grecaptcha.render(this.$refs.grecaptcha, {
        sitekey: this.sitekey,
        callback: res => {
          res.length > 0 ? this.$emit('back', res) : this.$emit('back', res);
        }
      });
    }
  }
};
</script>
<style scoped lang='scss'>
</style>
