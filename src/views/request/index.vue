<template>
  <div class="box">123</div>
</template>

<script>
export default {
  data() {
    return {
      formData:{
          collect:true,
          page:1,
          per_page:5
      }
    };
  },
  created() {
    this.go();
  },
  methods: {
    go() {
      this.$axios({
          method:'get',
          url:'/user/images',
          data:{params:this.formData}
     })
   }
  }
};
</script>

<style>
</style>
