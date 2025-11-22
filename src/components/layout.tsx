import "../global.css";
import "@/lib/client/client-entry";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className="min-h-screen flex flex-col scrollbar-stable scrollbar-both-edges"
    >
      <head>
        <title>Parcel React Server App</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="TODO List with React Server Components and Parcel"
        />
      </head>
      <body className="min-h-screen flex flex-col flex-grow scrollbar-stable scrollbar-both-edges">
        {children}
      </body>
    </html>
  );
};
