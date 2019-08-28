<template>
    <div class="index">
        <navigation-bar></navigation-bar>
        <Table border :columns="title" :data="itemData">
            <!-- <template slot="item_notes">
                <span>{{ item_notes }}</span>
            </template> -->
        </Table>
    </div>
</template>

<style lang="sass" scoped>
    @import './index.scss';
</style>

<script>
    import NavigationBar from '../../components/common/NavigationBar';
    import axios from 'axios';

    export default {
        name: 'Index',
        data() {
            return {
                title: [
                    {
                        title: '序号',
                        key: 'item_id',
                        width: 100,
                        fixed: 'left',
                        sortable: true
                    },
                    {
                        title: '业务日期',
                        key: 'item_date',
                        width: 150,
                        sortable: true
                    },
                    {
                        title: '项目名称',
                        key: 'item_name',
                        width: 200
                    },
                    {
                        title: '项目地址',
                        key: 'item_address',
                        width: 300
                    },
                    {
                        title: '消防工程公司',
                        key: 'item_buy_unit',
                        width: 200
                    },
                    {
                        title: '联系人',
                        key: 'item_contacts',
                        width: 100
                    },
                    {
                        title: '电话',
                        key: 'item_phone',
                        width: 150
                    },
                    {
                        title: '项目情况',
                        key: 'item_info',
                        width: 300
                    },
                    {
                        title: '备注说明',
                        key: 'item_notes',
                        width: 150,
                        filters: [
                            {
                                label: '未报价',
                                value: 1
                            },
                            {
                                label: '已报价',
                                value: 2
                            }
                        ],
                        //数据过滤的选项是否多选
                        filterMultiple: false,
                        filterMethod(value, row) {
                            if (value == 1) {
                                return row.item_notes == 1;
                            } else if (value === 2) {
                                return row.item_notes == 2;
                            }
                        }, render: function (h, params) {
                            let texts = '';
                            if (params.row.item_notes == 1) {
                                texts = "未报价"
                            } else if (params.row.item_notes == 2) {
                                texts = "已报价"
                            } else {
                                texts = "未知状态"
                            }
                            return h('div', {
                                props: {
                                },
                            }, texts)
                        }
                    }
                ],
                itemData: []
            };
        },
        components: {
            NavigationBar,
        },
        created: function () {
            this.view();
        },
        methods: {
            view: function () {
                var _this = this;

                const baseURL = 'http://localhost:8080/';

                axios({
                    method: 'GET',
                    url: baseURL + 'api/item/view',
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }
                }).then(function (response) {
                    console.log(JSON.stringify(response));
                    console.log(JSON.stringify(response.data.data.pageInfo.list));
                    if (response.data.code == 200) {
                        _this.itemData = response.data.data.pageInfo.list;
                    }
                }).catch(function (error) {
                    alert("请求失败");
                })
            }
        },
        mounted() {

        },
    };
</script>