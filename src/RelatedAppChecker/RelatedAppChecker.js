import React, { useEffect, useState } from "react";

const RelatedAppChecker = () => {
  const [relatedApps, setRelatedApps] = useState([]);
  const [apps, setApps] = useState("null");

  useEffect(() => {
    if ("getInstalledRelatedApps" in navigator) {
      console.log("sdfdds", {
        one: navigator,
        two: navigator.getInstalledRelatedApps(),
      });

      navigator
        .getInstalledRelatedApps()
        .then((apps) => {
          setApps(apps);
          setRelatedApps(apps);
        })
        .catch((error) => {
          console.error("Error fetching installed related apps:", error);
        });
    }
  }, []);

  return (
    <div>
      <h1>Installed Related Apps</h1>
      {<p>{"apps -> " + JSON.stringify(apps)}</p>}
      {navigator?.userAgentData?.platform}
      {relatedApps.length > 0 ? (
        <ul>
          {relatedApps.map((app, index) => (
            <li key={index}>
              {app.platform} - {app.url}
            </li>
          ))}
        </ul>
      ) : (
        <p>No related apps installed</p>
      )}
    </div>
  );
};

export default RelatedAppChecker;
