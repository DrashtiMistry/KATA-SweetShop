const express = require("express");
const app = express();
const sweetRoutes = require("./routes/sweetRoutes");

app.use(express.json());
app.use("/api/sweets", sweetRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
