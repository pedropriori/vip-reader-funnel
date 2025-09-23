import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crown, Flame, Lock, Download, MessageCircle, Heart, Check, X, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-romance.jpg';

const UpsellLanding = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
            Você já garantiu acesso às histórias...
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-12 text-foreground">
            Mas agora pode viver <span className="italic text-primary">*a experiência completa*</span>.
          </h2>

          {/* VSL Area */}
          <div className="max-w-md mx-auto mb-16">
            <div className="aspect-[9/16] bg-gradient-card rounded-xl border border-border p-8 flex items-center justify-center shadow-romantic">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-romantic rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-muted-foreground">
                  [VSL - Video Sales Letter]
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Área para embedding do vídeo
                </p>
              </div>
            </div>
          </div>

          {/* Subheadline Emocional */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Entre para o <span className="font-bold text-primary">Modo VIP das Leitoras</span> e desbloqueie o que as outras nunca verão:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                "Histórias exclusivas",
                "Capítulos secretos", 
                "Finais alternativos",
                "Clube privado para leitoras como você"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-romantic rounded-full" />
                  <span className="text-lg text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            🔥 LISTA DE BENEFÍCIOS EMOCIONAIS
          </h3>
          
          <div className="space-y-6">
            {[
              {
                icon: Crown,
                title: "Acesso antecipado",
                description: "leia histórias inéditas antes de todas as outras pessoas"
              },
              {
                icon: Flame,
                title: "Capítulos secretos",
                description: "finais alternativos mais intensos, cenas estendidas, trechos cortados e novos desfechos"
              },
              {
                icon: Lock,
                title: "Histórias exclusivas do Modo VIP",
                description: "só disponíveis para esse grupo seleto"
              },
              {
                icon: Download,
                title: "Downloads privados",
                description: "baixe e leia mesmo offline, no trabalho ou deitada à noite"
              },
              {
                icon: MessageCircle,
                title: "Clube fechado de leitoras",
                description: "compartilhe histórias, spoilers e comentários com outras mulheres que também vivem essas fantasias"
              },
              {
                icon: Heart,
                title: "Nova história secreta todo mês",
                description: "selecionada especialmente para quem ama histórias envolventes, homens perigosos, selvagens e dominantes..."
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-border hover:shadow-romantic transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-romantic rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
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
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-gradient-card border-2 border-primary/30 shadow-intense">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                💰 OFERTA ESPECIAL
              </h3>
              
              <p className="text-lg text-muted-foreground mb-4">
                O valor real do Modo VIP, com todas as histórias, bônus exclusivos, clube privado e acesso antecipado, seria de 
                <span className="line-through text-destructive font-bold ml-2">R$312/ano</span>.
              </p>
              
              <p className="text-xl text-foreground mb-6">
                Mas por você já ser parte do Secret Historys…
              </p>
              
              <p className="text-lg text-muted-foreground mb-8">
                Pode entrar no Modo VIP <span className="font-bold text-primary">hoje, e para sempre</span>, por apenas:
              </p>
              
              <div className="text-6xl font-bold text-primary mb-4">
                🎯 R$67
              </div>
              
              <p className="text-xl text-accent font-semibold mb-6">
                (pagamento único)
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-8">
                <span>📌 Sem taxas mensais</span>
                <span>• Sem moedas</span>
                <span>• Sem anúncios</span>
              </div>
              
              <p className="text-lg text-foreground mb-8">
                Clique no botão abaixo antes que essa oferta desapareça.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="w-full"
              >
                <Check className="w-5 h-5 mr-2" />
                SIM, EU QUERO O MODO VIP AGORA
              </Button>
              
              <div className="text-center">
                <p className="text-sm text-accent font-semibold mb-4">
                  🔒 Acesso vitalício. Garantido.
                </p>
              </div>
              
              <Button 
                variant="decline" 
                size="lg" 
                className="w-full"
              >
                <X className="w-4 h-4 mr-2" />
                Prefiro continuar lendo as histórias comuns...
              </Button>
              
              <p className="text-center text-sm text-muted-foreground">
                Sem acesso aos capítulos secretos, sem histórias exclusivas, e sem o clube fechado.
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Guarantee Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-8 bg-gradient-card border border-accent/30">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-16 h-16 text-accent" />
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-4">
              💎 GARANTIA DE 30 DIAS
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