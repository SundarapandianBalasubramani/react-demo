import {
  FluentProvider,
  teamsDarkTheme,
  teamsLightTheme,
  Toast,
  Toaster,
  ToastIntent,
  ToastPosition,
  ToastTitle,
  useId,
  useThemeClassName,
  useToastController,
  webDarkTheme,
  webLightTheme,
} from "@fluentui/react-components";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

// Define a type for the context value



type ITheme = {
  toast: (intent: ToastIntent, msg: string, position?: ToastPosition) => void;
  applyTheme: (theme: | typeof teamsLightTheme
    | typeof teamsDarkTheme
    | typeof webLightTheme
    | typeof webDarkTheme) => void;
    theme: typeof teamsLightTheme | typeof teamsDarkTheme | typeof webLightTheme | typeof webDarkTheme;
};

export const AppContext = createContext<ITheme>({} as ITheme);
// Create the context with a default value

export const Theme: React.FC<PropsWithChildren> = ({ children }) => {
  const toasterId = useId("toaster");
  const { dispatchToast } = useToastController(toasterId);
  const [theme, setTheme] = useState(webLightTheme);

  const toast = useCallback(
    (intent: ToastIntent, msg: string, position: ToastPosition = "top-end") => {
      dispatchToast(
        <Toast>
          <ToastTitle>{msg}</ToastTitle>
        </Toast>,
        { intent, position }
      );
    },
    [dispatchToast]
  );

  const applyTheme = useCallback(
    (
      theme:
        | typeof teamsLightTheme
        | typeof teamsDarkTheme
        | typeof webLightTheme
        | typeof webDarkTheme
    ) => {
      setTheme(theme);
    },
    []
  );

  const value = useMemo(() => ({
    toast, applyTheme, theme
  }), [applyTheme, toast, theme]);



  return (
    <FluentProvider theme={theme}>
      <ApplyThemeToBody />
      <Toaster toasterId={toasterId} />
      <AppContext.Provider value={value}>    
        {children}    
      </AppContext.Provider>
    </FluentProvider>
  );
};

const ApplyThemeToBody = () => {
  const classes = useThemeClassName();
  useEffect(() => {
    const classList = classes.split(" ");
    document.body.classList.add(...classList);
    return () => document.body.classList.remove(...classList);
  }, [classes]);
  return null;
};
