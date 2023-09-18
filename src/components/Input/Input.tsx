import {
  formatCreditCardNumber,
  getMaskedCreditCardNumber,
} from "@/utils/formatters";
import { CreditCardInputProps } from "@/types/input-types";
import { useState } from "react";

export const Cardify = ({
  value: controlledValue,
  onChange: controlledOnChange,
  render,
  maskCharacter,
  mask,
  defaultValue,
}: CreditCardInputProps) => {
  const [hasFocus, setHasFocus] = useState(false);
  const [inputValue, setInputValue] = useState({
    value: formatCreditCardNumber(defaultValue?.cardNumber).cardNumber || "",
    cardType: defaultValue?.cardType || "Unknown",
  });

  const { value, cardType } = inputValue;

  const formatAndSetValue = (value: string, e?: any) => {
    const formattedValue = formatCreditCardNumber(value);

    if (controlledOnChange) {
      controlledOnChange({
        event: e,
        value: {
          cardNumber: formattedValue.cardNumber,
          cardType: formattedValue.cardType,
        },
      });
    }

    setInputValue({
      value: formattedValue.cardNumber,
      cardType: formattedValue.cardType,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    formatAndSetValue(rawValue, e);
  };

  const isMasked = mask || !hasFocus;

  if (!render) return null;

  const valueToRender = controlledValue || value;

  return render({
    value: isMasked
      ? getMaskedCreditCardNumber(valueToRender, cardType, maskCharacter)
      : valueToRender,
    onChange: handleChange,
    onFocus: () => setHasFocus(true),
    onBlur: () => setHasFocus(false),
    unmaskedValue: valueToRender,
    cardType,
  });
};
