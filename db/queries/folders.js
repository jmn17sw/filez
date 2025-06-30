import client from "../clinet.js"

export const createFolder = async(folderName) => {
  const aql = `
  INSERT INTO folders(name)
  VALUES($1)
  RETURNING *;
  `;
  const { rows: [ createdFolder] } = await client.query(sql, [folderName])
  return createdFolder
}