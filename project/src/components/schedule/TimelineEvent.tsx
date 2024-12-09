import { Clock } from 'lucide-react';
import { TimelineEvent as TimelineEventType } from '../../types';

interface TimelineEventProps {
  event: TimelineEventType;
  isLast?: boolean;
}

export default function TimelineEvent({ event, isLast = false }: TimelineEventProps) {
  return (
    <div className="relative pb-8">
      {!isLast && (
        <span
          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        />
      )}
      <div className="relative flex space-x-3">
        <div>
          <span className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center ring-8 ring-white">
            <Clock className="h-5 w-5 text-white" />
          </span>
        </div>
        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
          <div>
            <p className="text-sm font-medium text-gray-900">{event.title}</p>
            <p className="mt-2 text-sm text-gray-500">{event.description}</p>
          </div>
          <div className="whitespace-nowrap text-right text-sm text-gray-500">
            <time>{event.time}</time>
          </div>
        </div>
      </div>
    </div>
  );
}