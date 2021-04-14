import React, { ElementType, forwardRef } from 'react'
import classNames from 'classnames'

import { CLinkProps } from '../link/CLink'
import { CLink } from '../link/CLink'

export interface CDropdownItemProps extends CLinkProps {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component. [docs]
   *
   * @default 'a'
   */
  component?: string | ElementType
}

export const CDropdownItem = forwardRef<HTMLButtonElement | HTMLAnchorElement, CDropdownItemProps>(
  ({ children, className, component = 'a', ...rest }, ref) => {
    const _className = classNames('dropdown-item', className)

    return (
      <CLink component={component} {...rest} className={_className} ref={ref}>
        {children}
      </CLink>
    )
  },
)

CDropdownItem.displayName = 'CDropdownItem'
