import { Children, forwardRef, ReactElement, isValidElement, cloneElement } from 'react'
import { useListBox } from './useListBox';

export interface ListBoxProps {}

export const ListBox = forwardRef(function ListBox(props: ListBoxProps, ref) {

  const {
    ref: domRef,
    Component,
    className,
    children,
    ...rest
  } = useListBox({ ...props, ref });

  const content = Children.map(children as ReactElement, child => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement, {
        className: 'list-box__content'
      });
    }
    return child;
  });
  return (
    <Component
      className={className} // TODO merge 
      {...rest}
      ref={domRef}
    >
      {content}
    </Component>
  )
});
