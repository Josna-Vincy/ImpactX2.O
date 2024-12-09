import { useState, useEffect } from 'react';

const HACKATHON_START = new Date('2025-01-24T10:00:00').getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = HACKATHON_START - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Hackathon Starts In</h2>
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-indigo-100 p-4 rounded-lg">
          <div className="text-3xl font-bold text-indigo-600">{timeLeft.days}</div>
          <div className="text-gray-600">Days</div>
        </div>
        <div className="bg-indigo-100 p-4 rounded-lg">
          <div className="text-3xl font-bold text-indigo-600">{timeLeft.hours}</div>
          <div className="text-gray-600">Hours</div>
        </div>
        <div className="bg-indigo-100 p-4 rounded-lg">
          <div className="text-3xl font-bold text-indigo-600">{timeLeft.minutes}</div>
          <div className="text-gray-600">Minutes</div>
        </div>
        <div className="bg-indigo-100 p-4 rounded-lg">
          <div className="text-3xl font-bold text-indigo-600">{timeLeft.seconds}</div>
          <div className="text-gray-600">Seconds</div>
        </div>
      </div>
    </div>
  );
}