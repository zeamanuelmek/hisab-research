export function Conclusion() {
  return (
    <section id="conclusion" className="py-20 px-6 bg-gradient-to-br from-research-purple/20 via-research-bg to-research-pink/20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What's Next?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-research-purple to-research-pink mx-auto mb-8" />
        </div>

        {/* MVP Summary */}
        <div className="bg-research-card/50 backdrop-blur-sm border border-research-gray-800 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-research-purple">V1.1 MVP Scope</h3>
          <p className="text-lg text-research-gray-300 mb-6">
            Based on this research, we're building a focused MVP that solves the #1 pain point:
            <span className="text-research-pink font-bold"> payment protection</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-research-bg/50 rounded-lg p-6">
              <div className="text-3xl mb-2">🔒</div>
              <h4 className="font-bold text-sm mb-2">Milestone Escrow</h4>
              <p className="text-xs text-research-gray-400">
                Secure payment holding until work is approved
              </p>
            </div>
            <div className="bg-research-bg/50 rounded-lg p-6">
              <div className="text-3xl mb-2">📝</div>
              <h4 className="font-bold text-sm mb-2">Digital Contracts</h4>
              <p className="text-xs text-research-gray-400">
                Professional templates with e-signatures
              </p>
            </div>
            <div className="bg-research-bg/50 rounded-lg p-6">
              <div className="text-3xl mb-2">💳</div>
              <h4 className="font-bold text-sm mb-2">TeleBirr Integration</h4>
              <p className="text-xs text-research-gray-400">
                Seamless Ethiopian payment processing
              </p>
            </div>
          </div>

          {/* Success Metric */}
          <div className="bg-gradient-to-r from-research-purple/20 to-research-pink/20 rounded-lg p-6">
            <p className="text-sm text-research-gray-400 mb-2">Target Success Metric</p>
            <p className="text-2xl font-bold text-gradient-purple-pink">
              50 completed projects in 6 months
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center">
          <p className="text-research-gray-400 mb-4">
            This research synthesis was conducted by
          </p>
          <p className="text-2xl font-bold mb-2">Zeamanuel</p>
          <p className="text-research-gray-500 mb-8">Product Designer, Hisab</p>

          <div className="inline-flex items-center gap-3 px-6 py-3 bg-research-card border border-research-gray-800 rounded-full">
            <svg className="w-5 h-5 text-research-purple" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-sm text-research-gray-400">
              Ready to discuss implementation
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-research-gray-800">
          <p className="text-xs text-research-gray-600">
            © 2026 Hisab • Ethiopia's First Freelancer Protection Platform
          </p>
        </div>
      </div>
    </section>
  );
}
