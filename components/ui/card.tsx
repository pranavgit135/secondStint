"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Eye, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-xl border bg-card text-card-foreground shadow", className)} {...props} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
  ),
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
)
CardDescription.displayName = "CardDescription"

// Enhanced CardContent with advanced options
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "compact" | "spacious" | "minimal"
    padding?: "none" | "sm" | "md" | "lg" | "xl"
    divider?: boolean
    showNavigation?: boolean
    showPreview?: boolean
    onNext?: () => void
    onPrevious?: () => void
    onPreview?: () => void
    navigationDisabled?: { next?: boolean; previous?: boolean }
    previewContent?: React.ReactNode
    showPreviewContent?: boolean
  }
>(
  (
    {
      className,
      variant = "default",
      padding,
      divider = false,
      showNavigation = false,
      showPreview = false,
      onNext,
      onPrevious,
      onPreview,
      navigationDisabled = {},
      previewContent,
      showPreviewContent = false,
      children,
      ...props
    },
    ref,
  ) => {
    const [isPreviewOpen, setIsPreviewOpen] = React.useState(showPreviewContent)

    const variantClasses = {
      default: "p-6",
      compact: "p-4",
      spacious: "p-8",
      minimal: "p-2",
    }

    const paddingClasses = {
      none: "p-0",
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
      xl: "p-8",
    }

    const contentPadding = padding ? paddingClasses[padding] : variantClasses[variant]

    const togglePreview = () => {
      setIsPreviewOpen(!isPreviewOpen)
      if (onPreview) {
        onPreview()
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          contentPadding,
          divider && "border-t border-border mt-6 pt-6",
          "relative transition-all duration-300",
          isPreviewOpen && "bg-slate-50/50",
          className,
        )}
        {...props}
      >
        {/* Navigation and Preview Controls */}
        {(showNavigation || showPreview) && (
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200">
            {/* Navigation Controls */}
            {showNavigation && (
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onPrevious}
                  disabled={navigationDisabled.previous}
                  className="flex items-center space-x-1 bg-transparent"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onNext}
                  disabled={navigationDisabled.next}
                  className="flex items-center space-x-1 bg-transparent"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}

            {/* Preview Controls */}
            {showPreview && (
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={togglePreview}
                  className="flex items-center space-x-1 bg-transparent"
                >
                  <Eye className="w-4 h-4" />
                  <span>{isPreviewOpen ? "Hide Preview" : "Show Preview"}</span>
                </Button>
                <Button variant="ghost" size="sm" className="p-1">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Main Content */}
        <div className={cn("transition-all duration-300", isPreviewOpen && "opacity-75")}>{children}</div>

        {/* Preview Content */}
        {isPreviewOpen && previewContent && (
          <div className="mt-6 pt-6 border-t border-slate-200 bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center space-x-2 mb-3">
              <Eye className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-slate-700">Preview</span>
            </div>
            <div className="text-sm text-slate-600">{previewContent}</div>
          </div>
        )}

        {/* Interactive Overlay for Advanced Features */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="flex items-center space-x-1">
            {showPreview && (
              <Button variant="ghost" size="sm" onClick={togglePreview} className="h-6 w-6 p-0 hover:bg-slate-100">
                <Eye className="w-3 h-3" />
              </Button>
            )}
          </div>
        </div>
      </div>
    )
  },
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
)
CardFooter.displayName = "CardFooter"

// Additional Card Components for Advanced Layouts
const CardSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    title?: string
    description?: string
  }
>(({ className, title, description, children, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-3", className)} {...props}>
    {(title || description) && (
      <div className="space-y-1">
        {title && <h4 className="text-sm font-medium text-slate-900">{title}</h4>}
        {description && <p className="text-sm text-slate-600">{description}</p>}
      </div>
    )}
    {children}
  </div>
))
CardSection.displayName = "CardSection"

const CardGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    columns?: 1 | 2 | 3 | 4
    gap?: "sm" | "md" | "lg"
  }
>(({ className, columns = 2, gap = "md", ...props }, ref) => {
  const gridClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  const gapClasses = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
  }

  return <div ref={ref} className={cn("grid", gridClasses[columns], gapClasses[gap], className)} {...props} />
})
CardGrid.displayName = "CardGrid"

const CardActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    align?: "left" | "center" | "right" | "between"
  }
>(({ className, align = "left", ...props }, ref) => {
  const alignClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
    between: "justify-between",
  }

  return <div ref={ref} className={cn("flex items-center space-x-2", alignClasses[align], className)} {...props} />
})
CardActions.displayName = "CardActions"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardSection, CardGrid, CardActions }
