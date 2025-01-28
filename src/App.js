import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [isDeveloper, setIsDeveloper] = useState(false);
  const [cls, setClass] = useState("");
  const [students, setStudents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);


  function getdata(e) {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents[editIndex] = { name, isDeveloper, cls };
      setStudents(updatedStudents);
      setEditIndex(null);
    } else {
      setStudents([...students, { name, isDeveloper, cls }]);
    }
    clearForm();
  }

 
  function clearForm() {
    setName("");
    setIsDeveloper(false);
    setClass("");
  }

  
  function editStudent(index) {
    const student = students[index];
    setName(student.name);
    setIsDeveloper(student.isDeveloper);
    setClass(student.cls);
    setEditIndex(index);
  }

  
  function deleteStudent(index) {
    const filteredStudents = students.filter((_, i) => i !== index);
    setStudents(filteredStudents);
  }

  return (
    <div className="App">
      <h1>Student Info</h1>
      <form onSubmit={getdata}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="checkbox"
          checked={isDeveloper}
          onChange={(e) => setIsDeveloper(e.target.checked)}
        />
        <span> Are you a Developer?</span>
        <br />
        <br />
        <select
          value={cls}
          onChange={(e) => setClass(e.target.value)}
        >
          <option value="">Select your class</option>
          <option value="CS">CS</option>
          <option value="IT">IT</option>
          <option value="AI">AI</option>
        </select>
        <br />
        <br />
        <button type="submit">{editIndex !== null ? "Update" : "Submit"}</button>
        <button type="button" onClick={clearForm}>
          Clear
        </button>
      </form>

      <h2>Student Table</h2>
      <table className="center-table" border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Developer</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.isDeveloper ? "Yes" : "No"}</td>
              <td>{student.cls}</td>
              <td>
                <button onClick={() => editStudent(index)}>Edit</button>
                <button onClick={() => deleteStudent(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
