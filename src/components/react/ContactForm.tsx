import Button from "./ui/Button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function ContactForm() {
  return (
    <form className="flex-1">
      <div className="flex flex-col gap-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Name" />
        </div>
        <div>
          <Label htmlFor="email">Email*</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <Label htmlFor="message">Message*</Label>
          <Textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></Textarea>
        </div>
      </div>
      <Button className="mt-10 w-full">Send Message</Button>
    </form>
  );
}
