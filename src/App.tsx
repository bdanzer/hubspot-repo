import { useEffect } from "react";
import { fetchInboxData, sendResultToAPI } from "./apis";
import { processInboxDataMapper } from "./mapper";

async function main() {
  const inboxData = await fetchInboxData();
  if (inboxData) {
    const conversations = processInboxDataMapper(inboxData);
    sendResultToAPI(conversations);
  }
}

export default function App() {
  useEffect(() => {
    main();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
