import { Input } from "@shared/ui/Input";
import { PrimaryButton } from "@shared/ui/PrimaryButton";

const TestRequest = () => {
  return (
    <div className="p-10 mb-12">
      <span className="text-3xl font-light">Тестовый запрос</span>
      <div className="flex flex-col">
        <div className="flex mt-10 gap-y-7 gap-x-6">
          <div className="w-[22%]">
            <Input
              fontSize="text-lg"
              placeholder="Номер заказа"
              width="w-full"
            />
          </div>
          <div className="w-[22%]">
            <Input fontSize="text-lg" placeholder="Сумма" width="w-full" />
          </div>
          <select className=" bg-transparent">
            <option value="RUB">RUB</option>
            <option value="KZT">KZT</option>
            <option value="UAH">UAH</option>
          </select>
          <div className="w-[22%]">
            <Input fontSize="text-lg" placeholder="Эл. почта" width="w-full" />
          </div>
          <div className="w-[22%]">
            <Input fontSize="text-lg" placeholder="Параметр 1" width="w-full" />
          </div>
        </div>
        <div className="flex mt-14 gap-y-7 gap-x-6">
          <div className="w-[22%]">
            <Input fontSize="text-lg" placeholder="Параметр 2" width="w-full" />
          </div>
          <div className="w-[22%]">
            <Input fontSize="text-lg" placeholder="Параметр 3" width="w-full" />
          </div>
          <div className="w-[22%]">
            <Input fontSize="text-lg" placeholder="Параметр 4" width="w-full" />
          </div>
          <select className=" bg-transparent ">
            <option value="POST">POST</option>
            <option value="GET">GET</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </div>
        <PrimaryButton text="Отправить" margin="mt-12" />
      </div>
    </div>
  );
};

export default TestRequest;
