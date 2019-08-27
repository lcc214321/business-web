<template>
    <div>
        <Menu mode="horizontal" :theme="themeColor" active-name="1">
            <MenuItem name="1">
            四川小陌科技有限公司-业务跟踪系统
            </MenuItem>
        </Menu>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                themeColor: 'light',
            }
        }
    }
</script>