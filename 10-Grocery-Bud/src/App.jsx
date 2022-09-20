import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import List from './List'
import Alert from './Alert'
import { useEffect } from 'react'

const getLocalStrorage = () => {
  let list = localStorage.getItem('list')
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  } else{
    return []
  }
}


function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStrorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({show: false, msg: '', type: ''})

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name){
      //alert
     showAlert(true, 'please enter value', 'danger')
    } else if(name && isEditing){
      // deal with edit
      setList(list.map(item => {
        if(item.id === editId){
          return {...item, title: name}
        }
        return item
      }))

      setName('')
      setEditId(null)
      setIsEditing(false)
      showAlert(true, 'Item edited successfully', 'success')
    } else {
      // show alert
      showAlert(true, 'item added to list', 'success')
      const newItem = {id: new Date().getTime().toString(), title: name}
      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({show, msg, type});
  }

  const clearList = () => {
    showAlert(true, 'empty list', 'danger')
    setList([])
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    console.log(specificItem)
    setIsEditing(true)
    setEditId(id)
    setName(specificItem.title)
  }

  const removeItem = (id) => {
    showAlert(true, 'item removed', 'danger')
    setList(list.filter((item) => item.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <section className="section-center">
      <form onSubmit = {handleSubmit} className="grocery-form">
        { alert.show && <Alert {...alert} removeAlert = {showAlert} list = {list} />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input type="text" className='grocery' placeholder='e.g. Chocolate'  value = { name } onChange={(e) => setName(e.target.value)} />
          <button type='submit' className='submit-btn'>
            { isEditing ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
      {
        list.length > 0 && (
        <div className="grocery-container">
          <List items = { list } removeItem = { removeItem } editItem = {editItem}/>
          <button className="clear-btn" onClick={clearList}>Clear Items</button>
        </div>
      )}    
    </section>
  )
}

export default App
