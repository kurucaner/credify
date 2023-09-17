import {
  formatCreditCardNumber,
  getMaskedCreditCardNumber,
} from "@/utils/formatters";
import { useState } from "react";

interface RenderProps {
  maskedValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  placeholder: string;
  unmaskedValue?: string;
  cardType: string;
  ariaLabel?: string;
}

interface CreditCardInputProps {
  render: (props: RenderProps) => React.ReactElement;
  maskCharacter?: string;
}

interface CreditCardNumber {
  value: string;
  cardType: string;
}

export const Cardify = ({ render, maskCharacter }: CreditCardInputProps) => {
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

  return render({
    maskedValue: hasFocus
      ? value
      : getMaskedCreditCardNumber(value, cardType, maskCharacter),
    onChange: handleChange,
    onFocus: () => setHasFocus(true),
    onBlur: () => setHasFocus(false),
    placeholder: "Enter credit card number",
    unmaskedValue: value,
    cardType,
    ariaLabel: "Credit card number",
  });
};
