/*
 * @Author: jianwen.Wang
 * @Date: 2020-11-28 10:43:26
 * @LastEditTime: 2020-11-28 14:12:39
 * @LastEditors: jiawen.wang
 */
import { Application } from 'egg';
const API_VERSION = "/api";
export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get(`${API_VERSION}/user/env`, controller.user.env);
  router.post(`${API_VERSION}/user/login`, controller.user.login);

  // router.get(`${API_VERSION}/user/publicKey`, controller.user.publicKey);
  // router.post(`${API_VERSION}/user/auth`, controller.user.auth);
};
