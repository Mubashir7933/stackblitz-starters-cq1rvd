import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subTodo',
      },
    ], //Arrays of Sub-Todos
  },
  {
    timestamps: true,
  }
);

export const Todo = mongoose.model('Todo', todoSchema); //Use this name for reference in other files in order to connect.
