function TaskCard({ item, deleteItem, toggleComplete }) {

  return (
    <div className={`task-card ${item.type}`}>

      <div className="task-top">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => toggleComplete(item.id)}
        />

        <span className={item.completed ? "done" : ""}>
          {item.text}
        </span>

        <button onClick={() => deleteItem(item.id)}>✕</button>
      </div>

      <small className="type-label">{item.type}</small>

    </div>
  );
}

export default TaskCard;