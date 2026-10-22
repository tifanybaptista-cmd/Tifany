# Documento de Requisitos: Página de Produtos (Cardápio Digital)

## 1. Visão Geral e Referências
* **Referências de Mercado:** Cardápios digitais integrados como [iFood](https://www.ifood.com.br "iFood") e sistemas de pedidos próprios de grandes redes como [Guacamole/Apptite](https://www.google.com "Cardápios Digitais").
* **Identidade Visual:** 
  * **Cores:** Fundo neutro (branco ou cinza-escuro) para que as cores reais dos alimentos saltem aos olhos. Elementos de preço e botões em amarelo ou verde-sucesso para induzir o clique.
  * **Tipografia:** Categorias em caixa alta com fontes limpas e legíveis. Descrição dos ingredientes em tamanho menor, porém com excelente espaçamento de linhas.
* **Ícones e Aparência:** Tags visuais modernas e coloridas ao lado dos produtos (ex: "🔥 Apimentado", "🌱 Vegetariano", "🏆 Campeão de Vendas").

## 2. Requisitos Funcionais (O que a tela faz)
* **RF01 - Menu de Categorias Fixo (Sticky):** Barra de navegação horizontal no topo que rola junto com a página, permitindo navegar rapidamente entre "Hambúrgueres", "Combos", "Acompanhamentos", "Bebidas" e "Sobremesas".
* **RF02 - Sistema de Busca Dinâmica:** Barra de pesquisa no topo com autocompletar para encontrar itens por nome ou ingrediente (ex: "bacon").
* **RF03 - Modal de Customização do Pedido:** Ao clicar em um hambúrguer, abrir uma janela flutuante para o cliente configurar o ponto da carne, adicionar extras (bacon duplo, cheddar) ou remover ingredientes (sem cebola).
* **RF04 - Cálculo de Valor em Tempo Real:** Conforme o usuário adiciona ingredientes extras no modal, o valor total do item deve ser atualizado instantaneamente antes de ir para o carrinho.

## 3. Requisitos Não Funcionais (Qualidade e Desempenho)
* **RNF01 - Paginação/Lazy Loading:** O cardápio deve carregar as imagens sob demanda conforme o usuário rola a tela, evitando travamentos no celular.
* **RNF02 - Sincronização de Estoque:** Atualização em tempo real para ocultar ou desabilitar produtos que estejam temporariamente esgotados na cozinha.

## 4. Requisitos Indispensáveis para Vender Mais (Gatilhos de Conversão)
* **Cross-Selling Inteligente (Venda Cruzada):** No modal de customização do hambúrguer, sugerir obrigatoriamente: "Que tal adicionar Batata Frita Grande por mais R$ 8,90?" ou "Adicione uma Bebida Gelada".
* **Descrições Extremamente Descritivas (Gatilho Sensorial):** Em vez de "Pão, carne e queijo", usar termos que gerem desejo: "Blend artesanal de 150g de carne bovina grelhada no fogo forte, coberto por uma camada generosa de queijo cheddar derretido e maionese artesanal da casa no pão brioche incrivelmente macio".
