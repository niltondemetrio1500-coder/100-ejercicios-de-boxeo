# Especificação de design — réplica de Treinos de Boxe

## Referência adotada

O site `https://treinosdeboxe.lovable.app/` é a fonte de verdade para a réplica. A implementação deve priorizar fidelidade à aparência, à hierarquia visual, às rotas e aos fluxos que estiverem publicamente acessíveis. O bundle público expõe o título **treinos de boxe** e a descrição **Para aplicar nas aulas e treinos**; a página inicial renderizada no ambiente de inspeção apresentou apenas o selo "Edit with Lovable", indicando que parte da aplicação original pode depender de carregamento dinâmico ou de estado privado.

## Direção escolhida: Ground-truth reference match

A direção não é uma exploração estilística independente: é uma reprodução orientada por referência. A fidelidade visual e comportamental prevalece sobre preferências genéricas de design.

### Design Movement
Reprodução editorial de um produto de treino digital, mantendo as proporções, densidade, contraste, tratamento de superfícies, iconografia e ritmo de navegação observados no projeto original.

### Core Principles
1. **Fidelidade antes de ornamentação:** não introduzir gradientes, padrões, componentes ou páginas que não tenham função equivalente na referência.
2. **Hierarquia operacional:** ações de iniciar, continuar, filtrar, visualizar progresso e navegar entre treinos devem ser imediatamente reconhecíveis.
3. **Responsividade equivalente:** desktop, tablet e mobile devem preservar a ordem de leitura e a usabilidade dos fluxos observáveis.
4. **Estados completos:** cada interação deve possuir estado de sucesso, vazio, carregamento ou erro apropriado, sem becos sem saída.

### Color Philosophy
Usar a paleta identificada por inspeção visual e pelos estilos carregados no projeto de referência. As cores devem organizar a atenção: fundo neutro para leitura, superfície contrastante para módulos de treino e um acento energético para progresso e ações. Caso a referência permaneça inacessível em determinado estado, preferir uma base clara, atlética e sóbria, sem roxo genérico nem neon decorativo.

### Layout Paradigm
Estrutura orientada por tarefa: cabeçalho de contexto, navegação lateral ou superior conforme a referência, área principal com blocos de treino e painéis de detalhe. Evitar centralização excessiva; usar colunas assimétricas e módulos com alinhamento consistente.

### Signature Elements
- Marca simbólica de boxe aplicada no cabeçalho e favicon.
- Cartões de treino com metadados rápidos, progressão e ação primária.
- Indicadores de estado e progresso com alto contraste e microinterações discretas.

### Interaction Philosophy
Interações devem ser diretas e rápidas: clique em um treino abre ou inicia a sessão; filtros alteram a coleção sem recarregar a página; ações de perfil e navegação preservam contexto. Feedback visual deve confirmar toda ação, com foco visível e suporte a teclado.

### Animation
Transições curtas de 160–240 ms para hover, foco, troca de filtros e abertura de detalhes. Entradas de módulos podem ter stagger sutil, mas nunca bloquear conteúdo. Respeitar `prefers-reduced-motion`.

### Typography System
Usar uma fonte display condensada ou de impacto para títulos de treino e uma sans-serif humanista para interface e leitura. A hierarquia deve distinguir claramente nome do treino, nível, duração, instrução e ação. Não usar Inter como fonte única.

### Brand Essence
Treinos de boxe práticos para quem precisa transformar uma aula ou sessão em uma sequência clara e aplicável. Personalidade: **direta, enérgica, instrutiva**.

### Brand Voice
Headlines devem ser curtas e orientadas à ação; CTAs devem nomear o resultado, não uma promessa vazia. Microcopy deve soar como instrução de treinador.

Exemplos de linhas compatíveis:
- **Escolha a sequência. Entre no ritmo.**
- **Começar treino**

### Wordmark & Logo
Criar um símbolo sem texto baseado em duas luvas/guardas de boxe formando um monograma angular, com silhueta legível em tamanhos pequenos. O nome da marca deve aparecer em tipografia própria, com tratamento de peso e espaçamento consistente, nunca como texto padrão sem identidade.

### Signature Brand Color
**Vermelho ringue `#D94735`**, usado como cor proprietária para ação primária, progresso ativo e detalhes de energia, equilibrado por carvão profundo e branco de lona.

## Limites de reprodução

A réplica pode reproduzir a experiência pública e os recursos que puderem ser observados. Credenciais, banco de dados, conteúdo privado, integrações proprietárias e código-fonte não exposto do projeto original não podem ser copiados. Quando necessário, a nova aplicação terá estados locais funcionais e dados de demonstração claramente apresentados como conteúdo da própria réplica, sem fabricar avaliações ou depoimentos de usuários.
