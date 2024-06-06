import dotenv from 'dotenv';
import express, { Router } from 'express';

dotenv.config();
const app = express();
const mainRouter = Router();

mainRouter.get("/", (req, res) => {
    res.send("Welcome to the webservices Reservation API!");
});

app.use(mainRouter);

app.listen("5055", () => {
    console.log(`Server reservation is running on http://localhost:5055/`);
});

export default mainRouter;
