import { Request, Response } from 'express';
import { beforeAll, afterAll, beforeEach, describe, it, expect } from "@jest/globals";

import { getTodos } from '../../../src/controllers/todos';
import Todo from '../../../src/models/todo';

jest.mock('../../../src/models/todo');

describe('getTodos function', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it('should return todos for a valid user', async () => {
    const userId = 'userId';
    const todosMock = [
      { name: 'Todo 1', description: 'Description 1', status: false },
      { name: 'Todo 2', description: 'Description 2', status: true },
    ];

    (Todo.find as jest.Mock).mockResolvedValue(todosMock);

    req.user = userId;

    await getTodos(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ todos: todosMock });
  });

  it('should handle error when getting todos', async () => {
    (Todo.find as jest.Mock).mockRejectedValue(new Error('Database error'));

    await getTodos(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'Error getting the todos' });
  });
});
