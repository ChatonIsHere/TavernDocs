---
title: "CombatStateSettings"
description: "Settings asset for CombatState: how long a player stays in combat, and the shell effect and sound shown when entering it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CombatStateSettings

A **class** in `Root.Township`, `Alta.PlayerStates`.

Settings asset for `CombatState`: how long a player stays in combat, and the shell effect and sound shown when entering it.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateSettings`](/game-api/types/alta-player/playerstatesettings)
- **Derived types** [`CombatStateSettings.Create`](/game-api/types/alta-player/combatstatesettings-create)
- **Nested types** [`Create`](/game-api/types/alta-player/combatstatesettings-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CombatStateSettings()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-combatshell" /><code>{"private "}<Link to="/game-api/types/alta-player/shellsetting">{"ShellSetting"}</Link>{" combatShell"}</code> |
| <Link id="m-cripplestatdefinition" /><code>{"private "}<Link to="/game-api/types/global-c-d/cripplestatdefinition">{"CrippleStatDefinition"}</Link>{" crippleStatDefinition"}</code> |
| <Link id="m-delaybetweenhitandsound" /><code>{"private float delayBetweenHitAndSound"}</code> |
| <Link id="m-distancetimemultiplieroutofcombat" /><code>{"private AnimationCurve distanceTimeMultiplierOutOfCombat"}</code> |
| <Link id="m-maxdistanceincombat" /><code>{"private float maxDistanceInCombat"}</code> |
| <Link id="m-maxdistanceincombatsquared" /><code>{"private float maxDistanceInCombatSquared"}</code> |
| <Link id="m-shellanimationcurve" /><code>{"private "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" shellAnimationCurve"}</code> |
| <Link id="m-teleportervelocityovertime" /><code>{"private AnimationCurve teleporterVelocityOverTime"}</code> |
| <Link id="m-timeforoutofcombat" /><code>{"private float timeForOutOfCombat"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-combatshell-2" /><code><Link to="/game-api/types/alta-player/shellsetting">{"ShellSetting"}</Link>{" CombatShell { get; }"}</code> | Shell effect animated on the character when entering and leaving combat. |
| <Link id="m-cripplestatdefinition-2" /><code><Link to="/game-api/types/global-c-d/cripplestatdefinition">{"CrippleStatDefinition"}</Link>{" "}<Link to="/game-api/types/global-c-d/cripplestatdefinition">{"CrippleStatDefinition"}</Link>{" { get; }"}</code> | The cripple stat. It is reset to its maximum when the player leaves combat. |
| <Link id="m-delaybetweenhitandsound-2" /><code>{"float DelayBetweenHitAndSound { get; }"}</code> | Seconds between entering combat and the local player hearing the enter-combat sound. |
| <Link id="m-distancetimemultiplieroutofcombat-2" /><code>{"AnimationCurve DistanceTimeMultiplierOutOfCombat { get; }"}</code> | Curve that scales `TimeForOutOfCombat` when a hit resets the timer, keyed by squared attacker distance over `MaxDistanceInCombatSquared`. |
| <Link id="m-maxdistanceincombatsquared-2" /><code>{"float MaxDistanceInCombatSquared { get; }"}</code> | Squared distance (default 250). A tool hit from a wielder further away than this doesn't start combat. |
| <Link id="m-shellanimationcurve-2" /><code><Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" ShellAnimationCurve { get; }"}</code> | Timing curve for the combat shell animation. |
| <Link id="m-statetype" /><code>{"override Type StateType { get; }"}</code> | Always `typeof(CombatState)`. |
| <Link id="m-teleportervelocityovertime-2" /><code>{"AnimationCurve TeleporterVelocityOverTime { get; }"}</code> | Not read anywhere else in this build. |
| <Link id="m-timeforoutofcombat-2" /><code>{"float TimeForOutOfCombat { get; }"}</code> | Seconds (default 15) without a new hit before the player drops out of combat. |

## Used in

Members of other types that take, return or hold a `CombatStateSettings`:

[`CombatState.Settings`](/game-api/types/alta-player/combatstate#m-settings), [`ToCombatTransition<TFrom>.CombatSettings`](/game-api/types/alta-player/tocombattransition-tfrom#m-combatsettings).
