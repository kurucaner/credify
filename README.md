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

### Uncontrolled

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

### Controlled

```jsx
import { useState } from "react";
import { Cardify } from "react-cardify";

export default function Home() {
  const defaultValue = "95827712367284";
  const [controlledValue, setControlledValue] = useState(defaultValue);

  return (
    <_Cardify
      value={controlledValue}
      onChange={({ event, value }: { event: any, value: string }) =>
        setControlledValue(value)
      }
      defaultValue={defaultValue}
      render={({
        value,
        onChange,
        onFocus,
        onBlur,
        unmaskedValue,
        cardType,
      }) => {
        return (
          <div>
            <input
              value={value}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </div>
        );
      }}
    />
  );
}
```

## Props

| Prop name       | Type                                                                                              | Description                                  | Default value |
| --------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------- |
| `render`        | `({ value, onChange, onFocus, onBlur, placeholder, unmaskedValue, cardType }) => React.ReactNode` | Render prop for ultimate customization.      | `undefined`   |
| `maskCharacter` | `string`                                                                                          | The character to use for masking.            | `"•"`         |
| `mask`          | `bool`                                                                                            | Whether to mask the input.                   | `true`        |
| `value`         | `string`                                                                                          | The value of the input.                      | `""`          |
| `defaultValue`  | `{ cardNumber: string, cardType: string }`                                                        | The default value of the input.              | `undefined`   |
| `onChange`      | `({ event, value }: { event: any, value: { cardNumber: string, cardType: string } }) => void`     | The function to call when the value changes. | `undefined`   |

### Render prop arguments

| Argument name   | Type     | Description                                                         | Default value       |
| --------------- | -------- | ------------------------------------------------------------------- | ------------------- |
| `value`         | `string` | Value of the input is unmasked when focused and masked when blurred | `""`                |
| `onChange`      | `func`   | The function to call when the value changes.                        | `handleChange`      |
| `onFocus`       | `func`   | The function to call when the input is focused.                     | `undefined`         |
| `onBlur`        | `func`   | The function to call when the input is blurred.                     | `undefined`         |
| `placeholder`   | `string` | The placeholder to display when the input is empty.                 | `Enter card number` |
| `unmaskedValue` | `string` | The unmasked value.                                                 | `""`                |
| `cardType`      | `string` | The card type.                                                      | `""`                |
| `ariaLabel`     | `string` | The aria label for the input.                                       | `""`                |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Dependencies

- [react](https://ghub.io/react): React is a JavaScript library for building user interfaces.
- [react-dom](https://ghub.io/react-dom): React package for working with the DOM.
