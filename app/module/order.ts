/*
 * @Author: jianwen.Wang
 * @Date: 2020-11-28 17:57:49
 * @LastEditTime: 2020-11-28 17:58:17
 * @LastEditors: jiawen.wang
 */
export (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const OrderSchema = new Schema({
        order_id: { type: String },
        uid: { type: String },
        trade_no: { type: String },
        all_price: { type: Number },
        all_num: { type: Number },
    });
    return mongoose.model('Order', OrderSchema, 'order');  //返回model
}