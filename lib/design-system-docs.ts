export const DesignSystemDocs = {
  overview: {
    title: "Monora Design System",
    description: "A comprehensive, tech-forward design system built with React, TypeScript, and Tailwind CSS",
    version: "1.0.0",
  },

  colors: {
    primary: {
      light: "hsl(217 91% 40%)",
      dark: "hsl(217 91% 50%)",
      description: "Deep blue for primary actions and key interactive elements"
    },
    secondary: {
      light: "hsl(190 87% 45%)",
      dark: "hsl(190 87% 50%)",
      description: "Cyan/Electric blue for secondary actions and innovation highlighting"
    },
    accent: {
      light: "hsl(270 100% 55%)",
      dark: "hsl(270 100% 60%)",
      description: "Neon purple for highlights, emphasis, and cutting-edge elements"
    },
    success: {
      light: "hsl(142 71% 45%)",
      dark: "hsl(142 71% 50%)",
      description: "Green for success messages and positive confirmations"
    },
    warning: {
      light: "hsl(38 92% 50%)",
      dark: "hsl(38 92% 55%)",
      description: "Amber for warning messages and cautionary alerts"
    },
    destructive: {
      light: "hsl(0 84% 60%)",
      dark: "hsl(0 84% 65%)",
      description: "Red for destructive actions and error messages"
    },
    neutral: {
      background: {
        light: "hsl(0 0% 100%)",
        dark: "hsl(220 13% 8%)"
      },
      foreground: {
        light: "hsl(220 13% 13%)",
        dark: "hsl(0 0% 98%)"
      },
      muted: {
        light: "hsl(220 13% 91%)",
        dark: "hsl(220 13% 28%)"
      },
      border: {
        light: "hsl(220 13% 91%)",
        dark: "hsl(220 13% 20%)"
      }
    }
  },

  typography: {
    headings: {
      h1: {
        size: "2.25rem (4xl)",
        weight: "700 (bold)",
        lineHeight: "2.5rem",
        usage: "Main page titles and hero sections"
      },
      h2: {
        size: "1.875rem (3xl)",
        weight: "700 (bold)",
        lineHeight: "2.25rem",
        usage: "Section headings"
      },
      h3: {
        size: "1.5rem (2xl)",
        weight: "600 (semibold)",
        lineHeight: "2rem",
        usage: "Subsection headings"
      },
      h4: {
        size: "1.25rem (xl)",
        weight: "600 (semibold)",
        lineHeight: "1.75rem",
        usage: "Card titles and secondary headings"
      },
      h5: {
        size: "1.125rem (lg)",
        weight: "600 (semibold)",
        lineHeight: "1.75rem",
        usage: "Tertiary headings"
      },
      h6: {
        size: "1rem (base)",
        weight: "600 (semibold)",
        lineHeight: "1.5rem",
        usage: "Small headings"
      }
    },
    body: {
      size: "1rem (base)",
      weight: "400 (normal)",
      lineHeight: "1.5rem",
      usage: "Default paragraph text"
    },
    small: {
      size: "0.875rem (sm)",
      weight: "400 (normal)",
      lineHeight: "1.25rem",
      usage: "Small text, captions, helper text"
    }
  },

  spacing: {
    scale: [0, 0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8],
    units: "rem",
    usage: "Use Tailwind spacing scale (p-4, m-6, gap-2, etc.)"
  },

  components: {
    Button: {
      variants: ["primary", "secondary", "accent", "ghost", "outline", "destructive"],
      sizes: ["xs", "sm", "md", "lg"],
      props: {
        variant: "Style variant (default: primary)",
        size: "Button size (default: md)",
        fullWidth: "Span full width of container",
        disabled: "Disabled state",
      },
      example: `<Button variant="primary" size="md">
  Click Me
</Button>`
    },

    Input: {
      props: {
        label: "Label text above input",
        placeholder: "Placeholder text",
        error: "Error message display",
        helperText: "Helper text below input",
        id: "HTML id attribute",
      },
      example: `<Input 
  label="Email" 
  placeholder="your@email.com"
  error="Invalid email"
/>`
    },

    Card: {
      exports: ["Card", "CardHeader", "CardTitle", "CardDescription", "CardContent"],
      props: {
        className: "Additional CSS classes",
      },
      example: `<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Subtitle</CardDescription>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>`
    },

    Badge: {
      variants: ["primary", "secondary", "accent", "success", "warning", "destructive"],
      props: {
        variant: "Color variant (default: primary)",
      },
      example: `<Badge variant="primary">
  Label
</Badge>`
    },

    Alert: {
      types: ["info", "success", "warning", "error"],
      props: {
        type: "Alert type (default: info)",
        title: "Optional title",
      },
      example: `<Alert type="success" title="Success">
  Operation completed successfully
</Alert>`
    },

    Container: {
      sizes: ["sm", "md", "max"],
      props: {
        size: "Container max-width (default: max)",
      },
      description: "Centered container with responsive max-width"
    },

    Grid: {
      cols: [1, 2, 3, 4, "auto"],
      props: {
        cols: "Number of columns (default: auto)",
      },
      description: "Responsive grid with automatic column wrapping"
    },

    Select: {
      props: {
        label: "Label text",
        options: "Array of { value, label } objects",
        error: "Error message",
        helperText: "Helper text below select",
      },
      example: `<Select
  label="Choose"
  options={[
    { value: "1", label: "Option 1" }
  ]}
/>`
    }
  },

  utilities: {
    flexbox: {
      "flex-center": "Flex center both axes",
      "flex-between": "Flex space-between",
      "flex-col-center": "Flex column center",
    },
    spacing: {
      "section": "py-12 px-4 md:px-6",
      "section-sm": "py-6 px-4 md:px-6",
      "section-lg": "py-20 px-4 md:px-6",
    },
    containers: {
      "container-sm": "max-w-2xl",
      "container-md": "max-w-4xl",
      "container-max": "max-w-7xl",
    },
    grids: {
      "grid-2": "2 column responsive grid",
      "grid-3": "3 column responsive grid",
      "grid-4": "4 column responsive grid",
      "grid-auto": "Auto column grid",
    },
    effects: {
      "hover-lift": "Hover shadow and scale effect",
      "hover-dim": "Hover opacity reduction",
      "focus-ring": "Focus outline ring",
    }
  },

  darkMode: {
    enabled: true,
    detection: "prefers-color-scheme: dark",
    colors: "Automatically adjusted HSL values for dark mode"
  },

  shadows: {
    xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    base: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    md: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    lg: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    xl: "0 25px 50px -12px rgb(0 0 0 / 0.25)"
  },

  animations: {
    "fade-in": "Fade in animation (300ms)",
    "slide-up": "Slide up animation (300ms)",
    "pulse-subtle": "Subtle pulse animation (2s)"
  },

  bestPractices: [
    "Use semantic color tokens instead of raw colors",
    "Prefer Tailwind spacing scale over arbitrary values",
    "Use gap classes for spacing between flex/grid children",
    "Use responsive prefixes (md:, lg:) for mobile-first design",
    "Apply focus-ring utility to interactive elements",
    "Use text-balance or text-pretty for important copy",
    "Keep to max 3-5 colors per design for cohesion",
    "Use aria-labels and semantic HTML for accessibility"
  ],

  accessibility: {
    contrast: "WCAG AA compliant color contrasts",
    focus: "All interactive elements have visible focus states",
    semantic: "Semantic HTML used throughout components",
    ariaLabels: "Proper ARIA labels for interactive elements",
    darkMode: "Full dark mode support for reduced eye strain"
  }
}
