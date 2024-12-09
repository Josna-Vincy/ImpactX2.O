import { Globe } from 'lucide-react';

export default function IEEEInfo() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <Globe className="h-8 w-8 text-indigo-600 mr-3" />
        <h2 className="text-2xl font-bold">IEEE</h2>
      </div>
      <div className="space-y-6">
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">About IEEE</h3>
          <p className="text-gray-600">
            IEEE is the world's largest technical professional organization dedicated to advancing technology
            for the benefit of humanity. Through its highly cited publications, conferences, technology
            standards, and professional and educational activities, IEEE is the trusted voice in a wide
            variety of areas.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">IEEE Madras Section</h3>
          <p className="text-gray-600">
            IEEE Madras Section, established in 1978, has been actively promoting IEEE activities in the
            region. The section has been instrumental in organizing various technical events, conferences,
            and workshops to benefit the student and professional community.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">IEEE SJIT Student Branch</h3>
          <p className="text-gray-600">
            The IEEE Student Branch at St. Joseph's Institute of Technology serves as a hub for technical
            activities and professional development. Through various events and initiatives, including the
            ImpactX hackathon series, the student branch aims to foster innovation and technical excellence
            among students.
          </p>
        </div>
      </div>
    </div>
  );
}