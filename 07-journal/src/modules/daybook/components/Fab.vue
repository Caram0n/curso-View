<template>
    <button class="btn btn-primary">
        <!-- icono dinámico según la ruta donde esté -->
        <i class="fa fa-2x" :class="icon"></i>
    </button>
</template>

<style lang="scss" scoped>
    button {
        border-radius: 100%;
        bottom: 20px;
        height: 60px;
        position: fixed;
        right: 20px;
        width: 60px;
    }
</style>

<script>
    export default {
        // computed: {
        //     icon(){
        //         return this.$route.name === 'entry' ? 'fa-save' : 'fa-plus'
        //     }
        // },
        props:{
            icon:{
                type: String,
                default: 'fa-plus'
            }
        }
    }
</script>