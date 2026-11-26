---
title: "ServerSettingsRolePatch"
description: "Sends each joining player their roles and limits who may change server settings from the settings board to owners and moderators."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSettingsRolePatch

A **class** in `TavernLib`, `TavernLib.Patches`.

Sends each joining player their roles and limits who may change server settings from the settings board to owners and moderators. Server.

- **Listed in** [TavernLib.Patches](/mod/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`
- **Documented in** [ServerSettingsRolePatch](/mod/tavernlib-api/types/patches/serversettingsrolepatch)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerSettingsRolePatch()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onlymoderatorschangesettings" /><code>{"static void OnlyModeratorsChangeSettings("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, ref Task<bool> __result)"}</code> | <span className="api-desc">Postfix on `ServerSettingsSync.IsServerSyncPermitted` that allows only the `owner` and `moderator` roles, logging a warning for anyone else.</span> |
| <Link id="m-sendrolestouser" /><code>{"static void SendRolesToUser("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" __instance)"}</code> | <span className="api-desc">Postfix on `Player.InitializePlayerOnServer` that sends the player their roles from `users.json` (none if they aren't in it).</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sendroles" /><code>{"internal static void SendRoles("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, IReadOnlyList<string> roles)"}</code> | <span className="api-desc">Internal: sends a connection the `ReceiveRoles` message with a list of role names. Also used when roles change.</span> |

</details>
