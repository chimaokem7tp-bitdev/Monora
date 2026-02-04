# Design System Usage Guide

## Table of Contents

1. [Installation](#installation)
2. [Component Usage](#component-usage)
3. [Styling & Customization](#styling--customization)
4. [Accessibility](#accessibility)
5. [Best Practices](#best-practices)
6. [Common Patterns](#common-patterns)

## Installation

### NPM

```bash
npm install enterprise-design-system
```

### Yarn

```bash
yarn add enterprise-design-system
```

### Setup

Import the CSS in your application entry point:

```tsx
// src/main.tsx or src/index.tsx
import 'enterprise-design-system/dist/style.css';
```

## Component Usage

### Basic Import

```tsx
import { Button, Card, Input } from 'enterprise-design-system';
```

### Form Example

```tsx
import { useState } from 'react';
import { Input, Select, Checkbox, Button } from 'enterprise-design-system';

function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    country: '',
    terms: false,
  });

  return (
    <form className="space-y-4">
      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <Input
        label="Password"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />
      <Select
        label="Country"
        options={[
          { label: 'United States', value: 'us' },
          { label: 'Canada', value: 'ca' },
        ]}
        value={formData.country}
        onChange={(value) => setFormData({ ...formData, country: value })}
      />
      <Checkbox
        label="I accept the terms and conditions"
        checked={formData.terms}
        onChange={(checked) => setFormData({ ...formData, terms: checked })}
      />
      <Button type="submit" fullWidth>
        Sign Up
      </Button>
    </form>
  );
}
```

### Data Table Example

```tsx
import { Table, Badge } from 'enterprise-design-system';

function UsersTable() {
  const columns = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    {
      key: 'status',
      label: 'Status',
      render: (value) => (
        <Badge variant={value === 'active' ? 'success' : 'danger'}>
          {value}
        </Badge>
      ),
    },
  ];

  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive' },
  ];

  return (
    <Table
      columns={columns}
      data={data}
      striped
      hoverable
      onRowClick={(row) => console.log('Clicked:', row)}
    />
  );
}
```

### Modal Dialog Example

```tsx
import { useState } from 'react';
import { Modal, ModalFooter, Button, Input } from 'enterprise-design-system';

function EditUserModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Edit User</Button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Edit User"
        size="md"
      >
        <Input
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <ModalFooter>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => {
            // Save logic
            setIsOpen(false);
          }}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
```

## Styling & Customization

### Using className prop

Every component accepts a `className` prop for additional styling:

```tsx
<Button className="mt-4 shadow-lg">
  Custom Styled Button
</Button>
```

### Customizing Tailwind Config

Override default tokens in your `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#your-color-50',
          // ... other shades
          900: '#your-color-900',
        },
      },
    },
  },
};
```

### Custom Component Wrapper

Create wrapped versions with your defaults:

```tsx
// MyButton.tsx
import { Button, ButtonProps } from 'enterprise-design-system';

export function MyButton(props: ButtonProps) {
  return <Button {...props} className={`my-custom-class ${props.className}`} />;
}
```

## Accessibility

### Keyboard Navigation

All interactive components support keyboard navigation:
- **Button**: Enter/Space to activate
- **Modal**: Escape to close
- **Table**: Arrow keys for navigation
- **Checkbox**: Space to toggle

### Screen Reader Support

Components include proper ARIA attributes:

```tsx
<Button aria-label="Close dialog">
  <CloseIcon />
</Button>
```

### Focus Management

Use the built-in focus ring:

```tsx
<div className="focus-ring">
  {/* Content */}
</div>
```

### Color Contrast

All color combinations meet WCAG AA standards. For AAA compliance, use:
- Primary/Secondary/Success: 700+ shades for text
- Warning/Danger: 600+ shades for text

## Best Practices

### 1. Consistent Variant Usage

Use semantic variants consistently:

```tsx
// ✅ Good
<Button variant="danger" onClick={deleteUser}>Delete</Button>
<Button variant="success" onClick={saveData}>Save</Button>

// ❌ Avoid
<Button variant="primary" onClick={deleteUser}>Delete</Button>
```

### 2. Form Validation

Always provide error messages:

```tsx
<Input
  label="Email"
  type="email"
  value={email}
  onChange={setEmail}
  error={!isValidEmail(email) ? 'Invalid email address' : undefined}
/>
```

### 3. Loading States

Show loading indicators for async operations:

```tsx
<Button
  loading={isSubmitting}
  disabled={isSubmitting}
  onClick={handleSubmit}
>
  {isSubmitting ? 'Submitting...' : 'Submit'}
</Button>
```

### 4. Responsive Design

Use Tailwind responsive utilities:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card>Content</Card>
  <Card>Content</Card>
  <Card>Content</Card>
</div>
```

### 5. Composition

Compose components for complex UIs:

```tsx
<Card>
  <CardHeader>
    <div className="flex items-center justify-between">
      <CardTitle>Users</CardTitle>
      <Badge variant="primary">{users.length}</Badge>
    </div>
    <CardDescription>Manage system users</CardDescription>
  </CardHeader>
  <CardContent>
    <Table columns={columns} data={users} />
  </CardContent>
  <CardFooter>
    <Button variant="outline" size="sm">Export</Button>
    <Button size="sm">Add User</Button>
  </CardFooter>
</Card>
```

## Common Patterns

### Search & Filter

```tsx
function SearchableList() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  return (
    <>
      <div className="flex gap-4 mb-4">
        <Input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          leftIcon={<SearchIcon />}
        />
        <Select
          options={[
            { label: 'All', value: 'all' },
            { label: 'Active', value: 'active' },
            { label: 'Inactive', value: 'inactive' },
          ]}
          value={filter}
          onChange={setFilter}
        />
      </div>
      <Table columns={columns} data={filteredData} />
    </>
  );
}
```

### Confirmation Dialog

```tsx
function DeleteButton({ onConfirm }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="danger" onClick={() => setIsOpen(true)}>
        Delete
      </Button>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="sm">
        <Alert variant="danger" title="Confirm Deletion">
          This action cannot be undone. Are you sure?
        </Alert>
        <ModalFooter>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => {
            onConfirm();
            setIsOpen(false);
          }}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
```

### Multi-Step Form

```tsx
function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  return (
    <Card>
      <CardHeader>
        <CardTitle>Step {step} of 3</CardTitle>
      </CardHeader>
      <CardContent>
        {step === 1 && <StepOne data={formData} onChange={setFormData} />}
        {step === 2 && <StepTwo data={formData} onChange={setFormData} />}
        {step === 3 && <StepThree data={formData} onChange={setFormData} />}
      </CardContent>
      <CardFooter>
        {step > 1 && (
          <Button variant="ghost" onClick={() => setStep(step - 1)}>
            Back
          </Button>
        )}
        {step < 3 ? (
          <Button onClick={() => setStep(step + 1)}>Next</Button>
        ) : (
          <Button variant="success">Submit</Button>
        )}
      </CardFooter>
    </Card>
  );
}
```

### Status Badges

```tsx
function StatusBadge({ status }) {
  const variants = {
    active: 'success',
    pending: 'warning',
    inactive: 'danger',
    processing: 'primary',
  };

  return (
    <Badge variant={variants[status]} dot>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
}
```

### User Avatar with Info

```tsx
function UserInfo({ user }) {
  return (
    <div className="flex items-center gap-3">
      <Avatar
        src={user.avatar}
        name={user.name}
        size="lg"
        color="primary"
      />
      <div>
        <h3 className="font-semibold">{user.name}</h3>
        <p className="text-sm text-neutral-600">{user.email}</p>
        <Badge variant="success" size="sm">Online</Badge>
      </div>
    </div>
  );
}
```

### Inline Editing

```tsx
function EditableField({ value, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);

  if (isEditing) {
    return (
      <div className="flex gap-2">
        <Input
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          size="sm"
        />
        <Button size="sm" onClick={() => {
          onSave(editValue);
          setIsEditing(false);
        }}>
          Save
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span>{value}</span>
      <Button size="sm" variant="ghost" onClick={() => setIsEditing(true)}>
        Edit
      </Button>
    </div>
  );
}
```

## TypeScript Usage

### Importing Types

```tsx
import type { ButtonProps, Size, Variant } from 'enterprise-design-system';
```

### Extending Component Props

```tsx
import { ButtonProps } from 'enterprise-design-system';

interface CustomButtonProps extends ButtonProps {
  customProp: string;
}

function CustomButton({ customProp, ...props }: CustomButtonProps) {
  return <Button {...props}>{customProp}</Button>;
}
```

### Generic Table Component

```tsx
import { Table, TableColumn } from 'enterprise-design-system';

interface User {
  id: number;
  name: string;
  email: string;
}

function UserTable({ users }: { users: User[] }) {
  const columns: TableColumn<User>[] = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
  ];

  return <Table<User> columns={columns} data={users} />;
}
```

## Performance Tips

1. **Tree Shaking**: Import only what you need
2. **Memoization**: Wrap expensive table renders with `React.memo`
3. **Virtual Scrolling**: For large tables, consider virtualization
4. **Debounce**: Use the provided `debounce` utility for search inputs

```tsx
import { debounce } from 'enterprise-design-system';

const debouncedSearch = debounce((value) => {
  // Search logic
}, 300);
```

---

For more information and live examples, visit the Storybook documentation.
