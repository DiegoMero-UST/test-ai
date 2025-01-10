export default function PricingCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-5 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Choose the perfect plan for your needs or contact our sales team for a customized solution.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Sign Up Today
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors">
            Contact Sales
          </button>
        </div>

        <p className="mt-8 text-sm text-white/80">
          No credit card required for free tier • 14-day Pro trial available
        </p>
      </div>
    </section>
  );
}
