<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>

    <div v-else>
        <h1>Quién es este pokémon</h1>

        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
        <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />

        <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="newGame">
                Nuevo Juego
            </button>
        </template>

    </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonoptions from '@/helpers/getPokemonOptions'

export default {

    components: {
        PokemonPicture,
        PokemonOptions
    },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''

        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonoptions()

            const rndmInt = Math.floor(Math.random() * this.pokemonArr.length)
            this.pokemon = this.pokemonArr[rndmInt]
        },
        checkAnswer(selectedId) {
            this.showAnswer = true
            if (selectedId === this.pokemon.id) {
                this.showPokemon = true
                this.message = `Correcto, ${this.pokemon.name} es el pokémon!`
            } else {
                this.message = `Incorrecto, pruebe de nuevo.`
            }
        },
        newGame() {
            this.showAnswer = false
            this.showPokemon = false
            this.pokemonArr = []
            this.pokemon = null
            this.mixPokemonArray()
        }
    },
    mounted() {
        this.mixPokemonArray()
    }

}
</script>
