import Button from "./Button"

const Header = ({ onadd, show }) => {
  return (
    <div className="header">
      <h1>Task Tracker</h1>
      <Button text={show ? "add" : "close"} onClick={onadd} />
    </div>
  )
}

export default Header
