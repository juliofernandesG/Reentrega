import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/SideBar';
import Footer from '../components/Footer';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div style={{ backgroundColor: '#f2f2f2' }}>
      <Navbar onMenuButtonClick={handleMenuButtonClick} />
      <Sidebar open={isSidebarOpen} onClose={handleSidebarClose} />

      <div style={{ padding: '16px' }}>
        <section>
          <h1 style={{ fontFamily: 'cursive', fontSize: '32px', textAlign: 'center' }}>Bem-vindo(a)!</h1>
          <p style={{ fontFamily: 'cursive', fontSize: '18px', textAlign: 'center' }}>
            Obrigado por visitar nossa página de informações para clientes.
          </p>
        </section>

        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ flexBasis: '30%' }}>
              <h2 style={{ fontFamily: 'cursive', fontSize: '24px' }}>Informações para Clientes</h2>
              <p style={{ fontFamily: 'cursive' }}>
                Aqui você encontrará todos os detalhes necessários sobre nossos produtos e serviços.
              </p>
              <p style={{ fontFamily: 'cursive' }}>
                Se você tiver alguma dúvida ou precisar de assistência adicional, não hesite em entrar em contato conosco. Estamos aqui para ajudar!
              </p>
            </div>
            <div style={{ flexBasis: '60%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ flexBasis: '48%' }}>
                  <h3 style={{ fontFamily: 'cursive', fontSize: '20px' }}>Produtos de alta qualidade</h3>
                  <p style={{ fontFamily: 'cursive' }}>Conheça nossa linha de produtos premium.</p>
                </div>
                <div style={{ flexBasis: '48%' }}>
                  <h3 style={{ fontFamily: 'cursive', fontSize: '20px' }}>Entrega rápida e confiável</h3>
                  <p style={{ fontFamily: 'cursive' }}>Garantimos uma entrega ágil e segura dos produtos.</p>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flexBasis: '48%' }}>
                  <h3 style={{ fontFamily: 'cursive', fontSize: '20px' }}>Preços competitivos</h3>
                  <p style={{ fontFamily: 'cursive' }}>Oferecemos preços competitivos em todos os nossos produtos.</p>
                </div>
                <div style={{ flexBasis: '48%' }}>
                  <h3 style={{ fontFamily: 'cursive', fontSize: '20px' }}>Suporte ao cliente 24/7</h3>
                  <p style={{ fontFamily: 'cursive' }}>Estamos disponíveis 24 horas por dia, 7 dias por semana para atender às suas necessidades.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ fontFamily: 'cursive', fontSize: '24px' }}>Depoimentos de Clientes</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ flexBasis: '30%' }}>
              <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
                <p className="testimonial" style={{ fontFamily: 'cursive' }}>
                  "Os produtos desta empresa são incríveis! Eu já comprei vários itens e estou extremamente satisfeito com a qualidade." - João Silva
                </p>
              </div>
              <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px' }}>
                <p className="testimonial" style={{ fontFamily: 'cursive' }}>
                  "Recomendo esta empresa a todos os meus amigos. Eles têm uma ampla variedade de produtos e oferecem um ótimo serviço." - Pedro Almeida
                </p>
              </div>
            </div>
            <div style={{ flexBasis: '30%' }}>
              <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px' }}>
                <p className="testimonial" style={{ fontFamily: 'cursive' }}>
                  "O atendimento ao cliente é excepcional. Sempre que tive alguma dúvida, eles responderam prontamente e resolveram meu problema." - Maria Santos
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
