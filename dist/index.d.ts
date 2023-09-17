import * as react from 'react';

type CardType = "AX" | "VI" | "MC" | "DI" | "JCB" | "DC" | "UP" | "Unknown";
interface RenderProps {
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
interface ControlledOnChangeProps {
    event: React.ChangeEvent<HTMLInputElement>;
    value: string;
}
interface CreditCardInputProps {
    value?: string;
    onChange?: ({ event, value }: ControlledOnChangeProps) => void;
    render: (props: RenderProps) => React.ReactElement;
    maskCharacter?: string;
    mask?: boolean;
    defaultValue?: string;
}

declare const Cardify: ({ value: controlledValue, onChange: controlledOnChange, render, maskCharacter, mask, defaultValue, }: CreditCardInputProps) => react.ReactElement<any, string | react.JSXElementConstructor<any>> | null;

export { Cardify };
