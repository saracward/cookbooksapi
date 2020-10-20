const express = require("express");
const router = express.Router();
const Author = require("../models/Author");
const nodemon = require("nodemon");

// Write the route to list all authors
router.get("/", async (req, res) => {
  const allAuthors = await Author.find({});
  res.json({
    status: 200,
    data: allAuthors,
  });
});

// Write the route to get authors by firstname
router.get("/:firstName", async (req, res) => {
  const author = await Author.find({ firstName: req.params.firstName });
  res.json({ status: 200, data: author });
});
// Write the route to create an author:
router.post("/", async (req, res) => {
  const author = await Author.create(req.body);
  res.json({
    status: 200,
    data: author,
    msg: "data received",
  });
});
// Write the route to update an author
router.put("/:name", async (req, res) => {
  const author = await Author.findOneAndUpdate(
    { firstName: req.params.name },
    req.body,
    { new: true }
  );
  res.json({ status: 200, msg: "updated", data: author });
});

// Update the cookbook using Postman.
// router.put("/:authorId/addCookbook/:cookbookId", async (req, res) => {
//   console.log("author route from put method update cookbook: ", req.params);
//   const cookbook = await cookbook.findById(req.params.cookbookId);
//   const author = await Author.findByIdAndUpdate(req.params.authorId, {
//     $push: { cookbooks: cookbook.id },
//     new: true,
//   });
//   res.json({
//     status: 200,
//     data: author,
//   });
// });
// Bonus: Write the route to delete cookbooks by author name. (hint: There are a couple on different ways to do this and you may have to change/add code in other files)

module.exports = router;
