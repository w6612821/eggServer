/*
 * @Author: jianwen.Wang
 * @Date: 2020-11-28 10:43:26
 * @LastEditTime: 2020-11-28 16:45:35
 * @LastEditors: jiawen.wang
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
// const path = require('path');

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1606531364793_5330';

  // add your egg config in here
  // 配置需要的中间件，数组顺序即为中间件的加载顺序
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    //自定义处理jwt
    customJwt: {
      enable: true,
      //ignore: /user\/login/,  //过滤掉登陆
      match: /api\/(manager|werewolf|dev)/
    },
    //安全规则配置
    security: {
      //csrf安全配置
      csrf: {
        ignoreJSON: true // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
      }
    },
    // customLogger: {
    //   analysisLogger: {
    //     file: path.join(appInfo.root, 'logs/analysis.log')
    //   },
    //   scheduleLogger: {
    //     consoleLevel: 'NONE',
    //   },
    // },
  };


  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
