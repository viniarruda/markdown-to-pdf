import React from 'react';

import { Input, Button, Grid } from '../../layout';

const Home = () => (
  <Grid display="flex" flex={1} flexDirection="column" alignItems="center" justifyContent="center" bg="primary">
    <h1>Home</h1>
    <Grid>
      <Input />
      <Button>Search</Button>
    </Grid>
  </Grid>
);

export default Home;
