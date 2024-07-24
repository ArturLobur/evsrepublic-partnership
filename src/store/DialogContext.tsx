import {createContext, FC, ReactNode, useContext, useState} from "react";

interface DialogContextType {
  open: boolean;
  toggleDialog: () => void;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const DialogProvider: FC<{children: ReactNode}> = ({children}) => {
  const [open, setOpen] = useState(false);

  console.log("open", open);

  const toggleDialog = () => setOpen(!open);

  return (
    <DialogContext.Provider value={{open, toggleDialog}}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (context === undefined) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};