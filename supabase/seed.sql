-- Seed data for boards
INSERT INTO boards (uuid, created_at, name, columns)
VALUES
  ('board-uuid-1', '2023-10-21T00:00:00', 'Board 1', '{"column-uuid-1", "column-uuid-2"}'),
  ('board-uuid-2', '2023-10-21T00:00:00', 'Board 2', '{"column-uuid-3", "column-uuid-4"}');

-- Seed data for columns
INSERT INTO columns (uuid, created_at, name, tasks)
VALUES
  ('column-uuid-1', '2023-10-21T00:00:00', 'To Do', '{"task-uuid-1", "task-uuid-2"}'),
  ('column-uuid-2', '2023-10-21T00:00:00', 'In Progress', '{"task-uuid-3"}'),
  ('column-uuid-3', '2023-10-21T00:00:00', 'Done', '{"task-uuid-4"}');

-- Seed data for tasks
INSERT INTO tasks (uuid, created_at, title, description, status, completed, due_date, priority, tags, comments, assigned_to)
VALUES
  ('task-uuid-1', '2023-10-21T00:00:00', 'Task 1', 'Description 1', 'in-progress', true, '2023-10-25', 'high', '{"tag-1", "tag-2"}', '{"comment-1"}', null),
  ('task-uuid-2', '2023-10-21T00:00:00', 'Task 2', 'Description 2', 'todo', false, '2023-10-30', 'medium', '[]', '[]', null),
  ('task-uuid-3', '2023-10-21T00:00:00', 'Task 3', 'Description 3', 'in-progress', false, '2023-10-27', 'low', '[]', '[]', null),
  ('task-uuid-4', '2023-10-21T00:00:00', 'Task 4', 'Description 4', 'done', true, '2023-10-23', 'medium', '{"tag-3"}', '[]', null);


-- boards: uuid, created_at, name, columns
-- columns: uuid, created_at, name, tasks
-- tasks: uuid, created_at, title, description, status, completed, due_date, priority, tags, comments, attachments
