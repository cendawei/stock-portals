/**
 * Created by cendawei on 2017/4/28.
 */
const stopModel = require('../models/stop')
const {getResult} = require('../core/utils')
const {omit} = require('lodash')

module.exports = {
    async getList (req, res, next) {
        const tab = parseInt(req.query.tab)
        const page = parseInt(req.query.page)
        let result = {}
        const data = await stopModel.getList(tab, page)
        if(data.ok) {
            result['codeText'] = 'success'
            result['data'] = omit(data, 'ok')
        } else {
            result['codeText'] = 'failure'
        }
        res.json(getResult(result))
    },
    async getTabs (req, res, next) {
        const data = await stopModel.getTabs()
        const result = {
            'codeText': 'success',
            data
        }
        res.json(getResult(result))
    }
}