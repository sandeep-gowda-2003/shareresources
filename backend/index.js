import express from 'express'
import './db.js'
const app = express();
import cors from 'cors';
import { todolist } from './models/todo.js';

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json())
app.post('/tasks', async (req, res) => {
    const insert = new todolist(req.body)
    const ret = await insert.save();
    res.json(ret).status(200)

})
app.get('/tasks', async (req, res) => {
    const data = await todolist.find();
    res.json(data)
})
app.get('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    const data = await todolist.findById(id);
    res.json(data)
})
app.put('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    const data = await todolist.findByIdAndUpdate(id, req.body, { new: true });
    res.json(data)

})
app.delete('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    const data = await todolist.findByIdAndDelete(id);
    res.json(data)
})

app.listen(8000)