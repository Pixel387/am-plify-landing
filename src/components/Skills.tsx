import './Skills.css';

const skillCategories = [
  {
    title: 'Messaging & CPaaS',
    skills: ['A2P SMS', 'OTT (Viber, WhatsApp, Telegram)', 'RCS', 'ChatBots', 'Omnichannel Messaging', 'CPaaS Platforms']
  },
  {
    title: 'Sales & Strategy',
    skills: ['Full Sales Cycle', 'Partner Acquisition', 'C-Level Relationship', 'Contract Negotiation', 'RFP Creation']
  },
  {
    title: 'Tools & Analysis',
    skills: ['Salesforce', 'HubSpot', 'AmoCRM', 'Revenue Analysis', 'Data Spikes Investigation', 'BREVO']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Expertise & <span className="gradient-text">Skills</span></h2>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, sIndex) => (
                  <span key={sIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
