export default function OfficeLocations() {
  const offices = [
    {
      city: "New York",
      country: "United States",
      address: "123 Tech Plaza, 10th Floor",
      area: "Manhattan, NY 10001",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM EST",
      type: "Headquarters",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "45 Innovation Street",
      area: "Shoreditch, EC2A 4BX",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM GMT",
      type: "European Office",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      )
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "88 Digital Hub, Level 23",
      area: "Downtown Core, 018956",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM SGT",
      type: "Asia-Pacific Office",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
          Our Global Offices
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  {office.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{office.city}</h3>
                  <p className="text-gray-600 mb-4">{office.country}</p>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-gray-600">
                <p>{office.address}</p>
                <p>{office.area}</p>
                <p className="text-sm">{office.hours}</p>
                <p className="text-blue-600 font-medium">{office.type}</p>
              </div>

              <div className="mt-6 flex gap-4">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                  Get Directions
                </button>
                <button className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors">
                  Schedule Visit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Virtual Office Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            In addition to our physical locations, we maintain virtual offices worldwide to 
            better serve our global customer base. Contact us to connect with a representative 
            in your region.
          </p>
        </div>
      </div>
    </section>
  );
}