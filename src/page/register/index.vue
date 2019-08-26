<template>
    <div class="register">
        <Card>
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
    </div>
</template>

<style lang="sass" scoped>
    @import './index.scss';
</style>

<script>
    import ValidCode from '../../components/common/ValidCode'

    export default {
        name: 'Register',
        data() {
            return {
                validCode: '',
                user: {
                }
            };
        },
        components: {
            ValidCode
        },
        methods: {

        },
        mounted() {

        },
    }
</script>