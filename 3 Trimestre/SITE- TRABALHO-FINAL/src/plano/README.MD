<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Início - Burger Moon</title>
    <!-- Importação correta do CSS a partir do Express static -->
    <link rel="stylesheet" href="/css/index.css">
</head>
<body>
    <!-- Cabeçalho Fixo Obrigatório com Links para Rotas Express -->
    <header>
        <nav class="nav-container">
            <a href="/" class="logo">🌙 Burger Moon</a>
            <ul class="nav-menu">
                <li><a href="/">Início</a></li>
                <li><a href="/produtos">Produtos</a></li>
                <li><a href="/sobre">Sobre Nós</a></li>
                <li><a href="/contato">Contato</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <!-- Elemento de imagem contextualizado e elementos visuais de Lua e Estrelas -->
        <section class="hero">
            <h1>Hambúrgueres Fora de Órbita! 🚀</h1>
            <p>Bem-vindo à Burger Moon, onde o sabor da galáxia pousa diretamente no seu prato.</p>
            <a href="/produtos" class="btn">Ver Cardápio Espacial</a>
        </section>

        <section class="container">
            <h2 class="section-title">Destaques Lunares</h2>
            <div class="grid">
                <!-- Cards com bordas arredondadas -->
                <div class="card">
                    <!-- Se você colocar a imagem1.jpg em src/public/images/ ela pode ser mapeada aqui como: <img src="/images/imagem1.jpg"> -->
                    <div class="card-img">🍔</div>
                    <div class="card-content">
                        <h3 class="card-title">Apollo Burger</h3>
                        <p>Pão brioche estelar, blend artesanal de 150g e molho secreto lunar.</p>
                        <div class="card-price">R$ 34,90</div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Rodapé com Direitos Autorais e Redes Sociais Fictícias -->
    <footer>
        <div class="footer-socials">
            <a href="#">@burgermoon.ficticio</a>
            <a href="#">#BurgerMoonNoEspaco</a>
        </div>
        <p>&copy; 2026 Burger Moon - Todos os direitos reservados.</p>
    </footer>
</body>
</html>
