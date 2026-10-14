export type Assessment = { level: 'danger' | 'warning' | 'clear'; reasons: string[]; advice: string; };
// Browser-only demonstrator: never fetches or opens a submitted address.
// Future integration implements this contract server-side with URL privacy consent.
export interface AnalysisService { analyzeMessage(text: string, channel: string): Promise<Assessment>; analyzeUrl(url: string): Promise<Assessment>; }
export function validateUrl(input: string): URL {
 let url: URL;
 try { url = new URL(input.trim()); } catch { throw new Error('Informe um endereço completo, começando com https:// ou http://.'); }
 if (!['http:', 'https:'].includes(url.protocol) || !url.hostname.includes('.') || url.username || url.password) throw new Error('Use um endereço HTTP ou HTTPS válido, sem usuário ou senha.');
 return url;
}
export function evaluateMessage(text: string): Assessment {
 const reasons: string[] = [];
 if (/urgente|agora|imediato|bloquead|última chance|ultima chance/i.test(text)) reasons.push('Pressão para agir rapidamente.');
 if (/pix|pague|pagamento|transfer|boleto/i.test(text)) reasons.push('Solicitação de pagamento ou transferência.');
 if (/senha|código|codigo|cpf|cartão|cartao/i.test(text)) reasons.push('Solicitação ou menção a dados sensíveis.');
 if (/https?:\/\/|www\./i.test(text)) reasons.push('Presença de um link que precisa ser verificado.');
 return { level: reasons.length >= 2 ? 'danger' : 'warning', reasons: reasons.length ? reasons.slice(0, 3) : ['As regras locais não encontraram sinais específicos.', 'O contexto e a identidade do remetente não foram verificados.'], advice: 'Não pague, não compartilhe códigos e não clique antes de confirmar por um canal oficial.' };
}
export function evaluateUrl(input: string): Assessment {
 const url = validateUrl(input); const reasons: string[] = [];
 if (url.protocol === 'http:') reasons.push('O endereço não usa conexão HTTPS.');
 if (/^\d+\.\d+\.\d+\.\d+$/.test(url.hostname) || url.hostname.includes('xn--') || url.hostname.split('.').length > 4) reasons.push('O domínio tem uma estrutura que merece verificação.');
 if (/bit\.ly|tinyurl\.com|t\.co/.test(url.hostname)) reasons.push('O endereço encurtado esconde o destino final.');
 if (/banco|correios|nubank|itau|bradesco|mercadolivre|gov/i.test(url.hostname) && /-|verific|resgate|segur|atualiz/i.test(url.hostname)) reasons.push('O domínio combina nomes conhecidos com termos que podem imitar serviços oficiais.');
 if (/token|secret|session|auth|key|code|password/i.test(url.search)) reasons.push('A URL pode conter dados privados ou tokens. Não compartilhe com serviços externos.');
 return { level: reasons.length >= 2 ? 'danger' : reasons.length ? 'warning' : 'clear', reasons: reasons.length ? reasons.slice(0, 3) : ['Nenhum padrão de alerta foi encontrado nas regras locais.', 'Reputação, conteúdo e redirecionamentos não foram consultados.'], advice: reasons.length ? 'Não acesse nem informe dados antes de confirmar o endereço por um canal oficial.' : 'Prefira acessar o serviço pelo aplicativo ou endereço oficial. A ausência de alertas não garante segurança.' };
}
export const demoAnalysis: AnalysisService = { async analyzeMessage(text) { return evaluateMessage(text); }, async analyzeUrl(url) { return evaluateUrl(url); } };
