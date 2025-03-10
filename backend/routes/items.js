import express from "express";

const router = express.Router();

router.get("/", (req, res) => {

  // send a list of items
  res.send([]);
});

router.get("/:id", (req, res) => {
  res.send()
})

router.post("/:id", (req, res) => {
  res.send();
})

router.patch("/:id", (req, res) => {

});

router.delete("/:id", (req, res) => {

});


export { router }
