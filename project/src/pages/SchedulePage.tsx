import TimelineEvent from '../components/schedule/TimelineEvent';
import { timelineEvents } from '../data/timeline';
import CountdownTimer from '../components/shared/CountdownTimer';
import AccommodationInfo from '../components/schedule/AccommodationInfo';
import RulesAndPrizes from '../components/shared/RulesAndPrizes';

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Event Schedule</h1>
          <p className="mt-4 text-xl text-gray-600">24-hour journey of innovation</p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <CountdownTimer />
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flow-root">
              <ul role="list" className="-mb-8">
                {timelineEvents.map((event, idx) => (
                  <li key={event.time}>
                    <TimelineEvent
                      event={event}
                      isLast={idx === timelineEvents.length - 1}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <AccommodationInfo />

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Important Notes</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              Participants must bring their own laptops and necessary equipment
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              Meal breaks will be announced at the venue
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              Judging criteria and detailed guidelines will be shared during the opening ceremony
            </li>
          </ul>
        </div>
      </div>
      
      <RulesAndPrizes />
    </div>
  );
}