// src/constants/card-patterns.ts
var CARD_PATTERNS = {
  AX: /^3[47]\d{0,13}$/,
  VI: /^4\d{0,15}$/,
  MC: /^5[1-5]\d{0,14}$/,
  DI: /^6011\d{0,12}$|^(2131|1800|35\d{0,3})\d{0,11}$|^65\d{0,14}$|^64[4-9]\d{0,13}$|^622(1(2[6-9]|[3-9]\d)|[2-8]\d{2}|9([01]\d|2[0-5]))\d{0,10}$/,
  JCB: /^(2131|1800|35\d{0,3})\d{0,11}$/,
  DC: /^3(0[0-5]|[68]\d)\d{0,11}$/,
  UP: /^62\d{0,14}$/,
  Unknown: /^$/
};

// src/utils/helpers.ts
var generateStars = (length, maskCharacter) => {
  return new Array(length).fill(maskCharacter || "*").join("");
};

// src/utils/formatters.ts
var formatAmex = (number) => {
  if (number.length <= 4)
    return number;
  if (number.length <= 10)
    return `${number.slice(0, 4)}-${number.slice(4)}`;
  return `${number.slice(0, 4)}-${number.slice(4, 10)}-${number.slice(10)}`;
};
var formatGeneric = (number) => {
  const parts = [];
  for (let i = 0; i < number.length; i += 4) {
    parts.push(number.slice(i, i + 4));
  }
  return parts.join("-");
};
var getMaskedCreditCardNumber = (value, cardType, maskCharacter) => {
  if (!value)
    return value;
  const number = value.replace(/[^\d]/g, "");
  const length = number.length;
  const maskedNumber = generateStars(length, maskCharacter);
  switch (cardType) {
    case "AX":
      return formatAmex(maskedNumber);
    case "VI":
    case "MC":
    case "DI":
    case "JCB":
    case "DC":
    case "UP":
    case "Unknown":
      return formatGeneric(maskedNumber);
    default:
      return number;
  }
};
var detectCardType = (number) => {
  var _a;
  for (let type in CARD_PATTERNS) {
    if ((_a = CARD_PATTERNS[type]) == null ? void 0 : _a.test(number))
      return type;
  }
  return "Unknown";
};
var formatCreditCardNumber = (value) => {
  if (!value || typeof value !== "string") {
    return { value: "", cardType: "Unknown" };
  }
  const creditCardNumber = value.replace(/[^\d]/g, "");
  const cardType = detectCardType(creditCardNumber);
  switch (cardType) {
    case "AX":
      return { value: formatAmex(creditCardNumber) || "", cardType };
    case "VI":
    case "MC":
    case "DI":
    case "JCB":
    case "DC":
    case "UP":
    case "Unknown":
      return { value: formatGeneric(creditCardNumber), cardType };
    default:
      return { value: creditCardNumber, cardType };
  }
};

// src/components/Input/Input.tsx
import { useState } from "react";
var Cardify = ({
  render,
  maskCharacter,
  mask
}) => {
  const [hasFocus, setHasFocus] = useState(false);
  const [inputValue, setInputValue] = useState({
    value: "",
    cardType: "Unknown"
  });
  const { value, cardType } = inputValue;
  const handleChange = (e) => {
    const maxLength = cardType === "AX" ? 17 : 19;
    if (e.target.value.length > maxLength)
      return;
    const rawValue = e.target.value;
    const formattedValue = formatCreditCardNumber(rawValue);
    setInputValue({
      value: formattedValue.value,
      cardType: formattedValue.cardType
    });
  };
  const isMasked = mask && !hasFocus;
  return render({
    value: isMasked ? getMaskedCreditCardNumber(value, cardType, maskCharacter) : value,
    onChange: handleChange,
    onFocus: () => setHasFocus(true),
    onBlur: () => setHasFocus(false),
    placeholder: "Enter credit card number",
    unmaskedValue: value,
    cardType,
    ariaLabel: "Credit card number"
  });
};
export {
  Cardify
};
