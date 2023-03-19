import Task from "../src/task.js";

const task = new Task()
    .setDescription('Remodel house')
    .setOptimisticTime(160)
    .setPessimisticTime(365)
    .setMostLikelyTime(200)
    .setExpectedTime();

const emptyTask = new Task();

describe('Test Task Class', () => {
    test('correct description', () => {
        expect(task.description).toBe('Remodel house');
    });
    test('correct optimistic time', () => {
        expect(task.optimisticTime).toBe(160);
    });
    test('correct pessimistic time', () => {
        expect(task.pessimisticTime).toBe(365);
    });
    test('correct most likely time', () => {
        expect(task.mostLikelyTime).toBe(200);
    });
    test('correct expected time', () => {
        expect(task.expectedTime).toBe(221);
    });
    test('correct default status', () => {
        expect(task.status).toBe('in progress');
    });
    test('correct default task description', () => {
        expect(emptyTask.description).toBe('');
    });
    test('correct default task optimistic time', () => {
        expect(emptyTask.optimisticTime).toBe(0);
    });
    test('correct default task pessimistic time', () => {
        expect(emptyTask.pessimisticTime).toBe(0);
    });
    test('correct default task most likely time', () => {
        expect(emptyTask.mostLikelyTime).toBe(0);
    });
    test('correct default task expected time', () => {
        expect(emptyTask.expectedTime).toBe(0);
    });
    test('correct default task status', () => {
        expect(emptyTask.status).toBe('in progress');
    });
});
