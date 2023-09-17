# Cardify

A flexible and highly customizable React component for credit card input, capable of masking, formatting, and detecting card types.

## Features

- 🎨 Render prop pattern for ultimate customization
- 🔒 Masking for security
- 📋 Automatically formats as you type
- 🎴 Detects card type (e.g., Visa, MasterCard, Amex)
- 🌐 ARIA accessible

## Installation

```bash
npm install --save react-cardify
yarn add react-cardify
pnpm add react-cardify
bun install react-cardify
```

## Usage

```jsx
import { Cardify } from "react-cardify";

export default function Home() {
  return (
    <Cardify
      render={({
        value,
        onChange,
        onFocus,
        onBlur,
        placeholder,
        unmaskedValue,
        cardType,
      }) => {
        console.log("value", value);
        console.log("unmaskedValue", unmaskedValue);
        console.log("cardType", cardType);
        return (
          <input
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
          />
        );
      }}
    />
  );
}
```

## Props

| Prop name       | Type                                                                                              | Description                             | Default value |
| --------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------- | ------------- |
| `render`        | `({ value, onChange, onFocus, onBlur, placeholder, unmaskedValue, cardType }) => React.ReactNode` | Render prop for ultimate customization. | `undefined`   |
| `maskCharacter` | `string`                                                                                          | The character to use for masking.       | `"•"`         |

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

### Render prop arguments

| Argument name   | Type     | Description                                         | Default value       |
| --------------- | -------- | --------------------------------------------------- | ------------------- |
| `value`         | `string` | The masked value.                                   | `""`                |
| `onChange`      | `func`   | The function to call when the value changes.        | `handleChange`      |
| `onFocus`       | `func`   | The function to call when the input is focused.     | `undefined`         |
| `onBlur`        | `func`   | The function to call when the input is blurred.     | `undefined`         |
| `placeholder`   | `string` | The placeholder to display when the input is empty. | `Enter card number` |
| `unmaskedValue` | `string` | The unmasked value.                                 | `""`                |
| `cardType`      | `string` | The card type.                                      | `""`                |
| `ariaLabel`     | `string` | The aria label for the input.                       | `""`                |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
