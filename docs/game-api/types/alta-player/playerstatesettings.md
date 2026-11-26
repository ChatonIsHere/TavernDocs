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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `ScriptableObject`, [`IPlayerStateSettings`](/game-api/types/alta-player/iplayerstatesettings)
- **Derived types** [`CombatStateSettings`](/game-api/types/alta-player/combatstatesettings), [`DeadStateSettings`](/game-api/types/alta-player/deadstatesettings), [`EquipmentStateSettings`](/game-api/types/alta-player/equipmentstatesettings), [`PlayingStateSettings`](/game-api/types/alta-player/playingstatesettings), [`SpiritStateSettings`](/game-api/types/alta-player/spiritstatesettings), [`CustomizationStateSettings`](/game-api/types/game-other-namespaces/customizationstatesettings), [`DownedStateSettings`](/game-api/types/game-other-namespaces/downedstatesettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PlayerStateSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-controlstoadd" /><code>{"private List<"}<Link to="/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{"> controlsToAdd"}</code> | Backing field for `ControlsToAdd`. |
| <Link id="m-controlstoremove" /><code>{"private List<"}<Link to="/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{"> controlsToRemove"}</code> | Backing field for `ControlsToRemove`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controlstoadd-2" /><code>{"List<"}<Link to="/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{"> ControlsToAdd { get; }"}</code> | Controller modes added when the state starts and removed when it ends. |
| <Link id="m-controlstoremove-2" /><code>{"List<"}<Link to="/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{"> ControlsToRemove { get; }"}</code> | Controller modes removed when the state starts and added back when it ends. |
| <Link id="m-statetype" /><code>{"abstract Type StateType { get; }"}</code> | The player state class these settings are for. |

## Used in

Members of other types that take, return or hold a `PlayerStateSettings`:

[`PlayerStateSettingsManager.GetSettings`](/game-api/types/alta-player/playerstatesettingsmanager#m-getsettings), [`PlayerStateSettingsManager.stateSettings`](/game-api/types/alta-player/playerstatesettingsmanager#m-statesettings).
