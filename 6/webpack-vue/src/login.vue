<template>
    <div>
        <h1>这是login组件 .vue创建出来的 {{ msg }}</h1>
    </div>
</template>


<script>
export default {
    data() {
        return {
            msg: '123'
        }
    },


    methods: {
        show() {
            console.log("调用了 login.vue 中的show方法 ");
        }
    },
}
</script>