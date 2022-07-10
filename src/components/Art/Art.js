import { Fragment } from "react";
import ArtSummary from "./ArtSummary";
import AvailableArt from "./AvailableArt";

const Art = () => {
  return (
    <Fragment>
      <ArtSummary />
      <AvailableArt />
    </Fragment>
  );
};

export default Art;
