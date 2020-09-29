import React, { useState } from 'react';
import MovieResults from './components/MovieResults';
import {TextField, Box} from '@material-ui/core';

function App() {
  const [searchLabel, setSearchLabel] = useState("");

  return (
    <Box p={3}>
      <TextField label="search movie" onChange={(event) => setSearchLabel(event.target.value)} />
      <MovieResults searchLabel={searchLabel} />
    </Box>
  );
}

export default App;
