import { useState } from "react"

export default function Add({ onAdd }) {
  const [txt, setTxt] = useState("")
  const [reminder, setReminder] = useState(false)
  function onSubmit(e) {
    e.preventDefault()
    if (!txt) {
      alert("add a task")
      return
    }
    onAdd({ txt, reminder })
    setTxt('')
    setReminder(false)
  }
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Task</label>
        <input
          type="text"
          name="tas"
          placeholder="Add task"
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
        />
      </div>
      <input
        type="checkbox"
        checked={reminder}
        value={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked)}
      />
      <input type="submit" value="Save" />
    </form>
  )
}
