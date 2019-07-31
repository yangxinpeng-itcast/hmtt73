<template>
  <div class="box">
    <el-card class="card-box">
      <div class="img">
        <img src="../../assets/images/logo_index.png" alt />
      </div>
      <el-form :model="formData">
        <el-form-item>
          <el-input v-model="formData.mobile"></el-input>
        </el-form-item>
        <el-form-item style="width:80%;display:inline-block">
          <el-input  v-model="formData.code"></el-input>
        </el-form-item>
        <el-form-item style="display:inline-block;float:right">
          <el-button>验证码</el-button>
        </el-form-item>
        <el-form-item>
             <el-checkbox v-model="checked"></el-checkbox>
             我已阅读并同意<el-link type="primary" :underline="false">用户协议</el-link>和<el-link type="primary" :underline="false">隐私条款</el-link>
        </el-form-item>
        <el-form-item style="width:100%">
            <el-button  style="width:100%" type="primary" >登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        mobile: 13911111111,
        code: 246810
      },
      checked:true
    };
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
