import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Advisure
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Empowering RIAs with Private Placement Life Insurance solutions.
            Enhance tax efficiency, access tier 1 products, and optimize wealth for your HNW clients.
          </p>
          <div className="mt-10 flex space-x-4">
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50"
            >
              Try the Calculator
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Value Props */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why PPLI?</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A Better Way to Build Wealth
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <p className="text-lg leading-6 font-medium text-gray-900">Tax Efficiency</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Tax-deferred growth and tax-free distributions. Keep more of what you earn.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <p className="text-lg leading-6 font-medium text-gray-900">Tier 1 Access</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Access institutional-grade investment strategies typically reserved for insurers.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <p className="text-lg leading-6 font-medium text-gray-900">Lower Costs</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Transparent, flat-fee structures that eliminate high commissions.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
