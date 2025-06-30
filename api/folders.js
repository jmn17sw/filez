import express from 'express';
const folderRouter = express.Router();

import { createFolder } from '#db/queries/folders';

folderRouter.get("/", async(req, res) => {
  const folders = await getFiles();
  res.send(folders)
})

folderRouter.post("/", async(req, res, next) => {
  if(!req.body || !req.body.name) {
    res.status(400).send('no body given')
  }
  const newFile = createFile(req.body.name)
  res.status(201).send(newFile)
  })

  folderRouter.get("/:id", async(req, res) => {
    const folder = await foldersById(id)
    res.send(folder)
  })

  folderRouter.delete('/:id', async(req, res) => {
    const folder = await deleteFile(id)
    res.send(folder)
  })
