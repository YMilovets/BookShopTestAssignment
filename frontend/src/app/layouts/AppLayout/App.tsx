import { ReduxProvider, ThemeProvider } from "@/app/providers";

import RouterLayout from "../RouterLayout";

function App() {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <RouterLayout />
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
