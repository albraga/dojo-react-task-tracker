import './styles.css'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Add from './components/Add'

const App = () => {
  const [show, setShow] = useState(false)
  const addTask = (task) => {
    const id = tasks[tasks.length - 1].id + 1
    const ntask = { id, ...task }
    setTasks([...tasks, ntask])
  }

  function dtask(id) {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id
      })
    )
  }

  const [tasks, setTasks] = useState([
    { id: 1, txt: 'um', reminder: true },
    { id: 2, txt: 'dois', reminder: false },
    { id: 3, txt: 'três', reminder: true }
  ])

  const toggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className="App">
      <Header onadd={() => setShow(!show)} />
      {show && <Add onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks onToggle={toggle} tasks={tasks} dtask={dtask} />
      ) : (
        'no tasks'
      )}
    </div>
  )
}

export default App
