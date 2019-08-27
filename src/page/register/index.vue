<template>
    <div>
        <navigation-bar></navigation-bar>
        <Row class="register">
            <Col :xs="2" :sm="4" :md="6" :lg="8">
            &ensp;
            </Col>
            <Col :xs="20" :sm="16" :md="12" :lg="8">
            <Card>
                <p slot="title">注册</p>
                <Form :model="user">
                    <FormItem label="电话">
                        <Input v-model="user.user_phone" placeholder="请输入电话"></Input>
                    </FormItem>
                    <FormItem label="姓名">
                        <Input v-model="user.user_name" placeholder="请输入姓名"></Input>
                    </FormItem>
                    <FormItem label="密码">
                        <Input v-model="user.user_password" placeholder="请输入密码"></Input>
                    </FormItem>
                    <FormItem label="验证码">
                        <Input v-model="validCode" placeholder="请输入验证码"></Input>
                        <br />
                        <br />
                        <valid-code></valid-code>
                    </FormItem>
                    <FormItem>
                        <Button type="primary">注册</Button>
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
    import ValidCode from '../../components/common/ValidCode';

    export default {
        name: 'Register',
        data() {
            return {
                validCode: '',
                user: {}
            };
        },
        components: {
            ValidCode,
            NavigationBar
        },
        methods: {

        },
        mounted() {

        },
    }
</script>