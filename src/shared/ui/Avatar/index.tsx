interface IAvatar {
  letter: string;
}

export const Avatar: React.FC<IAvatar> = ({ letter }) => {
  return (
    <div className="rounded-full w-[32px] h-[32px] bg-primary text-black items-center justify-center flex">
      {letter}
    </div>
  );
};
