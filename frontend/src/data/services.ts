export const hairServices = [
  { name: 'PRP Hair Growth Treatment', price: '₹4,000 – ₹10,000/session', offer: 'Up To 40% OFF' },
  { name: 'GFC Hair Treatment', price: '₹5,000 – ₹10,000/session', offer: 'Up To 40% OFF' },
  { name: 'Hair Transplant', price: 'Consult for Pricing', offer: null },
  { name: 'Hair Fall Treatment Programs', price: 'Consult for Pricing', offer: null },
  { name: 'Hair Regrowth Programs', price: 'Consult for Pricing', offer: null },
  { name: 'Hair Extensions', price: 'Consult for Pricing', offer: null },
];

export const aestheticServices = [
  { name: 'Hollywood Peel', category: 'Chemical Peel' },
  { name: 'Laser Toning', category: 'Laser Skin Treatment' },
  { name: 'Laser Hair Reduction', category: 'Laser Hair Removal' },
  { name: 'Carbon Peel / Carbon Laser', category: 'Laser Skin Rejuvenation' },
  { name: 'PMU Eyebrows', category: 'Permanent Makeup' },
  { name: 'PMU Lip Blush', category: 'Permanent Makeup' },
  { name: 'SMP Scalp Micro-Pigmentation', category: 'Scalp Tattooing' },
];

export const salonServices = [
  'Hair Botox', 'Haircuts & Styling', 'Facials', 'De-tan Treatment',
  'Shaving & Beard Grooming', 'Hair Spa', 'Eyebrow Shaping', 'Waxing', 'Kids Haircuts',
];

export function getServicesListText(): string {
  const lines: string[] = [];
  lines.push('*HAIR TREATMENTS*');
  hairServices.forEach(s => {
    const offer = s.offer ? ` (${s.offer})` : '';
    lines.push(`- ${s.name}: ${s.price}${offer}`);
  });
  lines.push('');
  lines.push('*AESTHETIC & LASER TREATMENTS*');
  aestheticServices.forEach(s => {
    lines.push(`- ${s.name} (${s.category})`);
  });
  lines.push('');
  lines.push('*SALON SERVICES*');
  lines.push(`- ${salonServices.join(', ')}`);
  return lines.join('\n');
}

export function getWhatsAppUrl(prefilledMessage?: string): string {
  const services = getServicesListText();
  const message = prefilledMessage
    ? `${prefilledMessage}\n\n${services}`
    : `Hi! I'm interested in your services.\n\n${services}`;
  return `https://wa.me/918478060606?text=${encodeURIComponent(message)}`;
}
