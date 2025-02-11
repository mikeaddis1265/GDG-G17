import { useState } from 'react';

function ReadMore() {
  const [isOpen, setOpen] = useState(false);
  const read = isOpen ? 'read less' : 'read more..';

  const paragraphStyle = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
    width: '200px', // Fixed width
    textAlign: 'center', // Center text
    margin: '0 auto', // Center horizontally
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '200px', margin: '0 auto' }}>
      <p style={isOpen ? { width: '200px', textAlign: 'center' } : paragraphStyle}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi in aperiam reprehenderit vero suscipit sequi quo dolores repellat fugiat veniam? Hic esse atque, ut quam aliquid porro tempore quaerat voluptatem.
      </p>
      <button onClick={() => setOpen(!isOpen)} style={{ marginTop: '10px' }}>
        {read}
      </button>
    </div>
  );
}

export default App;
