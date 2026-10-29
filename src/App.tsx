import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SegmentsSection } from './components/SegmentsSection';
import { PainPointsSection } from './components/PainPointsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { MultiDeviceSection } from './components/MultiDeviceSection';
import { BenefitsSection } from './components/BenefitsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PricingSection } from './components/PricingSection';
import { CustomSystemSection } from './components/CustomSystemSection';
import { FaqSection } from './components/FaqSection';
import { InstagramSection } from './components/InstagramSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CheckoutModal } from './components/CheckoutModal';
import { CustomerLoginModal } from './components/CustomerLoginModal';
import { LegalModal, LegalDocType } from './components/LegalModal';

export const App: React.FC = () => {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [legalDocType, setLegalDocType] = useState<LegalDocType | null>(null);

  return (
    <div className="min-h-screen bg-[#F5F8FC] text-slate-800 flex flex-col font-sans selection:bg-[#FF8617] selection:text-white">
      {/* Fixed Navigation Header */}
      <Header
        onOpenCheckout={() => setCheckoutModalOpen(true)}
        onOpenLogin={() => setLoginModalOpen(true)}
      />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Target Segments ("Para quem é o Varejou?") */}
        <SegmentsSection onOpenCheckout={() => setCheckoutModalOpen(true)} />

        {/* 3. Pain Points & Solution Transition */}
        <PainPointsSection onOpenCheckout={() => setCheckoutModalOpen(true)} />

        {/* 4. Complete Feature Modules Breakdown */}
        <FeaturesSection onOpenCheckout={() => setCheckoutModalOpen(true)} />

        {/* 5. Multi-device Management */}
        <MultiDeviceSection onOpenCheckout={() => setCheckoutModalOpen(true)} />

        {/* 6. Strategic Core Benefits */}
        <BenefitsSection onOpenCheckout={() => setCheckoutModalOpen(true)} />

        {/* 7. How it Works (4-Step Timeline) */}
        <HowItWorksSection onOpenCheckout={() => setCheckoutModalOpen(true)} />

        {/* 8. Commercial Plan (R$ 29,90/mês) */}
        <PricingSection
          onOpenCheckout={() => setCheckoutModalOpen(true)}
          onOpenCancellationPolicy={() => setLegalDocType('cancellation')}
        />

        {/* 9. Bespoke Custom Software (Agência RAON) */}
        <CustomSystemSection />

        {/* 10. Frequently Asked Questions (Accordion) */}
        <FaqSection />

        {/* 11. Official Instagram Showcase */}
        <InstagramSection />

        {/* 12. Commercial Contact Form & Channels */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={(type) => setLegalDocType(type)} />

      {/* Floating Interactive Elements */}
      <FloatingWhatsApp />

      {/* Modals & Dialogs */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
      />

      <CustomerLoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onOpenCheckout={() => setCheckoutModalOpen(true)}
      />

      <LegalModal
        type={legalDocType}
        onClose={() => setLegalDocType(null)}
      />
    </div>
  );
};

export default App;
