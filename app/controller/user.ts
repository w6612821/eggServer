/*
 * @Author: jianwen.Wang
 * @Date: 2020-11-28 10:46:18
 * @LastEditTime: 2020-11-28 18:01:15
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
        const { app, ctx } = this;
        console.log({ object: app })
        // const loginRule = {
        //     username: { type: 'string' },
        //     password: { type: 'string' }
        // }
        try {
            // ctx.validate(loginRule);
            const req = ctx.request.body;
            const res = await ctx.service.user.getInfo(req)
            ctx.body = res;
        } catch (err) {
            throw err
        }
    }
};