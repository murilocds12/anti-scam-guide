import { describe, it, expect } from 'vitest';
import { navigation } from './content';
import { validateUrl, evaluateMessage, evaluateUrl } from './analysis';
describe('Regras do AntiGolpe', () => {
 it('contém exatamente as quatro seções principais solicitadas', () => { expect(navigation.map(n => n.title)).toEqual(['Recebi algo suspeito', 'Caí em um golpe?', 'Golpes comuns', 'Dicas de prevenção']); });
 it('rejeita URLs com protocolos executáveis', () => { expect(() => validateUrl('javascript:alert(1)')).toThrow(); });
 it('rejeita entradas sem URL completa', () => { expect(() => validateUrl('não é um endereço')).toThrow(); });
 it('rejeita endereços com credenciais embutidas', () => { expect(() => validateUrl('https://usuario:senha@example.com')).toThrow(); });
 it('mantém avaliação de mensagem indicativa quando não há sinais', () => { expect(evaluateMessage('Olá, como foi o seu dia?').level).toBe('warning'); });
 it('detecta urgência e pagamento nas regras demonstrativas', () => { expect(evaluateMessage('Pague o Pix agora urgente').level).toBe('danger'); });
 it('não considera ausência de sinais como garantia de segurança', () => { const result = evaluateUrl('https://example.com'); expect(result.level).toBe('clear'); expect(result.advice).toContain('não garante segurança'); });
 it('sinaliza tokens sem enviar o endereço a serviços externos', () => { expect(evaluateUrl('https://example.com/?token=abc').reasons.some(r => r.includes('privados'))).toBe(true); });
});
