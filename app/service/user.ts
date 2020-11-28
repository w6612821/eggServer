/*
 * @Author: jianwen.Wang
 * @Date: 2020-11-28 17:33:26
 * @LastEditTime: 2020-11-28 17:59:08
 * @LastEditors: jiawen.wang
 */
import { Service } from 'egg';

export default class UserService extends Service {
    public async getInfo(res) {
        const { app } = this;
        try {
            console.log(app.model)
            // console.log(ctx)
            console.log(res.username)

        } catch (err) {
            throw err
        }
    }
}