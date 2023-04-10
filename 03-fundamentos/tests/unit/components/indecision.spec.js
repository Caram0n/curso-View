import { shallowMount } from '@vue/test-utils'

import Indecision from '@/components/Indecision.vue'

describe('Indecision Component', () => {

    let wrapper = null
    let clgSpy = null

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/1.gif'
        })
    }))

    beforeEach(() => {
        wrapper = shallowMount(Indecision)

        clgSpy = jest.spyOn(console, 'log')

        jest.clearAllMocks()
    })




    test('debe de hacer match con el snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot()
    })


    test('escribir en el input no debe disparar nada', async () => {

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('Hola Mundo')

        expect(clgSpy).toHaveBeenCalled()
        expect(getAnswerSpy).not.toHaveBeenCalled()
    })


    test('escribir el símbolo "?" debe disparar el getAnswer', async () => {

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('Hola Mundo?')


        expect(clgSpy).toHaveBeenCalled()
        expect(getAnswerSpy).toHaveBeenCalled()
    })

    test('pruebas en getAnswer', async() => {
        
        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect(img.exists()).toBeTruthy()
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/1.gif')
        expect(wrapper.vm.answer).toBe('Sí!')

    })

    test('pruebas en getAnswer - Fallo en el API', async() => {

        fetch.mockImplementationOnce(() => Promise.reject('API Error'))
        
        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect(img.exists()).toBeFalsy()
        expect(wrapper.vm.answer).toBe('No se pudo cargar del API')

    })
})
