const db = require("../config/db");

exports.getAllMd = (req, res) => {
  db.query("SELECT * FROM medicines", (error, results) => {
    if (error) {
      console.log("Error selecting all medicines: ", error);
      res.status(500).json({ error: "Internal server error" });
    }
    res.json(results);
  });
};

exports.getMdById = (req, res) => {
  const mdId = req.params.id;
  db.query("SELECT * FROM medicines WHERE id = ?", [mdId], (error, result) => {
    if (error) {
      console.log("Error selecting medicines by id:", error);
      res.status(500).json({ error: "Internam server error" });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "404 not found page" });
    }
    res.json(result[0]);
  });
};

exports.postMd = (req, res) => {
  const { name, manufacturer, medicine_type_id, price, expire_date, quantity } =
    req.body;
  db.query(
    "INSERT INTO medicines(name, manufacturer, medicine_type_id, price, expire_date, quantity) VALUES(?,?,?,?,?,?)",
    [name, manufacturer, medicine_type_id, price, expire_date, quantity],
    (error, result) => {
      if (error) {
        console.log("Error adding medicin:", error);
        res.status(500).json({ error: "Internal server error" });
      }
      res.json({
        message: "Medicin successfuly added",
        MedicinId: result.insertId,
      });
    }
  );
};

exports.updateMd = (req, res) => {
  const { name, manufacturer, medicine_type_id, price, expire_date, quantity } =
    req.body;
  const mdId = req.params.id;
  db.query(
    "UPDATE medicines SET name = ?, manufacturer = ?, medicine_type_id = ?, price = ?, expire_date = ?, quantity = ? WHERE id = ?;",
    [name, manufacturer, medicine_type_id, price, expire_date, quantity, mdId],
    (error) => {
      if (error) {
        console.log("Error udating medicin:", error);
        res.status(500).json({ error: "Internal server error" });
      }
      res.json({
        message: "Medicin successfuly updated",
      });
    }
  );
};

exports.deleteMd = (req, res) => {
  const msId = req.params.id;
  db.query("DELETE FROM medicines WHERE id = ?", [msId], (error) => {
    if (error) {
      console.log("Error delete medicin:", error),
        res.status(500).json({ error: "Internal server error" });
    }
    res.json({
      message: "Medicin successfuly deleted",
    });
  });
};
