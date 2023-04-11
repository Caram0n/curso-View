import getPokemonoptions, { getPokemonNames, getPokemons } from "@/helpers/getPokemonOptions"


describe('getPokemonOptions helpers', () => {
    test('debe de regresar un array de números', ()=> {
        const pokemons = getPokemons()

        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[100]).toBe(101)
    })

    test('debe de retornar un array con 4 elementos con nombres de Pokémon', async() => {
        const pokemons = await getPokemonNames([1,2,3,4])

        expect(pokemons).toEqual([
            { id: 1, name: 'bulbasaur' },
            { id: 2, name: 'ivysaur' },
            { id: 3, name: 'venusaur' },
            { id: 4, name: 'charmander' },
        ])
    })


    test('getPokemonOptions debe retornar un array mezclado', async() => {

        const pokemons = await getPokemonoptions();

        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual([
            { id: expect.any(Number), name: expect.any(String) },
            { id: expect.any(Number), name: expect.any(String) },
            { id: expect.any(Number), name: expect.any(String) },
            { id: expect.any(Number), name: expect.any(String) },
        ])
        
    })



})