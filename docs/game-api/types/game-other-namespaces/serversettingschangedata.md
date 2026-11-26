---
title: "ServerSettingsChangeData"
description: "Payload of the ConsoleEvents.ServerSettingsChanged console event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSettingsChangeData

A **class** in `Root.Township`, `ATT.PlayerStates`.

Payload of the `ConsoleEvents.ServerSettingsChanged` console event. `ServerSettingsChangeLogger` raises it twice per change, once with the old settings and once with the new.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Documented in** [Console events](/game-api/console-and-utilities/console-events)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerSettingsChangeData()"}</code> |
| <Link id="m-ctor-2" /><code>{"ServerSettingsChangeData("}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings, "}<Link to="/game-api/types/game-other-namespaces/serversettingsage">{"ServerSettingsAge"}</Link>{" age)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-age" /><code><Link to="/game-api/types/game-other-namespaces/serversettingsage">{"ServerSettingsAge"}</Link>{" Age { get; }"}</code> | Whether `Settings` holds the settings from before (`Old`) or after (`New`) the change. |
| <Link id="m-settings" /><code><Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" Settings { get; }"}</code> | A full copy of the server settings at that point. |

## Used in

Members of other types that take, return or hold a `ServerSettingsChangeData`:

[`ConsoleEvents.ServerSettingsChanged`](/game-api/types/alta-console/consoleevents#m-serversettingschanged).
