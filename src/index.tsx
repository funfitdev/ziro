import { renderRequest } from "@parcel/rsc/node";
import express, { type RequestHandler } from "express";
import AboutPage from "@/pages/about";
import compression from "compression";
import UsersList from "./pages/users";

const app = express();

app.use(compression());
app.use(express.static("dist"));

app.get("/about", async (req, res) => {
  await renderRequest(req, res, <AboutPage />, { component: AboutPage });
});

app.get("/users", async (req, res) => {
  await renderRequest(req, res, <UsersList />, { component: UsersList });
});

app.post("/users", async (req, res) => {
  await renderRequest(req, res, <UsersList />, { component: UsersList });
});

app.listen(3000, () => {
  console.log("Server listening on port http://localhost:3000");
});
