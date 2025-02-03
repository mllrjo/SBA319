import express from "express";
import Nomination from "../models/nomination_comments.mjs"
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const nominations = await Nomination.find();
    res.json(nominations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:nominee", async (req, res) => {
  try {
    const nominee = await Nomination.findOne({ nominee: req.params.nominee });
    if (!nominee) return res.status(404).json({ error: "Nominee not found" });
    res.json(nominee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newNomination = new Nomination(req.body);
    await newNomination.save();
    res.status(201).json(newNomination);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.patch("/:nominee", async (req, res) => {
  try {
    const updatedNominee = await Nomination.findOneAndUpdate(
      { nominee: req.params.nominee },
      req.body,
      { new: true }
    );
    if (!updatedNominee) return res.status(404).json({ error: "Nominee not found" });
    res.json(updatedNominee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;