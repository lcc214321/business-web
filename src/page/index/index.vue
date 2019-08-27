<template>
    <div class="index">
        <navigation-bar></navigation-bar>
        <Table border :columns="columns2" :data="data3"></Table>
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
                columns2: [
                    {
                        title: '序号',
                        key: 'name',
                        width: 100,
                        fixed: 'left'
                    },
                    {
                        title: '业务日期',
                        key: 'age',
                        width: 100
                    },
                    {
                        title: '项目名称',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: '项目地址',
                        key: 'city',
                        width: 100
                    },
                    {
                        title: '消防工程公司',
                        key: 'address',
                        width: 200
                    },
                    {
                        title: '联系人',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: '电话',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: '项目情况',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: '备注说明',
                        key: 'zip',
                        width: 100
                    }
                ], data3: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                ]
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

                // const baseURL = 'http://localhost:8080/';

                axios({
                    method: 'get',
                    baseURL: 'http://localhost:8080/',
                    url: 'api/item/view',
                    headers: { 'Authorization': localStorage.getItem('token') },
                }).then(function (response) {
                    console.log(JSON.stringify(response));
                }).catch(function (error) {
                    console.log('请求失败', error);
                })
            }
        },
        mounted() {

        },
    };
</script>