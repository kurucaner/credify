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
        maskedValue,
        onChange,
        onFocus,
        onBlur,
        placeholder,
        unmaskedValue,
        cardType,
      }) => {
        console.log("maskedValue", maskedValue);
        console.log("unmaskedValue", unmaskedValue);
        console.log("cardType", cardType);
        return (
          <input
            value={maskedValue}
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

### Render prop arguments

| Argument name   | Type     | Description                                                                 | Default value |
| --------------- | -------- | --------------------------------------------------------------------------- | ------------- |
| `value`         | `string` | The masked value.                                                           | `""`          |
| `onChange`      | `func`   | The function to call when the value changes.                                | `undefined`   |
| `onFocus`       | `func`   | The function to call when the input is focused.                             | `undefined`   |
| `onBlur`        | `func`   | The function to call when the input is blurred.                             | `undefined`   |
| `placeholder`   | `string` | The placeholder to use when the input is empty.                             | `""`          |
| `unmaskedValue` | `string` | The unmasked value.                                                         | `""`          |
| `cardType`      | `string` | The card type. Possible values are `"visa"`, `"mastercard"`, `"amex"`, etc. | `""`          |
