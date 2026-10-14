# Anti Scam Guide

Você é um desenvolvedor profissional de fortend



Desenvolva um frontend completo, profissional, moderno e funcional para uma plataforma brasileira chamada AntiGolpe, dedicada à prevenção, identificação e orientação sobre golpes digitais.



O objetivo é ajudar pessoas a reconhecer mensagens e links suspeitos, saber como agir após sofrer uma fraude, conhecer os golpes mais comuns e aprender a se proteger.



IMPORTANTE: O site deve ter exatamente 4 abas principais. Não crie abas principais adicionais. Todas as funcionalidades devem estar organizadas dentro dessas quatro seções.



1. DESIGN E IDENTIDADE VISUAL



Crie um sistema com aparência de produto digital real, profissional e confiável, semelhante a uma plataforma moderna de segurança digital.



O desenvolvimento deve priorizar computadores e notebooks, com layout desktop-first, utilizando adequadamente o espaço horizontal. O site também deve ser responsivo para telas menores.



Utilize a seguinte identidade visual:



* Branco como fundo principal.

* Azul-marinho para a navegação, títulos e identidade da marca.

* Azul médio para botões e ações principais.

* Vermelho para possíveis ameaças e alertas urgentes.

* Amarelo para situações que exigem atenção.

* Verde para orientações positivas ou etapas concluídas.

* Cinza-claro para divisões e elementos secundários.



Utilize tipografia moderna, como Inter, ícones profissionais, bordas discretas, sombras suaves, bom espaçamento e hierarquia visual clara.



As cores devem ter uma função, não ser apenas decorativas. Garanta contraste adequado e não dependa exclusivamente das cores para transmitir informações.



Evite excesso de animações, gradientes exagerados, elementos infantis, textos gigantes e aparência genérica.



2. REGRA PRINCIPAL: AJUDA RÁPIDA



O AntiGolpe deve ser simples e direto. O usuário pode estar nervoso, com pressa ou preocupado por ter perdido dinheiro.



Siga estas regras:



* O usuário deve encontrar a opção correta em poucos segundos.

* Utilize frases curtas e linguagem simples.

* Evite parágrafos longos, introduções desnecessárias e explicações repetitivas.

* Destaque a ação mais importante de cada tela.

* Apresente primeiro a orientação essencial e deixe os detalhes adicionais em seções expansíveis.

* Evite formulários longos.

* Organize as tarefas para que sejam concluídas em poucos cliques.

* Não esconda informações importantes para a segurança.



A página inicial deve apresentar a frase:



“Como podemos ajudar?”



Abaixo, exiba quatro cards correspondentes às quatro abas principais. Cada card deve possuir um ícone, um título curto, uma descrição de uma linha e um botão de acesso.



3. ESTRUTURA OBRIGATÓRIA: EXATAMENTE 4 ABAS



Crie uma barra de navegação lateral fixa à esquerda, compacta e elegante, contendo somente:



1. Recebi algo suspeito.

2. Caí em um golpe?

3. Golpes comuns.

4. Dicas de prevenção.



No topo, apresente o logotipo de um escudo com um símbolo de proteção e o nome AntiGolpe.



No cabeçalho da área principal, mostre o título da seção selecionada e uma descrição curta.



A aba ativa deve ser facilmente identificada. O usuário deve conseguir voltar à página inicial por meio do logotipo ou de um controle discreto de navegação, sem criar uma quinta aba.



Todas as funcionalidades descritas abaixo devem ficar dentro dessas quatro abas.



4. ABA 1 — RECEBI ALGO SUSPEITO



Esta é uma das funcionalidades mais importantes do sistema.



Ao entrar, mostre uma pergunta direta:



“O que você recebeu?”



Apresente duas opções de análise, sem criar novas abas principais:



* Mensagem suspeita.

* Link suspeito.



4.1. Análise de mensagens



Crie uma área de texto para o usuário colar uma mensagem recebida por WhatsApp, SMS, e-mail ou outro canal.



Inclua um seletor simples do tipo de contato e o botão principal “Analisar mensagem”.



Após o envio, apresente um resultado curto contendo:



* Classificação da análise.

* Até três sinais de alerta encontrados.

* Uma explicação simples.

* A recomendação principal.

* Um botão “Analisar outra mensagem”.



Exemplo de resultado:



ATENÇÃO — POSSÍVEIS SINAIS DE GOLPE



* Solicitação urgente de pagamento.

* Número desconhecido.

* Link suspeito.



O que fazer: não pague nem clique no link antes de confirmar a solicitação por um canal oficial.



As classificações devem ser apresentadas como avaliações indicativas, nunca como certezas absolutas.



4.2. Análise de links suspeitos com IA



Crie uma funcionalidade chamada “Este link é seguro?”.



O usuário deve poder copiar e colar uma URL em um campo de texto e clicar em “Analisar link com IA”.



Inclua um botão para limpar o campo e uma mensagem curta explicando que não é necessário abrir o link para iniciar a análise.



A análise deve ser preparada para utilizar inteligência artificial e serviços de reputação de URLs por meio de um backend seguro.



O sistema deve examinar, conforme os recursos disponíveis:



* Domínios que imitam marcas conhecidas.

* Endereços com características suspeitas.

* Indícios de phishing.

* Informações de reputação do domínio, quando disponíveis.

* Sinais de redirecionamento ou outros riscos, quando puderem ser verificados com segurança.



Apresente o resultado em uma tela clara e objetiva, com três níveis:



VERMELHO — POSSÍVEL AMEAÇA: foram encontrados sinais relevantes de risco.



AMARELO — ATENÇÃO: existem indícios suspeitos ou informações insuficientes.



VERDE — NENHUM RISCO EVIDENTE: não foram encontrados sinais relevantes nas verificações realizadas. Isso não garante que o endereço seja seguro.



Após a classificação, apresente:



* O endereço analisado, devidamente exibido.

* Até três motivos que justificam o resultado.

* Uma recomendação prática.

* Um botão “Analisar outro link”.



Exemplo:



POSSÍVEL AMEAÇA



“Este endereço apresenta características suspeitas.”



* Domínio semelhante ao de uma marca conhecida.

* Estrutura incomum no endereço.

* Indícios que merecem verificação.



Recomendação: não acesse o endereço nem informe dados pessoais.



Não diga que o link foi verificado por IA caso a integração real não exista.



Requisitos de segurança:



* Não abra automaticamente os links enviados.

* Valide as URLs recebidas.

* Não exponha chaves de API no frontend.

* Não envie links privados ou com tokens de acesso para serviços externos sem informar o usuário e obter seu consentimento.

* Não trate a aparência do endereço como prova definitiva de segurança ou fraude.

* Utilize backend e serviços de análise confiáveis quando a funcionalidade real for implementada.



Se a API de IA ainda não estiver conectada, apresente um estado demonstrativo claramente identificado como “Demonstração — análise real não conectada”. Não invente resultados de análises reais.



4.3. Interface rápida



As opções de mensagem e link devem ficar visíveis na mesma tela, usando botões de alternância ou cards compactos.



Não crie uma página excessivamente longa. O campo de análise e o botão principal devem aparecer sem que o usuário precise rolar muito a tela.



5. ABA 2 — CAÍ EM UM GOLPE?



Esta seção deve orientar pessoas que já foram vítimas de uma fraude.



Utilize uma abordagem acolhedora, sem julgamentos e sem assustar desnecessariamente.



Título:



“Caiu em um golpe? Vamos resolver os próximos passos.”



Abaixo, apresente a pergunta:



“O que aconteceu?”



Crie opções clicáveis para:



* Fiz um Pix ou uma transferência.

* Informei minha senha ou dados bancários.

* Cliquei em um link suspeito.

* Minha conta foi invadida.

* Fiz uma compra falsa.

* Sofri um golpe pelo WhatsApp.

* Outro tipo de golpe.



Ao selecionar uma opção, mostre imediatamente as orientações relevantes para aquela situação.



Exemplo para quem fez um Pix:



Faça isto agora:



1. Entre em contato com seu banco pelos canais oficiais.

2. Pergunte sobre a contestação e o Mecanismo Especial de Devolução (MED), quando aplicável.

3. Guarde os comprovantes e registre a ocorrência policial.



Para quem informou senhas, priorize a troca das credenciais comprometidas por um dispositivo confiável, a proteção das contas e o encerramento de sessões suspeitas.



Para quem clicou em um link, oriente a pessoa a não fornecer dados, verificar se houve instalação de arquivos ou aplicativos e tomar medidas adicionais caso tenha informado credenciais ou dados bancários.



Para contas invadidas, priorize os procedimentos oficiais de recuperação, a proteção do e-mail associado e a revogação de acessos suspeitos.



Para compras falsas, oriente a preservar comprovantes, entrar em contato com o meio de pagamento e buscar os canais oficiais de atendimento.



Inclua um botão “Ver mais orientações” para detalhes complementares.



Crie uma seção compacta chamada “Preciso de ajuda oficial”, com links confiáveis para os canais bancários, órgãos de defesa do consumidor e Polícia Civil.



Os links e contatos devem ser verificados antes de serem publicados. Não invente telefones, endereços ou serviços oficiais.



Não prometa recuperação de dinheiro nem apresente prazos ou resultados como garantidos.



6. ABA 3 — GOLPES COMUNS



Crie uma biblioteca visual de golpes digitais, organizada em cards pequenos e pesquisáveis.



Inclua pelo menos os seguintes tipos:



* Golpe do Pix.

* Falso funcionário de banco.

* Falsa central telefônica.

* Phishing por e-mail ou SMS.

* Golpe do WhatsApp clonado.

* Falsas lojas virtuais.

* Falso emprego.

* Falso investimento com lucro garantido.

* Falso boleto.

* Golpe da falsa entrega.

* Falso suporte técnico.

* Golpes de recuperação de dinheiro perdido.



Cada card deve apresentar:



* Ícone.

* Nome do golpe.

* Descrição em uma frase.

* Botão “Saiba identificar”.



Ao clicar, abra um modal ou painel com quatro informações curtas:



1. Como funciona.

2. Sinais de alerta.

3. Como evitar.

4. O que fazer se acontecer.



Adicione uma barra de pesquisa e filtros simples por categoria, como mensagens, pagamentos, compras e contas digitais.



Não transforme esta seção em um artigo longo. Mostre o resumo primeiro e deixe os detalhes sob demanda.



7. ABA 4 — DICAS DE PREVENÇÃO



Crie uma área educativa com dicas práticas, curtas e fáceis de aplicar.



Inclua conteúdos sobre:



* Como identificar links suspeitos.

* Como criar senhas fortes.

* Como ativar autenticação em dois fatores.

* Como proteger o WhatsApp.

* Como comprar com segurança pela internet.

* Como identificar falsas oportunidades de emprego.

* Como evitar fraudes por Pix.

* Como reconhecer falsos funcionários de bancos.

* Como proteger dados pessoais.

* Como desconfiar de promessas de dinheiro fácil.



Apresente cada dica em um card com título, explicação curta e ação recomendada.



Exemplo:



Não confie apenas no nome do remetente.



Golpistas podem imitar empresas e pessoas conhecidas.



Faça isto: confirme a solicitação por outro canal oficial.



7.1. Notificações semanais



Dentro desta quarta aba, crie uma seção compacta chamada:



“Receba uma dica por semana.”



Permita que o usuário se inscreva voluntariamente para receber notificações semanais de prevenção.



Para o envio por e-mail, disponibilize:



* Campo de e-mail.

* Caixa de seleção de consentimento.

* Botão “Quero receber dicas”.

* Mensagem de confirmação.

* Opção clara para cancelar a inscrição.



O conteúdo das mensagens deve ser breve e útil, trazendo uma dica, um exemplo de golpe e uma ação prática.



Os temas podem incluir phishing, golpes do Pix, falsas lojas, golpes de emprego e proteção de contas.



A frequência deve ser de no máximo uma mensagem por semana. O administrador deve poder configurar o dia e o horário de envio.



A interface também pode oferecer notificações do navegador como recurso opcional, desde que a finalidade seja explicada e a permissão seja solicitada corretamente.



Não confunda notificações do navegador com e-mails semanais. São mecanismos diferentes.



A inscrição, o envio programado, a confirmação e o cancelamento devem depender de uma integração real com backend e serviço de envio. Se essa integração não estiver implementada, identifique a funcionalidade como demonstração e não afirme que a inscrição foi concluída.



Respeite a privacidade dos usuários e permita o cancelamento a qualquer momento.



8. PÁGINA INICIAL E ACESSO RÁPIDO



A página inicial deve ser enxuta e apresentar:



AntiGolpe



“Identifique riscos. Proteja seus dados. Saiba como agir.”



Mostre quatro cards de acesso às quatro abas principais:



* Recebi algo suspeito.

* Caí em um golpe?

* Golpes comuns.

* Dicas de prevenção.



Destaque a possibilidade de verificar uma mensagem ou link suspeito, sem exigir cadastro.



Apresente apenas uma dica de segurança e, abaixo, um acesso discreto à inscrição nas dicas semanais.



Evite grandes blocos de texto, estatísticas fictícias, notícias inventadas e indicadores sem dados reais.



A página deve transmitir confiança e permitir que a pessoa comece a agir imediatamente.



9. REQUISITOS TÉCNICOS DO FRONTEND



Utilize React com TypeScript e Tailwind CSS, ou tecnologias equivalentes disponíveis na ferramenta.



Organize o projeto com componentes reutilizáveis, estrutura clara e código de fácil manutenção.



Implemente:



* Navegação funcional entre as quatro abas.

* Menu lateral com indicação da seção ativa.

* Campos de texto controlados.

* Validação de entradas.

* Botões com ações reais.

* Pesquisa e filtros funcionais.

* Modais ou painéis de detalhes.

* Estados de carregamento, erro, resultado e campos vazios.

* Mensagens claras de sucesso e falha.

* Layout desktop-first e responsivo.

* Acessibilidade por teclado e contraste adequado.

* Dados de demonstração identificados como fictícios.



O frontend deve funcionar como uma demonstração navegável, sem botões decorativos ou links sem ação.



Não desenvolva telas de login, cadastro obrigatório, painel administrativo ou abas principais extras nesta etapa.



O usuário deve poder utilizar as principais orientações sem criar uma conta.



10. INTEGRAÇÕES FUTURAS E HONESTIDADE DOS RESULTADOS



Prepare a arquitetura para futuras integrações com:



* API de inteligência artificial para analisar mensagens e URLs.

* Serviços de reputação e detecção de links maliciosos.

* Backend para processamento seguro.

* Serviço de envio de e-mails.

* Agendamento de notificações semanais.

* Fontes oficiais de orientação.



Não coloque chaves secretas no código do navegador.



Se alguma integração não estiver disponível, apresente uma demonstração claramente identificada. Nunca simule uma consulta oficial, uma análise real de IA ou o envio de uma notificação que não ocorreu.



Não garanta que uma mensagem ou URL seja segura. Explique de maneira breve que os resultados são indicativos e que a ausência de alertas não elimina o risco.



11. RESULTADO ESPERADO



Entregue um frontend completo, visualmente consistente, profissional, navegável e pronto para demonstração em computador.



A prioridade é tornar o AntiGolpe realmente útil para pessoas comuns, especialmente para quem precisa de ajuda imediata.



O sistema deve combinar:



* Quatro abas principais, sem exceções.

* Interface minimalista e organizada.

* Análise de mensagens e links suspeitos.

* Orientação prática após golpes.

* Biblioteca de golpes comuns.

* Dicas de prevenção.

* Inscrição opcional para notificações semanais.

* Preparação para integrações reais com IA e backend.



PRINCÍPIO CENTRAL DO PROJETO: MENOS TEXTO, MAIS CLAREZA, MAIS PROTEÇÃO E AÇÃO IMEDIATA.



Crie a interface completa, com todas as quatro abas e seus fluxos, em vez de entregar apenas uma página inicial ou uma imagem conceitual do site.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d28c454c-a6f8-4835-a802-060827ca002a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
