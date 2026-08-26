# Observações da referência

- Rota principal pública observada: `/treinos-de-boxe.html`.
- A raiz `/` renderizou em branco no navegador de inspeção, enquanto a rota `.html` exibiu a landing page.
- Tema visual: fundo preto/carvão, tipografia branca condensada em caixa alta, vermelho intenso para palavras-chave, bordas/divisores finos vermelhos e CTAs verdes.
- Topo: faixa vermelha estreita com aviso central em cápsula branca: `SOMENTE HOJE PARA ADQUIRIR OS BÔNUS 🥊🔥`.
- Hero: headline grande centralizada em múltiplas linhas com realce vermelho em `SUAS AULAS E`, `TREINOS` e `DO ZERO`; mockup grande de PDF/material com boxeadores e dispositivos; descrição; CTA verde `ACESSAR MATERIAL`; chips `CELULAR`, `NOTEBOOK`, `TABLET`, `PDF`.
- Seção de público: pequena etiqueta vermelha, headline branca com palavras em vermelho, lista vertical centralizada com ícones circulares vermelhos e sublinhados/divisores em vermelho.
- Seção de entrega: bloco mais escuro com headline `O QUE VOCÊ VAI RECEBER`, galeria horizontal de páginas demonstrativas com cartões/imagens e lista de benefícios.
- O conteúdo textual completo foi salvo em `/home/ubuntu/page_texts/treinosdeboxe.lovable.app_treinos-de-boxe.html.md`.
- A página expõe links âncora para `#oferta`, carrosséis com botões anterior/próximo e accordion de perguntas frequentes.
- Existe uma seção de depoimentos no original; por política, a réplica não deve inventar nem reproduzir depoimentos não verificáveis. Implementar um bloco neutro de confiança/conformidade ou manter a seção como espaço para conteúdo real fornecido pelo proprietário.
- A oferta contém plano Básico por R$ 10,00 e Avançado por R$ 27,00, garantia de 7 dias e links externos de checkout MyCartPanda visíveis no HTML público.
- Rodapé: `TREINO PRO`, descrição sobre materiais práticos para treinadores e copyright `© 2026 Treino Pro`.

## Observações adicionais

A galeria de páginas aparece em faixa horizontal escura, com quatro peças visíveis em desktop e controles circulares de navegação nas laterais. Abaixo dela, os benefícios são apresentados em linhas centralizadas, cada uma com emoji/ícone, tipografia branca pesada e sublinhado vermelho. A seção de bônus começa com uma faixa escura ligeiramente distinta, etiqueta de urgência em vermelho e título grande `3 BÔNUS EXCLUSIVOS`, seguido por cards de prancheta/mockup.

## Validação interativa

A réplica renderiza a rota `.html` com o cabeçalho sticky, hero, CTA, galeria, bônus, benefícios, bloco de confiança, ofertas, garantia, FAQ e rodapé. O teste do primeiro item do FAQ levou corretamente à região de perguntas; os botões de navegação da galeria estão presentes no DOM e o accordion alterna via estado local. As imagens geradas e o mockup original estão sendo servidos por URLs persistentes do armazenamento do projeto.

O carrossel foi avançado no navegador e exibiu a mesma sequência de quatro cartões com novos enquadramentos/itens, sem recarga. A primeira pergunta frequente apareceu aberta após a interação, confirmando o comportamento expansível.

## Correção de fidelidade baseada no HTML público

A referência usa os recursos `Oswald` e `Inter` pelo Google Fonts, `#0F0F0F` como fundo principal, `#181818` para seções alternadas, `#D62828` para o vermelho e `#16A34A` para CTAs. O hero é uma seção única, centrada, sem header visível, com `pt-10 pb-16` em mobile e `pt-16 pb-24` em desktop; seu título usa `text-3xl sm:text-5xl md:text-6xl`, line-height entre 1.08 e 1.15 e o mockup fica abaixo do título.

A galeria da seção de entrega é um track horizontal com `overflow-x-auto`, `scroll-snap`, cartões de largura `82%` mobile, `50%` small, `33%` medium e `25%` large. Os bônus usam três colunas a partir de `md`, os cards têm fundo `#0F0F0F`, bordas discretas e raio `rounded-2xl`. A oferta usa dois cards escuros; o básico tem borda branca sutil, o avançado tem borda vermelha de 4px, e os botões de checkout são verdes com cantos retos. Garantia e FAQ ficam em blocos escuros, com garantia dentro de um cartão `#181818` arredondado e FAQ em cards `#0F0F0F` arredondados.

Fonte: HTML público de https://treinosdeboxe.lovable.app/treinos-de-boxe.html e assets listados no mesmo documento, consultado durante a revisão.

## Validação da revisão

A faixa de entrega agora apresenta quatro cards em desktop médio, segue horizontalmente e mantém `82%` de largura no mobile, seguindo os breakpoints do original. O botão Próximo desloca o track sem recarregar. O primeiro item do FAQ abre no viewport final e exibe a resposta com transição; os demais permanecem fechados. A página completa foi revisada em 896px e o hero em 390px.

## Especificação literal adicional

A referência pública usa as URLs Imgur: mockup `https://i.imgur.com/7CW9CrS.png`; páginas `ox7VO1w.png`, `qWX0EAQ.png`, `o0Ls9Hl.png`, `1oLRQZU.png`, `juJAc1f.png`, `ngrDivi.png`; bônus `CtzaJNP.png`, `MtBDn8s.png`, `DVFtjQZ.png`; depoimentos `ilFSbKw.png`, `sVVHpO0.png`, `U79y9SS.png`, `Kq55c6b.png`. Os assets foram baixados íntegros e hospedados em `/manus-storage/`.

O bloco de bônus original usa imagem integral em proporção 1500/800, badge BÔNUS no canto, cards `rounded-2xl`, descrição original e selo verde ECONOMIZE. A oferta usa cabeçalhos BÁSICO/ESSENCIAL e AVANÇADO/COMPLETO, preço em linha, botões verdes com cantos retos, e bônus avançados em caixas internas. A garantia usa selo circular amber com texto GARANTIA INCONDICIONAL, 7 e DIAS DE RISCO ZERO, dentro de card `#181818`. O FAQ usa badge Dúvidas Frequentes, ícone CircleHelp, botão de seta circular e cards escuros. O rodapé é centralizado, apenas TREINO PRO, descrição e aviso de produto digital/reprodução proibida.

Fonte externa: HTML público de https://treinosdeboxe.lovable.app/treinos-de-boxe.html, consultado em 25/08/2026.

## Ajuste dos entregáveis da oferta — 25/08/2026

O card Básico agora exibe apenas 100 Treinos Prontos de Boxe e Acesso vitalício. Os itens Acesso imediato e Garantia de 7 dias aparecem somente no card Avançado/Completo. O rótulo da seção foi atualizado para Escolha seu plano de treino e a garantia global foi vinculada explicitamente ao Plano Avançado. A oferta foi validada em desktop 1280px e mobile 390px; os cards permanecem legíveis e empilhados corretamente.

## Sistema Avanzado de Combate — 25/08/2026

O card Avançado/Completo agora apresenta, imediatamente após o entregável 100 Treinos Prontos de Boxe, o bloco: SISTEMA AVANZADO DE COMBATE; Combinaciones Profesionales y Avanzadas; Velocidad y Reflejos; Potencia y Explosividad. O bloco foi validado visualmente em desktop 1280px e mobile 390px, mantendo a leitura e a hierarquia do card.

## Validação do pop-up de upsell — 25/08/2026

O botão QUERO COMEÇAR do plano Básico abriu o modal sem recarregar a página. O pop-up exibiu overlay escuro, título em espanhol, três imagens reais dos bônus, CTA vermelho para o checkout Completo, opção para continuar com o Básico e botão X. O fechamento pelo X funcionou e restaurou a página de oferta.

O pop-up foi reaberto pelo botão QUERO COMEÇAR e fechado com a tecla Escape. Após o fechamento, a seção de oferta voltou ao estado normal, sem sobreposição e sem recarregar a rota.

## Correção do pop-up — 25/08/2026

O pop-up agora mostra as artes horizontais completas dos três bônus, sem recorte vertical. Os títulos foram alinhados aos cards da página: Planejamento Semanal de Treinos, Modelo de Aula Pronta e Variações de Exercícios. A visualização foi conferida com o modal aberto e os três blocos aparecem com proporção e leitura coerentes.

## Tradução visual em andamento — 25/08/2026

Foram geradas versões em espanhol do mockup principal (`hero-mockup-es.png`), das seis páginas da galeria (`gallery-01-es.png` até `gallery-06-es.png`) e do bônus de planejamento semanal (`bonus-week-es.png`). As artes mantêm composição, exercícios, pessoas, ícones, números e paleta; apenas os textos incorporados foram localizados para espanhol. Ainda faltam as duas artes de bônus restantes, as imagens sociais com texto quando aplicável e a substituição dos caminhos na aplicação.

## Validação pós-integração dos assets — 25/08/2026

O build de produção passou após a substituição dos caminhos. A landing page no navegador carregou o mockup principal traduzido e as seis páginas da galeria e três bônus apontam para os novos arquivos persistentes. O conteúdo textual da aplicação está em espanhol, os dois planos continuam visíveis e os controles de galeria, botões de oferta e FAQ permanecem presentes no DOM.

A captura desktop e a captura mobile confirmaram que as seções continuam empilhadas e legíveis; na primeira visualização do navegador o mockup demorou a carregar por ser um asset de alta resolução, mas apareceu corretamente após aguardar o carregamento.

## Teste interativo pós-integração — 25/08/2026

A página abre no navegador com os novos assets e os botões da oferta visíveis. No primeiro clique automatizado no botão do plano Básico, a viewport foi levada à região de ofertas, mas o modal não apareceu; o handler React está presente no código e será rechecado com inspeção direta do DOM/console. Também foi identificado que a etiqueta visual `DÚVIDAS FREQUENTES` ainda está em português e deve ser corrigida para espanhol.

## Checkout e upsell pós-ajuste — 25/08/2026

A inspeção do DOM confirmou que o CTA Básico aponta para o checkout Hotmart de R$ 10,00 (`off=z5oplczq`), o CTA Completo aponta para o checkout de R$ 20,00 fornecido (`off=y4g2csjb`) como fallback do ticket de R$ 27,00, e o CTA de aceite do pop-up aponta para o checkout de R$ 15,00 (`off=851lfjhn`). O evento direto do CTA Básico abriu o `.upsell-overlay`, exibiu o título do upsell e renderizou os três itens de bônus.

Foi corrigida a etiqueta e o título da seção final para `PREGUNTAS FRECUENTES` / `PREGUNTAS FRECUENTES`.

A inspeção visual do upsell confirmou o modal responsivo com overlay, botão de fechar, três artes de bônus horizontais em espanhol, CTA de aceite e link de recusa. Pressionar Escape removeu o modal e restaurou a seção de ofertas sem recarregar a página.

## Validação final — 25/08/2026

As capturas finais em 1280px e 390px mostram a estrutura completa preservada: hero, público, galeria, bônus, benefícios, bloco social, ofertas, garantia, FAQ e rodapé. A troca para artes traduzidas não alterou o empilhamento dos cards nem a navegação horizontal. A varredura do cliente encontrou português apenas nos comentários internos de `App.tsx` e `index.css`, sem texto de interface.

`pnpm run check` e `pnpm run build` passaram. O build reporta somente o aviso informativo de chunk JavaScript acima de 500 kB.

## Auditoria de performance e analytics — 26/08/2026

A auditoria encontrou um gargalo principal: os dez assets visuais traduzidos estavam em PNG entre aproximadamente 3,3 MB e 4,1 MB cada. Foram convertidos para WebP mantendo dimensões, com redução para cerca de 0,25–0,37 MB por arquivo, e os caminhos da aplicação foram atualizados. O hero passou a usar preload, `fetchPriority=high` e dimensões explícitas; imagens abaixo da dobra usam `loading=lazy` e `decoding=async` para reduzir trabalho inicial e deslocamento de layout.

Meta Pixel `2309049333166037`, UTMify e Microsoft Clarity `xlnmwdg32a` foram integrados no HTML de entrada. UTMify e Clarity são carregados após o evento `load` e em período ocioso; o Meta Pixel mantém PageView assíncrono imediato. O navegador confirmou `fbq`, `clarity`, o script UTMify e o carregamento completo do hero WebP; 13 imagens foram marcadas como lazy.

Os logs mostram uma falha de `fetch` do endpoint de eventos da UTMify durante a inspeção interna, enquanto o script e seu pixel carregam. Isso é compatível com bloqueio/rede do ambiente de pré-visualização; deve ser confirmado no domínio publicado. Não foram encontrados erros de servidor ou de compilação no build atual.

## Smoke test após performance — 26/08/2026

O navegador confirmou carregamento do hero WebP e dos scripts de Meta Pixel, UTMify e Clarity sem IDs duplicados no HTML. O smoke test abriu o upsell, encontrou os três bônus e confirmou que o CTA de aceite usa `pay.hotmart.com` com `off=851lfjhn`, enquanto a recusa usa `off=z5oplczq`. O teste inicial do FAQ foi disparado no mesmo ciclo do fechamento do modal e retornou `aria-expanded=false`; será repetido com espera após a atualização de estado para evitar falso negativo de timing.

## Auditoria interativa pós-otimização — 26/08/2026

A página continua renderizando a landing completa e o mockup WebP aparece após o carregamento. A primeira tentativa visual de abrir o FAQ levou a viewport para a seção correta, mas não evidenciou a resposta aberta; como o componente usa estado React e o clique automatizado pode capturar antes do repaint, será feita uma confirmação assíncrona no DOM. Os rastreadores e os caminhos Hotmart permanecem presentes.

A verificação assíncrona confirmou que o FAQ funciona: o primeiro item mudou de `aria-expanded=false` para `true`, exibiu uma resposta em espanhol e deixou exatamente um item aberto. O console final não mostrou exceções da aplicação; a única falha observada anteriormente foi o `fetch` do endpoint de eventos UTMify no ambiente de pré-visualização.

## Tradução dos depoimentos visuais — mapeamento inicial

O primeiro depoimento contém conversas em português, incluindo “Opa meu amigo, boa noite, tudo bem?”, pedido de feedback, “Muito bom, bem fácil de entender...” e “Fico feliz demais pelo comentário...”. A versão em espanhol deve preservar o WhatsApp, horários, balões, teclado e composição, substituindo apenas o texto por espanhol natural.

O segundo depoimento contém “Opa meu amigo, boa noite, tudo bem?”, “feedback do material?”, respostas “Excelente”, “Bem didático”, “É fácil de entender” e “Muito obrigado meu irmão, na comunidade terão mais”. A arte localizada deve manter nome, avatar, horários, teclado e interface intactos.

O terceiro depoimento contém “Opa meu amigo, boa noite, tudo bem?, poderia me passar um feedback do material?” e “Muito top, alguns treinos já aplicava, mas seu trabalho é top demais”. O quarto contém “Opa, top meu amigo, chegou no e-mail que você preencheu”, o pedido de feedback, “Material excelente nota 10” e “Muito obrigado pelo feedback meu amigo”. Os quatro arquivos serão editados semanticamente com o mesmo tratamento: somente textos em português para espanhol, sem redesenhar ou recompor a interface.

## Correção de copy, preços e depoimentos — nova revisão

Foram localizados e corrigidos os valores visíveis da página: Básico passou a `$10`, Avanzado/Completo passou a `$20`, o upsell passou a `$15 MÁS` e a recusa passou a `$10`. As referências de economia também foram padronizadas para dólar. A etiqueta de acessibilidade do botão fechar foi traduzida de português para espanhol.

As quatro artes de depoimentos foram editadas para espanhol, mantendo interface escura, avatares, horários, balões, teclado e composição. As versões finais foram convertidas para WebP e integradas no carrossel com dimensões de reserva compatíveis e carregamento lazy.

O build passou com TypeScript sem erros. O navegador confirmou que o CTA Básico abre o modal, cujo título contém `$15 MÁS` e cuja recusa contém `$10`. A tentativa de clique visual no modo Preview apenas rolou até a seção de oferta; o teste direto do evento React confirmou o comportamento correto do CTA.
