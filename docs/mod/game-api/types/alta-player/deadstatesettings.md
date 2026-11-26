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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateSettings`](/mod/game-api/types/alta-player/playerstatesettings)
- **Derived types** [`DeadStateSettings.Create`](/mod/game-api/types/alta-player/deadstatesettings-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-player/deadstatesettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DeadStateSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationsettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/deathanimationsettings">{"DeathAnimationSettings"}</Link>{" animationSettings"}</code> | <span className="api-desc">Death animation settings.</span> |
| <Link id="m-deadbodydrag" /><code>{"private float deadBodyDrag"}</code> | <span className="api-desc">Rigidbody drag on the dead body (default 0.5).</span> |
| <Link id="m-diedaction" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" diedAction"}</code> | <span className="api-desc">Game action counted for the player each time they die.</span> |
| <Link id="m-fadeinouttime" /><code>{"private float fadeInOutTime"}</code> | <span className="api-desc">Seconds of fade to black before respawn (default 0.5).</span> |
| <Link id="m-shownamesaction" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/shownames">{"ShowNames"}</Link>{" showNamesAction"}</code> | <span className="api-desc">`ShowNames` action run on death.</span> |
| <Link id="m-skirtrotationmultiplier" /><code>{"private float skirtRotationMultiplier"}</code> | <span className="api-desc">Multiplier for the rotation given to the body on death (default 1).</span> |
| <Link id="m-statstomodifyondeath" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/statthresholdvalue">{"StatThresholdValue"}</Link>{"[] statsToModifyOnDeath"}</code> | <span className="api-desc">Stats set to threshold values on death.</span> |
| <Link id="m-statstoresetondeath" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{"[] statsToResetOnDeath"}</code> | <span className="api-desc">Stats reset on death.</span> |
| <Link id="m-timetoincreasefog" /><code>{"private float timeToIncreaseFog"}</code> | <span className="api-desc">Seconds of fog build-up before the respawn wait (default 1).</span> |
| <Link id="m-timetorespawn" /><code>{"private float timeToRespawn"}</code> | <span className="api-desc">Seconds after the fog before the server starts the respawn fade (default 5).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animationsettings-2" /><code><Link to="/mod/game-api/types/alta-player/deathanimationsettings">{"DeathAnimationSettings"}</Link>{" AnimationSettings { get; }"}</code> | <span className="api-desc">Death animation settings for the body.</span> |
| <Link id="m-deadbodydrag-2" /><code>{"float DeadBodyDrag { get; }"}</code> | <span className="api-desc">Rigidbody drag applied to the dead body. Defaults to 0.5.</span> |
| <Link id="m-diedaction-2" /><code><Link to="/mod/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" DiedAction { get; }"}</code> | <span className="api-desc">Game task action counted for the player each time they die.</span> |
| <Link id="m-fadeinouttime-2" /><code>{"float FadeInOutTime { get; }"}</code> | <span className="api-desc">Seconds for the screen fade to black before respawn.</span> |
| <Link id="m-shownamesaction-2" /><code><Link to="/mod/game-api/types/alta-player/shownames">{"ShowNames"}</Link>{" ShowNamesAction { get; }"}</code> | <span className="api-desc">Show-names action run when the player dies.</span> |
| <Link id="m-skirtrotationmultiplier-2" /><code>{"float SkirtRotationMultiplier { get; }"}</code> | <span className="api-desc">Scales the spin given to the body when it falls.</span> |
| <Link id="m-statetype" /><code>{"override Type StateType { get; }"}</code> | <span className="api-desc">Always `DeadState`.</span> |
| <Link id="m-statstomodifyondeath-2" /><code><Link to="/mod/game-api/types/alta-player/statthresholdvalue">{"StatThresholdValue"}</Link>{"[] StatsToModifyOnDeath { get; }"}</code> | <span className="api-desc">Stats moved to set threshold values on death.</span> |
| <Link id="m-statstoresetondeath-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{"[] StatsToResetOnDeath { get; }"}</code> | <span className="api-desc">Saved stats reset to their defaults on death. Unsaved and duplicate entries are dropped in the editor.</span> |
| <Link id="m-timetoincreasefog-2" /><code>{"float TimeToIncreaseFog { get; }"}</code> | <span className="api-desc">Seconds the fog closes in after death. The server waits this plus `TimeToRespawn` before fading.</span> |
| <Link id="m-timetorespawn-2" /><code>{"float TimeToRespawn { get; }"}</code> | <span className="api-desc">Extra seconds after the fog before the respawn fade starts. Defaults to 5.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Removes duplicates and stats that aren't save serialized from `statsToResetOnDeath`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `DeadStateSettings`:

<div className="api-used-in">

[`DeadState.Settings`](/mod/game-api/types/alta-player/deadstate#m-settings).

</div>
