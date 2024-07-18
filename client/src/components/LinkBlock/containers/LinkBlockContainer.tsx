import { FC } from "react";
import { useLocation } from "react-router-dom";

import LinkBlockView from "@components/LinkBlock/components/LinkBlockView";
import { linkConfig } from "../linkConfig";

const LinkBlockContainer: FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  if (!linkConfig[currentPath]) {
    return null;
  }

  const { text, linkText, linkHref } = linkConfig[currentPath];

  return <LinkBlockView text={text} linkText={linkText} linkHref={linkHref} />;
};

export default LinkBlockContainer;
