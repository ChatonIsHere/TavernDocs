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
| <Link id="m-ctor" /><code>{"CombatStateSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-combatshell" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/shellsetting">{"ShellSetting"}</Link>{" combatShell"}</code> | <span className="api-desc">Shell effect shown around a player entering or leaving combat.</span> |
| <Link id="m-cripplestatdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/cripplestatdefinition">{"CrippleStatDefinition"}</Link>{" crippleStatDefinition"}</code> | <span className="api-desc">Cripple stat that is reset to its maximum when combat ends.</span> |
| <Link id="m-delaybetweenhitandsound" /><code>{"private float delayBetweenHitAndSound"}</code> | <span className="api-desc">Seconds after entering combat before the local player hears the enter combat sound (default 0.5).</span> |
| <Link id="m-distancetimemultiplieroutofcombat" /><code>{"private AnimationCurve distanceTimeMultiplierOutOfCombat"}</code> | <span className="api-desc">Scales the out of combat timer by squared distance between fighters divided by `maxDistanceInCombatSquared`.</span> |
| <Link id="m-maxdistanceincombat" /><code>{"private float maxDistanceInCombat"}</code> | <span className="api-desc">Plain distance version of the combat range (default 50). The code reads the squared field instead.</span> |
| <Link id="m-maxdistanceincombatsquared" /><code>{"private float maxDistanceInCombatSquared"}</code> | <span className="api-desc">Squared distance beyond which a tool hit does not put the target in combat.</span> |
| <Link id="m-shellanimationcurve" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" shellAnimationCurve"}</code> | <span className="api-desc">Timing curve for the combat shell fade in and out.</span> |
| <Link id="m-teleportervelocityovertime" /><code>{"private AnimationCurve teleporterVelocityOverTime"}</code> | <span className="api-desc">Velocity curve for teleporting while in combat; not read elsewhere in this build.</span> |
| <Link id="m-timeforoutofcombat" /><code>{"private float timeForOutOfCombat"}</code> | <span className="api-desc">Seconds without new combat before a player leaves combat (default 15).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-combatshell-2" /><code><Link to="/mod/game-api/types/alta-player/shellsetting">{"ShellSetting"}</Link>{" CombatShell { get; }"}</code> | <span className="api-desc">Shell effect animated on the character when entering and leaving combat.</span> |
| <Link id="m-cripplestatdefinition-2" /><code><Link to="/mod/game-api/types/global-c-d/cripplestatdefinition">{"CrippleStatDefinition"}</Link>{" "}<Link to="/mod/game-api/types/global-c-d/cripplestatdefinition">{"CrippleStatDefinition"}</Link>{" { get; }"}</code> | <span className="api-desc">The cripple stat. It is reset to its maximum when the player leaves combat.</span> |
| <Link id="m-delaybetweenhitandsound-2" /><code>{"float DelayBetweenHitAndSound { get; }"}</code> | <span className="api-desc">Seconds between entering combat and the local player hearing the enter-combat sound.</span> |
| <Link id="m-distancetimemultiplieroutofcombat-2" /><code>{"AnimationCurve DistanceTimeMultiplierOutOfCombat { get; }"}</code> | <span className="api-desc">Curve that scales `TimeForOutOfCombat` when a hit resets the timer, keyed by squared attacker distance over `MaxDistanceInCombatSquared`.</span> |
| <Link id="m-maxdistanceincombatsquared-2" /><code>{"float MaxDistanceInCombatSquared { get; }"}</code> | <span className="api-desc">Squared distance (default 250). A tool hit from a wielder further away than this doesn't start combat.</span> |
| <Link id="m-shellanimationcurve-2" /><code><Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" ShellAnimationCurve { get; }"}</code> | <span className="api-desc">Timing curve for the combat shell animation.</span> |
| <Link id="m-statetype" /><code>{"override Type StateType { get; }"}</code> | <span className="api-desc">Always `typeof(CombatState)`.</span> |
| <Link id="m-teleportervelocityovertime-2" /><code>{"AnimationCurve TeleporterVelocityOverTime { get; }"}</code> | <span className="api-desc">Not read anywhere else in this build.</span> |
| <Link id="m-timeforoutofcombat-2" /><code>{"float TimeForOutOfCombat { get; }"}</code> | <span className="api-desc">Seconds (default 15) without a new hit before the player drops out of combat.</span> |

## Used in

Members of other types that take, return or hold a `CombatStateSettings`:

<div className="api-used-in">

[`CombatState.Settings`](/mod/game-api/types/alta-player/combatstate#m-settings), [`ToCombatTransition<TFrom>.CombatSettings`](/mod/game-api/types/alta-player/tocombattransition-tfrom#m-combatsettings).

</div>
