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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-logserversettingschange" /><code>{"static void LogServerSettingsChange("}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" oldSettings, "}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" newSettings)"}</code> | Raises the event once for the old settings and once for the new. Logs and rethrows on error. |
