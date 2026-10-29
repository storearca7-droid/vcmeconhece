export interface ContactLead {
  id: string;
  name: string;
  company?: string;
  whatsapp: string;
  email: string;
  segment: string;
  interestType: 'plano_mensal' | 'sistema_personalizado';
  message?: string;
  createdAt: string;
}

export type PaymentStatus = 'pending' | 'approved' | 'failed' | 'canceled';

export interface SubscriptionCheckout {
  planId: string;
  planName: string;
  priceMonthly: number;
  merchantName: string;
  merchantStore: string;
  merchantWhatsapp: string;
  merchantEmail: string;
  paymentStatus: PaymentStatus;
}
