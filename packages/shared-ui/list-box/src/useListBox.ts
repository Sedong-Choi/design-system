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

export interface UseListBoxProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType,
  ref?: Ref<unknown>,
}
export function useListBox(props: UseListBoxProps) {
  const {
    as,
    className,
    style,
    ...rest
  } = props;
  const Component = as || 'div';

  const domRef = useRef(null);

  const resultStyle: CSSProperties = {
    padding: '1rem',
    display: "flex",
    flexDirection: 'column',
    border: '1px solid gray',
    gap: '10px',
    ...style,
  }

  return {
    Component,
    ref: domRef,
    className,
    style: resultStyle,
    ...rest,
  }
}
