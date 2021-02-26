import Komponent from '../src/Komponent';

describe('Komponent', () => {
    it('can be instantiated', () => {
        const config = {};
        const element = document.createElement('div');

        expect(new Komponent(config, element)).toBeInstanceOf(Komponent);
    });
});
