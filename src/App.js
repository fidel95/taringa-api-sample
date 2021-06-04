import useFetch from './hooks/useFetch';
import TheUser from './components/TheUser';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import React from 'react';


function App() {
    const { data: user, isLoading, error: err } = useFetch(
      "https://beta.taringa.net/api/user/username/sondeoh"
    );

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        {isLoading && <p>loading...</p>}
        <h1>Username</h1>
        {user && <TheUser user={user} />}
        {err && <p>{err}</p>}
      </Container>
    </React.Fragment>
  );
}

export default App;
