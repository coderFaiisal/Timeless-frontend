"use client";

import store from "@/redux/store";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";


const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        {children}
        
      </Provider>
    </ThemeProvider>
  );
};

export default Providers;
