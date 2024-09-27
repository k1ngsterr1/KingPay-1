import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { payments } from "@shared/lib/content/paymentProjectContent";
import { PaymentWay } from "@shared/ui/PaymentWay";
import { PrimaryButton } from "@shared/ui/PrimaryButton";
var PaymentWays = function () {
    return (_jsxs("div", { className: "p-8 mb-12", children: [_jsx("span", { className: "text-3xl font-light", children: "\u041F\u043B\u0430\u0442\u0435\u0436\u043D\u044B\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F" }), _jsx("div", { className: "mt-8 grid grid-cols-3 gap-x-12 gap-y-8", children: payments.map(function (payment, index) { return (_jsx(PaymentWay, { image: payment.image, name: payment.name, isVisa: payment.isVisa, image2: payment.image2 }, index)); }) }), _jsx(PrimaryButton, { text: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C", margin: "mt-12" })] }));
};
export default PaymentWays;
