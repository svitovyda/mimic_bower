import type { Package } from "../models/Package";
import { ModuleItem } from "./ModuleItem";
import * as React from "react";

export interface ListProps {
  data: Package[];
}

export const List: React.FC<ListProps> = React.memo(({ data }: ListProps) => {
  return (
    <div>
      {data.map((p) => (
        <ModuleItem key={p.name} packageElement={p} />
      ))}
    </div>
  );
});

List.displayName = "List";
