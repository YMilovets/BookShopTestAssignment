import { ThemeProvider } from "@/app/providers";

import RouterLayout from "../RouterLayout";

function App() {
  return (
    <ThemeProvider>
      <RouterLayout />
    </ThemeProvider>
  );
}

export default App;
