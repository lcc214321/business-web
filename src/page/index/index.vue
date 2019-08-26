<template>
    <div class="index">
        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <Avatar icon="ios-briefcase" size="large" />
            <MenuItem name="1">
            四川小陌科技有限公司-业务跟踪系统
            </MenuItem>
        </Menu>
        <Row>
            <Col :xs="2" :sm="4" :md="6" :lg="8">
            &ensp;
            </Col>
            <Col :xs="20" :sm="16" :md="12" :lg="8">
            <Tabs value="sw">
                <TabPane label="登录" name="sw">
                    <login></login>
                </TabPane>
                <TabPane label="注册" name="">
                    <register></register>
                </TabPane>
            </Tabs>
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
    import login from '../login'
    import register from '../register'

    export default {
        name: 'Index',
        data() {
            return {

            };
        },
        components: {
            login,
            register
        },
        methods: {

        },
        mounted() {

        },
    };
</script>