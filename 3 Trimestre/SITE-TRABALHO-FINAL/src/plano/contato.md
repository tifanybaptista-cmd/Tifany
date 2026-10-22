# Documento de Requisitos: Página de Contato e Localização

## 1. Visão Geral e Referências
* **Referências de Mercado:** Páginas de contato direto e SAC de plataformas como [Rappi](https://www.rappi.com.br "Rappi") e áreas de atendimento de franquias locais.
* **Identidade Visual:** 
  * **Cores:** Contraste marcante e direto. Botões de contato em Verde-WhatsApp e links utilitários em azul ou laranja vibrante. Fundos limpos que facilitam a leitura rápida de endereços e telefones.
  * **Tipografia:** Sem serifa e de leitura imediata. Informações vitais como números de telefone e horários de funcionamento em tamanho expandido.
* **Ícones e Aparência:** Ícones claros e universais (alfinete de mapa, balão de chat do WhatsApp, envelope de e-mail, relógio de parede). Design limpo, focado na utilidade sem distrações visuais.

## 2. Requisitos Funcionais (O que a tela faz)
* **RF01 - Integração com Mapas Interativos:** Incorporação do [Google Maps](https://maps.google.com "Google Maps") com marcador exato da loja física e botão "Como Chegar" integrado para rotas instantâneas no Waze ou Maps móvel.
* **RF02 - Botão Direto de WhatsApp (Click-to-Chat):** Botão flutuante ou fixo em destaque que abre o chat diretamente com a equipe de suporte ou anotador de pedidos da loja com uma mensagem pré-definida.
* **RF03 - Exibição Dinâmica de Status de Funcionamento:** Script simples que verifica o horário atual do servidor e exibe em tempo real uma tag dinâmica: "🟢 ABERTO - Faça seu pedido!" ou "🔴 FECHADO no momento - Abrimos às 18:00".
* **RF04 - Formulário de Feedback/Eventos:** Campos simples (Nome, E-mail, Telefone, Mensagem e Motivo do Contato) para reservas de grandes grupos, elogios ou reclamações.

## 3. Requisitos Não Funcionais (Qualidade e Desempenho)
* **RNF01 - Acessibilidade:** Todos os campos do formulário e botões devem possuir tags `aria-label` adequadas para leitores de tela.
* **RNF02 - Proteção Anti-Spam:** Implementação de reCAPTCHA invisível no formulário para evitar envios automatizados.

## 4. Requisitos Indispensáveis para Vender Mais (Gatilhos de Conversão)
* **Redução de Objeções (Transparência Total):** Deixar explícito nesta tela quais são os cartões aceitos, as regiões que a hamburgueria atende e a taxa média de entrega para que o cliente não desista do pedido no final.
* **Canal de Atendimento de Resposta Rápida:** Destacar o tempo médio de resposta (ex: "Respondemos no WhatsApp em até 3 minutos!"), aumentando a segurança de quem precisa resolver um problema com o pedido.
