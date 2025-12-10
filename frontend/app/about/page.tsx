export default function About() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <div className="bg-blue-900 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl font-bold text-white sm:text-4xl">About Advisure</h1>
                    <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
                        Filling the infrastructure gap between investment advice and life insurance planning.
                    </p>
                </div>
            </div>

            {/* Mission / Context */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="prose prose-blue prose-lg text-gray-500 mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900">Why Now?</h2>
                    <p>
                        The intersection of wealth transfer pressure, rising RIA dominance, dissatisfaction with legacy insurance, and the maturity of digital infrastructure creates a window of opportunity. Advisure is uniquely positioned to provide the infrastructure gap between investment advice and life insurance planning — at the precise moment the market is demanding it.
                    </p>
                    <ul>
                        <li><strong>Exploding Demand for Tax-Advantaged Structures:</strong> Affluent clients are urgently seeking new ways to shelter and transfer wealth.</li>
                        <li><strong>RIAs Need Scalable Insurance Infrastructure:</strong> Most firms lack a modern way to offer life insurance within their planning stack.</li>
                        <li><strong>Digital Experience:</strong> High-net-worth clients demand transparency and a tech-driven experience.</li>
                    </ul>
                </div>
            </div>

            {/* Team */}
            <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Our Leadership</h2>
                        <p className="mt-4 text-xl text-gray-500">
                            Led by a highly skilled founding team with a proven track record.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {/* Don Plotsky */}
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 font-bold text-xl">DP</div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">Don Plotsky</h3>
                                    <p className="text-blue-600">Co-Founder</p>
                                </div>
                            </div>
                            <p className="text-gray-500">
                                Managing Partner, Uinta Investment Partners. With over 30 years of experience in investment management, Don brings deep expertise in portfolio construction, alternative investments, and product strategy. His leadership spans multiple market cycles and asset classes.
                            </p>
                        </div>

                        {/* Zayda Marrie */}
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 font-bold text-xl">ZM</div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">Zayda Marrie</h3>
                                    <p className="text-blue-600">Co-Founder</p>
                                </div>
                            </div>
                            <p className="text-gray-500">
                                Former Executive, AIG & MetLife. A seasoned leader in the insurance industry, Zayda has over two decades of experience driving product innovation, distribution strategy, and enterprise growth. She successfully led initiatives generating over $5 billion in economic value.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
