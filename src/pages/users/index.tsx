"use server-entry";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";

export default async function UsersList() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", gender: "male" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", gender: "female" },
    { id: 3, name: "Alex Johnson", email: "alex@example.com", gender: "other" },
  ];

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Users</h1>
          <Button>Create User</Button>
        </div>

        <div className="bg-white rounded-lg shadow">
          <table className="w-full">
            <thead className="border-b">
              <tr className="bg-gray-50">
                <th className="text-left p-4 font-semibold">Name</th>
                <th className="text-left p-4 font-semibold">Email</th>
                <th className="text-left p-4 font-semibold">Gender</th>
                <th className="text-left p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4 capitalize">{user.gender}</td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
