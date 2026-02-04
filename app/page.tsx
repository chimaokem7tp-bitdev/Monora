'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Design System</h1>
          <p className="text-lg text-muted-foreground mb-8">
            A comprehensive, tech-forward design system
          </p>
          
          {/* Color Palette */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="rounded-lg border border-border overflow-hidden">
                <div className="h-24 bg-primary"></div>
                <div className="p-4">
                  <h3 className="font-semibold">Primary</h3>
                  <p className="text-sm text-muted-foreground">hsl(217 91% 40%)</p>
                </div>
              </div>
              
              <div className="rounded-lg border border-border overflow-hidden">
                <div className="h-24 bg-secondary"></div>
                <div className="p-4">
                  <h3 className="font-semibold">Secondary</h3>
                  <p className="text-sm text-muted-foreground">hsl(190 87% 45%)</p>
                </div>
              </div>
              
              <div className="rounded-lg border border-border overflow-hidden">
                <div className="h-24 bg-accent"></div>
                <div className="p-4">
                  <h3 className="font-semibold">Accent</h3>
                  <p className="text-sm text-muted-foreground">hsl(270 100% 55%)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Typography</h2>
            <div className="space-y-6">
              <div className="rounded-lg border border-border p-6">
                <h1>Heading 1</h1>
                <p className="text-xs text-muted-foreground mt-2">4xl / 2.25rem - Bold</p>
              </div>
              
              <div className="rounded-lg border border-border p-6">
                <h2>Heading 2</h2>
                <p className="text-xs text-muted-foreground mt-2">3xl / 1.875rem - Bold</p>
              </div>
              
              <div className="rounded-lg border border-border p-6">
                <p>Body text in base size with relaxed line height for optimal readability</p>
                <p className="text-xs text-muted-foreground mt-2">Base / 1rem - Normal</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Button Styles</h2>
            <div className="rounded-lg border border-border p-6">
              <div className="flex flex-wrap gap-3">
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-secondary">Secondary</button>
                <button className="btn btn-accent">Accent</button>
                <button className="btn btn-ghost">Ghost</button>
                <button className="btn btn-outline">Outline</button>
                <button className="btn btn-destructive">Destructive</button>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Badges</h2>
            <div className="rounded-lg border border-border p-6">
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-primary">Primary</span>
                <span className="badge badge-secondary">Secondary</span>
                <span className="badge badge-accent">Accent</span>
                <span className="badge badge-success">Success</span>
                <span className="badge badge-warning">Warning</span>
                <span className="badge badge-destructive">Destructive</span>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Alerts</h2>
            <div className="space-y-4">
              <div className="alert alert-info">
                <strong>Info:</strong> This is an informational message
              </div>
              <div className="alert alert-success">
                <strong>Success:</strong> Operation completed successfully
              </div>
              <div className="alert alert-warning">
                <strong>Warning:</strong> Please pay attention to this
              </div>
              <div className="alert alert-error">
                <strong>Error:</strong> Something went wrong
              </div>
            </div>
          </div>

          {/* Forms */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Form Elements</h2>
            <div className="rounded-lg border border-border p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Text Input</label>
                <input type="text" placeholder="Enter text..." className="input-base w-full" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Select</label>
                <select className="input-base w-full">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Textarea</label>
                <textarea placeholder="Enter text..." className="input-base w-full" rows={3}></textarea>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="card">
                  <div className="card-header">
                    <h3 className="card-title">Card {i}</h3>
                    <p className="card-description">This is a card component</p>
                  </div>
                  <div className="card-content">
                    <p className="text-sm text-muted-foreground">
                      This card demonstrates the design system layout and styling patterns.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Utilities */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Layout Utilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg border border-border p-6">
                <h3 className="font-semibold mb-4">Flex Center</h3>
                <div className="flex-center h-20 bg-muted rounded">
                  <span className="text-sm">Centered</span>
                </div>
              </div>
              
              <div className="rounded-lg border border-border p-6">
                <h3 className="font-semibold mb-4">Grid 3 Columns</h3>
                <div className="grid-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-12 bg-primary/20 rounded flex-center text-xs font-medium">
                      Col {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
