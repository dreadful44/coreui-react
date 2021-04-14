import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CFormTextProps extends HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component. [docs]
   *
   * @default 'div'
   */
  component?: string | ElementType
}

export const CFormText = forwardRef<HTMLDivElement | HTMLSpanElement, CFormTextProps>(
  ({ children, className, component: Component = 'div', ...rest }, ref) => {
    const _className = classNames('form-text', className)
    return (
      <Component className={_className} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

CFormText.displayName = 'CFormText'
