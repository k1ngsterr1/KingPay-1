interface INote {
  children: React.ReactNode;
}

export const Note: React.FC<INote> = ({ children }) => {
  return (
    <div className="bg-[#EFEFEF] rounded-md py-6 px-5 mt-4 w-[500px]">
      {children}
    </div>
  );
};
