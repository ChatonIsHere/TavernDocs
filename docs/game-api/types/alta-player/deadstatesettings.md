---
title: "DeadStateSettings"
description: "Settings asset for the player's dead state (DeadState): ragdoll feel, the fade and respawn timing, and which stats are reset on death."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeadStateSettings

A **class** in `Root.Township`, `Alta.PlayerStates`.

Settings asset for the player's dead state (`DeadState`): ragdoll feel, the fade and respawn timing, and which stats are reset on death.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateSettings`](/game-api/types/alta-player/playerstatesettings)
- **Derived types** [`DeadStateSettings.Create`](/game-api/types/alta-player/deadstatesettings-create)
- **Nested types** [`Create`](/game-api/types/alta-player/deadstatesettings-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DeadStateSettings()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationsettings" /><code>{"private "}<Link to="/game-api/types/alta-player/deathanimationsettings">{"DeathAnimationSettings"}</Link>{" animationSettings"}</code> | Death animation settings. |
| <Link id="m-deadbodydrag" /><code>{"private float deadBodyDrag"}</code> | Rigidbody drag on the dead body (default 0.5). |
| <Link id="m-diedaction" /><code>{"private "}<Link to="/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" diedAction"}</code> | Game action counted for the player each time they die. |
| <Link id="m-fadeinouttime" /><code>{"private float fadeInOutTime"}</code> | Seconds of fade to black before respawn (default 0.5). |
| <Link id="m-shownamesaction" /><code>{"private "}<Link to="/game-api/types/alta-player/shownames">{"ShowNames"}</Link>{" showNamesAction"}</code> | `ShowNames` action run on death. |
| <Link id="m-skirtrotationmultiplier" /><code>{"private float skirtRotationMultiplier"}</code> | Multiplier for the rotation given to the body on death (default 1). |
| <Link id="m-statstomodifyondeath" /><code>{"private "}<Link to="/game-api/types/alta-player/statthresholdvalue">{"StatThresholdValue"}</Link>{"[] statsToModifyOnDeath"}</code> | Stats set to threshold values on death. |
| <Link id="m-statstoresetondeath" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{"[] statsToResetOnDeath"}</code> | Stats reset on death. |
| <Link id="m-timetoincreasefog" /><code>{"private float timeToIncreaseFog"}</code> | Seconds of fog build-up before the respawn wait (default 1). |
| <Link id="m-timetorespawn" /><code>{"private float timeToRespawn"}</code> | Seconds after the fog before the server starts the respawn fade (default 5). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animationsettings-2" /><code><Link to="/game-api/types/alta-player/deathanimationsettings">{"DeathAnimationSettings"}</Link>{" AnimationSettings { get; }"}</code> | Death animation settings for the body. |
| <Link id="m-deadbodydrag-2" /><code>{"float DeadBodyDrag { get; }"}</code> | Rigidbody drag applied to the dead body. Defaults to 0.5. |
| <Link id="m-diedaction-2" /><code><Link to="/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" DiedAction { get; }"}</code> | Game task action counted for the player each time they die. |
| <Link id="m-fadeinouttime-2" /><code>{"float FadeInOutTime { get; }"}</code> | Seconds for the screen fade to black before respawn. |
| <Link id="m-shownamesaction-2" /><code><Link to="/game-api/types/alta-player/shownames">{"ShowNames"}</Link>{" ShowNamesAction { get; }"}</code> | Show-names action run when the player dies. |
| <Link id="m-skirtrotationmultiplier-2" /><code>{"float SkirtRotationMultiplier { get; }"}</code> | Scales the spin given to the body when it falls. |
| <Link id="m-statetype" /><code>{"override Type StateType { get; }"}</code> | Always `DeadState`. |
| <Link id="m-statstomodifyondeath-2" /><code><Link to="/game-api/types/alta-player/statthresholdvalue">{"StatThresholdValue"}</Link>{"[] StatsToModifyOnDeath { get; }"}</code> | Stats moved to set threshold values on death. |
| <Link id="m-statstoresetondeath-2" /><code><Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{"[] StatsToResetOnDeath { get; }"}</code> | Saved stats reset to their defaults on death. Unsaved and duplicate entries are dropped in the editor. |
| <Link id="m-timetoincreasefog-2" /><code>{"float TimeToIncreaseFog { get; }"}</code> | Seconds the fog closes in after death. The server waits this plus `TimeToRespawn` before fading. |
| <Link id="m-timetorespawn-2" /><code>{"float TimeToRespawn { get; }"}</code> | Extra seconds after the fog before the respawn fade starts. Defaults to 5. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Removes duplicates and stats that aren't save serialized from `statsToResetOnDeath`. |

</details>

## Used in

Members of other types that take, return or hold a `DeadStateSettings`:

[`DeadState.Settings`](/game-api/types/alta-player/deadstate#m-settings).
