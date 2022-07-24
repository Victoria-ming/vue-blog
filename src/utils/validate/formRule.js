const loginConstantList = ['admin']

// 是否是手机号码
const isTelephone = (rule, value, callback) => {
  const reg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/
  if (!value || loginConstantList.includes(value)) {
    callback()
  } else if (!reg.test(value)) {
    callback(new Error('请输入正确的手机号码'))
  } else {
    callback()
  }
}

const isEmail = (rule, value, callback) => {
  const reg = /^[a-z0-9]+([._-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$ /
  if (!value) {
    callback()
  } else if (!reg.test(value)) {
    callback(new Error('请输入正确的邮箱'))
  } else {
    callback()
  }
}

export const username = [
  { required: true, message: '请输入用户名', trigger: 'blur' },
  { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
]

export const logintTelephone = [
  { required: true, message: '请输入用户名/手机号码', trigger: 'blur' },
  { validator: isTelephone, trigger: 'blur' }
]
export const logintPassword = [
  { required: true, message: '请输入密码', trigger: 'blur' },
  { min: 6, max: 16, message: ' 密码长度在 6 到 16 个字符', trigger: 'blur' }
]
export const email = [
  { validator: isEmail, trigger: 'blur' }
  // { min: 6, max: 16, message: ' 密码长度在 6 到 16 个字符', trigger: 'blur' }
]
export const loginRules = {
  telephone: logintTelephone,
  password: logintPassword
}

export const registerRules = {
  username,
  telephone: logintTelephone,
  password: logintPassword,
  email
}
