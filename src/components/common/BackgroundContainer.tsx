const BackgroundContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-amber-50 w-full h-[100vh] overflow-auto p-2">
      {children}
    </div>
  );
};

export default BackgroundContainer;
