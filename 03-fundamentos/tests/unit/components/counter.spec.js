import { shallowMount } from '@vue/test-utils'

import Counter from '@/components/Counter.vue'


describe('Counter Component', () => {

    let wrapper = null;

    beforeEach(() => {
        wrapper = shallowMount(Counter);
    })
    

    // test('debe de hacer match con el snapshot', () => {

    //     const wrapper = shallowMount(Counter);

    //     expect(wrapper.html()).toMatchSnapshot();
    // })


    test('h2 debe de tener el valor por defecto "Counter"', () => {

        const wrapper = shallowMount(Counter);

        const h2Value = wrapper.find('h2').text();

        expect(h2Value).toBe('Counter');
    })

    test('el valor por defecto del contador debe de ser 100', () => {

        const wrapper = shallowMount(Counter);

        // const pTags = wrapper.findAll('p');
        const value = wrapper.find('[data-testid="counter"]').text();

        //expect(pTags[1].text()).toBe('100');

        expect(value).toBe('100');
    })


    test('debe de incrementar el contador en 1', async () => {

        const wrapper = shallowMount(Counter);

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button');

        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');



        await decreaseBtn.trigger('click');
        await decreaseBtn.trigger('click');


        const value2 = wrapper.find('[data-testid="counter"]').text();

        expect(value2).toBe('101');
    })


    test('debe de establecer el valor por defecto', () =>{

            const {start} = wrapper.props();

            const value = wrapper.find('[data-testid="counter"]').text();

            expect(Number(value)).toBe(start);
    })

    test('debe de mostrar la prop title', () => {

        const title = 'Hola Mundo';

        const wrapper = shallowMount(Counter, {
            props: {
                title
            }
        });

        const h2Value = wrapper.find('h2').text();

        expect(h2Value).toBe(title);

    })


})