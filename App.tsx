import "react-native-gesture-handler";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./common/queryClient";
import { FollowedAnimesProvider } from "./context/FollowedAnimesContext";
import { ThemeProvider } from "./context/ThemeContext";
import NavigationComponents from "./pages/Index";

const App = () => {
  return (
    <ThemeProvider>
      <FollowedAnimesProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationComponents />
        </QueryClientProvider>
      </FollowedAnimesProvider>
    </ThemeProvider>
  );
};

export default App;
