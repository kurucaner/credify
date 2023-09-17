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
import Cardify from "react-cardify";

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
