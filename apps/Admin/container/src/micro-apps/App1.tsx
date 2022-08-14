// @ts-ignore
import { mount } from "app1/App1";
import React, { useRef } from "react";

function App1() {
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

export default App1;
