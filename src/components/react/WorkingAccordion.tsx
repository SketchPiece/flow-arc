import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";

interface WorkingAccordionProps {
  questionNumber?: string;
  title: string;
  content: string;
}

export function WorkingAccordion({
  questionNumber,
  title,
  content,
}: WorkingAccordionProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex items-center gap-2 sm:gap-6">
            {questionNumber && (
              <span className="text-3xl font-medium md:text-5xl">
                {questionNumber}
              </span>
            )}
            <span className="text-left group-hover:underline">{title}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
