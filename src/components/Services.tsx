import { MessageSquare, MessageCircle, Smartphone, Send, Globe, ShieldCheck, Zap, Users } from 'lucide-react';

const channels = [
  { name: "WhatsApp", icon: <MessageCircle size={40} /> },
  { name: "Viber", icon: <MessageSquare size={40} /> },
  { name: "RCS", icon: <Smartphone size={40} /> },
  { name: "SMS", icon: <Zap size={40} /> },
  { name: "Telegram", icon: <Send size={40} /> },
];

export default function Services() {
  return (
    <section id="services" className="container" style={{ padding: '100px 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Implementation Strategy</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          Expert navigation through the global messaging landscape for businesses and hubs.
        </p>
      </div>

      {/* Сетка каналов */}
      <div style={{ marginBottom: '5rem' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.8rem', opacity: 0.9 }}>Omnichannel Coverage</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {channels.map(ch => (
            <div key={ch.name} style={{ 
              padding: '2rem', 
              background: 'var(--bg-card)', 
              borderRadius: '20px', 
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.borderColor = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            }}
            >
              <div style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                {ch.icon}
              </div>
              <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>{ch.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
        {/* Блок для МСБ */}
        <div style={{ padding: '3rem', background: 'var(--bg-card)', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <div style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}><Users size={40} /></div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>For SMBs</h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Fast-track your communication setup without technical overhead. 
            Direct implementation and strategic consulting for growing businesses.
          </p>
        </div>

        {/* Блок для Агрегаторов */}
        <div style={{ 
          padding: '3rem', 
          background: 'var(--bg-card)', 
          borderRadius: '24px', 
          border: '1px solid var(--accent)',
          boxShadow: '0 10px 30px rgba(56, 189, 248, 0.1)'
        }}>
          <div style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}><Globe size={40} /></div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>For Aggregators</h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Route optimization and vendor sourcing for high-volume traffic.
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <ShieldCheck size={20} style={{ color: 'var(--accent)', marginRight: '12px' }} /> 
              Global Carrier Relations
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <ShieldCheck size={20} style={{ color: 'var(--accent)', marginRight: '12px' }} /> 
              RCS & WABA Onboarding
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <ShieldCheck size={20} style={{ color: 'var(--accent)', marginRight: '12px' }} /> 
              Anti-fraud & DLR Monitoring
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
