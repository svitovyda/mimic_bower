import { LoaderContainer, LoaderRing, LoaderRingInner, LoaderTextContainer } from "../../styles/ui/LoaderAnimation";
import * as React from "react";

export const LoaderAnimation: React.FC = React.memo(() => {
  return (
    <LoaderContainer>
      <LoaderRing />
      <LoaderRingInner />
      <LoaderTextContainer>loading</LoaderTextContainer>
    </LoaderContainer>
  );
});

LoaderAnimation.displayName = "LoaderAnimation";
