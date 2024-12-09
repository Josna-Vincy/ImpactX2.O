import { GraduationCap } from 'lucide-react';

export default function CollegeInfo() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <GraduationCap className="h-8 w-8 text-indigo-600 mr-3" />
        <h2 className="text-2xl font-bold">St. Joseph's Institute of Technology</h2>
      </div>
      <div className="space-y-6">
        <p className="text-gray-600">
          St. Joseph's Institute of Technology, established in 2011, has grown into one of the premier
          engineering institutions in Chennai. The college focuses on providing quality technical education
          while nurturing innovation and research.
        </p>
      </div>
    </div>
  );
}