import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase/client.ts';
import './index.css';

interface Task {
  id: number;
  title: string;
  description: string;
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    const { data } = await supabase.from('tasks').select('*').order('id');
    if (data) setTasks(data);
  }

  async function addTask() {
    if (!title.trim()) return;
    await supabase.from('tasks').insert({ title, description });
    setTitle('');
    setDescription('');
    fetchTasks();
  }

  async function deleteTask(id: number) {
    await supabase.from('tasks').delete().eq('id', id);
    fetchTasks();
  }

  async function startEdit(task: Task) {
    setEditingId(task.id);
    setTitle(task.title);
    setDescription(task.description);
  }

  function cancelEdit() {
    setEditingId(null);
    setTitle('');
    setDescription('');
  }

  async function saveEdit() {
    if (!editingId) return;
    await supabase.from('tasks').update({ title, description }).eq('id', editingId);
    cancelEdit();
    fetchTasks();
  }

  return (
    <div className="tm-page">
      <div className="tm-container">
        <h1 className="tm-heading">Task Manager</h1>
        <p className="tm-subheading">Keep track of what needs to get done.</p>

        {/* Form */}
        <div className="tm-form-card">
          <h2 className="tm-form-title">{editingId ? 'Edit Task' : 'New Task'}</h2>

          <div className="tm-field">
            <label className="tm-label">Title</label>
            <input
              className="tm-input"
              placeholder="What needs to be done?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="tm-field">
            <label className="tm-label">Description</label>
            <textarea
              className="tm-input tm-textarea"
              placeholder="Add some details..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="tm-form-actions">
            {editingId && (
              <button className="tm-btn tm-btn-ghost" onClick={cancelEdit}>
                Cancel
              </button>
            )}
            <button className="tm-btn tm-btn-primary" onClick={editingId ? saveEdit : addTask}>
              {editingId ? 'Save Changes' : 'Add Task'}
            </button>
          </div>
        </div>

        {/* Task list */}
        <h2 className="tm-list-title">Tasks ({tasks.length})</h2>
        <div className="tm-list">
          {tasks.length === 0 ? (
            <p className="tm-empty">No tasks yet — add one above!</p>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className="tm-card">
                <div className="tm-card-body">
                  <h3 className="tm-card-title">{task.title}</h3>
                  {task.description && <p className="tm-card-desc">{task.description}</p>}
                </div>
                <div className="tm-card-actions">
                  <button className="tm-btn tm-btn-ghost" onClick={() => startEdit(task)}>
                    Edit
                  </button>
                  <button className="tm-btn tm-btn-danger" onClick={() => deleteTask(task.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
