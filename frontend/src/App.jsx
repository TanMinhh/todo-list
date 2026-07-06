import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchTasks();
  }, [filter, search, page]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/tasks?status=${filter}&search=${search}&page=${page}&limit=5`);
      setTasks(res.data.tasks);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      await axios.post(`${apiUrl}/api/tasks`, { title });
      setTitle('');
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const toggleTask = async (id, completed) => {
    try {
      await axios.put(`${apiUrl}/api/tasks/${id}`, { completed: !completed });
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${apiUrl}/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Todo List</h1>

      <form onSubmit={addTask}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Thêm công việc mới..."
          required
        />
        <button type="submit">Thêm</button>
      </form>

      <div className="filters">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tìm kiếm..."
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">Tất cả</option>
          <option value="true">Đã hoàn thành</option>
          <option value="false">Chưa hoàn thành</option>
        </select>
      </div>
      {(totalPages >= 1) && <><h4>Lưu ý: Nhấn vào ô bên trái tên công việc để đánh dấu hoàn thành.</h4></>}
      <br />
      <ul>
        {tasks.map(task => (
          <li key={task._id} className={task.completed ? 'completed' : ''}>
            <div className="task-content">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task._id, task.completed)}
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
              </span>
            </div>
            <button onClick={() => deleteTask(task._id)}>Xóa</button>
          </li>
        ))}
      </ul>
      <br />
      {(totalPages > 1) && <>
        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>Trước</button>
          <span>Trang {page} / {totalPages}</span>
          <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Sau</button>
        </div>
      </>}
    </div>
  );
};

export default App;