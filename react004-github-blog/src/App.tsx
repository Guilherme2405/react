import AppRoutes from "./routes";
import { ThemeProvider } from "./components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark">
          <AppRoutes />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
