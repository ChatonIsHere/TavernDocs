---
title: "DeadStateSettings"
description: "class DeadStateSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeadStateSettings

A **class** in `Root.Township`, `Alta.PlayerStates`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateSettings`](/game-api/types/alta-player/playerstatesettings)
- **Derived types** [`DeadStateSettings.Create`](/game-api/types/alta-player/deadstatesettings-create)
- **Nested types** [`Create`](/game-api/types/alta-player/deadstatesettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DeadStateSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animationsettings" /><code>{"private "}<Link to="/game-api/types/alta-player/deathanimationsettings">{"DeathAnimationSettings"}</Link>{" animationSettings"}</code> |  |
| <Link id="m-deadbodydrag" /><code>{"private float deadBodyDrag"}</code> |  |
| <Link id="m-diedaction" /><code>{"private "}<Link to="/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" diedAction"}</code> |  |
| <Link id="m-fadeinouttime" /><code>{"private float fadeInOutTime"}</code> |  |
| <Link id="m-shownamesaction" /><code>{"private "}<Link to="/game-api/types/alta-player/shownames">{"ShowNames"}</Link>{" showNamesAction"}</code> |  |
| <Link id="m-skirtrotationmultiplier" /><code>{"private float skirtRotationMultiplier"}</code> |  |
| <Link id="m-statstomodifyondeath" /><code>{"private "}<Link to="/game-api/types/alta-player/statthresholdvalue">{"StatThresholdValue"}</Link>{"[] statsToModifyOnDeath"}</code> |  |
| <Link id="m-statstoresetondeath" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{"[] statsToResetOnDeath"}</code> |  |
| <Link id="m-timetoincreasefog" /><code>{"private float timeToIncreaseFog"}</code> |  |
| <Link id="m-timetorespawn" /><code>{"private float timeToRespawn"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animationsettings-2" /><code><Link to="/game-api/types/alta-player/deathanimationsettings">{"DeathAnimationSettings"}</Link>{" AnimationSettings { get; }"}</code> |  |
| <Link id="m-deadbodydrag-2" /><code>{"float DeadBodyDrag { get; }"}</code> |  |
| <Link id="m-diedaction-2" /><code><Link to="/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" DiedAction { get; }"}</code> |  |
| <Link id="m-fadeinouttime-2" /><code>{"float FadeInOutTime { get; }"}</code> |  |
| <Link id="m-shownamesaction-2" /><code><Link to="/game-api/types/alta-player/shownames">{"ShowNames"}</Link>{" ShowNamesAction { get; }"}</code> |  |
| <Link id="m-skirtrotationmultiplier-2" /><code>{"float SkirtRotationMultiplier { get; }"}</code> |  |
| <Link id="m-statetype" /><code>{"override Type StateType { get; }"}</code> |  |
| <Link id="m-statstomodifyondeath-2" /><code><Link to="/game-api/types/alta-player/statthresholdvalue">{"StatThresholdValue"}</Link>{"[] StatsToModifyOnDeath { get; }"}</code> |  |
| <Link id="m-statstoresetondeath-2" /><code><Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{"[] StatsToResetOnDeath { get; }"}</code> |  |
| <Link id="m-timetoincreasefog-2" /><code>{"float TimeToIncreaseFog { get; }"}</code> |  |
| <Link id="m-timetorespawn-2" /><code>{"float TimeToRespawn { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `DeadStateSettings`:

[`DeadState.Settings`](/game-api/types/alta-player/deadstate#m-settings).
