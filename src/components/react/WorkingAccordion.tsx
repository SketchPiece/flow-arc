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
          <div className="flex items-center gap-6">
            <span className="text-6xl font-medium">{questionNumber}</span>
            <span className="group-hover:underline">{title}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
