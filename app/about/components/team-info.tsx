export default function TeamInfo() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      bio: 'Former AI Research Lead at Tech Giants. 15+ years experience in AI and Machine Learning.',
    },
    {
      name: 'David Chen',
      role: 'CTO & Co-Founder',
      bio: 'Previously led engineering teams at Fortune 500 companies. Expert in scalable AI solutions.',
    },
    {
      name: 'Maria Rodriguez',
      role: 'Head of Product',
      bio: 'Product strategist with a decade of experience in SaaS and AI products.',
    },
    {
      name: 'James Wilson',
      role: 'Head of AI Research',
      bio: 'PhD in Machine Learning. Published researcher with focus on business automation.',
    }
  ];

  return (
    <section className="py-20 px-5 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text" data-aos="fade-up" data-aos-delay="100">
          Meet Our Leadership Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="100">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white text-3xl font-bold">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}