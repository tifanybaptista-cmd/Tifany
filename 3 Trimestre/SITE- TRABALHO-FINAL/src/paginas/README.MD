/* CSS Puro - Burger Moon */
:root {
    --primary: #171717;
    --secondary: #F4C542;
    --bg-page: #FFF8ED;
    --text-light: #FFFFFF;
    --text-dark: #171717;
    --font-stack: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-stack);
    background-color: var(--bg-page);
    color: var(--text-dark);
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* Header Fixo */
header {
    background-color: var(--primary);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}

.logo {
    color: var(--secondary);
    font-size: 1.8rem;
    font-weight: bold;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    color: var(--text-light);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
}

.nav-menu a:hover {
    color: var(--secondary);
}

main {
    margin-top: 80px; /* Margem para compensar o header fixo */
    flex: 1;
}

/* Banner / Hero */
.hero {
    background-color: var(--primary);
    color: var(--text-light);
    padding: 4rem 2rem;
    text-align: center;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
}

.hero h1 {
    font-size: 3rem;
    color: var(--secondary);
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto 2rem auto;
}

/* Botões Arredondados */
.btn {
    background-color: var(--secondary);
    color: var(--primary);
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 25px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease;
    display: inline-block;
}

.btn:hover {
    transform: scale(1.05);
    background-color: #e0b433;
}

/* Grid & Layout Responsivo */
.container {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 2rem;
}

.section-title {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
}

.section-title::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: var(--secondary);
    margin: 0.5rem auto 0 auto;
    border-radius: 2px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

/* Cards Arredondados */
.card {
    background-color: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
}

.card:hover {
    transform: translateY(-5px);
}

.card-img {
    width: 100%;
    height: 200px;
    background-color: #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
}

.card-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.card-title {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
}

.card-price {
    font-size: 1.3rem;
    color: #e65100;
    font-weight: bold;
    margin-top: auto;
    margin-bottom: 1rem;
}

/* Formulários */
.contact-form {
    background-color: #ffffff;
    padding: 2.5rem;
    border-radius: 20px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.form-group input, .form-group textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-family: var(--font-stack);
}

/* Rodapé */
footer {
    background-color: var(--primary);
    color: var(--text-light);
    padding: 2rem;
    text-align: center;
    margin-top: auto;
}

.footer-socials {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1rem;
}

.footer-socials a {
    color: var(--secondary);
    text-decoration: none;
    font-weight: bold;
}

/* Ajustes Responsivos */
@media (max-width: 768px) {
    .nav-container {
        flex-direction: column;
        gap: 1rem;
    }
    .nav-menu {
        gap: 1rem;
    }
}
