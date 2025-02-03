import {
  CSSProperties,
  ReactNode,
  Ref,
  useRef
} from 'react';

import {
  HTMLAttributes,
  ElementType
} from 'react'

export interface UseListRowProps extends HTMLAttributes<HTMLLIElement | HTMLAnchorElement> {
  as?: ElementType,
  ref?: Ref<unknown>,
  href?: string,
  startContent?: ReactNode,
  endContent?: ReactNode,
}
export function useListRow(props: UseListRowProps) {
  const {
    as,
    startContent,
    endContent,
    style,
    ...rest
  } = props;
  const Component = as || (props?.href ? 'a' : 'li');

  const domRef = useRef(null);

  const resultStyle: CSSProperties = {
    textDecoration: 'none',
    listStyle: "none",
    ...style,
  }

  return {
    Component,
    ref: domRef,
    className: props.className,
    startContent,
    endContent,
    style: resultStyle,
    ...rest,
  }
}
