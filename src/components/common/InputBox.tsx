const InputBox = ({ ...args }) => {
  return (
    <input
      className="border rounded-md border-blue-400 bg-white text-gray-700 p-1"
      type="number"
      {...args}
    />
  );
};

export default InputBox;