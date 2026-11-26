---
title: "PlayerStateSettings"
description: "Base settings asset for a player state (downed, dead and so on)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerStateSettings

An **abstract class** in `Root.Township`, `Alta.PlayerStates`.

Base settings asset for a player state (downed, dead and so on). Each subclass names the state class it configures.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `ScriptableObject`, [`IPlayerStateSettings`](/mod/game-api/types/alta-player/iplayerstatesettings)
- **Derived types** [`CombatStateSettings`](/mod/game-api/types/alta-player/combatstatesettings), [`DeadStateSettings`](/mod/game-api/types/alta-player/deadstatesettings), [`EquipmentStateSettings`](/mod/game-api/types/alta-player/equipmentstatesettings), [`PlayingStateSettings`](/mod/game-api/types/alta-player/playingstatesettings), [`SpiritStateSettings`](/mod/game-api/types/alta-player/spiritstatesettings), [`CustomizationStateSettings`](/mod/game-api/types/game-other-namespaces/customizationstatesettings), [`DownedStateSettings`](/mod/game-api/types/game-other-namespaces/downedstatesettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PlayerStateSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-controlstoadd" /><code>{"private List<"}<Link to="/mod/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{"> controlsToAdd"}</code> | <span className="api-desc">Backing field for `ControlsToAdd`.</span> |
| <Link id="m-controlstoremove" /><code>{"private List<"}<Link to="/mod/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{"> controlsToRemove"}</code> | <span className="api-desc">Backing field for `ControlsToRemove`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controlstoadd-2" /><code>{"List<"}<Link to="/mod/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{"> ControlsToAdd { get; }"}</code> | <span className="api-desc">Controller modes added when the state starts and removed when it ends.</span> |
| <Link id="m-controlstoremove-2" /><code>{"List<"}<Link to="/mod/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{"> ControlsToRemove { get; }"}</code> | <span className="api-desc">Controller modes removed when the state starts and added back when it ends.</span> |
| <Link id="m-statetype" /><code>{"abstract Type StateType { get; }"}</code> | <span className="api-desc">The player state class these settings are for.</span> |

## Used in

Members of other types that take, return or hold a `PlayerStateSettings`:

<div className="api-used-in">

[`PlayerStateSettingsManager.GetSettings`](/mod/game-api/types/alta-player/playerstatesettingsmanager#m-getsettings), [`PlayerStateSettingsManager.stateSettings`](/mod/game-api/types/alta-player/playerstatesettingsmanager#m-statesettings).

</div>
