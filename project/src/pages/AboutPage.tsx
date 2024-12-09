import CollegeInfo from '../components/about/CollegeInfo';
import DepartmentInfo from '../components/about/DepartmentInfo';
import IEEEInfo from '../components/about/IEEEInfo';
import HackathonInfo from '../components/about/HackathonInfo';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
          <p className="mt-4 text-xl text-gray-600">Learn more about our institution and the hackathon</p>
        </div>
        
        <div className="space-y-12">
          <IEEEInfo />
          <CollegeInfo />
          <DepartmentInfo />
          <HackathonInfo />
        </div>
      </div>
    </div>
  );
}