---
title: "ServerSettingsAge"
description: "Marks server settings in a settings change event as the old values, the new values, or neither."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSettingsAge

An **enum** in `Root.Township`, `ATT.PlayerStates`.

Marks server settings in a settings change event as the old values, the new values, or neither.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Values

| Member |
| --- |
| <Link id="m-new" /><code>{"New = 1"}</code> |
| <Link id="m-none" /><code>{"None = 0"}</code> |
| <Link id="m-old" /><code>{"Old = 2"}</code> |

## Used in

Members of other types that take, return or hold a `ServerSettingsAge`:

[`ServerSettingsChangeData.Age`](/mod/game-api/types/game-other-namespaces/serversettingschangedata#m-age), [`ServerSettingsChangeData.ServerSettingsChangeData`](/mod/game-api/types/game-other-namespaces/serversettingschangedata#m-ctor-2).
