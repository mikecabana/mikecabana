import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { getPayload } from '@/lib/payload'
import { formatDateTime } from '@/lib/utils'

export default async function GuestsPage() {
  const payload = await getPayload()

  const guests = await payload.find({
    collection: 'guests',
    sort: '-createdAt',
    where: {
      approved: {
        equals: true,
      },
    },
  })

  if (guests.docs.length > 0) {
    return (
      <>
        <h1 className="text-2xl mb-8 text-center">Guestbook</h1>
        <div className="flex justify-center flex-wrap w-full max-w-md mx-auto">
          {guests.docs.map((guest, i) => (
            <TooltipProvider key={i} delayDuration={300}>
              <Tooltip>
                <TooltipTrigger className="cursor-default">
                  <div className="rounded-3xl py-2 px-4 bg-black text-background dark:text-foreground m-1">
                    {guest.name ? guest.name + ' : ' : ''}
                    {guest.message.length > 42
                      ? guest.message.slice(0, 42) + '...' + ' '
                      : guest.message}
                  </div>
                </TooltipTrigger>
                <TooltipContent className="font-bold">
                  {guest.message.length > 42
                    ? formatDateTime(guest.createdAt, true) + ':' + guest.message
                    : formatDateTime(guest.createdAt, true)}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </>
    )
  }

  return <>{"It's quiet...too quiet🤔"}</>
}
