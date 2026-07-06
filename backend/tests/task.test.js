const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('../routes/taskRoutes');

const app = express();
app.use(express.json());
app.use('/api/tasks', taskRoutes);

describe('Task API', () => {
    beforeAll(async () => {
        await mongoose.connect('mongodb://localhost:27017/testdb');
    });

    afterAll(async () => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
    });

    it('should create a new task', async () => {
        const res = await request(app)
            .post('/api/tasks')
            .send({ title: 'Test Task' });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
        expect(res.body.title).toEqual('Test Task');
    });

    it('should not create task without title', async () => {
        const res = await request(app)
            .post('/api/tasks')
            .send({});
        expect(res.statusCode).toEqual(400);
    });
});