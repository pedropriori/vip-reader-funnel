import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crown, Flame, Lock, Download, MessageCircle, Heart, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-romance.jpg';

const UpsellLanding = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutos em segundos
  const [language, setLanguage] = useState<'es' | 'pt'>('es'); // Espanhol como padrão

  // Objeto de traduções
  const translations = {
    es: {
      headline1: "YA GARANTIZASTE ACCESO A LAS HISTORIAS...",
      headline2: "PERO AHORA PUEDES VIVIR LA EXPERIENCIA COMPLETA.",
      subheadline: "Únete al Modo VIP de las Lectoras y desbloquea lo que las demás nunca verán:",
      items: [
        { text: "Historias exclusivas", emoji: "📚" },
        { text: "Capítulos secretos", emoji: "🔐" },
        { text: "Finales alternativos", emoji: "✨" },
        { text: "Club privado para lectoras como tú", emoji: "👑" }
      ],
      benefitsTitle: "🦋 LO QUE RECIBES EN EL MODO VIP",
      benefits: [
        {
          title: "Acceso anticipado",
          description: "lee historias inéditas antes que todas las demás personas"
        },
        {
          title: "Capítulos secretos",
          description: "finales alternativos más intensos, escenas extendidas, fragmentos cortados y nuevos desenlaces"
        },
        {
          title: "Historias exclusivas del Modo VIP",
          description: "solo disponibles para este grupo selecto"
        },
        {
          title: "Descargas privadas",
          description: "descarga y lee incluso sin conexión, en el trabajo o acostada por la noche"
        },
        {
          title: "Club cerrado de lectoras",
          description: "comparte historias, pide recomendaciones e intercambia reseñas con otras mujeres con los mismos gustos"
        },
        {
          title: "Nueva historia secreta cada mes",
          description: "seleccionada especialmente para quienes aman historias envolventes, hombres peligrosos, salvajes y dominantes..."
        }
      ],
      countdownText: "⏰ La oferta expira en:",
      limitedOffer: "OFERTA POR TIEMPO LIMITADO",
      originalPrice: "El valor real del Modo VIP, con todas las historias, bonificaciones exclusivas, club privado y acceso anticipado, sería de",
      originalPriceAmount: "$97,90/año",
      butText: "Pero por ya ser parte de Secret Historys…",
      canEnter: "Puedes entrar al Modo VIP hoy, y para siempre, por solo:",
      currentPrice: "$19,89",
      oneTimePayment: "(pago único)",
      features: [
        { text: "Sin cuotas mensuales", icon: "green" },
        { text: "Sin monedas", icon: "blue" },
        { text: "Sin anuncios", icon: "red" }
      ],
      clickButton: "Haz clic en el botón de abajo antes de que esta oferta desaparezca.",
      accessLifetime: "🔒 Acceso de por vida. Garantizado.",
      noAccess: "Sin acceso a los capítulos secretos, sin historias exclusivas, y sin el club cerrado.",
      guaranteeTitle: "GARANTÍA DE 30 DÍAS 💎",
      guaranteeText: "Si entras al Modo VIP y no amas lo que encuentres ahí dentro… solo pide reembolso.",
      footer: "© 2024 Secret Historys - Modo VIP. Todos los derechos reservados."
    },
    pt: {
      headline1: "VOCÊ JÁ GARANTIU ACESSO ÀS HISTÓRIAS...",
      headline2: "MAS AGORA PODE VIVER A EXPERIÊNCIA COMPLETA.",
      subheadline: "Entre para o Modo VIP das Leitoras e desbloqueie o que as outras nunca verão:",
      items: [
        { text: "Histórias exclusivas", emoji: "📚" },
        { text: "Capítulos secretos", emoji: "🔐" },
        { text: "Finais alternativos", emoji: "✨" },
        { text: "Clube privado para leitoras como você", emoji: "👑" }
      ],
      benefitsTitle: "🦋 O QUE VOCÊ RECEBE NO MODO VIP",
      benefits: [
        {
          title: "Acesso antecipado",
          description: "leia histórias inéditas antes de todas as outras pessoas"
        },
        {
          title: "Capítulos secretos",
          description: "finais alternativos mais intensos, cenas estendidas, trechos cortados e novos desfechos"
        },
        {
          title: "Histórias exclusivas do Modo VIP",
          description: "só disponíveis para esse grupo seleto"
        },
        {
          title: "Downloads privados",
          description: "baixe e leia mesmo offline, no trabalho ou deitada à noite"
        },
        {
          title: "Clube fechado de leitoras",
          description: "compartilhe histórias, peça recomendações e troque resenhas com outras mulheres com os mesmos gostos"
        },
        {
          title: "Nova história secreta todo mês",
          description: "selecionada especialmente para quem ama histórias envolventes, homens perigosos, selvagens e dominantes..."
        }
      ],
      countdownText: "⏰ Oferta expira em:",
      limitedOffer: "OFERTA POR TEMPO LIMITADO",
      originalPrice: "O valor real do Modo VIP, com todas as histórias, bônus exclusivos, clube privado e acesso antecipado, seria de",
      originalPriceAmount: "R$312/ano",
      butText: "Mas por você já ser parte do Secret Historys…",
      canEnter: "Pode entrar no Modo VIP hoje, e para sempre, por apenas:",
      currentPrice: "R$67,90",
      oneTimePayment: "(pagamento único)",
      features: [
        { text: "Sem taxas mensais", icon: "green" },
        { text: "Sem moedas", icon: "blue" },
        { text: "Sem anúncios", icon: "red" }
      ],
      clickButton: "Clique no botão abaixo antes que essa oferta desapareça.",
      accessLifetime: "🔒 Acesso vitalício. Garantido.",
      noAccess: "Sem acesso aos capítulos secretos, sem histórias exclusivas, e sem o clube fechado.",
      guaranteeTitle: "GARANTIA DE 30 DIAS 💎",
      guaranteeText: "Se você entrar no Modo VIP e não amar o que encontrar lá dentro… é só pedir reembolso.",
      footer: "© 2024 Secret Historys - Modo VIP. Todos os direitos reservados."
    }
  };

  const t = translations[language];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Carrega os scripts da Hotmart
  useEffect(() => {
    const loadHotmartScripts = () => {
      // Verificar se o script já foi carregado
      if (document.querySelector('script[src*="hotmart-checkout-elements.js"]')) {
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
      script.async = true;
      script.onload = () => {
        // Verificar se a função checkoutElements está disponível
        if (typeof window !== 'undefined' && (window as any).checkoutElements) {
          try {
            // Inicializar o Sales Funnel abaixo da VSL
            (window as any).checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
            console.log('Hotmart Sales Funnel (VSL) carregado com sucesso');

            // Inicializar o Sales Funnel na seção de ofertas
            (window as any).checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel-offer');
            console.log('Hotmart Sales Funnel (Ofertas) carregado com sucesso');
          } catch (error) {
            console.error('Erro ao inicializar Hotmart Sales Funnel:', error);
          }
        }
      };
      script.onerror = () => {
        console.error('Erro ao carregar script da Hotmart');
      };
      document.head.appendChild(script);
    };

    // Aguarda um pouco para garantir que o DOM esteja pronto
    const timer = setTimeout(loadHotmartScripts, 1500);
    return () => clearTimeout(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />

        <div className="relative container mx-auto px-4 py-16 text-center">
          {/* Headline */}
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
              {t.headline1}
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
              {language === 'es' ? 'PERO AHORA PUEDES VIVIR' : 'MAS AGORA PODE VIVER'} <span className="bg-primary text-white px-3 py-1.5 rounded-md whitespace-nowrap inline-block">{language === 'es' ? 'LA EXPERIENCIA COMPLETA' : 'A EXPERIÊNCIA COMPLETA'}</span>.
            </h2>
          </div>

          {/* VSL Area */}
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto mb-16">
            <div className="bg-gradient-card rounded-xl border border-border p-3 sm:p-4 shadow-romantic">
              {language === 'es' ? (
                /* VSL em Espanhol */
                <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingTop: '177.78%' }}>
                  <iframe
                    src="https://fast.wistia.com/embed/iframe/efqzpu5zib?seo=false&videoFoam=true"
                    title="VSL - Video Sales Letter (Español)"
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    style={{ border: 'none' }}
                  ></iframe>
                </div>
              ) : (
                /* VSL em Português */
                <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingTop: '177.78%' }}>
                  <iframe
                    src="https://fast.wistia.com/embed/iframe/mkkqzqrm4g?seo=false&videoFoam=true"
                    title="VSL - Video Sales Letter"
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    style={{ border: 'none' }}
                  ></iframe>
                </div>
              )}
            </div>
          </div>

          {/* Hotmart Sales Funnel Buttons */}
          <div className="w-full max-w-4xl mx-auto mb-16 px-4">
            <div className="bg-gradient-card rounded-xl border border-border p-6 shadow-romantic">
              <div id="hotmart-sales-funnel"></div>
            </div>
          </div>

          {/* Subheadline Emocional */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              {t.subheadline}
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {t.items.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center group relative">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{item.emoji}</span>
                    <span className="text-lg text-foreground font-medium">{item.text}</span>
                  </div>
                  {/* Risco à mão em rosa */}
                  <svg
                    className="w-full max-w-xs h-4 text-primary opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    viewBox="0 0 200 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 10C15 6, 25 8, 35 9C45 10, 55 7, 65 8C75 9, 85 6, 95 7C105 8, 115 5, 125 6C135 7, 145 4, 155 5C165 6, 175 3, 185 4C190 5, 195 8, 200 10"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                      filter="blur(0.8px)"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Logo Section */}
      <div className="container mx-auto px-4 mb-4">
        <div className="flex justify-center">
          <img
            src="/secret-logo.png"
            alt={language === 'es' ? 'Logo de Secret Historys' : 'Secret Historys Logo'}
            className="h-44 md:h-46 lg:h-52 xl:h-60 w-auto"
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            {t.benefitsTitle}
          </h3>

          <div className="space-y-6">
            {t.benefits.map((benefit, index) => {
              const icons = [Crown, Flame, Lock, Download, MessageCircle, Heart];
              const BenefitIcon = icons[index];
              const cardColors = [
                "bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border-yellow-500/30",
                "bg-gradient-to-br from-red-500/20 to-orange-600/20 border-red-500/30",
                "bg-gradient-to-br from-purple-500/20 to-indigo-600/20 border-purple-500/30",
                "bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border-blue-500/30",
                "bg-gradient-to-br from-pink-500/20 to-rose-600/20 border-pink-500/30",
                "bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30"
              ];
              const iconBgs = [
                "bg-gradient-to-br from-yellow-500 to-amber-600",
                "bg-gradient-to-br from-red-500 to-orange-600",
                "bg-gradient-to-br from-purple-500 to-indigo-600",
                "bg-gradient-to-br from-blue-500 to-cyan-600",
                "bg-gradient-to-br from-pink-500 to-rose-600",
                "bg-gradient-to-br from-primary to-accent"
              ];

              return {
                icon: BenefitIcon,
                title: benefit.title,
                description: benefit.description,
                cardColor: cardColors[index],
                iconBg: iconBgs[index],
                iconColor: "text-white"
              };
            }).map((benefit, index) => {
              // Definir cores de glassmorphism para cada card
              const getGlassColors = (cardIndex: number) => {
                switch (cardIndex) {
                  case 0: // Acesso antecipado - dourado
                    return {
                      background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.25), rgba(245, 158, 11, 0.15), rgba(251, 191, 36, 0.1))',
                      border: 'rgba(251, 191, 36, 0.5)',
                      shadow: '0 8px 32px rgba(251, 191, 36, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
                    };
                  case 1: // Capítulos secretos - vermelho
                    return {
                      background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.25), rgba(220, 38, 38, 0.15), rgba(239, 68, 68, 0.1))',
                      border: 'rgba(239, 68, 68, 0.5)',
                      shadow: '0 8px 32px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
                    };
                  case 2: // Histórias exclusivas - roxo
                    return {
                      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.25), rgba(124, 58, 237, 0.15), rgba(139, 92, 246, 0.1))',
                      border: 'rgba(139, 92, 246, 0.5)',
                      shadow: '0 8px 32px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
                    };
                  case 3: // Downloads privados - azul
                    return {
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(37, 99, 235, 0.15), rgba(59, 130, 246, 0.1))',
                      border: 'rgba(59, 130, 246, 0.5)',
                      shadow: '0 8px 32px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
                    };
                  case 4: // Clube fechado - rosa
                    return {
                      background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.25), rgba(219, 39, 119, 0.15), rgba(236, 72, 153, 0.1))',
                      border: 'rgba(236, 72, 153, 0.5)',
                      shadow: '0 8px 32px rgba(236, 72, 153, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
                    };
                  case 5: // Nova história - rosa primário
                    return {
                      background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.25), rgba(190, 24, 93, 0.15), rgba(236, 72, 153, 0.1))',
                      border: 'rgba(236, 72, 153, 0.5)',
                      shadow: '0 8px 32px rgba(236, 72, 153, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
                    };
                  default:
                    return {
                      background: 'linear-gradient(135deg, rgba(107, 114, 128, 0.25), rgba(75, 85, 99, 0.15), rgba(107, 114, 128, 0.1))',
                      border: 'rgba(107, 114, 128, 0.5)',
                      shadow: '0 8px 32px rgba(107, 114, 128, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
                    };
                }
              };

              const glassColors = getGlassColors(index);

              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-romantic transition-all duration-300 relative backdrop-blur-sm"
                  style={{
                    background: glassColors.background,
                    border: `1px solid ${glassColors.border}`,
                    borderRadius: '16px',
                    boxShadow: glassColors.shadow,
                    backdropFilter: 'blur(15px)',
                    WebkitBackdropFilter: 'blur(15px)'
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 ${benefit.iconBg} rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm`}
                      style={{
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      <benefit.icon className={`w-6 h-6 ${benefit.iconColor}`} />
                    </div>
                    <div>
                      <h4
                        className="font-bold text-lg mb-2"
                        style={{
                          color: '#ffffff',
                          textShadow: glassColors.textShadow
                        }}
                      >
                        {benefit.title}
                      </h4>
                      <p
                        className="leading-relaxed"
                        style={{
                          color: '#e5e7eb',
                          textShadow: glassColors.textShadow
                        }}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Exclusive Badge */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <Badge className="bg-gradient-luxury text-accent-foreground px-8 py-3 text-lg font-bold shadow-luxury">
            🎁 EXCLUSIVO - Apenas para Leitoras VIP
          </Badge>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="container mx-auto px-4 py-16" data-section="offer">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-gradient-card border-2 border-primary/30 shadow-intense">
            <div className="text-center mb-8">
              {/* Countdown Timer */}
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">{t.countdownText}</p>
                <div
                  id="countdown-timer"
                  className="text-4xl sm:text-5xl font-bold"
                  style={{
                    background: 'linear-gradient(45deg, #ef4444, #dc2626, #f87171, #ef4444)',
                    backgroundSize: '300% 300%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    animation: timeLeft < 300 ? 'gradientShift 1s ease infinite' : 'gradientShift 2s ease infinite' // Mais rápido nos últimos 5 minutos
                  }}
                >
                  {formatTime(timeLeft)}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-6">
                {language === 'es' ? 'OFERTA POR' : 'OFERTA POR'} <span
                  className="relative inline-block"
                  style={{
                    background: 'linear-gradient(45deg, #ef4444, #dc2626, #f87171, #ef4444)',
                    backgroundSize: '300% 300%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    animation: 'gradientShift 2s ease infinite',
                    textShadow: '0 0 20px rgba(239, 68, 68, 0.5)'
                  }}
                >
                  {language === 'es' ? 'TIEMPO LIMITADO' : 'TEMPO LIMITADO'}
                  <span
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(45deg, #ef4444, #dc2626, #f87171, #ef4444)',
                      backgroundSize: '300% 300%',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      animation: 'gradientShift 2s ease infinite',
                      filter: 'blur(2px)',
                      opacity: 0.7,
                      zIndex: -1
                    }}
                  >
                    TEMPO LIMITADO
                  </span>
                </span>
              </h3>

              <p className="text-lg text-muted-foreground mb-4">
                {t.originalPrice}
                <span className="line-through text-destructive font-bold text-xl ml-2">{t.originalPriceAmount}</span>.
              </p>

              <p className="text-xl text-foreground mb-6">
                {t.butText}
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                {t.canEnter}
              </p>

              <div className="text-7xl font-bold mb-4 flex flex-col items-center justify-center gap-4 animate-pulse">
                <div className="relative">
                  <img
                    src="/secret-logo.png"
                    alt={language === 'es' ? 'Logo de Secret Historys' : 'Secret Historys Logo'}
                    className="h-28 w-auto filter drop-shadow-lg"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.5)) drop-shadow(0 0 16px rgba(219, 39, 119, 0.3))',
                      background: 'linear-gradient(45deg, #f472b6, #ec4899, #db2777)',
                      backgroundClip: 'padding-box',
                      borderRadius: '8px',
                      padding: '4px'
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-lg opacity-30"
                    style={{
                      background: 'linear-gradient(45deg, #f472b6, #ec4899, #db2777)',
                      filter: 'blur(4px)',
                      zIndex: -1
                    }}
                  />
                </div>
                <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
                  {t.currentPrice}
                </span>
              </div>

              <p className="text-xl text-accent font-semibold mb-6">
                {t.oneTimePayment}
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-8">
                {t.features.map((feature, index) => {
                  const icons = [
                    <svg key="green" className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>,
                    <svg key="blue" className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>,
                    <svg key="red" className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  ];

                  return (
                    <span key={index} className="flex items-center gap-2">
                      {icons[index]}
                      {feature.text}
                    </span>
                  );
                })}
              </div>

              <p className="text-lg text-foreground mb-8">
                {t.clickButton}
              </p>
            </div>

            {/* Action Buttons - COMENTADO PARA USO FUTURO */}
            {/* 
            <div className="space-y-4">
              <div className="flex flex-col items-center gap-6">
                {/* Botão SIM com texto abaixo */}
            {/* 
                <div className="flex flex-col items-center gap-3">
                  <Button
                    className="w-full max-w-md py-4 px-8 text-base font-bold rounded-xl relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(45deg, #ec4899, #be185d, #ec4899, #f472b6, #ec4899)',
                      backgroundSize: '300% 300%',
                      animation: 'gradientShift 3s ease infinite',
                      color: 'white',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    {language === 'es' ? 'SÍ, QUIERO EL MODO VIP AHORA' : 'SIM, EU QUERO O MODO VIP AGORA'}
                  </Button>
                  
                  {/* Texto abaixo do botão SIM */}
            {/* 
                  <p className="text-xs sm:text-sm text-accent font-semibold">
                    {t.accessLifetime}
                  </p>
                </div>
                
                {/* Botão NÃO com texto abaixo */}
            {/* 
                <div className="flex flex-col items-center gap-3">
                  <Button
                    variant="outline"
                    className="w-full max-w-md py-3 px-6 text-base font-bold rounded-lg"
                    style={{
                      color: 'white',
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      textDecoration: 'underline'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    {language === 'es' ? 'Prefiero continuar leyendo las historias comunes...' : 'Prefiro continuar lendo as histórias comuns...'}
                  </Button>
                  
                  {/* Texto abaixo do botão NÃO */}
            {/* 
                  <p className="text-center text-xs sm:text-sm text-muted-foreground px-2">
                    {t.noAccess}
                  </p>
                </div>

                {/* CSS para animação do gradiente */}
            {/* 
                <style dangerouslySetInnerHTML={{
                  __html: `
                    @keyframes gradientShift {
                      0% { background-position: 0% 50%; }
                      50% { background-position: 100% 50%; }
                      100% { background-position: 0% 50%; }
                    }
                  `
                }}></style>
              </div>
            </div>
            */}

            {/* Hotmart Sales Funnel - Seção de Ofertas */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <div id="hotmart-sales-funnel-offer" className="w-full max-w-md"></div>
              </div>
            </div>

          </Card>
        </div>
      </div>

      {/* Guarantee Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-8 bg-gradient-card border border-accent/30">
            <div className="flex items-center justify-center mb-6">
              <img
                src="/Selo_de_Garantia_de_30_Dias.png"
                alt={language === 'es' ? 'Sello de Garantía de 30 Días' : 'Selo de Garantia de 30 Dias'}
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36"
              />
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-4">
              {t.guaranteeTitle}
            </h4>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.guaranteeText}
            </p>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">
            {t.footer}
          </p>

          {/* Language Accessibility Icon */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => setLanguage('es')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${language === 'es'
                ? 'bg-primary text-white shadow-md'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              title={language === 'es' ? 'Español (Activo)' : 'Español'}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-medium">ES</span>
            </button>

            <button
              onClick={() => setLanguage('pt')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${language === 'pt'
                ? 'bg-primary text-white shadow-md'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              title={language === 'pt' ? 'Português (Ativo)' : 'Português'}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-medium">PT</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UpsellLanding;