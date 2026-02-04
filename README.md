# Enterprise Design System

A comprehensive design system and component library built with React, TypeScript, Tailwind CSS, and Storybook for enterprise applications.

## Features

- 🎨 **12 Core Components** - Button, Input, Card, Badge, Avatar, Modal, Table, Select, Checkbox, Tooltip, Spinner, Alert
- 🎯 **TypeScript** - Full type safety and IntelliSense support
- 🌈 **Tailwind CSS** - Utility-first styling with custom design tokens
- 📚 **Storybook** - Interactive component documentation
- ♿ **Accessible** - ARIA compliant and keyboard navigable
- 🎭 **Variants** - Multiple variants, sizes, and states for each component
- 🎨 **Themeable** - Customizable color schemes and design tokens
- 📱 **Responsive** - Mobile-first design approach

## Installation

```bash
npm install
```

## Getting Started

### Run Storybook

```bash
npm run storybook
```

This will start Storybook on `http://localhost:6006`

### Build the Library

```bash
npm run build
```

### Use in Your Project

```tsx
import { Button, Card, Input } from 'enterprise-design-system';

function App() {
  return (
    <Card>
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

## Components

### Button

Versatile button component with multiple variants and sizes.

```tsx
<Button variant="primary" size="md" onClick={() => {}}>
  Click me
</Button>
```

**Variants:** `primary`, `secondary`, `success`, `warning`, `danger`, `ghost`, `outline`  
**Sizes:** `xs`, `sm`, `md`, `lg`, `xl`

### Input

Text input with labels, icons, and validation states.

```tsx
<Input
  label="Email"
  type="email"
  placeholder="you@example.com"
  error="Invalid email"
  leftIcon={<SearchIcon />}
/>
```

### Card

Container component with header, content, and footer sections.

```tsx
<Card variant="elevated" padding="lg">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content here</CardContent>
  <CardFooter>Footer actions</CardFooter>
</Card>
```

**Variants:** `elevated`, `outlined`, `filled`

### Badge

Small status indicators with different variants.

```tsx
<Badge variant="success" size="sm" dot>
  Active
</Badge>
```

### Avatar

User profile images with fallback to initials.

```tsx
<Avatar src="image.jpg" name="John Doe" size="md" color="primary" />

<AvatarGroup max={3}>
  <Avatar name="John Doe" />
  <Avatar name="Jane Smith" />
  <Avatar name="Bob Johnson" />
</AvatarGroup>
```

### Modal

Accessible dialog component with customizable size.

```tsx
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal Title" size="md">
  <p>Modal content</p>
  <ModalFooter>
    <Button variant="ghost">Cancel</Button>
    <Button>Confirm</Button>
  </ModalFooter>
</Modal>
```

### Table

Data table with sorting and custom rendering.

```tsx
<Table
  columns={[
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { 
      key: 'status', 
      label: 'Status', 
      render: (value) => <Badge>{value}</Badge> 
    },
  ]}
  data={data}
  striped
  hoverable
/>
```

### Select

Dropdown select with custom options.

```tsx
<Select
  label="Country"
  options={[
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
  ]}
  value={value}
  onChange={setValue}
/>
```

### Checkbox

Simple checkbox with label support.

```tsx
<Checkbox
  label="Accept terms and conditions"
  checked={checked}
  onChange={setChecked}
/>
```

### Tooltip

Contextual information on hover.

```tsx
<Tooltip content="Helpful information" position="top">
  <Button>Hover me</Button>
</Tooltip>
```

### Spinner

Loading indicator with different sizes and colors.

```tsx
<Spinner size="md" color="primary" />
```

### Alert

Notification messages with different severity levels.

```tsx
<Alert variant="success" title="Success" onClose={() => {}}>
  Your changes have been saved.
</Alert>
```

**Variants:** `info`, `success`, `warning`, `danger`

## Design Tokens

### Colors

The design system includes comprehensive color palettes:

- **Primary** - Brand color (Blue)
- **Secondary** - Accent color (Purple)
- **Success** - Green
- **Warning** - Yellow
- **Danger** - Red
- **Neutral** - Gray scale

Each color has 11 shades (50-950) for maximum flexibility.

### Typography

- **Font Family:** Inter (sans-serif)
- **Font Sizes:** xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl
- **Line Heights:** Optimized for readability

### Spacing

Tailwind's default spacing scale with custom additions:
- 128 (32rem)
- 144 (36rem)

### Border Radius

- sm, md, lg, xl, 2xl, 3xl, 4xl, full

### Shadows

- sm, md, lg, xl, 2xl, inner

## Customization

### Tailwind Configuration

Customize the design system by modifying `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom primary colors
      },
    },
  },
}
```

### Component Variants

Use the `className` prop to override or extend component styles:

```tsx
<Button className="hover:scale-105">Custom Button</Button>
```

## Utilities

### cn()

Merge Tailwind classes safely:

```tsx
import { cn } from 'enterprise-design-system';

cn('px-4 py-2', 'bg-blue-500', condition && 'text-white');
```

### getInitials()

Extract initials from a name:

```tsx
import { getInitials } from 'enterprise-design-system';

getInitials('John Doe'); // "JD"
```

### formatFileSize()

Format bytes to human-readable size:

```tsx
import { formatFileSize } from 'enterprise-design-system';

formatFileSize(1024); // "1 KB"
```

### debounce()

Debounce function calls:

```tsx
import { debounce } from 'enterprise-design-system';

const debouncedSearch = debounce(searchFunction, 300);
```

## TypeScript Support

Full TypeScript support with exported types:

```tsx
import type { ButtonProps, Size, Variant } from 'enterprise-design-system';
```

## Best Practices

1. **Consistency** - Use the design system components consistently across your application
2. **Accessibility** - Components are built with accessibility in mind, but always test with screen readers
3. **Performance** - Tree-shaking is supported, import only what you need
4. **Responsive** - All components are mobile-first and responsive
5. **Semantic HTML** - Use appropriate HTML elements for better SEO and accessibility

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add/update Storybook stories
5. Submit a pull request

## License

MIT License

## Credits

Built with:
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [Vite](https://vitejs.dev/)
