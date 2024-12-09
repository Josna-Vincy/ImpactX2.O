import CountdownTimer from '../components/shared/CountdownTimer';

export default function HomePage() {
  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="absolute inset-0">
            <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                alt="Hackathon background"
                className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">ImpactX2.0</h1>
            <p className="text-xl md:text-2xl mb-8">Sense Of Innovation, Versatility, And Possibility</p>

            {/* Registration Deadline */}
            <div className="bg-white text-indigo-600 max-w-lg mx-auto rounded-md shadow-lg p-4 mb-8">
              <p className="text-2xl font-bold">Registration Deadline:</p>
              <p className="text-3xl font-extrabold mt-2">January 10, 2025</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <CountdownTimer />
            </div>
            <a
                href="https://forms.gle/1quQeWCErUifKDRu7"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-white text-indigo-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Register Now
            </a>
          </div>
        </section>

        {/* Theme Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-center md:text-left mb-4">Hackathon Theme</h2>
              <p className="text-xl text-center md:text-left text-gray-700 mb-4">
                This year, our hackathon theme is centered around the 17 Sustainable Development Goals (SDGs).
                Participants are encouraged to create projects that address these global challenges, ranging from
                poverty reduction to climate action.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
              <img src="https://4gamechangers.io/_ipx/w_1800,f_webp,q_80,fit_cover/gc/assets/sdg_logo.png" alt="SDG Logo" className="max-w-full h-auto"/>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Participate?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">Transform your ideas into reality with cutting-edge technology</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-2">Networking</h3>
                <p className="text-gray-600">Connect with like-minded innovators and industry experts</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-2">Prizes</h3>
                <p className="text-gray-600">Win exciting prizes and recognition for your innovations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Fee Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Registration Details</h2>
            <p className="text-center text-gray-600 mb-4">
              Note: There is no registration fee, but it is expected that each team should have at least 1 female member.
              Also, the team could have at least 1 IEEE member preferably. Submitted projects will be evaluated, and only
              selected teams will proceed further in the event. The selected teams will be communicated via email.
            </p>
            <div className="max-w-md mx-auto bg-white rounded-md shadow-lg p-6 mb-8">
              <p className="text-xl font-semibold mb-4 text-center">Registration Fee</p>
              <ul className="list-none text-center text-gray-600">
                <li className="mb-2"><strong>NO REGISTRATION FEE</strong></li>
              </ul>
            </div>

            {/* PPT Template Section */}
            <div className="max-w-md mx-auto bg-white rounded-md shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-center">Presentation Template</h3>
              <p className="text-center text-gray-600 mb-4">
                Follow the provided PowerPoint template for your presentations. It contains guidelines on structure,
                visuals, and format to ensure consistency across all submissions. Participants are required to submit their PPT in PDF format during their registration in the form.
              </p>
              <div className="flex justify-center">
                <a
                    href="https://docs.google.com/presentation/d/1v2pRJufN5cY6PpoJt3phlWfdBTaZ0GPF/edit?usp=drive_link&ouid=115188530053434564689&rtpof=true&sd=true"
                    download
                    className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-indigo-500 transition-colors text-center"
                >
                  Download Template
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}