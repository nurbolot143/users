const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");

const app = express();
const PORT = process.env.PORT || 4444;

app.use(express.json());

app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
