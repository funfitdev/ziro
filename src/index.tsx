import { renderRequest } from "@parcel/rsc/node";
import express, { type RequestHandler } from "express";
import AboutPage from "@/pages/about";

const addDelay: RequestHandler = (req, _res, next) => {
  const delay = req.query.delay;
  if (delay && !Number.isNaN(Number(delay))) {
    const time = Number(delay);
    setTimeout(() => next(), time);
  } else {
    next();
  }
};

const app = express();

// app.use(compression());
app.use(express.static("dist"));

app.get("/about", addDelay, async (req, res) => {
  await renderRequest(req, res, <AboutPage />, { component: AboutPage });
});

app.listen(3000, () => {
  console.log("Server listening on port http://localhost:3000");
});
