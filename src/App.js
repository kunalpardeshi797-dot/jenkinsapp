import React, { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const add = (e) => {
    e.preventDefault();
    if (!input) return;
    setTasks([...tasks, { id: Date.now(), text: input }]);
    setInput('');
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontFamily: 'sans-serif'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)',
        padding: '30px', borderRadius: '20px', width: '350px', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        border: '1px solid rgba(255, 255, 255, 0.18)', color: 'white'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>My Tasks ({tasks.length})</h2>
        <form onSubmit={add} style={{ display: 'flex', gap: '10px' }}>
          <input 
            value={input} onChange={(e) => setInput(e.target.value)}
            style={{ flex: 1, padding: '10px', borderRadius: '10px', border: 'none' }} 
            placeholder="New task..." 
          />
          <button type="submit" style={{ padding: '10px', borderRadius: '10px', border: 'none', background: '#fff', cursor: 'pointer' }}>+</button>
        </form>
        <div style={{ marginTop: '20px' }}>
          {tasks.map(t => (
            <div key={t.id} style={{ 
              background: 'rgba(255,255,255,0.1)', padding: '10px', marginBottom: '10px', 
              borderRadius: '8px', display: 'flex', justifyContent: 'space-between' 
            }}>
              {t.text}
              <span onClick={() => setTasks(tasks.filter(i => i.id !== t.id))} style={{ cursor: 'pointer' }}>🗑️</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}import React, { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const add = (e) => {
    e.preventDefault();
    if (!input) return;
    setTasks([...tasks, { id: Date.now(), text: input }]);
    setInput('');
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontFamily: 'sans-serif'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)',
        padding: '30px', borderRadius: '20px', width: '350px', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        border: '1px solid rgba(255, 255, 255, 0.18)', color: 'white'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>My Tasks ({tasks.length})</h2>
        <form onSubmit={add} style={{ display: 'flex', gap: '10px' }}>
          <input 
            value={input} onChange={(e) => setInput(e.target.value)}
            style={{ flex: 1, padding: '10px', borderRadius: '10px', border: 'none' }} 
            placeholder="New task..." 
          />
          <button type="submit" style={{ padding: '10px', borderRadius: '10px', border: 'none', background: '#fff', cursor: 'pointer' }}>+</button>
        </form>
        <div style={{ marginTop: '20px' }}>
          {tasks.map(t => (
            <div key={t.id} style={{ 
              background: 'rgba(255,255,255,0.1)', padding: '10px', marginBottom: '10px', 
              borderRadius: '8px', display: 'flex', justifyContent: 'space-between' 
            }}>
              {t.text}
              <span onClick={() => setTasks(tasks.filter(i => i.id !== t.id))} style={{ cursor: 'pointer' }}>🗑️</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}