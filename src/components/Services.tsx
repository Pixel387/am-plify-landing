import './Services.css';
import { MessageSquare, TrendingUp, Globe, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: <Globe size={32} />,
    title: 'CPaaS Strategy',
    description: 'Tailored advice on selecting and implementing the right CPaaS platforms for your business needs.'
  },
  {
    icon: <MessageSquare size={32} />,
    title: 'Multichannel Messaging',
    description: 'Expertise in A2P SMS, Viber, WhatsApp, and Telegram integration to maximize reach and engagement.'
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Sales Growth',
    description: 'Optimizing full sales cycles, from partner acquisition to C-level relationship management.'
  },
  {
    icon: <BarChart3 size={32} />,
    title: 'Revenue Optimization',
    description: 'Data-driven analysis of traffic and revenue spikes to ensure consistent business growth.'
  }
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How I Can <span className="gradient-text">Help</span></h2>
          <p className="section-subtitle">Comprehensive consulting services for the modern messaging industry.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
