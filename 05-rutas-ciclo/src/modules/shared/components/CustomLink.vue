<template lang="">
    <div>
        <a v-if="isExternal"  
        target="_blank"     
        :class="'normal-link'" 
        :href="link.to">{{link.name}}
        </a>

        <router-link
            v-else
            :to="route"
            v-slot="{ isActive}"
        >

            <a :class="isActive? 'is-active': 'normal-link'"
            >
            {{link.name}}</a>
        </router-link>

    </div>
</template>
<script>
export default {
    props: {
        link: {
            type: Object,
            required: true
        },
    },
    computed: {
        isExternal() {
            return this.link.to.startsWith('http')
        },
        route(){
            return this.link.id === undefined
            ? {name: this.link.to}
            : {name: this.link.to, params: {id: this.link.id}}
        }
    }

}
</script>
<style scoped>
.is-active {
    color: #42B983;
}

.normal-link {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
}
</style>