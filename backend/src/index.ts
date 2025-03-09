import express, {Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import mysql from "mysql2";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Luyn1102@",
  database: "hotel_db",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.get("/api/test", async (req: Request, res: Response) => {
    res.json({ message: "hello from express endpoint!"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});




