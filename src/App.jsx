import tasks from "./data.js";

function App() {
  
  const completedTasks = tasks.filter((task) => task.state === "completed");
  const openTasks = tasks.filter((task) => task.state !== "completed");
  

  return (
    <>
      <header>
        <h1>Task Manager</h1>
      </header>
      <main>
        <h3>Current Tasks ({openTasks.length})</h3>
        <ul>
          {
            openTasks.map((curTask, index) => {
              return (
                <li key={index}>
                  <div className="task-title">
                    <p><strong>{curTask.title}</strong></p>
                    <span className="status">{curTask.state}</span>
                  </div>
                  <p>Priority: {curTask.priority}</p>
                  <p>Est. time {curTask.estimatedTime}</p>
                </li>
              )
            })
          }
        </ul>

        <hr />

        <h3>Completed Tasks ({completedTasks.length})</h3>
        <ul>
          {
            completedTasks.map((curTask, index) => {
              return (
              <li key={index}>
                <div className="task-title">
                    <p><strong>{curTask.title}</strong></p>
                    <span className="status completed">{curTask.state}</span>
                </div>
                <p>Priority: {curTask.priority}</p>
                <p>Est. time {curTask.estimatedTime}</p>
              </li>
              )
            })
          }
        </ul>
      </main>
      
  
      

    </>
  )
}

export default App
