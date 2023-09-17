import * as react from 'react';

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
declare const Cardify: ({ render, maskCharacter }: CreditCardInputProps) => react.ReactElement<any, string | react.JSXElementConstructor<any>>;

export { Cardify };
