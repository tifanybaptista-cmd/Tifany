<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Burger Moon - Uma Explosão de Sabor Intergaláctico</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', sans-serif; background-color: #FFF8ED; color: #171717; }
        ul { list-style: none; }
        a { text-decoration: none; transition: all 0.3s ease; }
        .main-header { position: fixed; top: 0; left: 0; width: 100%; background-color: #171717; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); z-index: 1000; }
        .header-container { max-width: 1200px; margin: 0 auto; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; }
        .logo { font-size: 1.5rem; font-weight: bold; color: #FFFFFF; }
        .logo span { color: #F4C542; }
        .nav-menu ul { display: flex; gap: 20px; }
        .nav-menu a { color: #FFFFFF; font-weight: 600; padding: 8px 12px; border-radius: 8px; }
        .nav-menu a:hover, .nav-menu a.active { color: #171717; background-color: #F4C542; }
        .btn-primary { display: inline-block; background-color: #F4C542; color: #171717; padding: 14px 28px; font-weight: bold; font-size: 1.1rem; border-radius: 30px; box-shadow: 0 4px 10px rgba(244, 197, 66, 0.3); }
        .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 6px 15px rgba(244, 197, 66, 0.5); }
        .btn-secondary { display: inline-block; background-color: #171717; color: #FFFFFF; padding: 12px 24px; font-weight: bold; border-radius: 25px; }
        .btn-secondary:hover { background-color: #F4C542; color: #171717; }
        .hero-section { padding: 140px 20px 80px 20px; background-color: #171717; color: #FFFFFF; }
        .hero-container { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 40px; flex-wrap: wrap; }
        .hero-content { flex: 1; min-width: 300px; }
        .badge { background-color: rgba(244, 197, 66, 0.2); color: #F4C542; padding: 6px 14px; border-radius: 20px; font-size: 0.9rem; font-weight: bold; display: inline-block; margin-bottom: 20px; }
        .hero-content h1 { font-size: 3rem; line-height: 1.2; margin-bottom: 20px; }
        .hero-content p { font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px; color: #E0E0E0; }
        .hero-image { flex: 1; min-width: 300px; display: flex; justify-content: center; }
        .hero-image img { max-width: 100%; height: auto; border-radius: 20px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); }
        .highlights-section { max-width: 1200px; margin: 0 auto; padding: 80px 20px; }
        .section-title { text-align: center; margin-bottom: 50px; }
        .section-title h2 { font-size: 2.2rem; color: #171717; margin-bottom: 10px; }
        .section-title p { color: #666; font-size: 1.1rem; }
        .cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; margin-bottom: 40px; }
        .product-card { background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05); transition: transform 0.3s ease; }
        .product-card:hover { transform: translateY(-5px); }
        .product-card img { width: 100%; height: 220px; object-fit: cover; }
        .card-body { padding: 20px; }
        .card-body h3 { font-size: 1.3rem; margin-bottom: 10px; color: #171717; }
        .card-body p { color: #555; font-size: 0.95rem; line-height: 1.5; margin-bottom: 15px; }
        .price { font-size: 1.25rem; font-weight: bold; color: #F4C542; background-color: #171717; padding: 4px 12px; border-radius: 8px; display: inline-block; }
        .cta-container { text-align: center; margin-top: 40px; }
        .main-footer { background-color: #171717; color: #FFFFFF; text-align: center; padding: 40px 20px; margin-top: 40px; }
        .main-footer p { font-size: 0.9rem; margin-bottom: 15px; }
        .social-links { display: flex; justify-content: center; gap: 20px; }
        .social-links a { color: #F4C542; font-weight: bold; font-size: 0.95rem; }
        .social-links a:hover { color: #FFFFFF; }
        @media (max-width: 768px) { .header-container { flex-direction: column; gap: 15px; } .hero-content h1 { font-size: 2.2rem; } }
    </style>
</head>
<body>
    <header class="main-header">
        <div class="header-container">
            <a href="/" class="logo">🍔 Burger <span>Moon</span></a>
            <nav class="nav-menu">
                <ul>
                    <li><a href="/" class="active">Início</a></li>
                    <li><a href="/produtos">Produtos</a></li>
                    <li><a href="/sobre">Sobre Nós</a></li>
                    <li><a href="/contato">Contato</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <section class="hero-section">
            <div class="hero-container">
                <div class="hero-content">
                    <span class="badge">🚀 Pronto para decolar?</span>
                    <h1>Hambúrgueres de outro mundo!</h1>
                    <p>Prepare o seu paladar para uma viagem espacial. Na Burger Moon, cada mordida é uma órbita de sabor com ingredientes selecionados e grelhados no fogo do nosso cosmos.</p>
                    <a href="/produtos" class="btn-primary">Ver Cardápio Lunar 🌟</a>
                </div>
                <div class="hero-image">
                    <img src="https://unsplash.com" alt="Hambúrguer monstruoso">
                </div>
            </div>
        </section>
        <section class="highlights-section">
            <div class="section-title">
                <h2>Mais Pedidos na Órbita ✨</h2>
                <p>Os favoritos da nossa tripulação espacial</p>
            </div>
            <div class="cards-grid">
                <div class="product-card">
                    <img src="https://unsplash.com" alt="Burger Apollo">
                    <div class="card-body">
                        <h3>Burger Apollo 11</h3>
                        <p>Blend bovino de 180g, queijo cheddar derretido como lava, bacon crocante e maionese artesanal da casa.</p>
                        <span class="price">R$ 34,90</span>
                    </div>
                </div>
                <div class="product-card">
                    <img src="https://unsplash.com" alt="Batata Eclipse">
                    <div class="card-body">
                        <h3>Batata Eclipse</h3>
                        <p>Porção generosa de batatas fritas rústicas, cobertas com muito queijo derretido e pedacinhos de bacon espacial.</p>
                        <span class="price">R$ 22,90</span>
                    </div>
                </div>
                <div class="product-card">
                    <img src="https://unsplash.com" alt="Drink Supernova">
                    <div class="card-body">
                        <h3>Shake Supernova</h3>
                        <p>Milkshake artesanal de chocolate belga, chantilly interestelar e raspas de cookies cósmicos.</p>
                        <span class="price">R$ 18,90</span>
                    </div>
                </div>
            </div>
            <div class="cta-container">
                <a href="/produtos" class="btn-secondary">Quero ver todos os produtos</a>
            </div>
        </section>
    </main>
    <footer class="main-footer">
        <p>&copy; 2026 Burger Moon. Todos os direitos reservados. Feito com ❤️ por astronautas famintos.</p>
        <div class="social-links">
            <a href="#" target="_blank">Instamoon</a>
            <a href="#" target="_blank">Faceburger</a>
            <a href="#" target="_blank">TikTokCosmos</a>
        </div>
    </footer>
</body>
</html>
