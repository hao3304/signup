export default  {
  custom: {
    username: {
      required: '手机号码不能为空'
    },
    nickname: {
      required: '昵称不能为空',
      max: '最大长度不能超过20位'
    },
    code: {
      required: '验证码不能为空',
      max: '最大长度不能超过20位'
    },
    password: {
      required: '密码不能为空',
      min: '密码不能小于6位',
      max: '最大长度不能超过20位'
    }
  }
};

