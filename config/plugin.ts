/*
 * @Author: jianwen.Wang
 * @Date: 2020-11-28 10:43:26
 * @LastEditTime: 2020-11-28 17:53:09
 * @LastEditors: jiawen.wang
 */
import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  // 启动规则校验
  // validate: {
  //   enable: true,
  //   package: 'egg-validate',
  // },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  }
};

export default plugin;
