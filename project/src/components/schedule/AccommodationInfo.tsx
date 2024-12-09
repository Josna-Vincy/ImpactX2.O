import { Hotel, AlertCircle } from 'lucide-react';

export default function AccommodationInfo() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-12">
      <div className="flex items-center mb-4">
        <Hotel className="h-6 w-6 text-indigo-600 mr-2" />
        <h2 className="text-2xl font-bold">Accommodation Information</h2>
      </div>
      
      <div className="space-y-4">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <AlertCircle className="h-5 w-5 text-yellow-400" />
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Important Notice</h3>
              <p className="mt-2 text-sm text-yellow-700">
                Participants must stay at the venue for the entire 24-hour duration. No exceptions for leaving the venue will be permitted.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold">Prior Day Accommodation</h3>
          <p className="text-gray-600">
            If you require accommodation for the day before the event, please inform the organizers at least 2 weeks in advance.
            This will help us make necessary arrangements.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold">What to Bring</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Personal toiletries</li>
            <li>Change of clothes</li>
            <li>Any required medications</li>
            <li>Laptop and charger</li>
          </ul>
        </div>
      </div>
    </div>
  );
}