import db from "#db/client";
import { createFile } from "./queries/files";
import { createFolder } from "./queries/folders";

console.log('CONNECTING...')
await db.connect();
console.log('...CONNECTED...')
console.log('...SEEDING...')
await seed();
console.log("🌱 Database seeded.");
console.log('...DISCONNECTING...')
await db.end();
console.log(('...DISCONNECTED'))

const seed = async() => {
  // TODO


  console.log('CREATING FOLDERS...')
    const folder_a = await createFolder('Folder A')
    const folder_b = await createFolder('Folder B')
    const folder_c = await createFolder('Folder C')
  console.log('...FOLDERS CREATED...')

  console.log('...CREATING FILES...')
    await createFile('file A', 10, folder_a.id);
    await createFile('file B', 10, folder_a.id);
    await createFile('file C', 10, folder_a.id);
    await createFile('file D', 10, folder_a.id);
    await createFile('file E', 10, folder_a.id);

    await createFile('file F', 10, folder_b.id);
    await createFile('file G', 10, folder_b.id);
    await createFile('file H', 10, folder_b.id);
    await createFile('file I', 10, folder_b.id);
    await createFile('file J', 10, folder_b.id);
    await createFile('file K', 10, folder_b.id);

    await createFile('file L', 10, folder_c.id);
    await createFile('file M', 10, folder_c.id);
    await createFile('file N', 10, folder_c.id);
    await createFile('file O', 10, folder_c.id);
    await createFile('file P', 10, folder_c.id);
  console.log('...FILES CREATED...')

  console.log('...DISCONNECTING...')
    await client.end()
  console.log('...DISCONECTED')

}

seed()