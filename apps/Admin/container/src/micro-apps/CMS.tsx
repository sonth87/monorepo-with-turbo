// @ts-ignore
import { mount } from "cms/cmsApp";
import React, { useRef } from "react";

function CMS() {
  const ref = useRef(null);

  React.useEffect(() => {
    mount(ref.current);
  }, []);

  return (
    <>
      <div ref={ref} />
    </>
  );
}

export default CMS;
