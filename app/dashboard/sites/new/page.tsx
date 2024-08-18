import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "@/app/components/dashboard/SubmitButtons";

export default function NewSiteRoute() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Card className="max-w-[450px]">
        <CardHeader>
          <CardTitle>Create Site</CardTitle>
          <CardDescription>
            Create your Site here. Click the button below once your done...
          </CardDescription>
        </CardHeader>
        <form>
          <CardContent>
            <div className="flex flex-col gap-y-6">
              <div className="grid gap-2">
                <Label>Site Name</Label>
                <Input placeholder="Site Name" />
              </div>

              <div className="grid gap-2">
                <Label>Subdirectory</Label>
                <Input placeholder="Subdirectory" />
              </div>

              <div className="grid gap-2">
                <Label>Description</Label>
                <Textarea placeholder="Small Description for your site" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton text="Create Site" />
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
