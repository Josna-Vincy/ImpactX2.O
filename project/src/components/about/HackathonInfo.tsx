import { Code2 } from 'lucide-react';

export default function HackathonInfo() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <Code2 className="h-8 w-8 text-indigo-600 mr-3" />
        <h2 className="text-2xl font-bold">ImpactX Hackathon Series</h2>
      </div>
      <p className="text-gray-600 mb-6">
        ImpactX, launched in 2023, is IEEE SJIT Student Branch's flagship hackathon event. After a successful
        first edition with over 200 participants, we're back with ImpactX2.0 to provide an even better
        platform for innovation and creativity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">First Edition Highlights</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>200+ enthusiastic participants</li>
            <li>Diverse range of innovative projects</li>
            <li>Successful student collaborations</li>
            <li>Platform for showcasing talent</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">What's New in 2.0</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Enhanced prize pool</li>
            <li>Industry mentorship program</li>
            <li>Improved project evaluation criteria</li>
          </ul>
        </div>
      </div>
    </div>
  );
}