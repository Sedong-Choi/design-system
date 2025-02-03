import { Meta } from '@storybook/react';

import { ListRow } from '@shared-ui/list-row';
export default {
  title: "Components/ListRow",
  component: ListRow,
  args: {
    children: 'Render shared-ui Component / ListRow',
  }
} as Meta<object>;

export const StringRow = {
  component: ListRow,
  name: 'ListRow - string',
};

export const ComponentRow = {
  render: ({ args }) =>
    <ListRow {...args}>
      <button onClick={() => alert('click inner button')}>Render with inner Button</button>
    </ListRow>,
  name: 'ListRow - component',
}

export const AnchorRow = {
  render: ({ args }) =>
    <ListRow {...args} href="https://google.com" as="a" target="_blank">
      google
    </ListRow>,
  name: 'ListRow - anchor',
}