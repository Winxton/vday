import React from "react";
import "./App.css";
import Valentine from "./Valentine";
import posthog from "posthog-js";

function App() {
  // Init in useEffect
  React.useEffect(() => {
    posthog.init("phc_yvDWObZxIX3c2ahGJURH14uFct8UIKPhJjNg23fLRPB", {
      api_host: "https://app.posthog.com",
    });
  }, []);

  return <Valentine />;
}

export default App;
