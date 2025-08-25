import { Router } from "./routes";

import { UserDataProvider } from "./context/userData";

function App() {
  return (
    <UserDataProvider>
      <Router />
    </UserDataProvider>
  );
}

export default App;
