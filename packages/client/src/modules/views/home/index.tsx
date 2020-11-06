import React, { useEffect, useState } from 'react';

const Home = () => {
  const [text, setText] = useState<string>('My Button');

  return (
    <>
      <button onClick={() => setText('Button update')}>
        {text}
      </button>
    </>
  );
};

export default Home;
