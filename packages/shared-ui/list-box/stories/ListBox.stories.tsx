import { Meta } from '@storybook/react';

import { ListBox } from '@shared-ui/list-box';
import { ListRow } from '@shared-ui/list-row';

export default {
  title: "Components/ListBox",
  component: ListBox,
  argTypes: {
  }
} as Meta<object>;

export const DefaultBox = {
  render: () =>
    <ListBox>
      <ListRow>Row 1</ListRow>
      <ListRow>Row 2</ListRow>
      <ListRow>Row 3</ListRow>
    </ListBox>
}