import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crown, Flame, Lock, Download, MessageCircle, Heart, Check, X, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-romance.jpg';

const UpsellLanding = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutos em segundos
  const [lastLinkReady, setLastLinkReady] = useState(false);

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

  // Carrega os scripts da LastLink
  useEffect(() => {
    const loadLastLinkScripts = () => {
      // Carrega o script principal da LastLink
      const script1 = document.createElement('script');
      script1.src = 'https://cdn.lastlink.com/upsell.min.js';
      script1.async = true;
      script1.onload = () => {
        // Após carregar o script principal, adiciona o script de configuração
        const script2 = document.createElement('script');
        script2.textContent = `
          var upsellRedirect = "https://lastlink.com/app/member/dashboardV2";

          function setupDenyButtons() {
              document.querySelectorAll('[id^="denyButton"]').forEach(button => {
                  button.onclick = function() {
                      const currentUrl = new URL(window.location.href);
                      const newUrl = new URL("https://lastlink.com/app/member/dashboardV2");

                      currentUrl.searchParams.forEach((value, key) => {
                          newUrl.searchParams.append(key, value);
                      });

                      window.location.href = newUrl.toString();
                  };
              });
          }

          if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', setupDenyButtons);
          } else {
              setupDenyButtons();
          }
        `;
        document.head.appendChild(script2);
        setLastLinkReady(true);

        // Log para debug
        console.log('LastLink scripts carregados com sucesso');
        console.log('Botões disponíveis:', document.querySelectorAll('[id^="llupsell"], [id^="denyButton"]'));
      };
      document.head.appendChild(script1);
    };

    // Aguarda um pouco para garantir que o DOM esteja pronto
    const timer = setTimeout(loadLastLinkScripts, 1000);
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
              VOCÊ JÁ GARANTIU ACESSO ÀS HISTÓRIAS...
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
              MAS AGORA PODE VIVER <span className="bg-primary text-white px-3 py-1.5 rounded-md whitespace-nowrap inline-block">A EXPERIÊNCIA COMPLETA</span>.
            </h2>
          </div>

          {/* VSL Area */}
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto mb-16">
            <div className="bg-gradient-card rounded-xl border border-border p-3 sm:p-4 shadow-romantic">
              {/* Wistia iframe */}
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
            </div>
          </div>

          {/* Subheadline Emocional */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Entre para o <span className="font-bold text-primary">Modo VIP das Leitoras</span> e desbloqueie o que as outras nunca verão:
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                { text: "Histórias exclusivas", emoji: "📚" },
                { text: "Capítulos secretos", emoji: "🔐" },
                { text: "Finais alternativos", emoji: "✨" },
                { text: "Clube privado para leitoras como você", emoji: "👑" }
              ].map((item, index) => (
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

          {/* Call to Action Button */}
          <div className="max-w-md mx-auto mt-8">
            <Button
              variant="hero"
              size="xl"
              className="w-full py-4 sm:py-6 px-3 sm:px-6 text-xs sm:text-base font-bold leading-tight sm:leading-relaxed min-h-[50px] sm:min-h-[60px] relative overflow-hidden"
              style={{
                background: 'linear-gradient(45deg, #ec4899, #be185d, #ec4899, #f472b6, #ec4899)',
                backgroundSize: '300% 300%',
                animation: 'gradientShift 3s ease infinite'
              }}
              onClick={() => {
                const offerSection = document.querySelector('[data-section="offer"]');
                if (offerSection) {
                  offerSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Check className="w-3 h-3 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 relative z-10" />
              <span className="text-center leading-tight sm:leading-relaxed break-words relative z-10">SIM, EU QUERO O MODO VIP AGORA</span>

              <style jsx>{`
                 @keyframes gradientShift {
                   0% {
                     background-position: 0% 50%;
                   }
                   50% {
                     background-position: 100% 50%;
                   }
                   100% {
                     background-position: 0% 50%;
                   }
                 }
               `}</style>
            </Button>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="container mx-auto px-4 mb-4">
        <div className="flex justify-center">
          <img
            src="/secret-logo.png"
            alt="Secret Historys Logo"
            className="h-44 md:h-46 lg:h-52 xl:h-60 w-auto"
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            🦋 O QUE VOCÊ RECEBE NO <span className="bg-primary text-white px-3 py-1.5 rounded-md">MODO VIP</span>
          </h3>

          <div className="space-y-6">
            {[
              {
                icon: Crown,
                title: "Acesso antecipado",
                description: "leia histórias inéditas antes de todas as outras pessoas",
                cardColor: "bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border-yellow-500/30",
                iconBg: "bg-gradient-to-br from-yellow-500 to-amber-600",
                iconColor: "text-white"
              },
              {
                icon: Flame,
                title: "Capítulos secretos",
                description: "finais alternativos mais intensos, cenas estendidas, trechos cortados e novos desfechos",
                cardColor: "bg-gradient-to-br from-red-500/20 to-orange-600/20 border-red-500/30",
                iconBg: "bg-gradient-to-br from-red-500 to-orange-600",
                iconColor: "text-white"
              },
              {
                icon: Lock,
                title: "Histórias exclusivas do Modo VIP",
                description: "só disponíveis para esse grupo seleto",
                cardColor: "bg-gradient-to-br from-purple-500/20 to-indigo-600/20 border-purple-500/30",
                iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600",
                iconColor: "text-white"
              },
              {
                icon: Download,
                title: "Downloads privados",
                description: "baixe e leia mesmo offline, no trabalho ou deitada à noite",
                cardColor: "bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border-blue-500/30",
                iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
                iconColor: "text-white"
              },
              {
                icon: MessageCircle,
                title: "Clube fechado de leitoras",
                description: "compartilhe histórias, peça recomendações e troque resenhas com outras mulheres com os mesmos gostos",
                cardColor: "bg-gradient-to-br from-pink-500/20 to-rose-600/20 border-pink-500/30",
                iconBg: "bg-gradient-to-br from-pink-500 to-rose-600",
                iconColor: "text-white"
              },
              {
                icon: Heart,
                title: "Nova história secreta todo mês",
                description: "selecionada especialmente para quem ama histórias envolventes, homens perigosos, selvagens e dominantes...",
                cardColor: "bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30",
                iconBg: "bg-gradient-to-br from-primary to-accent",
                iconColor: "text-white"
              }
            ].map((benefit, index) => {
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
                <p className="text-sm text-muted-foreground mb-2">⏰ Expira em:</p>
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
                OFERTA POR <span
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
                  TEMPO LIMITADO
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
                O valor real do Modo VIP, com todas as histórias, bônus exclusivos, clube privado e acesso antecipado, seria de
                <span className="line-through text-destructive font-bold text-xl ml-2">R$312/ano</span>.
              </p>

              <p className="text-xl text-foreground mb-6">
                Mas por você já ser parte do Secret Historys…
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                Pode entrar no Modo VIP <span className="font-bold text-primary">hoje, e para sempre</span>, por apenas:
              </p>

              <div className="text-7xl font-bold mb-4 flex flex-col items-center justify-center gap-4 animate-pulse">
                <div className="relative">
                  <img
                    src="/secret-logo.png"
                    alt="Secret Historys Logo"
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
                  R$67,90
                </span>
              </div>

              <p className="text-xl text-accent font-semibold mb-6">
                (pagamento único)
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Sem taxas mensais
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  Sem moedas
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Sem anúncios
                </span>
              </div>

              <p className="text-lg text-foreground mb-8">
                Clique no botão abaixo antes que essa oferta desapareça.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              {/* LastLink Buttons */}
              <div className="flex flex-col items-center gap-6">
                {/* Botão SIM com texto abaixo */}
                <div className="flex flex-col items-center gap-3">
                  <div
                    className="button-default button-accept w-full max-w-md flex items-center justify-center"
                    style={{
                      padding: '17px 32px',
                      lineHeight: '22px',
                      borderRadius: '12px',
                      fontWeight: '700',
                      background: 'linear-gradient(45deg, #ec4899, #be185d, #ec4899, #f472b6, #ec4899)',
                      backgroundSize: '300% 300%',
                      animation: 'gradientShift 3s ease infinite',
                      color: 'rgb(255, 255, 255)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      border: 'none',
                      fontSize: '16px',
                      position: 'relative',
                      overflow: 'hidden',
                      textAlign: 'center'
                    }}
                    id="llupsell-CAAF99360-1"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <Check className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-center">SIM, EU QUERO O MODO VIP AGORA</span>
                  </div>

                  {/* Texto abaixo do botão SIM */}
                  <p className="text-xs sm:text-sm text-accent font-semibold">
                    🔒 Acesso vitalício. Garantido.
                  </p>
                </div>

                {/* Botão NÃO com texto abaixo */}
                <div className="flex flex-col items-center gap-3">
                  <div
                    className="button-default button-deny w-full max-w-md text-center"
                    style={{
                      textDecoration: 'underline',
                      lineHeight: '22px',
                      fontSize: '16px',
                      fontWeight: '700',
                      color: 'rgb(255, 255, 255)',
                      cursor: 'pointer',
                      padding: '12px 20px',
                      transition: 'all 0.3s ease',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                    id="denyButtona32b9ff"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <X className="w-4 h-4 mr-2 inline-block" />
                    Prefiro continuar lendo as histórias comuns...
                  </div>

                  {/* Texto abaixo do botão NÃO */}
                  <p className="text-center text-xs sm:text-sm text-muted-foreground px-2">
                    Sem acesso aos capítulos secretos, sem histórias exclusivas, e sem o clube fechado.
                  </p>
                </div>

                {/* CSS para animação do gradiente */}
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
                alt="Selo de Garantia de 30 Dias"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36"
              />
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-4">
              GARANTIA DE 30 DIAS 💎
            </h4>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Se você entrar no Modo VIP e não amar o que encontrar lá dentro… é só pedir reembolso.
            </p>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Secret Historys - Modo VIP. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default UpsellLanding;