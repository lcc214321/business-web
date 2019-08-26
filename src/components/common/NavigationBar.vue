<template>
    <div>
        <Menu mode="horizontal" :theme="themeColor" active-name="1">
            <MenuItem name="1">
            <Icon type="md-filing" />
            项目跟踪
            </MenuItem>
            <MenuItem name="2">
            <Icon type="ios-paper" />
            项目进度跟踪
            </MenuItem>
            <MenuItem name="3">
            <Icon type="ios-people" />
            用户管理
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