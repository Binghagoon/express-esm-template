import express from "express";
import testRouter from "@/hello/test";
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/test", testRouter);
app.listen(3000, () => console.log("Server running on port 3000"));
