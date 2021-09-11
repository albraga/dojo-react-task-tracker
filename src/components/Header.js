import Button from './Button'

const Header = ({ onadd }) => {
  return (
    <div className="header">
      <h1>Task Tracker</h1>
      <Button text="Add" onClick={onadd} />
    </div>
  )
}

export default Header
