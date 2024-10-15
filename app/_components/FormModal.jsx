import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Button from "./Button";

export default function FormModal() {
  return (
    <div className="border-2 border-darkAccent rounded-md w-[350px] p-8">
      <div className="grid p-4 max-w-sm items-center gap-1.5">
        <Label htmlFor="name" className="font-semibold">
          Name
        </Label>
        <Input
          type="text"
          id="name"
          placeholder="Name"
          className="font-semibold"
        />
      </div>
      <div className="grid p-4 max-w-sm items-center gap-1.5">
        <Label htmlFor="name" className="font-semibold">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          className="font-semibold"
        />
      </div>
      <div className="grid w-full p-4 gap-1.5">
        <Label htmlFor="message" className="font-semibold">
          Your message
        </Label>
        <Textarea
          placeholder="Type your message here."
          id="message"
          className="font-semibold"
        />
      </div>
      <div className="grid grid-cols-1 p-4 justify-center">
        <Button name="submit" bg="bg-darkAccent" textColour="text-white" />
      </div>
    </div>
  );
}
