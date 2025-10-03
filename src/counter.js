export function setupCounter() {
  const [counter, setCounter] = useState(0);
    return <div>
      <button onClick={()=>{setCounter(c=>c+1)}}>click me</button>
      {count && <p>{count} times clicked..!</p>}
      </div>;
  }
  
