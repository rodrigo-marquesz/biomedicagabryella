interface Step {
  number: string
  title: string
  description: string
}

interface ProcessStepsProps {
  steps: Step[]
  title: string
}

export const ProcessSteps = ({ steps, title }: ProcessStepsProps) => {
  return (
    <div className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-[var(--color-marrom-claro)]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[var(--color-marrom-claro)] text-sm font-light tracking-wide">
              COMO FUNCIONA
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-light text-gray-900">
            {title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[var(--color-marrom-claro)] to-[var(--color-marrom-escuro)] text-white rounded-xl flex items-center justify-center text-xl sm:text-2xl font-light mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  {step.number}
                </div>
                <h4 className="text-lg sm:text-xl font-light text-gray-900 mb-3">
                  {step.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-[var(--color-marrom-claro)] to-transparent opacity-30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
