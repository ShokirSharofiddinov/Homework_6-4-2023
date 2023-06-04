const db = require("../config/db");

exports.getAllPh = (req, res) => {
  db.query("SELECT * FROM pharmacies", (error, results) => {
    if (error) {
      console.log("Error selecting all Ph: ", error);
    }
    res.json(results);
  });
};

exports.postPh = (req, res) => {
  const { name, address, location, phone, email, region_id, district_id } =
    req.body;
  db.query(
    "INSERT INTO pharmacies (name, address, location, phone, email, region_id, district_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [name, address, location, phone, email, region_id, district_id],
    (error, results) => {
      if (error) {
        console.log("Error inserting Ph: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({
        message: "New pharmacy successfully added!",
        pharmacyId: results.insertId,
      });
    }
  );
};

exports.getPhById = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM pharmacies WHERE id = ?", [id], (error, results) => {
    if (error) {
      console.log("Error selecting pharmacy by id: ", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "404 not found page" });
    }
    res.json(results[0]);
  });
};

exports.updatePh = (req, res) => {
  const id = req.params.id;
  const { name, address, location, phone, email, region_id, district_id } =
    req.body;

  db.query(
    "UPDATE pharmacies SET name=?, address=?, location=?, phone=?, email=?, region_id=?, district_id=? WHERE id=?",
    [name, address, location, phone, email, region_id, district_id, id],
    (error) => {
      if (error) {
        console.log("Error updating pharmacy: ", error);
        res.status(500).json({ error: "Internal server error" });
      }
      res.json({ message: "Pharmacy successfuly updated!" });
    }
  );
};

exports.deletePh = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM pharmacies WHERE id = ?", [id], (error, results) => {
    if (error) {
      console.log("Error deleting pharmacy by id: ", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json({ message: "Pharmacy successfuly deleted!" });
  });
};
