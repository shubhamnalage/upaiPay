import React from "react";
import { useLocation } from "react-router-dom";
const HtmlComponent = (state) => {
  const location = useLocation();
  const htmlContent = location.state?.htmlContent;
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    </div>
  );
};

export default HtmlComponent;
