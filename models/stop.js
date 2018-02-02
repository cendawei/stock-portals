/**
 * Created by cendawei on 2017/4/18.
 */
const Sequelize = require('sequelize');
const connect = require('./index');
const request = require('superagent')
const configs = require('../configs')
const {eastmoney} = configs['thirdParty']
const {dateFormat} = require('../core/utils')

const stopTabModel = connect.define('stop_tab', {
    // id: Sequelize.INTEGER,
    name: Sequelize.STRING
    // addtime: Sequelize.INTEGER,
});

module.exports = {
    async getList(tab, page) {
        return await request
            .get(`${eastmoney['host']}${eastmoney['path']['stopList']}`)
            .query({
                'RESTARTTIME': parseInt(dateFormat(new Date().getTime(), 'yyyyMMdd')),
                'TAB': tab,
                'ST': 0,
                'SR': '',
                'PAGENUM': page
            })
            .then(async res => await {
                ok: true,
                pageNum: res["body"].TotalPage,
                list: res["body"].result['tfpList']
            }, async err => await {
                ok: false
            })
    },
    async getTabs() {
        return await stopTabModel.findAll()
            .then(async items => await items)
    }
}