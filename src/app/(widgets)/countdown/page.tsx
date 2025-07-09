import { Countdown } from '@/components/countdown'

type CountdownToolProps = {
  searchParams: Promise<{ goal: string; tz: string }>
}

export default async function CountdownTool({ searchParams: params }: CountdownToolProps) {
  const { goal, tz } = await params
  return <Countdown goal={goal} tz={tz} />
}
