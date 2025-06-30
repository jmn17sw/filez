import app from "#app";
import db from "#db/client";

const app = express();

app.use((req, res, next) => {
  console.log('WELCOME TO THE SERVER...')
  next()
})

app.get('/', (req, res) => {
  res.send('WELCOME')
});

import { getFiles } from "./db/queries/files.js"
app.use()
import { getFolders } from "./db/queries/folders.js"

 


const PORT = process.env.PORT ?? 3000;

await db.connect();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
