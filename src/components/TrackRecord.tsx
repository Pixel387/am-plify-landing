import './TrackRecord.css';

const highlights = [
  { label: 'Revenue Growth', value: '155%' },
  { label: 'Leads Processed', value: '300/mo' },
  { label: 'Target Outreach', value: '3,000+' },
  { label: 'Market Experience', value: '10+ Years' },
];

export default function TrackRecord() {
  return (
    <section id="experience" className="track-record-section">
      <div className="container">
        <div className="track-record-grid">
          <div className="track-record-content">
            <h2 className="section-title">Proven <span className="gradient-text">Track Record</span></h2>
            <p className="description">
              As Head of Sales and Business Development Manager, I have consistently exceeded quotas and built end-to-end sales processes for major telecom players.
            </p>
            <div className="stats-grid">
              {highlights.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="partners-text">Trusted by industry leaders including MTS Belarus, A1, Link Mobility, Mastercard, and more.</p>
          </div>
          <div className="track-record-visual">
             <div className="visual-card">
                <h3>Key Achievement</h3>
                <p>Acquired strategic aggregator partner generating 155% of department revenue.</p>
             </div>
             <div className="visual-card accent">
                <h3>Global Reach</h3>
                <p>Managed full sales cycles across multi-stakeholder deal structures with international MNOs.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
