import ErrorBoundary from ".";

export const ComponentWithError: React.FC = () => {
  throw new Error("Error in ComponentWithError");
};

export const ComponentWithErrorWrapper: React.FC = () => {
  return (
    <ErrorBoundary fallback={<>{"Some fallback Text "}</>}>
      <ComponentWithError />
    </ErrorBoundary>
  );
};
