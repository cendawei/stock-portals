/**
 * Created by cendawei on 2017/4/17.
 */
const {defaultsDeep} = require('lodash')
const defaultConfig = {
    "host": "127.0.0.1",
    "port": "3306",
    "database": "stock_portals",
    "username": "root",
    "password": "root",
    "dialect": "mysql"
}

module.exports = {
    'development': defaultsDeep({
    }, defaultConfig),
    'production': defaultsDeep({
        "host": "120.78.95.62",
        "username": "stockadmin",
        "password": "Q6JmVsZ|$~",
    }, defaultConfig),
    'test': defaultsDeep({
        "host": "120.78.95.62",
        "username": "stockadmin",
        "password": "Q6JmVsZ|$~",
    }, defaultConfig)
}