import axios from 'axios'
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  // baseURL: '/prod-api',
})

// 登录方法
export function login(username, password) {
  const data = {
    username,
    password
  }
  debugger
  return service.post('/prod-api/login', data
    // ,{
    //   headers: {
    //     isToken: false
    //   }
    // }
  );
}

// 注册方法
export function register(data) {
  debugger
  return service.post('/prod-api/register', data
    // ,{
    //   headers: {
    //     isToken: false
    //   }
    // }
  ).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

// 获取用户详细信息
export function getInfo() {
  return service.get('http://localhost/getInfo')
  .then(response => {
    // 请求成功处理
    console.log(response.data);
  })
  .catch(error => {
    // 请求失败处理
    console.error(error);
  });
}


