import { Children, forwardRef, ReactElement, isValidElement, cloneElement, HTMLAttributes, PropsWithChildren } from 'react'
import { useListRow } from './useListRow';

export interface ListRowProps extends PropsWithChildren<HTMLAttributes<HTMLLIElement | HTMLAnchorElement>> {
}
export const ListRow = forwardRef(function ListRow(props: ListRowProps, ref) {

  const {
    ref: domRef,
    Component,
    className,
    startContent,
    endContent,
    children,
    ...rest
  } = useListRow({ ...props, ref });

  const content = Children.map(children as ReactElement, child => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement, {
        className: 'list-row__content'
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
      {startContent}
      {content}
      {endContent}
    </Component>
  )
});
