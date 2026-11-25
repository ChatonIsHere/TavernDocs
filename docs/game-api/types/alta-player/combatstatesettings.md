---
title: "CombatStateSettings"
description: "class CombatStateSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CombatStateSettings

A **class** in `Root.Township`, `Alta.PlayerStates`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateSettings`](/game-api/types/alta-player/playerstatesettings)
- **Derived types** [`CombatStateSettings.Create`](/game-api/types/alta-player/combatstatesettings-create)
- **Nested types** [`Create`](/game-api/types/alta-player/combatstatesettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CombatStateSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-combatshell" /><code>{"private "}<Link to="/game-api/types/alta-player/shellsetting">{"ShellSetting"}</Link>{" combatShell"}</code> |  |
| <Link id="m-cripplestatdefinition" /><code>{"private "}<Link to="/game-api/types/global-c-d/cripplestatdefinition">{"CrippleStatDefinition"}</Link>{" crippleStatDefinition"}</code> |  |
| <Link id="m-delaybetweenhitandsound" /><code>{"private float delayBetweenHitAndSound"}</code> |  |
| <Link id="m-distancetimemultiplieroutofcombat" /><code>{"private AnimationCurve distanceTimeMultiplierOutOfCombat"}</code> |  |
| <Link id="m-maxdistanceincombat" /><code>{"private float maxDistanceInCombat"}</code> |  |
| <Link id="m-maxdistanceincombatsquared" /><code>{"private float maxDistanceInCombatSquared"}</code> |  |
| <Link id="m-shellanimationcurve" /><code>{"private "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" shellAnimationCurve"}</code> |  |
| <Link id="m-teleportervelocityovertime" /><code>{"private AnimationCurve teleporterVelocityOverTime"}</code> |  |
| <Link id="m-timeforoutofcombat" /><code>{"private float timeForOutOfCombat"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-combatshell-2" /><code><Link to="/game-api/types/alta-player/shellsetting">{"ShellSetting"}</Link>{" CombatShell { get; }"}</code> |  |
| <Link id="m-cripplestatdefinition-2" /><code><Link to="/game-api/types/global-c-d/cripplestatdefinition">{"CrippleStatDefinition"}</Link>{" "}<Link to="/game-api/types/global-c-d/cripplestatdefinition">{"CrippleStatDefinition"}</Link>{" { get; }"}</code> |  |
| <Link id="m-delaybetweenhitandsound-2" /><code>{"float DelayBetweenHitAndSound { get; }"}</code> |  |
| <Link id="m-distancetimemultiplieroutofcombat-2" /><code>{"AnimationCurve DistanceTimeMultiplierOutOfCombat { get; }"}</code> |  |
| <Link id="m-maxdistanceincombatsquared-2" /><code>{"float MaxDistanceInCombatSquared { get; }"}</code> |  |
| <Link id="m-shellanimationcurve-2" /><code><Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" ShellAnimationCurve { get; }"}</code> |  |
| <Link id="m-statetype" /><code>{"override Type StateType { get; }"}</code> |  |
| <Link id="m-teleportervelocityovertime-2" /><code>{"AnimationCurve TeleporterVelocityOverTime { get; }"}</code> |  |
| <Link id="m-timeforoutofcombat-2" /><code>{"float TimeForOutOfCombat { get; }"}</code> |  |

## Used in

Members of other types that take, return or hold a `CombatStateSettings`:

[`CombatState.Settings`](/game-api/types/alta-player/combatstate#m-settings), [`ToCombatTransition<TFrom>.CombatSettings`](/game-api/types/alta-player/tocombattransition-tfrom#m-combatsettings).
