const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-3xl font-bold text-gray-900 text-center p-6">
      {children}
    </div>
  );
};

export default Heading;
