---
title: "PermissionsHelper"
description: "static class PermissionsHelper in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PermissionsHelper

A **static class** in `Root.Township`, `ATT.Character.QuickAccessMenu`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-requiredpermissions" /><code>{"private static readonly "}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] requiredPermissions"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-doesuserhavepermissions" /><code>{"static async Task<bool> DoesUserHavePermissions(int userIdentifier, int serverIdentifier)"}</code> |  |
| <Link id="m-ismenuorcommandsavailableforuser" /><code>{"static async Task<bool> IsMenuOrCommandsAvailableForUser("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
