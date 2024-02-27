import type { Package } from "../models/Package";
import * as React from "react";

export interface ModuleItemProp {
  packageElement: Package;
}

export const ModuleItem: React.FC<ModuleItemProp> = ({ packageElement }: ModuleItemProp) => {
  return (
    <div>
      {packageElement.name} {packageElement.owner} {packageElement.stars}
    </div>
  );
};
