export type CardType =
  | "AX"
  | "VI"
  | "MC"
  | "DI"
  | "JCB"
  | "DC"
  | "UP"
  | "Unknown";

export interface RenderProps {
  /**
   * Value of the input is unmasked when focused and masked when blurred
   */
  value: string;
  /**
   *
   * @param e  - React.ChangeEvent<HTMLInputElement>
   * @returns void
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   *
   * @returns void
   */
  onFocus: () => void;
  /**
   *
   * @returns void
   */
  onBlur: () => void;
  /**
   * Placeholder text for the input
   */
  placeholder: string;
  /**
   * Unmasked value of the input
   */
  unmaskedValue?: string;
  /**
   * Card type of the input
   * @example "AX" | "VI" | "MC" | "DI" | "JCB" | "DC" | "UP" | "Unknown"
   */
  cardType: CardType;
  /**
   * Aria label for the input
   */
  ariaLabel?: string;
}

export interface CreditCardInputProps {
  render: (props: RenderProps) => React.ReactElement;
  maskCharacter?: string;
  mask?: boolean;
}

export interface CreditCardNumber {
  value: string;
  cardType: CardType;
}
