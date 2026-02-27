import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Faq } from "@/lib/constants"
import AnimatedText from "@/lib/gsap"

export default function FAQ() {
  return (
    <div className='p-2 gap-8  h-max w-full flex flex-col items-center justify-center '>

            <span className=' text-red-500 font-semibold' > 
FAQ's
</span>
<Accordion type="single" collapsible defaultValue={`items-1`} className="flex flex-col gap-4">
{Faq.map(({id,title,ans}) => (
<AnimatedText animate="bottomToTop" delay={id * .3}>

  <AccordionItem value={`item-${id}  `}  key={id} className="w-full md:w-lg bg-neutral-950 border border-neutral-900 py-2 px-5 rounded-xl" >
    <AccordionTrigger className="text-gray-300 text-md">{title}</AccordionTrigger>
    <AccordionContent className="text-gray-400">
        {ans}
    </AccordionContent>
  </AccordionItem>
</AnimatedText>
        ))
}
        </Accordion>
    </div>
  )
}
