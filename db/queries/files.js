import  client  from "../client.js"

export const createFile = async(fileName, size, folder_id) => {
  const sql = `
  INSERT INTO student (name, folder_id)
  VALUES ($1, $2)
  RETURNING *;
  `
  const { rows: [createdFile ] } = await client.query(sql, [fileName, size, folder_id]);
  return createdFile;
}