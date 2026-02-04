'use client'

import React, { useState, Suspense } from 'react'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/Card'
import Badge from '@/components/Badge'
import Alert from '@/components/Alert'
import Container from '@/components/Container'
import Grid from '@/components/Grid'
import Select from '@/components/Select'

export default function DesignSystemShowcase() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [selectedOption, setSelectedOption] = useState('option1')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    if (!value.includes('@')) {
      setEmailError('Please enter a valid email')
    } else {
      setEmailError('')
    }
  }

  const buttonVariants = ['primary', 'secondary', 'accent', 'ghost', 'outline', 'destructive'] as const
  const buttonSizes = ['xs', 'sm', 'md', 'lg'] as const
  const badgeVariants = ['primary', 'secondary', 'accent', 'success', 'warning', 'destructive'] as const
  const alertTypes = ['info', 'success', 'warning', 'error'] as const

  return (
    <main className="bg-background text-foreground">
      {/* Header Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-b border-border">
        <Container>
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h1>Design System Showcase</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A comprehensive, tech-forward design system with customizable components, semantic tokens, and a modern aesthetic.
            </p>
            <div className="flex gap-3 flex-wrap justify-center pt-4">
              <Button variant="primary">Get Started</Button>
              <Button variant="outline">View Docs</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Color System Section */}
      <section className="py-12 px-4 md:px-6">
        <Container>
          <div className="space-y-8">
            <div>
              <h2 className="mb-2">Color System</h2>
              <p className="text-muted-foreground mb-6">Tech-forward palette with semantic meaning</p>
            </div>

            <Grid cols={3}>
              {/* Primary Color */}
              <Card>
                <div className="space-y-4">
                  <div className="h-24 rounded-md bg-primary"></div>
                  <div>
                    <h4>Primary</h4>
                    <p className="text-sm text-muted-foreground">hsl(217 91% 40%)</p>
                    <p className="text-xs text-muted-foreground mt-1">Deep blue for primary actions</p>
                  </div>
                </div>
              </Card>

              {/* Secondary Color */}
              <Card>
                <div className="space-y-4">
                  <div className="h-24 rounded-md bg-secondary"></div>
                  <div>
                    <h4>Secondary</h4>
                    <p className="text-sm text-muted-foreground">hsl(190 87% 45%)</p>
                    <p className="text-xs text-muted-foreground mt-1">Cyan for secondary actions</p>
                  </div>
                </div>
              </Card>

              {/* Accent Color */}
              <Card>
                <div className="space-y-4">
                  <div className="h-24 rounded-md bg-accent"></div>
                  <div>
                    <h4>Accent</h4>
                    <p className="text-sm text-muted-foreground">hsl(270 100% 55%)</p>
                    <p className="text-xs text-muted-foreground mt-1">Purple for highlights</p>
                  </div>
                </div>
              </Card>

              {/* Success Color */}
              <Card>
                <div className="space-y-4">
                  <div className="h-24 rounded-md bg-green-500"></div>
                  <div>
                    <h4>Success</h4>
                    <p className="text-sm text-muted-foreground">hsl(142 71% 45%)</p>
                    <p className="text-xs text-muted-foreground mt-1">Green for confirmations</p>
                  </div>
                </div>
              </Card>

              {/* Warning Color */}
              <Card>
                <div className="space-y-4">
                  <div className="h-24 rounded-md bg-amber-500"></div>
                  <div>
                    <h4>Warning</h4>
                    <p className="text-sm text-muted-foreground">hsl(38 92% 50%)</p>
                    <p className="text-xs text-muted-foreground mt-1">Amber for alerts</p>
                  </div>
                </div>
              </Card>

              {/* Destructive Color */}
              <Card>
                <div className="space-y-4">
                  <div className="h-24 rounded-md bg-red-600"></div>
                  <div>
                    <h4>Destructive</h4>
                    <p className="text-sm text-muted-foreground">hsl(0 84% 60%)</p>
                    <p className="text-xs text-muted-foreground mt-1">Red for errors</p>
                  </div>
                </div>
              </Card>
            </Grid>
          </div>
        </Container>
      </section>

      {/* Typography Section */}
      <section className="py-12 px-4 md:px-6 bg-muted/30">
        <Container>
          <div className="space-y-8">
            <div>
              <h2 className="mb-2">Typography</h2>
              <p className="text-muted-foreground mb-6">Complete font scale with semantic headings</p>
            </div>

            <Grid cols={2}>
              <Card>
                <div className="space-y-4">
                  <h1>Heading 1</h1>
                  <p className="text-xs text-muted-foreground">4xl / 2.25rem - Bold</p>
                </div>
              </Card>

              <Card>
                <div className="space-y-4">
                  <h2>Heading 2</h2>
                  <p className="text-xs text-muted-foreground">3xl / 1.875rem - Bold</p>
                </div>
              </Card>

              <Card>
                <div className="space-y-4">
                  <h3>Heading 3</h3>
                  <p className="text-xs text-muted-foreground">2xl / 1.5rem - Semibold</p>
                </div>
              </Card>

              <Card>
                <div className="space-y-4">
                  <h4>Heading 4</h4>
                  <p className="text-xs text-muted-foreground">xl / 1.25rem - Semibold</p>
                </div>
              </Card>

              <Card>
                <div className="space-y-4">
                  <p>
                    Body text in base size (1rem) with relaxed line height for optimal readability. 
                    This is the default paragraph style used throughout the design system.
                  </p>
                  <p className="text-xs text-muted-foreground">Base / 1rem - Normal - 1.5rem line height</p>
                </div>
              </Card>
            </Grid>
          </div>
        </Container>
      </section>

      {/* Buttons Section */}
      <section className="py-12 px-4 md:px-6">
        <Container>
          <div className="space-y-8">
            <div>
              <h2 className="mb-2">Buttons</h2>
              <p className="text-muted-foreground mb-6">Multiple variants and sizes for different use cases</p>
            </div>

            {/* Button Variants */}
            <div>
              <h3 className="mb-4">Variants</h3>
              <Card>
                <div className="flex flex-wrap gap-3">
                  {buttonVariants.map((variant) => (
                    <Button key={variant} variant={variant}>
                      {variant.charAt(0).toUpperCase() + variant.slice(1)}
                    </Button>
                  ))}
                </div>
              </Card>
            </div>

            {/* Button Sizes */}
            <div>
              <h3 className="mb-4">Sizes</h3>
              <Card>
                <div className="flex flex-wrap items-center gap-3">
                  {buttonSizes.map((size) => (
                    <Button key={size} size={size}>
                      Button {size}
                    </Button>
                  ))}
                </div>
              </Card>
            </div>

            {/* Button States */}
            <div>
              <h3 className="mb-4">States</h3>
              <Card>
                <div className="flex flex-wrap gap-3">
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                  <Button fullWidth>Full Width</Button>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Forms Section */}
      <section className="py-12 px-4 md:px-6 bg-muted/30">
        <Container>
          <div className="space-y-8">
            <div>
              <h2 className="mb-2">Form Components</h2>
              <p className="text-muted-foreground mb-6">Input fields, selects, and validation states</p>
            </div>

            <Grid cols={2}>
              <Card>
                <CardHeader>
                  <CardTitle>Text Input</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input label="Standard Input" placeholder="Enter text..." />
                  <Input label="With Helper" helperText="This is helper text" placeholder="Type something..." />
                  <Input 
                    label="With Error" 
                    value={email} 
                    onChange={handleEmailChange}
                    error={emailError}
                    placeholder="your@email.com"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Select</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Select
                    label="Choose Option"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    options={[
                      { value: 'option1', label: 'Option 1' },
                      { value: 'option2', label: 'Option 2' },
                      { value: 'option3', label: 'Option 3' },
                    ]}
                  />
                  <Select
                    label="With Helper"
                    helperText="Select an item from the list"
                    options={[
                      { value: 'a', label: 'Item A' },
                      { value: 'b', label: 'Item B' },
                      { value: 'c', label: 'Item C' },
                    ]}
                  />
                </CardContent>
              </Card>
            </Grid>
          </div>
        </Container>
      </section>

      {/* Badges Section */}
      <section className="py-12 px-4 md:px-6">
        <Container>
          <div className="space-y-8">
            <div>
              <h2 className="mb-2">Badges</h2>
              <p className="text-muted-foreground mb-6">Semantic variants for labeling and categorization</p>
            </div>

            <Card>
              <div className="flex flex-wrap gap-3">
                {badgeVariants.map((variant) => (
                  <Badge key={variant} variant={variant}>
                    {variant.charAt(0).toUpperCase() + variant.slice(1)}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Alerts Section */}
      <section className="py-12 px-4 md:px-6 bg-muted/30">
        <Container>
          <div className="space-y-8">
            <div>
              <h2 className="mb-2">Alerts</h2>
              <p className="text-muted-foreground mb-6">Different types for various messaging scenarios</p>
            </div>

            <div className="space-y-4">
              {alertTypes.map((type) => (
                <Alert key={type} type={type as any} title={type.charAt(0).toUpperCase() + type.slice(1)}>
                  This is an {type} alert message. Use this component to communicate important information to users.
                </Alert>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Cards & Layout Section */}
      <section className="py-12 px-4 md:px-6">
        <Container>
          <div className="space-y-8">
            <div>
              <h2 className="mb-2">Cards & Layouts</h2>
              <p className="text-muted-foreground mb-6">Flexible container components for content organization</p>
            </div>

            <Grid cols={3}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>Card {i}</CardTitle>
                    <CardDescription>Component showcase</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      This card demonstrates the layout structure with header, title, description, and content sections.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <section className="py-6 px-4 md:px-6 bg-muted/50 border-t border-border text-center">
        <Container>
          <p className="text-sm text-muted-foreground">
            Design System v1.0 • Built with React, TypeScript, and Tailwind CSS
          </p>
        </Container>
      </section>
    </main>
  )
}
