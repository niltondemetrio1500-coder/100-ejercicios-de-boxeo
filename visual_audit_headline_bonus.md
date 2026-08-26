# Auditoria visual dos anexos

## Headline principal

A captura panorâmica tem 716 × 185 px e foi lida em dois cortes horizontais sobrepostos. O texto confirmado é “100 RUTINAS DE ENTRENAMIENTO PROFESIONALES PARA DOMINAR EL BOXEO EN CASA”. O problema visível é de composição: a linha vermelha “EL BOXEO EN CASA” fica parcialmente escondida pelo topo do mockup, que invade a área inferior do headline. A correção deve preservar o texto, mas aumentar o espaço vertical entre headline e mockup ou reduzir levemente a escala do mockup/heading para impedir a sobreposição.

## Procedimento

Os cortes foram examinados da esquerda para a direita; o segundo confirma a continuidade da linha vermelha e a borda superior do mockup. A relação espacial é inequívoca: o mockup começa antes de a última linha do headline terminar.

## Nova arte de valor

A nova captura tem 1011 × 265 px e foi examinada em dois cortes horizontais sobrepostos, da esquerda para a direita. O card contém o rótulo “VALOR TOTAL DE LOS BONOS”, o valor vermelho “$35”, o título “Gratis hoy” e o subtítulo “Incluido automáticamente en el plan Élite”. A alteração solicitada é somente substituir “$35” por “$141”, preservando borda, ícone, alinhamento central, cores e demais textos.

## Integração realizada

A página passou a usar a arte de valor com `$141` no lugar do bloco textual anterior de economia. O CTA “GARANTIZAR AHORA MISMO” foi mantido logo abaixo para preservar a conversão. O headline principal recebeu espaçamento vertical adicional no hero; na captura desktop, a linha “EL BOXEO EN CASA” termina antes do mockup, sem sobreposição. O selo DOM `BONO 01/02/03` foi reposicionado via CSS para o canto inferior direito de cada arte, afastado dos títulos incorporados. A seção de bônus renderizou com as três artes e o novo card de valor sem overflow horizontal.

## Validação funcional

A pré-visualização confirmou a nova referência `bonus-value-141_c3d1f780.webp` com alt text de `$141` e a seção de bônus sem overflow horizontal em viewport desktop. O headline principal foi revisado em desktop e mobile: “EL BOXEO EN CASA” agora fica separado do mockup. O teste direto do CTA Básico abriu o modal; o título retornou exatamente “LLÉVATE EL PAQUETE ÉLITE COMPLETO POR SOLO $5 MÁS”, o CTA de aceite manteve o checkout `off=851lfjhn` e a recusa manteve o checkout `off=z5oplczq` com texto `$10`.

Os assets principais foram trocados por variantes WebP recomprimidas. O build e o TypeScript passaram antes da validação do navegador.

## Auditoria desta revisão

A verificação após as correções confirmou que o document não apresenta overflow horizontal em desktop (`scrollWidth` igual ao `clientWidth`). O bloco de bônus usa três colunas em desktop e uma coluna em telas de até 640px; a garantia foi convertida para uma composição empilhada no mobile, com selo e texto dentro do card. As imagens abaixo da primeira dobra permanecem com `loading="lazy"`, enquanto o hero continua prioritário, evitando bloquear a abertura da página; os assets agora apontam para variantes WebP leves.

O plano Avanzado exibe `De $87`, `POR SOLO $20` e `Descuento de $67`. O rodapé mostra `BOX CLASSONE`. O único aviso restante no reinício foi informativo, referente à atualização do pacote `baseline-browser-mapping`; não há erro de TypeScript ou build.

## Ajuste fiel conforme nova referência

A revisão do card Avanzado confirmou no DOM: referência `De $87`, preço `$20`, economia `Descuento de $67`, quatro entregáveis principais dentro de `.offer-deliverables` e título `SISTEMA AVANZADO DE COMBATE` no mesmo bloco visual. O rodapé agora usa `BOX CLASSONE` também na identificação legal. A arte `bonus-value-141` está envolvida por uma superfície marrom/escura coerente com a seção e mantém o valor `$141`.

A auditoria de geometria em desktop não encontrou overflow horizontal. As capturas de página completa em desktop e mobile confirmaram os bônus empilhados no mobile, a garantia centralizada e a preservação do layout amplo no desktop. O build final passou após a alteração do rodapé.

## Segunda correção conforme os prints enviados

O card Avanzado foi reforçado para manter a borda vermelha, a etiqueta de oferta, o bloco único de entregáveis com Sistema Avanzado de Combate, os três bônus em linhas destacadas e o CTA verde, seguindo a referência mobile. A arte de valor dos bônus foi integrada diretamente à superfície `#181818` da seção, sem borda externa preta adicional; o interior permanece escuro para preservar a leitura do valor `$141`.

As capturas finais de página completa em 390px e 1280px confirmaram o empilhamento mobile, o card sem overflow e a composição desktop preservada. O build e o TypeScript passaram após os últimos ajustes.

## Integração da print anterior

A arte enviada na print anterior foi copiada para o armazenamento persistente e substituiu a versão gerada anteriormente no bloco de valor dos bônus. O elemento agora usa a imagem exata com o valor `$141` e dimensões declaradas `936 × 355`, correspondentes à proporção original, evitando layout shift durante o carregamento. O card Avanzado permanece com a estrutura visual alinhada à referência mobile.

## Validação da segunda tentativa

A imagem exata enviada pelo usuário foi integrada no bloco de valor e aparece no fluxo da seção de bônus. As capturas finais em 390px e 1280px confirmaram que o card Avanzado permanece visível com borda vermelha, bloco de entregáveis, bônus e CTA, enquanto a arte de `$141` mantém proporção e fica alinhada ao fundo da seção. Não foi observado corte horizontal na composição final.
