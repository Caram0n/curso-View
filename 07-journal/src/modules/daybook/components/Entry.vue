<template>
    <div class=" entry-container mb-3 pointer p-2 "
    @click="$router.push({name: 'entry', params: {id: 10}})">

        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2023, jueves</span>
        </div>

        <div class="entry-description">
            Dolor officia sunt nulla reprehenderit duis. Aute nulla minim incididunt irure et cillum. Exercitation incididunt minim amet cillum anim occaecat nisi consectetur veniam quis dolor. Magna commodo ad mollit dolore irure anim est eiusmod anim.
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .entry-container {
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;

        &:hover{
            background-color: lighten($color: grey, $amount:45);
        }
    }
    .entry-description {
        font-size: 12px;
    }
</style>