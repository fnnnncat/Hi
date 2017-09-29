'use strict';
const crypto = require('crypto');
const CryptoJS = require("crypto-js");

module.exports = app => {
    return class CabController extends app.Controller {
        //查询信息
        * dataInfo() {
            const ctx = this.ctx;
            const cabrdlyc = ctx.session.adminCabrdlyc;
            if (cabrdlyc === null || typeof (cabrdlyc) === 'undefined') {
                this.retError({ data:'请登录' });
                return ;
            }
            var data = yield ctx.service.cabrdlyc.cabrdlyc(ctx.params.id);
            if (data) {
                this.retSuccess({ data: data });
            } else {
                this.retError({ data: '不存在' });
            }
        }
        //修改信息
        * dataUpdate() {
          
        }

    };
};