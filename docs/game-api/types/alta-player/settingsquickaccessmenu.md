---
title: "SettingsQuickAccessMenu"
description: "Quick access menu action that opens a settings board in front of the local player: either client settings, or the server's settings for players with permission."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SettingsQuickAccessMenu

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Quick access menu action that opens a settings board in front of the local player: either client settings, or the server's settings for players with permission. Client side.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SettingsQuickAccessMenu()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeboard" /><code>{"private "}<Link to="/game-api/types/alta-player/iquickaccesssettingsboard">{"IQuickAccessSettingsBoard"}</Link>{" activeBoard"}</code> | The board currently shown, if any. |
| <Link id="m-boarddefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" boardDefinition"}</code> | Pooled board object that shows the settings. |
| <Link id="m-boarddistancefromhead" /><code>{"private float boardDistanceFromHead"}</code> | How far in front of the player the board appears. |
| <Link id="m-boardheight" /><code>{"private float boardHeight"}</code> | Height of the board above the player's feet. |
| <Link id="m-haspermission" /><code>{"private bool hasPermission"}</code> | Whether the local player may use this menu; server settings need server permissions. |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | Whether the board is open. Backing field for `IsActive`. |
| <Link id="m-isignored" /><code>{"private bool isIgnored"}</code> | Set when initialized without a player, which hides the action. |
| <Link id="m-isserversettings" /><code>{"private bool isServerSettings"}</code> | Edits the server's settings instead of the player's own. Backing field for `IsServerSettings`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |
| <Link id="m-settingsdefinitions" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{"[] settingsDefinitions"}</code> | Pooled UI element to use for each setting type. Backing field for `SettingsDefinitions`. |
| <Link id="m-settingstodisplay" /><code>{"private "}<Link to="/game-api/types/alta-utilities/settingsfieldaccess">{"SettingsFieldAccess"}</Link>{"[] settingsToDisplay"}</code> | The settings listed on the board. Backing field for `SettingsToDisplay`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive-2" /><code>{"override bool IsActive { get; }"}</code> | True while the board is open. |
| <Link id="m-isignored-2" /><code>{"override bool IsIgnored { get; }"}</code> | True when hidden from the menu: no permission, no `ServerSettingsSync`, or the server menu unavailable for non-devs. |
| <Link id="m-isserversettings-2" /><code>{"bool IsServerSettings { get; }"}</code> | True if this edits the server's settings instead of the player's own. |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | False while the player is downed. |
| <Link id="m-serversettings" /><code><Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" "}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" { get; private set; }"}</code> | Server settings fetched for the open board. They are sent back to the server when the board closes. |
| <Link id="m-settingsdefinitions-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{"[] SettingsDefinitions { get; }"}</code> | Pooled UI prefab for each `SettingType`. |
| <Link id="m-settingstodisplay-2" /><code><Link to="/game-api/types/alta-utilities/settingsfieldaccess">{"SettingsFieldAccess"}</Link>{"[] SettingsToDisplay { get; }"}</code> | The settings fields shown on the board. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeforplayer" /><code>{"override async void InitializeForPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isDev)"}</code> | Works out if the local player may use it. Server settings need a permissions check against the joined server, except in a local test. |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Toggles the board. For server settings it first requests them from the server. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"private void Activate()"}</code> | Spawns the settings board in front of the player, sets it up and closes it if the player dies. |
| <Link id="m-deregisterboard" /><code>{"private void DeregisterBoard()"}</code> | Closes the board; for server settings, sends the edited settings back to the server. |
| <Link id="m-playerdied" /><code>{"private void PlayerDied("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" obj)"}</code> | Closes the board when the local player is killed. |
| <Link id="m-positionboardforplayer" /><code>{"private void PositionBoardForPlayer(Transform boardTransform)"}</code> | Places the board at `boardHeight` above the player's feet, `boardDistanceFromHead` in front, facing them. |
| <Link id="m-validateaccessandgetserversettings" /><code>{"private async void ValidateAccessAndGetServerSettings()"}</code> | Asks the server for its settings and opens the board if the menu is still open when they arrive. |

</details>

## Used in

Members of other types that take, return or hold a `SettingsQuickAccessMenu`:

[`DevToolsBoard.settings`](/game-api/types/alta-player/devtoolsboard#m-settings), [`DevToolsBoard.Setup`](/game-api/types/alta-player/devtoolsboard#m-setup), [`IQuickAccessSettingsBoard.Setup`](/game-api/types/alta-player/iquickaccesssettingsboard#m-setup), [`QuickAccessSettingsBoard.settings`](/game-api/types/alta-player/quickaccesssettingsboard#m-settings), [`QuickAccessSettingsBoard.Setup`](/game-api/types/alta-player/quickaccesssettingsboard#m-setup).
