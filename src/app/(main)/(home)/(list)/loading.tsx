'use client';

import { Skeleton } from 'antd';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

export default memo(() => {
  return (
    <Flexbox gap={24} horizontal style={{ position: 'relative' }} width={'100%'}>
      <Flexbox flex={1} gap={16}>
        <Skeleton.Button active style={{ minWidth: 150 }} />
        <Skeleton paragraph={{ rows: 16 }} style={{ marginBlock: 24 }} title={false} />
      </Flexbox>
    </Flexbox>
  );
});
