// @ts-ignore
import { mount } from "app/App";
import React, { useRef } from "react";

function App() {
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

export default App;
