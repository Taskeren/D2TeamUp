/**
 * 因为小黑盒API不能跨域请求，所以套了一层 CloudFlare Workers 用来支持跨域。
 * 
 * 下面就是请求小黑盒API的具体方法。
 */
export default {
    async fetch(request, env) {
      const data =
        await fetch("https://api.xiaoheihe.cn/game/common_team_v2/home?appid=1085660")
  
      return new Response(data.body, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
          ...data.headers
        }
      })
    }
  }