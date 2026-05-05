const channels = ["WhatsApp", "Viber", "RCS", "SMS", "Telegram"];

export default function Services() {
  return (
    <section id="services" className="container" style={{ padding: '80px 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Implementation Strategy</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          Helping SMBs and Boutique Hubs navigate the complex messaging landscape.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {/* Блок для МСБ */}
        <div className="service-card" style={{ padding: '2.5rem', background: 'var(--bg-card)', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <h3 style={{ color: 'var(--accent)', fontSize: '1.5rem', marginBottom: '1rem' }}>For SMBs</h3>
          <p style={{ margin: '1rem 0', fontSize: '0.95rem', color: 'var(--text-muted)' }}>Fast-track your communication setup without technical overhead.</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {channels.map(ch => (
              <li key={ch} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: 'var(--accent)', marginRight: '12px', fontWeight: 'bold' }}>→</span> {ch} Strategy
              </li>
            ))}
          </ul>
        </div>

        {/* Блок для Агрегаторов */}
        <div className="service-card" style={{ padding: '2.5rem', background: 'var(--bg-card)', borderRadius: '20px', border: '1px solid var(--accent)', boxShadow: '0 0 20px rgba(56, 189, 248, 0.1)' }}>
          <h3 style={{ color: 'var(--accent)', fontSize: '1.5rem', marginBottom: '1rem' }}>For Small Aggregators</h3>
          <p style={{ margin: '1rem 0', fontSize: '0.95rem', color: 'var(--text-muted)' }}>Route optimization and vendor sourcing for high-volume traffic.</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'var(--accent)', marginRight: '12px', fontWeight: 'bold' }}>✓</span> Global Carrier Relations
            </li>
            <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'var(--accent)', marginRight: '12px', fontWeight: 'bold' }}>✓</span> RCS & WABA Onboarding
            </li>
            <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'var(--accent)', marginRight: '12px', fontWeight: 'bold' }}>✓</span> Anti-fraud & DLR Monitoring
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
