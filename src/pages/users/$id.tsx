import { Button } from "@/components/ui/button";

export default function ViewUser() {
  const user = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    gender: "male",
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">User Details</h1>
        <div className="flex gap-2">
          <Button variant="outline">Edit</Button>
          <Button variant="outline">Back to List</Button>
        </div>
      </div>

      <div className="max-w-2xl bg-white rounded-lg shadow p-6">
        <div className="space-y-6">
          <div className="border-b pb-4">
            <label className="block text-sm font-medium text-gray-500 mb-1">
              ID
            </label>
            <p className="text-lg">{user.id}</p>
          </div>

          <div className="border-b pb-4">
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Name
            </label>
            <p className="text-lg">{user.name}</p>
          </div>

          <div className="border-b pb-4">
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Email
            </label>
            <p className="text-lg">{user.email}</p>
          </div>

          <div className="pb-4">
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Gender
            </label>
            <p className="text-lg capitalize">{user.gender}</p>
          </div>
        </div>

        <div className="flex gap-4 mt-6 pt-6 border-t">
          <Button variant="destructive">Delete User</Button>
        </div>
      </div>
    </div>
  );
}
