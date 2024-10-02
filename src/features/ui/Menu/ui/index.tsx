const menuItems = ["Личный кабинет", "Безопасность", "Помощь", "Выход"];

export const Menu = () => {
  return (
    <div className="bg-white absolute top-20 right-10 py-9 px-9 rounded-lg shadow-2xl  flex flex-col gap-4 ">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="text-black text-lg cursor-pointer hover:bg-gray-100 rounded-md px-4 py-2"
        >
          {item}
        </div>
      ))}
    </div>
  );
};
