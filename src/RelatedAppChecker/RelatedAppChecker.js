import React, { useEffect, useState } from "react";

const RelatedAppChecker = () => {
  const [relatedApps, setRelatedApps] = useState([]);

  useEffect(() => {
    if ("getInstalledRelatedApps" in navigator) {
      navigator
        .getInstalledRelatedApps()
        .then((apps) => {
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
