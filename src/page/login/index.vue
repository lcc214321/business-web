<template>
    <div class="login">
        <Card>
            <Form :model="user" :label-width="80">
                <FormItem label="电话">
                    <Input v-model="user.input" placeholder="请输入电话"></Input>
                </FormItem>
                <FormItem label="密码">
                    <Input v-model="user.input" placeholder="请输入密码"></Input>
                </FormItem>
                <FormItem label="记住密码">
                    <i-switch v-model="remember" size="large">
                        <span slot="open">是</span>
                        <span slot="close">否</span>
                    </i-switch>
                </FormItem>
                <FormItem>
                    <Button type="primary">登录</Button>
                </FormItem>
            </Form>
        </Card>
    </div>
</template>

<style lang="sass" scoped>
    @import './index.scss';
</style>

<script>
    export default {
        data() {
            return {
                user: {},
                remember: true,
            }
        }
    }
</script>