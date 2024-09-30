interface INote {
  width: string;
  children: React.ReactNode;
}

export const Note: React.FC<INote> = ({ children, width }) => {
  return (
    <div className={`bg-[#EFEFEF] rounded-md py-6 px-5 mt-4 ${width}`}>
      {children}
    </div>
  );
};
