import express from 'express';
import routeUser from './src/routes/user.route.js';
import routeTask from './src/routes/task.route.js';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use('/', routeUser);
app.use('/', routeTask);

app.listen(port, () => console.log(`server listing on port', ${port}`));
