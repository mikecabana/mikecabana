'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

const DEFAULT_TZ = 'America/Toronto'

function getTimeLeft(
  goalDate: string | Date,
  timeZone: string,
): {
  days: number
  hours: number
  minutes: number
  seconds: number
} {
  const now = new Date()

  // Convert the goal date to the specified timezone
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })

  // Format the goalDate in the given timezone
  const parts = formatter.formatToParts(new Date(goalDate))
  const dateParts: Record<string, string> = {}
  for (const part of parts) {
    if (part.type !== 'literal') {
      dateParts[part.type] = part.value
    }
  }

  const goal = new Date(
    `${dateParts.year}-${dateParts.month}-${dateParts.day}T${dateParts.hour}:${dateParts.minute}:${dateParts.second}`,
  )

  const diffMs = goal.getTime() - now.getTime()

  const totalSeconds = Math.max(Math.floor(diffMs / 1000), 0)
  const days = Math.floor(totalSeconds / (3600 * 24))
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}

function formatCountdown(timeLeft: {
  days: number
  hours: number
  minutes: number
  seconds: number
}) {
  return {
    days: String(timeLeft.days).padStart(3, '0'),
    hours: String(timeLeft.hours).padStart(2, '0'),
    minutes: String(timeLeft.minutes).padStart(2, '0'),
    seconds: String(timeLeft.seconds).padStart(2, '0'),
  }
}

type CountdownProps = {
  goal: string
  tz: string
}

export function Countdown({ goal, tz }: CountdownProps = { goal: '', tz: DEFAULT_TZ }) {
  const [timeLeft, setTimeLeft] = useState(() =>
    goal
      ? formatCountdown(getTimeLeft(goal, tz))
      : { days: '000', hours: '00', minutes: '00', seconds: '00' },
  )

  useEffect(() => {
    if (!goal) return
    const interval = setInterval(() => {
      setTimeLeft(formatCountdown(getTimeLeft(goal, tz)))
    }, 1000)
    return () => clearInterval(interval)
  }, [goal, tz])

  if (!goal) {
    return (
      <div className="flex items-center justify-center min-h-[40vh] w-full text-center">
        <div className="text-xl font-bold">
          No goal date provided in query string (?goal=YYYY-MM-DDTHH:mm:ssZ)
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full p-4">
      <div className="bg-white/80 dark:bg-black/60 rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center w-full max-w-lg">
        <div className="flex flex-col xs:flex-row gap-2 md:gap-4 w-full justify-center items-center">
          <div className="flex-1 w-full">
            <div className="flex flex-row xs:flex-row gap-2 md:gap-4 w-full justify-center items-center">
              <div className="flex flex-col items-center flex-1">
                <div className="w-full h-16 md:h-24 flex items-center justify-center rounded-lg bg-black/80 dark:bg-white/10 text-white dark:text-white text-3xl md:text-5xl font-mono font-bold shadow-md">
                  {timeLeft.days}
                </div>
                <span className="text-xs mt-2 text-black/60 dark:text-white/60 tracking-widest uppercase">
                  Days
                </span>
              </div>

              <div className="flex flex-col items-center flex-1">
                <div className="w-full h-16 md:h-24 flex items-center justify-center rounded-lg bg-black/80 dark:bg-white/10 text-white dark:text-white text-3xl md:text-5xl font-mono font-bold shadow-md">
                  {timeLeft.hours}
                </div>
                <span className="text-xs mt-2 text-black/60 dark:text-white/60 tracking-widest uppercase">
                  Hours
                </span>
              </div>

              <div className="flex flex-col items-center flex-1">
                <div className="w-full h-16 md:h-24 flex items-center justify-center rounded-lg bg-black/80 dark:bg-white/10 text-white dark:text-white text-3xl md:text-5xl font-mono font-bold shadow-md">
                  {timeLeft.minutes}
                </div>
                <span className="text-xs mt-2 text-black/60 dark:text-white/60 tracking-widest uppercase">
                  Minutes
                </span>
              </div>

              <div className="flex flex-col items-center flex-1">
                <div className="w-full h-16 md:h-24 flex items-center justify-center rounded-lg bg-black/80 dark:bg-white/10 text-white dark:text-white text-3xl md:text-5xl font-mono font-bold shadow-md">
                  {timeLeft.seconds}
                </div>
                <span className="text-xs mt-2 text-black/60 dark:text-white/60 tracking-widest uppercase">
                  Seconds
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
