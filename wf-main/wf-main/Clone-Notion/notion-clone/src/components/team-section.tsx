export default function TeamSection() {
  // Individual productivity use cases
  // Restore original emoji icons for each use case
  const useCases = [
    {
      icon: "📅",
      title: "Daily Planning",
      description: "Organize your day with tasks, notes, and reminders in one place."
    },
    {
      icon: "🎯",
      title: "Goal Tracking",
      description: "Set, track, and achieve your personal goals with visual progress."
    },
    {
      icon: "⏳",
      title: "Focus Sessions",
      description: "Boost productivity with distraction-free timers and session logs."
    },
    {
      icon: "📚",
      title: "Personal Knowledge Base",
      description: "Capture ideas, learnings, and resources for easy reference."
    },
    {
      icon: "🤖",
      title: "AI-Powered Writing",
      description: "Get instant suggestions, summaries, and improvements as you write."
    },
  ];

  return (
    <section className="px-4 py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Designed for your productivity.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            WorkFlow adapts to your unique work style—plan, focus, and grow with AI-powered tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{useCase.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
