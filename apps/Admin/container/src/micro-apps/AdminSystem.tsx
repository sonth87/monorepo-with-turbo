// @ts-ignore
import { mount } from "adminSys/adminSysApp";
import React, { useRef } from "react";

function AdminSystem() {
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

export default AdminSystem;
