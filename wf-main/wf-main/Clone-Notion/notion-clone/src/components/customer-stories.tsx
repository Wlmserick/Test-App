"use client";
import React, { useEffect, useRef, useState } from "react"
export default function CustomerStories() {
  // Individual-focused productivity stories
  const stories = [
    {
      avatar: "/icons/avatar1.png",
      quote: "WorkFlow helped me finally stick to my daily plan. I get more done and feel less stressed.",
      name: "Alex P.",
      detail: "Completed 100+ tasks with AI reminders"
    },
    {
      avatar: "/icons/avatar2.png",
      quote: "The AI insights show me when I’m most productive. Now I schedule my focus sessions for the right time.",
      name: "Jamie L.",
      detail: "3x more focus time each week"
    },
    {
      avatar: "/icons/avatar3.png",
      quote: "Writing with WorkFlow’s AI is a game changer. I finish my notes and articles faster than ever.",
      name: "Morgan S.",
      detail: "Daily writing streak: 14 days"
    },
  ];

  // Stats with numeric values for animation
  const stats = [
    { value: 100, suffix: "+", label: "tasks completed", duration: 1200 },
    { value: 3, suffix: "x", label: "more focus time", duration: 1000 },
    { value: 14, suffix: "", label: "day writing streak", duration: 1000 },
    { value: 92, suffix: "%", label: "goal achievement rate", duration: 1000 },
    { value: 7, suffix: "h", label: "avg. deep work/week", duration: 1000 },
    { value: 5, suffix: "", label: "AI-powered templates used", duration: 1000 },
  ];

  // Count up animation hook
  function useCountUp(target: number, duration: number) {
    const [count, setCount] = useState(0);
    const raf = useRef<number>();
    useEffect(() => {
      let start: number | null = null;
      function step(ts: number) {
        if (start === null) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          raf.current = requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      }
      raf.current = requestAnimationFrame(step);
      return () => raf.current && cancelAnimationFrame(raf.current);
    }, [target, duration]);
    return count;
  }

  return (
    <section className="px-4 py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-8">Productivity stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, idx) => (
              <div
                key={story.name}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1 flex flex-col items-center text-center"
              >
                <img
                  src={story.avatar}
                  alt={story.name + ' avatar'}
                  className="w-14 h-14 rounded-full mb-4 object-cover border-2 border-blue-200 dark:border-blue-700 bg-white"
                  loading="lazy"
                />
                <blockquote className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">“{story.quote}”</blockquote>
                <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">{story.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{story.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* (Stats section removed as requested) */}
      </div>
    </section>
  );
}
