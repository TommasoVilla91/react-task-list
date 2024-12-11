import tasks from "./data.js";

function App() {
  
  const completedTasks = tasks.filter((task) => task.state === `completed`);
  const openTasks = tasks.filter((task) => task.state !== `completed`);
  console.log(openTasks);
  

  return (
    <>
      <h1>Task Manager</h1>
      <h3>Current Tasks ()</h3>
      <ul>
        {openTasks.map((curTask, index) => (<li key={index}>{curTask}</li>))}
      </ul>

      <h3>Completed Tasks ()</h3>
      <ul>
        {completedTasks.map((curTask, index) => (<li key={index}>{curTask}</li>))}
      </ul>
  
      

    </>
  )
}

export default App
