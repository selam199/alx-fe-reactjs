import { useState } from 'react';



function Counter() {
  // Step 1: initialize state with useState, starting at 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* Step 2: Display current count */}
      <p style={{ fontSize: '1.2rem' }}>Current Count: {count}</p>

      {/* Step 3: Add buttons with onClick handlers */}
      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: '5px', padding: '10px' }}
      >
        Increment
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: '5px', padding: '10px' }}
      >
        Decrement
      </button>

      <button
        onClick={() => setCount(0)}
        style={{ margin: '5px', padding: '10px' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
