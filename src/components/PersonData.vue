<template>
  <div class="personData">
    <ul>
      <li class="avatar clearfix">
        <span class="lab">头像</span>
        <div class="avatar_img">
          <img src="../assets/avatar.png" alt="" id="imgBase64" onclick="uploadImg()"/>
        </div>
      </li>
      <li>
        <span class="lab">用户名</span>
        <div class="right">
          <input type="text" class="txt" placeholder="请输入用户名" id="nickname">
        </div>
      </li>
      <li>
        <span class="lab">昵称</span>
        <div class="right"><input type="text" class="txt" placeholder="请输入昵称" id="roleNames"></div>
      </li>
      <li>
        <span class="lab">性别</span>
        <div class="right"><label><input type="radio" name="sex" id="private" class="pp" value="man"><span></span>男</label>
          <label><input type="radio" name="sex" id="private" class="pp" value="woman"><span></span>女</label></div>
      </li>
      <li>
        <span class="lab">出生日期</span>
        <div class="right"><span tapmode onclick="selectBirthday()" class="txt" id="birthday">选择出生日期</span></div>
      </li>
    </ul>
    <div class="submit" onclick="submit()">保存</div>
  </div>
</template>

<script>
  export default {
    name: 'Select',
    data() {
      return {
        changeValue: 0
      }
    },
    methods: {
      change(val) {
        console.log('change', val)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" type="text/less">
  .personData {
    width: 92%;
    margin: 0 auto;
  }

  .personData ul {
  }

  .personData ul li {
    padding-top: 0.4rem;
    height: 0.6rem;
    line-height: 0.6rem;
    border-bottom: 1px solid #f2f2f2;
    position: relative;
    text-align: left;
    font-size: 0.28rem;
  }

  .personData ul .avatar {
    height: 1.9rem;
  }

  .personData ul .avatar .lab {
    line-height: 1.9rem;
    display: inline-block;
  }

  .personData ul .avatar .avatar_img {
    float: right;
    border-radius: 50%;
    overflow: hidden;
    margin-top: 0.36rem;
    height: 1.16rem;
    width: 1.16rem;
  }

  .personData ul .lab {
    display: inline-block;
    width: 30%;
    font-weight: 900;
  }
  .personData ul .right{
    float: right;
    text-align: right;
    width: 70%;
  }

  .personData ul .txt {
    display: inline-block;
    color: #999;
    height: 0.6rem;
    line-height: 0.6rem;
    vertical-align: middle;
    width: 100%;
    text-align: right;
  }

  .personData ul .sex {
    display: inline;
    font-size: .24rem;
    color: #9e9e9e;
    height: .4rem;
    line-height: .4rem;
  }

  .submit {
    width: 80%;
    margin: 2rem auto 0;
    height: 0.8rem;
    line-height: 0.8rem;
    background: #6e9d03;
    color: #fff;
    border-radius: 0.05rem;
    text-align: center;
    font-size: 16px;
  }

  label {
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin-left: 0.45rem;
    width: 0.5rem;
  }

  label input {
    display: none;
  }

  label span {
    position: absolute;
    left: -0.45rem;
    top: 0;
    bottom: 0;
    width: 0.34rem;
    height: 0.34rem;
    margin: auto;
    border: 0.02rem solid #ccc;
    border-radius: 100%;
  }

  label span:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0.22rem;
    height: 0.22rem;
    margin: auto;
    border-radius: 100%;
    background: #ff4400;
    transform: scale(0);
    transition: all .3s;
  }

  label input:checked + span {
    border-color: #ff4400;
    background: #fff;
  }

  label input:checked + span:after {
    content: '';
    transform: scale(1);
  }
</style>
