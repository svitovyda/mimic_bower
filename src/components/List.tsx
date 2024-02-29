import type { Package } from '../models/Package';
import { ModuleItem } from './ModuleItem';
import * as React from 'react';

export interface ListProps {
  data: Package[];
}

export const List: React.FC<ListProps> = ({ data }: ListProps) => {
  return (
    <div>
      {data.map((p, i) => (
        <ModuleItem key={`${i}-${p.name}-${p.platform}`} packageElement={p} />
      ))}
    </div>
  );
};
