import express from 'express';
const fileRouter = express.Router();

import { createFile } from '#db/queries/files';

fileRouter.get("/", async(req, res) => {
  const files = await getFiles();
  res.send(files)
})

// fileRouter.post('/:id', async (req, res) => {
//   res.send('posted')
// })

// router.get('/:id').get((req, res, next) => {
//   const { id } = req.params;

//   if(/\D/.test(id)) {
     
  
//   res.status(400).send('non-numeric character found')
//   } else {
//     res.send('single file')
//     if(!file) {
//       res.status(404).send('file not found')   
// } const newFile= await createFile (req.body.name)  {
//   res.status(200).send('success');
//   }
//   router.route('/:id').post(async (req, res) => {
//     res.send('posted')
// })


// fileRouter.get('/:id').get((req, res, next) => {
//   const { id } = req.params;
// )}}

fileRouter.post("/", async(req, res, next) => {
  if(!req.body || !req.body.name) {
    res.status(400).send('no body given')
  }
  const newFile = createFile(req.body.name)
  res.status(201).send(newFile)
  })

  fileRouter.get("/:id", async(req, res) => {
    const file = await filesById(id)
    res.send(file)
  })

  fileRouter.delete('/:id', async(req, res) => {
    const file = await deleteFile(id)
    res.send(file)
  })