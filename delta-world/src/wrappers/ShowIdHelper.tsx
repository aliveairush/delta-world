import React, { ReactNode, SyntheticEvent, useState } from "react";
import './ShowIdHelper.scss';

interface Props {
  children: ReactNode;
  id: string
}

export const ShowIdHelper = ({ children, id }: Props) => {
  const [hovered, setHovered] = useState(false);

  const mouseOver = (e: SyntheticEvent) => {
    setHovered(true);
    e.stopPropagation();
  };

  const mouseLeave = (e: SyntheticEvent) => {
    setHovered(false);
    e.stopPropagation();
  };

  return (
    <div
      className="show-id-wrapper"
      onMouseOver={mouseOver}
      onMouseLeave={mouseLeave}
    >
      {hovered && <div className="show-id-wrapper__id">{`ID: ${id}`}</div>}
      {children}
    </div>
  );
};
