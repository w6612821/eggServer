/*
 * @Author: jianwen.Wang
 * @Date: 2020-11-28 10:43:26
 * @LastEditTime: 2020-11-28 18:04:02
 * @LastEditors: jiawen.wang
 */
import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  const bizConfig = {
    mongoose: {
      client: {
        url: 'mongodb://127.0.0.1/goodsmanage',
        options: {
          useNewUrlParser: true,
        },
      }
    },
  }
  return { ...config, ...bizConfig };
};
