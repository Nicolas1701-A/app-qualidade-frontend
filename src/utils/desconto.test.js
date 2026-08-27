import { aplicarDesconto } from './desconto';
describe('Validação do Calculador de Desconto', () => {
test('Deve aplicar 10% de desconto para o cupom PROMO10', ()=> {
const resultado = aplicarDesconto(100, 'PROMO10');
expect(resultado).toBe(90);
});
test('Deve retornar o valor sem desconto caso o cupom sejam inválido', () => {
const resultado = aplicarDesconto(100, 'INVALIDO');
expect(resultado).toBe(100);
});
});