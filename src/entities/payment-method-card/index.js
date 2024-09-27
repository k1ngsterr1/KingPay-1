import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./styles.module.scss";
export var PaymentMethodCard = function (_a) {
    var title = _a.title, cards = _a.cards, margin = _a.margin;
    return (_jsxs("div", { className: "flex flex-col items-center ".concat(margin), children: [_jsx("span", { className: "font-light text-2xl", children: title }), _jsx("div", { className: "flex flex-wrap justify-center gap-8 mt-6", children: cards.map(function (card, index) {
                    return (_jsxs("div", { className: "".concat(styles.card, " flex flex-col items-center justify-between gap-2 border-[#D9D9D9] border-[1.5px] rounded-lg"), children: [_jsx("img", { src: card.img, alt: "payment-method", className: "".concat(card.margin) }), _jsx("span", { className: "".concat(styles.card__name, " text-[#6A6A6A] text-sm mb-3"), children: card.name })] }, index));
                }) })] }));
};
