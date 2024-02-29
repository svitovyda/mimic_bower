import type { Package } from '../models/Package';
import { ItemContainer, NameItem, OwnerItem, StarsItem } from '../styles/ModuleItem';
import * as React from 'react';

export interface ModuleItemProp {
  packageElement: Package;
}

export const ModuleItem: React.FC<ModuleItemProp> = React.memo(({ packageElement }: ModuleItemProp) => {
  return (
    <ItemContainer>
      <NameItem>{packageElement.name}</NameItem>
      <OwnerItem>{packageElement.owner}</OwnerItem>
      <StarsItem>{packageElement.stars}</StarsItem>
    </ItemContainer>
  );
});

ModuleItem.displayName = 'ModuleItem';
