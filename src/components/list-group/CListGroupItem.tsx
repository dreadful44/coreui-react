import React, { ElementType, HTMLAttributes, forwardRef } from 'react'
import classNames from 'classnames'

import { Colors } from '../Types'
import { CLink } from '../link/CLink'

export interface CListGroupItemProps
  extends HTMLAttributes<HTMLLIElement | HTMLAnchorElement | HTMLButtonElement> {
  /**
   * Toggle the active state for the component. [docs]
   */
  active?: boolean
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  color?: Colors
  /**
   * Toggle the disabled state for the component. [docs]
   */
  disabled?: boolean
  /**
   * Component used for the root node. Either a string to use a HTML element or a component. [docs]
   *
   * @default 'li'
   */
  component?: string | ElementType
}

export const CListGroupItem = forwardRef<
  HTMLLIElement | HTMLAnchorElement | HTMLButtonElement,
  CListGroupItemProps
>(({ children, active, className, disabled, color, component = 'li', ...rest }, ref) => {
  const _className = classNames(
    'list-group-item',
    {
      [`list-group-item-${color}`]: color,
      'list-group-item-action': component === 'a' || component === 'button',
      active,
      disabled,
    },
    className,
  )

  const Component = component === 'a' || component === 'button' ? CLink : component

  rest = {
    ...((component === 'a' || component === 'button') && {
      active,
      disabled,
      component,
      ref: ref,
    }),
    ...(active && { 'aria-current': true }),
    ...(disabled && { 'aria-disabled': true }),
    ...rest,
  }

  return (
    <Component className={_className} {...rest}>
      {children}
    </Component>
  )
})

CListGroupItem.displayName = 'CListGroupItem'
