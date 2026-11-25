---
title: "StrikeSuccessionInputStructure"
description: "class StrikeSuccessionInputStructure in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StrikeSuccessionInputStructure

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`SkillInputStructure`](/game-api/types/global-s/skillinputstructure)
- **Derived types** [`StrikeSuccessionInputStructure.Create`](/game-api/types/global-s/strikesuccessioninputstructure-create)
- **Nested types** [`Create`](/game-api/types/global-s/strikesuccessioninputstructure-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StrikeSuccessionInputStructure()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cooldowntime" /><code>{"private float coolDownTime"}</code> |  |
| <Link id="m-minimumeficiency" /><code>{"private float minimumEficiency"}</code> |  |
| <Link id="m-strikesrequiredperlevel" /><code>{"private int[] strikesRequiredPerLevel"}</code> |  |
| <Link id="m-targetchannel" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" targetChannel"}</code> |  |
| <Link id="m-timeforcombobuild" /><code>{"private float timeForComboBuild"}</code> |  |
| <Link id="m-timeforpowerstrike" /><code>{"private float timeForPowerStrike"}</code> |  |
| <Link id="m-timetoresetafterthrown" /><code>{"private float timeToResetAfterThrown"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cooldowntime-2" /><code>{"float CoolDownTime { get; }"}</code> |  |
| <Link id="m-minimumeficiency-2" /><code>{"float MinimumEficiency { get; }"}</code> |  |
| <Link id="m-targetchannel-2" /><code><Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" TargetChannel { get; }"}</code> |  |
| <Link id="m-timeforcombobuild-2" /><code>{"float TimeForComboBuild { get; }"}</code> |  |
| <Link id="m-timeforpowerstrike-2" /><code>{"float TimeForPowerStrike { get; }"}</code> |  |
| <Link id="m-timetoresetafterthrown-2" /><code>{"float TimeToResetAfterThrown { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getnewinput" /><code>{"override "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" GetNewInput()"}</code> |  |
| <Link id="m-getstrikecount" /><code>{"int GetStrikeCount("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" targetPlayer, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> |  |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> |  |

## Used in

Members of other types that take, return or hold a `StrikeSuccessionInputStructure`:

[`StrikeSuccessionInput.structure`](/game-api/types/global-s/strikesuccessioninput#m-structure).
