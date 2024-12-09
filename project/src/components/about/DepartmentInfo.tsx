import { Cpu } from 'lucide-react';

export default function DepartmentInfo() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <Cpu className="h-8 w-8 text-indigo-600 mr-3" />
        <h2 className="text-2xl font-bold">Department of ECE</h2>
      </div>
      <p className="text-gray-600 mb-6">
        The Department of Electronics and Communication Engineering at St. Joseph's Institute of Technology
        is committed to excellence in education, research, and innovation. Our state-of-the-art facilities
        and experienced faculty members provide students with the perfect environment to grow and excel.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border-l-4 border-indigo-600 pl-4">
          <h3 className="font-semibold mb-2">Vision</h3>
          <p className="text-gray-600">
            To be a center of excellence in Electronics and Communication Engineering education,
            research, and innovation.
          </p>
        </div>
        <div className="border-l-4 border-indigo-600 pl-4">
          <h3 className="font-semibold mb-2">Mission</h3>
          <p className="text-gray-600">
            To nurture technical talent and leadership qualities in students through quality education
            and practical exposure.
          </p>
        </div>
      </div>
    </div>
  );
}