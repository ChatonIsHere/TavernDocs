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

- **Listed in** [TavernLib.Patches](/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`
- **Documented in** [ServerSettingsRolePatch](/tavernlib-api/types/patches/serversettingsrolepatch)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerSettingsRolePatch()"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onlymoderatorschangesettings" /><code>{"static void OnlyModeratorsChangeSettings("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, ref Task<bool> __result)"}</code> | Postfix on `ServerSettingsSync.IsServerSyncPermitted` that allows only the `owner` and `moderator` roles, logging a warning for anyone else. |
| <Link id="m-sendrolestouser" /><code>{"static void SendRolesToUser("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" __instance)"}</code> | Postfix on `Player.InitializePlayerOnServer` that sends the player their roles from `users.json` (none if they aren't in it). |
| <Link id="m-sendroles" /><code>{"internal static void SendRoles("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, IReadOnlyList<string> roles)"}</code> | Internal: sends a connection the `ReceiveRoles` message with a list of role names. Also used when roles change. |
