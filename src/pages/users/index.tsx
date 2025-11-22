"use server-entry";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { getUsers } from "./api";
import { UsersListClient } from "./users-list-client";

export default async function UsersList() {
  const users = await getUsers();

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Users</h1>
          <Button>Create User</Button>
        </div>

        <UsersListClient initialUsers={users} />
      </div>
    </Layout>
  );
}
