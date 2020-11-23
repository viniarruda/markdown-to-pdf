import React, { useState } from 'react';

import { Input, Button, Grid } from '../../layout';

const Home = () => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <Grid display="flex" flex={1} flexDirection="column" alignItems="center" justifyContent="center" bg="primary">
      <h1>Home</h1>
      <Grid>
        <Input onChange={(e) => setInputValue(e.currentTarget.value)} value={inputValue} />
        <Button>Search</Button>
      </Grid>
    </Grid>
  );
};

export default Home;
