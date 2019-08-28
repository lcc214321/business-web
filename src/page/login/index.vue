<template>
    <div>
        <navigation-bar></navigation-bar>
        <Row class="login">
            <Col :xs="2" :sm="4" :md="6" :lg="8">
            &ensp;
            </Col>
            <Col :xs="20" :sm="16" :md="12" :lg="8">
            <Card>
                <p slot="title">登录</p>
                <Form :label-width="80">
                    <FormItem label="电话">
                        <Input type="tel" v-model="phone" placeholder="请输入电话"></Input>
                    </FormItem>
                    <FormItem label="密码">
                        <Input type="password" v-model="password" placeholder="请输入密码"></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="login()">登录</Button>
                    </FormItem>
                </Form>
            </Card>
            </Col>
            <Col :xs="2" :sm="4" :md="6" :lg="8">
            &ensp;
            </Col>
        </Row>

    </div>
</template>

<style lang="sass" scoped>
    @import './index.scss';
</style>

<script>
    import NavigationBar from '../../components/common/NavigationBar';
    import axios from 'axios';
    import iView from 'iview'
    import md5 from 'js-md5';
    import { Notice } from 'iview';
    import Router from '@/router/index'

    export default {
        data() {
            return {
                phone: '',
                password: '',
            }
        },
        components: {
            NavigationBar,
        },
        created: function () {
            console.log(localStorage.getItem('token'));
        },
        methods: {
            login: function () {
                var _this = this;

                let flag1 = false;
                let flag2 = false;

                //验证电话
                var regPhone = /^[1]([3-9])[0-9]{9}$/;
                //验证密码 数字加字母8-16位
                var regPassword = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;

                if (!regPhone.test(this.phone)) {
                    this.$Message.error('电话有误');
                } else {
                    flag1 = true;
                }
                if (!regPassword.test(this.password)) {
                    this.$Message.error('密码有误');
                } else {
                    flag2 = true;
                }

                if (flag1 && flag2) {
                    const baseURL = 'http://localhost:8080/';

                    let data = {
                        "user_phone": this.phone,
                        //小写加密
                        "user_password": md5(this.password)
                    }

                    // this.$Loading.config({
                    //     color: '#5cb85c',
                    //     failedColor: '#f0ad4e',
                    //     height: 5
                    // });
                    iView.LoadingBar.start();
                    axios.post(baseURL + '/api/user/login', data).then(function (response) {
                        iView.LoadingBar.finish();
                        localStorage.setItem('token', 'Bearer ' + response.data.data.token);
                        Router.push('/index');
                    }).catch(function (error) {
                        iView.LoadingBar.error();
                        _this.$Notice.open({
                            title: '系统通知',
                            desc: '登录失败'
                        });
                    });
                }
            }
        }
    }
</script>