import Vue from 'vue'
import * as getProdListData from '../types/getProdListData-types'

//api 地址
import { ApiUrl } from '../../tools/url'



export default {
    state: {
        prodListData: [],
        authorListData: [],
    },
    mutations: {
        [getProdListData.ADD_PRODLISTDATA]: function (state, data) {
            state.prodListData = state.prodListData.concat(data);
        },
        [getProdListData.ADD_AUTHORLISTDATA]: function (state, data) {
            state.authorListData = state.authorListData.concat(data);

        }
    },
    actions: {
        [getProdListData.ADD_PRODLISTDATA_ACTION]: function (context) {

            return new Promise((resolveA, reject) => {

                let url = '../../../static/data.json';

                Vue.http.get(url).then(function (resolve) {

                    let data = resolve.body.hottopics.list;

                    console.log(resolve);
                    context.commit(getProdListData.ADD_PRODLISTDATA, data);
                    resolveA();
                }
                ).catch(
                    function (err) {
                        console.log(err)
                    }

                    )
            });
                
        },
        [getProdListData.ADD_AUTHORLISTDATA_ACTION]: function (context) {

            return new Promise((resolveA, reject) => {

                    let url = '../../../static/data.json';

            Vue.http.get(url).then(function (resolve) {

                    let data = resolve.body.tmtnews.list;
                    console.log(resolve);
                    context.commit(getProdListData.ADD_AUTHORLISTDATA, data);
                    resolveA();
                }
            ).catch(
                function (err) {
                    console.log(err)
                }

            )
        });

        }
    }
}
