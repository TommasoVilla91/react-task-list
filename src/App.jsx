import tasks from "./data.js";

function App() {
  
  const completedTasks = tasks.filter((task) => task.state === "completed");
  const openTasks = tasks.filter((task) => task.state !== "completed");
  

  return (
    <>
      <h1>Task Manager</h1>
      <h3>Current Tasks ({openTasks.length})</h3>
      <ul>
        {
          openTasks.map((curTask, index) => {
            return (
              <li key={index}>
                <div>
                  <p><strong>{curTask.title}</strong></p>
                  <span>{curTask.state}</span>
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
              <div>
                  <p><strong>{curTask.title}</strong></p>
                  <span>{curTask.state}</span>
              </div>
              <p>Priority: {curTask.priority}</p>
              <p>Est. time {curTask.estimatedTime}</p>
              </li>
            )
          })
        }
      </ul>
  
      

    </>
  )
}

export default App
