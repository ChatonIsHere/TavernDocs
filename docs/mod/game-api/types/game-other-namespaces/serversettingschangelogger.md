---
title: "ServerSettingsChangeLogger"
description: "Raises the console's ServerSettingsChanged event with the old and new settings when server settings change."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSettingsChangeLogger

A **static class** in `Root.Township`, `ATT.Character.QuickAccessMenu`.

Raises the console's `ServerSettingsChanged` event with the old and new settings when server settings change.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-logserversettingschange" /><code>{"static void LogServerSettingsChange("}<Link to="/mod/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" oldSettings, "}<Link to="/mod/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" newSettings)"}</code> | <span className="api-desc">Raises the event once for the old settings and once for the new. Logs and rethrows on error.</span> |
