import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="267" rx="11" ry="11" width="280" height="30" />
    <circle cx="140" cy="120" r="120" />
    <rect x="0" y="310" rx="11" ry="11" width="280" height="88" />
    <rect x="0" y="410" rx="11" ry="11" width="113" height="30" />
    <rect x="129" y="410" rx="17" ry="17" width="149" height="30" />
  </ContentLoader>
);

export default Skeleton;
