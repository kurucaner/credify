import {
  formatCreditCardNumber,
  getMaskedCreditCardNumber,
} from "@/utils/formatters";
import { CreditCardInputProps, CreditCardNumber } from "@/types/input-types";
import { useState } from "react";

export const Cardify = ({
  render,
  maskCharacter,
  mask,
}: CreditCardInputProps) => {
  const [hasFocus, setHasFocus] = useState(false);
  const [inputValue, setInputValue] = useState<CreditCardNumber>({
    value: "",
    cardType: "Unknown",
  });

  const { value, cardType } = inputValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxLength = cardType === "AX" ? 17 : 19;
    if (e.target.value.length > maxLength) return;
    const rawValue = e.target.value;
    const formattedValue = formatCreditCardNumber(rawValue);
    setInputValue({
      value: formattedValue.value,
      cardType: formattedValue.cardType,
    });
  };

  const isMasked = mask && !hasFocus;

  return render({
    value: isMasked
      ? getMaskedCreditCardNumber(value, cardType, maskCharacter)
      : value,
    onChange: handleChange,
    onFocus: () => setHasFocus(true),
    onBlur: () => setHasFocus(false),
    placeholder: "Enter credit card number",
    unmaskedValue: value,
    cardType,
    ariaLabel: "Credit card number",
  });
};
