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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateSettings`](/mod/game-api/types/alta-player/playerstatesettings)
- **Derived types** [`CombatStateSettings.Create`](/mod/game-api/types/alta-player/combatstatesettings-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-player/combatstatesettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CombatStateSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-combatshell" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/shellsetting">{"ShellSetting"}</Link>{" combatShell"}</code> | Shell effect shown around a player entering or leaving combat. |
| <Link id="m-cripplestatdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/cripplestatdefinition">{"CrippleStatDefinition"}</Link>{" crippleStatDefinition"}</code> | Cripple stat that is reset to its maximum when combat ends. |
| <Link id="m-delaybetweenhitandsound" /><code>{"private float delayBetweenHitAndSound"}</code> | Seconds after entering combat before the local player hears the enter combat sound (default 0.5). |
| <Link id="m-distancetimemultiplieroutofcombat" /><code>{"private AnimationCurve distanceTimeMultiplierOutOfCombat"}</code> | Scales the out of combat timer by squared distance between fighters divided by `maxDistanceInCombatSquared`. |
| <Link id="m-maxdistanceincombat" /><code>{"private float maxDistanceInCombat"}</code> | Plain distance version of the combat range (default 50). The code reads the squared field instead. |
| <Link id="m-maxdistanceincombatsquared" /><code>{"private float maxDistanceInCombatSquared"}</code> | Squared distance beyond which a tool hit does not put the target in combat. |
| <Link id="m-shellanimationcurve" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" shellAnimationCurve"}</code> | Timing curve for the combat shell fade in and out. |
| <Link id="m-teleportervelocityovertime" /><code>{"private AnimationCurve teleporterVelocityOverTime"}</code> | Velocity curve for teleporting while in combat; not read elsewhere in this build. |
| <Link id="m-timeforoutofcombat" /><code>{"private float timeForOutOfCombat"}</code> | Seconds without new combat before a player leaves combat (default 15). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-combatshell-2" /><code><Link to="/mod/game-api/types/alta-player/shellsetting">{"ShellSetting"}</Link>{" CombatShell { get; }"}</code> | Shell effect animated on the character when entering and leaving combat. |
| <Link id="m-cripplestatdefinition-2" /><code><Link to="/mod/game-api/types/global-c-d/cripplestatdefinition">{"CrippleStatDefinition"}</Link>{" "}<Link to="/mod/game-api/types/global-c-d/cripplestatdefinition">{"CrippleStatDefinition"}</Link>{" { get; }"}</code> | The cripple stat. It is reset to its maximum when the player leaves combat. |
| <Link id="m-delaybetweenhitandsound-2" /><code>{"float DelayBetweenHitAndSound { get; }"}</code> | Seconds between entering combat and the local player hearing the enter-combat sound. |
| <Link id="m-distancetimemultiplieroutofcombat-2" /><code>{"AnimationCurve DistanceTimeMultiplierOutOfCombat { get; }"}</code> | Curve that scales `TimeForOutOfCombat` when a hit resets the timer, keyed by squared attacker distance over `MaxDistanceInCombatSquared`. |
| <Link id="m-maxdistanceincombatsquared-2" /><code>{"float MaxDistanceInCombatSquared { get; }"}</code> | Squared distance (default 250). A tool hit from a wielder further away than this doesn't start combat. |
| <Link id="m-shellanimationcurve-2" /><code><Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" ShellAnimationCurve { get; }"}</code> | Timing curve for the combat shell animation. |
| <Link id="m-statetype" /><code>{"override Type StateType { get; }"}</code> | Always `typeof(CombatState)`. |
| <Link id="m-teleportervelocityovertime-2" /><code>{"AnimationCurve TeleporterVelocityOverTime { get; }"}</code> | Not read anywhere else in this build. |
| <Link id="m-timeforoutofcombat-2" /><code>{"float TimeForOutOfCombat { get; }"}</code> | Seconds (default 15) without a new hit before the player drops out of combat. |

## Used in

Members of other types that take, return or hold a `CombatStateSettings`:

[`CombatState.Settings`](/mod/game-api/types/alta-player/combatstate#m-settings), [`ToCombatTransition<TFrom>.CombatSettings`](/mod/game-api/types/alta-player/tocombattransition-tfrom#m-combatsettings).
