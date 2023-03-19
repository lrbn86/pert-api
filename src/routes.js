import { Router } from 'express';
import Task from './task.js';

const router = Router();

const tasks = [];

router.get('/tasks', (req, res) => {
    res.send(tasks);
});

router.post('/tasks', (req, res) => {
    const body = req.body;
    const task = new Task()
        .setDescription(body.description)
        .setOptimisticTime(parseInt(body.optimisticTime))
        .setMostLikelyTime(parseInt(body.mostLikelyTime))
        .setPessimisticTime(parseInt(body.pessimisticTime))
        .setExpectedTime();
    tasks.push(task);
    res.send(task);
});

export default router;
