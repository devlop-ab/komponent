import Komponent from './Komponent';

describe('Komponent', () => {
    it('can be instantiated', () => {
        const config = {};
        const component = document.createElement('div');

        const instance = new Komponent(config, component);

        expect(instance instanceof Komponent).toBe(true);
    });
});
