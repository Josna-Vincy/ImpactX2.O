import { Trophy, ScrollText } from 'lucide-react';

export default function RulesAndPrizes() {
    return (
        <div className="my-8 w-full">
            <div className="group">
                <button
                    className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors mb-4"
                    aria-label="Show Rules and Prizes"
                >
                    <ScrollText className="h-6 w-6" />
                </button>

                <div className="w-full bg-white rounded-lg shadow-xl p-6">
                    <div className="flex flex-col items-center mb-6">
                        <h3 className="text-lg font-bold mb-2">Rules & Prizes</h3>
                        <Trophy className="h-8 w-8 text-yellow-500 mb-4" />

                        {/* Highlighted Prize Pool */}
                        <h4 className="font-bold text-indigo-800 text-2xl md:text-3xl mb-2 text-center">
                            Prize Pool: ₹20,000
                        </h4>
                    </div>

                    <div className="mb-6 text-center">
                        <p className="text-sm text-gray-600">
                            Compete for exciting prizes and recognition!
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-semibold">Key Rules:</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li><strong>• Participants should submit their PPT in PDF format and must follow the
                                template given on the home page.</strong></li>
                            <li><strong>• At least 1 female member should be present in a team.</strong></li>
                            <li><strong>• All team members must stay at venue for full 24 hours.</strong></li>
                            <li><strong>• As the hackathon is only for Engineering college students, it is mandatory to
                                submit the ID proof of all the participants in a single PDF file.</strong></li>
                            <li>• Original work only</li>
                            <li>• Team size: 2-4 members</li>
                            <li>• Follow code of conduct</li>
                            <li>• Dress code is strictly followed for all members in the team.</li>
                            <li>• Submit the PDF before deadline. i.e., 10th Jan, 2025.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}