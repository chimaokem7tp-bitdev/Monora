# Enterprise Design System - Setup Instructions

## Quick Start

### 1. Install Dependencies

```bash
cd enterprise-design-system
npm install
```

### 2. Run Storybook (Recommended)

```bash
npm run storybook
```

This will start Storybook at `http://localhost:6006` where you can:
- Browse all 12 components
- View interactive examples
- Test different props and states
- See live code examples
- Read comprehensive documentation

### 3. Build the Library

```bash
npm run build
```

This creates production-ready files in the `dist/` directory.

## Project Structure

```
enterprise-design-system/
├── .storybook/              # Storybook configuration
│   ├── main.ts             # Main config
│   └── preview.ts          # Preview settings
├── src/
│   ├── components/         # Component library
│   │   ├── Alert/
│   │   ├── Avatar/
│   │   ├── Badge/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Checkbox/
│   │   ├── Input/
│   │   ├── Modal/
│   │   ├── Select/
│   │   ├── Spinner/
│   │   ├── Table/
│   │   └── Tooltip/
│   ├── styles/             # Global styles & Tailwind
│   │   └── index.css
│   ├── types/              # TypeScript definitions
│   │   └── index.ts
│   ├── utils/              # Helper functions
│   │   └── helpers.ts
│   ├── ExampleApp.tsx      # Full application example
│   ├── Introduction.stories.tsx  # Documentation homepage
│   └── index.ts            # Main export file
├── README.md               # Project overview
├── USAGE_GUIDE.md         # Comprehensive usage guide
├── package.json
├── tsconfig.json
├── tailwind.config.js     # Design tokens & theme
├── vite.config.ts
└── postcss.config.js

```

## Available Components

1. **Button** - Primary, secondary, success, warning, danger, ghost, outline variants
2. **Input** - Text inputs with labels, icons, and validation
3. **Card** - Container with header, content, and footer sections
4. **Badge** - Status indicators with variants and dot option
5. **Avatar** - User profile images with fallback to initials
6. **Modal** - Accessible dialog with customizable sizes
7. **Table** - Data table with sorting and custom rendering
8. **Select** - Dropdown with custom options
9. **Checkbox** - Simple checkbox with label
10. **Tooltip** - Contextual information on hover
11. **Spinner** - Loading indicators
12. **Alert** - Notification messages

## Key Features

- ✅ **12 Production-Ready Components**
- ✅ **TypeScript Support** - Full type safety
- ✅ **Storybook Documentation** - Interactive examples
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **Accessible** - ARIA compliant
- ✅ **Customizable** - Design tokens and theming
- ✅ **Responsive** - Mobile-first approach
- ✅ **Example Application** - Full-featured demo

## Using the Design System

### In Your Project

1. **Import CSS:**
```tsx
import 'enterprise-design-system/dist/style.css';
```

2. **Import Components:**
```tsx
import { Button, Card, Input } from 'enterprise-design-system';

function App() {
  return (
    <Card>
      <Input label="Email" type="email" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

### View Example Application

Open Storybook and navigate to:
- **Examples → Full Application**

This shows a complete enterprise application using all components together.

## Customization

### Modify Design Tokens

Edit `tailwind.config.js` to customize:
- Colors (primary, secondary, success, warning, danger)
- Typography (font families, sizes)
- Spacing
- Border radius
- Shadows
- Animations

Example:
```js
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-brand-color',
        // ... other shades
      },
    },
  },
}
```

## Development

### Adding New Components

1. Create component folder in `src/components/`
2. Create `ComponentName.tsx` and `ComponentName.stories.tsx`
3. Add types to `src/types/index.ts`
4. Export from `src/index.ts`
5. Run Storybook to test

### Component Template

```tsx
// MyComponent.tsx
import React from 'react';
import { cn } from '../../utils/helpers';

export interface MyComponentProps {
  children: React.ReactNode;
  className?: string;
}

export const MyComponent: React.FC<MyComponentProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('base-styles', className)}>
      {children}
    </div>
  );
};

MyComponent.displayName = 'MyComponent';
```

## Scripts

- `npm run storybook` - Start Storybook dev server
- `npm run build-storybook` - Build static Storybook
- `npm run build` - Build library for production
- `npm run lint` - Run ESLint

## Resources

- **README.md** - Project overview and features
- **USAGE_GUIDE.md** - Comprehensive usage examples
- **Storybook** - Interactive component documentation
- **src/ExampleApp.tsx** - Full application example

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Next Steps

1. Run `npm run storybook` to explore components
2. Review the Example Application in Storybook
3. Read USAGE_GUIDE.md for detailed patterns
4. Start building your application!

## Support

For questions or issues:
- Check the Storybook documentation
- Review component stories for examples
- Read USAGE_GUIDE.md for common patterns

---

Happy building! 🚀
