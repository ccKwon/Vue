<template>
    <div>
        <h1>这是 account 组件</h1>

        <router-link to="/account/login">登陆</router-link>
        <router-link to="/account/register">注册</router-link>

        <router-view></router-view>
    </div>
</template>



<style lang = "scss" scoped>
/* 普通的 style 标签只支持 普通的 样式 如果要启用 scss 或 less 需要为 style 元素 设置 lang 属性 */

body {
    div {
        font-style: italic;
    }
}

</style>