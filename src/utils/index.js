/*
* @Author: chengbaosheng
* @Date:   2017-08-24 14:23:40
* @Last Modified by:   chengbaosheng
* @Last Modified time: 2017-08-24 15:30:05
*/
let baseUrl = 'http://10.0.31.116:8081'
// let baseUrl = 'http://10.0.31.147:8090/v2/mams'
let imgPrefix = 'http://dx-image-test.itangchao.me/'
let videoPrefix = 'http://dx-video-test.itangchao.me/'

if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://dxapi.youxiangtv.com'
  imgPrefix = 'https://image.youxiangtv.com/'
  videoPrefix = 'https://video.youxiangtv.com/'
  if (TEST) {
    console.log('in TEST')
    baseUrl = 'http://10.0.31.125:8081'
    imgPrefix = 'http://dx-image-test.itangchao.me/'
    videoPrefix = 'http://dx-video-test.itangchao.me/'
  }
  if (PRE) {
    console.log('in PRE')
    baseUrl = 'http://api-pre.youxiangtv.com'
  }
}

export { baseUrl, imgPrefix, videoPrefix }
