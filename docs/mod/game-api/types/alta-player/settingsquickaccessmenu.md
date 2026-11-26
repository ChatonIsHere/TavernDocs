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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/mod/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SettingsQuickAccessMenu()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeboard" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/iquickaccesssettingsboard">{"IQuickAccessSettingsBoard"}</Link>{" activeBoard"}</code> | <span className="api-desc">The board currently shown, if any.</span> |
| <Link id="m-boarddefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" boardDefinition"}</code> | <span className="api-desc">Pooled board object that shows the settings.</span> |
| <Link id="m-boarddistancefromhead" /><code>{"private float boardDistanceFromHead"}</code> | <span className="api-desc">How far in front of the player the board appears.</span> |
| <Link id="m-boardheight" /><code>{"private float boardHeight"}</code> | <span className="api-desc">Height of the board above the player's feet.</span> |
| <Link id="m-haspermission" /><code>{"private bool hasPermission"}</code> | <span className="api-desc">Whether the local player may use this menu; server settings need server permissions.</span> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">Whether the board is open. Backing field for `IsActive`.</span> |
| <Link id="m-isignored" /><code>{"private bool isIgnored"}</code> | <span className="api-desc">Set when initialized without a player, which hides the action.</span> |
| <Link id="m-isserversettings" /><code>{"private bool isServerSettings"}</code> | <span className="api-desc">Edits the server's settings instead of the player's own. Backing field for `IsServerSettings`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-settingsdefinitions" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{"[] settingsDefinitions"}</code> | <span className="api-desc">Pooled UI element to use for each setting type. Backing field for `SettingsDefinitions`.</span> |
| <Link id="m-settingstodisplay" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/settingsfieldaccess">{"SettingsFieldAccess"}</Link>{"[] settingsToDisplay"}</code> | <span className="api-desc">The settings listed on the board. Backing field for `SettingsToDisplay`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive-2" /><code>{"override bool IsActive { get; }"}</code> | <span className="api-desc">True while the board is open.</span> |
| <Link id="m-isignored-2" /><code>{"override bool IsIgnored { get; }"}</code> | <span className="api-desc">True when hidden from the menu: no permission, no `ServerSettingsSync`, or the server menu unavailable for non-devs.</span> |
| <Link id="m-isserversettings-2" /><code>{"bool IsServerSettings { get; }"}</code> | <span className="api-desc">True if this edits the server's settings instead of the player's own.</span> |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | <span className="api-desc">False while the player is downed.</span> |
| <Link id="m-serversettings" /><code><Link to="/mod/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" "}<Link to="/mod/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">Server settings fetched for the open board. They are sent back to the server when the board closes.</span> |
| <Link id="m-settingsdefinitions-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{"[] SettingsDefinitions { get; }"}</code> | <span className="api-desc">Pooled UI prefab for each `SettingType`.</span> |
| <Link id="m-settingstodisplay-2" /><code><Link to="/mod/game-api/types/alta-utilities/settingsfieldaccess">{"SettingsFieldAccess"}</Link>{"[] SettingsToDisplay { get; }"}</code> | <span className="api-desc">The settings fields shown on the board.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeforplayer" /><code>{"override async void InitializeForPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isDev)"}</code> | <span className="api-desc">Works out if the local player may use it. Server settings need a permissions check against the joined server, except in a local test.</span> |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | <span className="api-desc">Toggles the board. For server settings it first requests them from the server.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"private void Activate()"}</code> | <span className="api-desc">Spawns the settings board in front of the player, sets it up and closes it if the player dies.</span> |
| <Link id="m-deregisterboard" /><code>{"private void DeregisterBoard()"}</code> | <span className="api-desc">Closes the board; for server settings, sends the edited settings back to the server.</span> |
| <Link id="m-playerdied" /><code>{"private void PlayerDied("}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" obj)"}</code> | <span className="api-desc">Closes the board when the local player is killed.</span> |
| <Link id="m-positionboardforplayer" /><code>{"private void PositionBoardForPlayer(Transform boardTransform)"}</code> | <span className="api-desc">Places the board at `boardHeight` above the player's feet, `boardDistanceFromHead` in front, facing them.</span> |
| <Link id="m-validateaccessandgetserversettings" /><code>{"private async void ValidateAccessAndGetServerSettings()"}</code> | <span className="api-desc">Asks the server for its settings and opens the board if the menu is still open when they arrive.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SettingsQuickAccessMenu`:

<div className="api-used-in">

[`DevToolsBoard.settings`](/mod/game-api/types/alta-player/devtoolsboard#m-settings), [`DevToolsBoard.Setup`](/mod/game-api/types/alta-player/devtoolsboard#m-setup), [`IQuickAccessSettingsBoard.Setup`](/mod/game-api/types/alta-player/iquickaccesssettingsboard#m-setup), [`QuickAccessSettingsBoard.settings`](/mod/game-api/types/alta-player/quickaccesssettingsboard#m-settings), [`QuickAccessSettingsBoard.Setup`](/mod/game-api/types/alta-player/quickaccesssettingsboard#m-setup).

</div>
