import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CSpinnerProps extends HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   *
   * @default 'undefined'
   */
  className?: string
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
   *
   * @default 'undefined'
   */
  color?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component. [docs]
   *
   * @default 'div'
   */
  component?: string | ElementType
  /**
   * Size the component small. [docs]
   *
   * @default 'undefined'
   */
  size?: 'sm'
  /**
   * Set the button variant to an outlined button or a ghost button. [docs]
   *
   * @default 'border'
   */
  variant?: 'border' | 'grow'
}

export const CSpinner = forwardRef<HTMLDivElement | HTMLSpanElement, CSpinnerProps>(
  ({ className, color, component: Component = 'div', size, variant = 'border', ...rest }, ref) => {
    const _className = classNames(
      `spinner-${variant}`,
      `text-${color}`,
      size && `spinner-${variant}-${size}`,
      className,
    )

    return (
      <Component className={_className} role="status" {...rest} ref={ref}>
        <span className="visually-hidden">Loading...</span>
      </Component>
    )
  },
)

CSpinner.displayName = 'CSpinner'
