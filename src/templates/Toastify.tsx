import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React, { createContext, useContext, useState } from "react";

type Variant = "error" | "warning" | "info" | "success";

const ToastifyContext = createContext<
  (variant: Variant, mesage: string) => void | undefined
>(() => {});

export const useToast = () => {
  const context = useContext(ToastifyContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastifyProviders");
  }

  return context;
};

interface IToastifyProps {
  children: React.ReactNode;
}

export const ToastifyProvider = ({ children }: IToastifyProps) => {
  const [toastifyOpen, settoastifyOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState<Variant>("success");

  const showToastify = (variant: Variant = "success", message: string) => {
    setMessage(message);
    setVariant(variant);
    settoastifyOpen(true);
  };

  const closeToastify = () => {
    settoastifyOpen(false);
  };

  return (
    <ToastifyContext.Provider value={showToastify}>
      {children}
      <Snackbar
        open={toastifyOpen}
        autoHideDuration={5000} // Adjust as needed
        onClose={closeToastify}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={closeToastify}
          severity={variant}
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </ToastifyContext.Provider>
  );
};
