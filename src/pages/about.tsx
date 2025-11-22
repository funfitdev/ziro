"use server-entry";

import { Layout } from "@/components/layout";

function AboutPage() {
  return (
    <Layout>
      <h1>About Us</h1>
      <p>Welcome to the About Page of our application.</p>
    </Layout>
  );
}

export default AboutPage;

/*
"use server-entry" is a Parcel-specific directive that marks a server component as the entry point of a page or route, creating a code splitting boundary. Any dependencies referenced by this route will be optimally bundled together, including client components, CSS, etc. Shared dependencies between pages, such as common libraries, will be automatically placed in a shared bundle.
*/
