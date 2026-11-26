---
title: "PermissionsHelper"
description: "Checks whether a user may use the in-game server settings and command menus."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PermissionsHelper

A **static class** in `Root.Township`, `ATT.Character.QuickAccessMenu`.

Checks whether a user may use the in-game server settings and command menus.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-requiredpermissions" /><code>{"private static readonly "}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] requiredPermissions"}</code> | <span className="api-desc">Permissions needed: Console only.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-doesuserhavepermissions" /><code>{"static async Task<bool> DoesUserHavePermissions(int userIdentifier, int serverIdentifier)"}</code> | <span className="api-desc">Asks the API whether the user has Console permission on the server. Always true in the editor; false on error.</span> |
| <Link id="m-ismenuorcommandsavailableforuser" /><code>{"static async Task<bool> IsMenuOrCommandsAvailableForUser("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Always returns false in this build.</span> |
