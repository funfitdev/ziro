import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function EditUser() {
  const user = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    gender: "male",
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Edit User</h1>
      </div>

      <div className="max-w-2xl bg-white rounded-lg shadow p-6">
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <Input id="name" defaultValue={user.name} placeholder="Enter name" />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              defaultValue={user.email}
              placeholder="Enter email"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Gender</label>
            <RadioGroup defaultValue={user.gender}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <label htmlFor="male" className="text-sm cursor-pointer">
                  Male
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <label htmlFor="female" className="text-sm cursor-pointer">
                  Female
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <label htmlFor="other" className="text-sm cursor-pointer">
                  Other
                </label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex gap-4">
            <Button type="submit">Save Changes</Button>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
