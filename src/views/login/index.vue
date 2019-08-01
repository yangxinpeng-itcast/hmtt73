<template>
  <div class="box">
    <el-card class="card-box">
      <div class="img">
        <img src="../../assets/images/logo_index.png" alt />
      </div>
      <el-form :model="formData" :rules="rules" ref="formData">
        <el-form-item prop="mobile">
          <el-input v-model="formData.mobile"></el-input>
        </el-form-item>
        <el-form-item style="width:80%;display:inline-block" prop="code">
          <el-input v-model="formData.code"></el-input>
        </el-form-item>
        <el-form-item style="display:inline-block;float:right">
          <el-button>验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked"></el-checkbox>我已阅读并同意
          <el-link type="primary" :underline="false">用户协议</el-link>和
          <el-link type="primary" :underline="false">隐私条款</el-link>
        </el-form-item>
        <el-form-item style="width:100%">
          <el-button style="width:100%" type="primary" @click="submitForm()">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    //自定义校验手机号
    const checkmobile = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不为空"));
      }
      // 校验逻辑
      else if (/^1[3-9]\d{9}$/.test(value)) {
        callback();
      } else {
        callback(new Error("手机号格式不对"));
      }
    };
    return {
      formData: {
        mobile: '13911111111',
        code: '246810'
      },
      checked: true,
      rules: {
        mobile: [{ validator: checkmobile, trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.formData.validate(async valid => {
        if (valid) {
          const { data:{data} } =await this.$axios({
            method: "post",
            url: "/authorizations",
            data: this.formData
          })
          //将响应回来的数据保存在本地
          window.sessionStorage.setItem('hm73',JSON.stringify(data))
          // console.log(data)
          this.$router.push('/')
        } else {
          console.log("登陆失败");
          return false;
        }
      })
    }
  }
};
</script>

<style scoped lang="less">
.box {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .card-box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    width: 500px;
  }
}
</style>
