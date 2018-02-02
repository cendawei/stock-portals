/**
 * Created by cendawei on 2018/1/26.
 */
import api from 'api'

export default {
    getList(queryBody) {
        return api({
            url: '/stop/list',
            type: 'get',
            data: queryBody
        })
    },
    getTabs() {
        return api({
            url: '/stop/tabs',
            type: 'get'
        })
    }
}