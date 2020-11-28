/*
 * @Author: jianwen.Wang
 * @Date: 2020-11-28 10:46:18
 * @LastEditTime: 2020-11-28 16:15:30
 * @LastEditors: jiawen.wang
 */
import { Controller } from 'egg';
export default class UserController extends Controller {
    public async env() {
        const { ctx, app } = this;
        ctx.body = { env: app.env, name: 'wjw' };
    }
    public async publicKey() {
        // const { ctx } = this;
        // ctx.body = { publicKey: publicKey };
    }
    public async login() {
        // const { ctx, app } = this;
        // console.log(app)
        // ctx.body = { logger, app };
    }
};