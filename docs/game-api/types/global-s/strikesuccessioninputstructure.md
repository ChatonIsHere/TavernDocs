---
title: "StrikeSuccessionInputStructure"
description: "Skill input asset for skills that trigger after a number of good strikes in a row (a combo leading to a power strike)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StrikeSuccessionInputStructure

A **class** in `Root.Township`, no namespace.

Skill input asset for skills that trigger after a number of good strikes in a row (a combo leading to a power strike).

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`SkillInputStructure`](/game-api/types/global-s/skillinputstructure)
- **Derived types** [`StrikeSuccessionInputStructure.Create`](/game-api/types/global-s/strikesuccessioninputstructure-create)
- **Nested types** [`Create`](/game-api/types/global-s/strikesuccessioninputstructure-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StrikeSuccessionInputStructure()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cooldowntime" /><code>{"private float coolDownTime"}</code> | Backing field for `CoolDownTime`. Default 2 seconds. |
| <Link id="m-minimumeficiency" /><code>{"private float minimumEficiency"}</code> | Backing field for `MinimumEficiency`. Default 0.7. |
| <Link id="m-strikesrequiredperlevel" /><code>{"private int[] strikesRequiredPerLevel"}</code> | Strikes needed for a power strike at each skill level; `GetStrikeCount` reads it. Default 3 then 2. |
| <Link id="m-targetchannel" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" targetChannel"}</code> | Backing field for `TargetChannel`. The held tool must have this impact channel. |
| <Link id="m-timeforcombobuild" /><code>{"private float timeForComboBuild"}</code> | Backing field for `TimeForComboBuild`. Default 5 seconds. |
| <Link id="m-timeforpowerstrike" /><code>{"private float timeForPowerStrike"}</code> | Backing field for `TimeForPowerStrike`. Default 5 seconds. |
| <Link id="m-timetoresetafterthrown" /><code>{"private float timeToResetAfterThrown"}</code> | Backing field for `TimeToResetAfterThrown`. Default 3 seconds. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cooldowntime-2" /><code>{"float CoolDownTime { get; }"}</code> | Seconds after a combo before a new one can start. |
| <Link id="m-minimumeficiency-2" /><code>{"float MinimumEficiency { get; }"}</code> | Hits less effective than this don't count. |
| <Link id="m-targetchannel-2" /><code><Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" TargetChannel { get; }"}</code> | Impact channel both the tool and the target must have. |
| <Link id="m-timeforcombobuild-2" /><code>{"float TimeForComboBuild { get; }"}</code> | Seconds allowed to land the next strike while building the combo. |
| <Link id="m-timeforpowerstrike-2" /><code>{"float TimeForPowerStrike { get; }"}</code> | Seconds allowed to land the power strike once the combo is built. |
| <Link id="m-timetoresetafterthrown-2" /><code>{"float TimeToResetAfterThrown { get; }"}</code> | Seconds after the tool is thrown before the combo resets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getnewinput" /><code>{"override "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" GetNewInput()"}</code> | Creates a new `StrikeSuccessionInput`. |
| <Link id="m-getstrikecount" /><code>{"int GetStrikeCount("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" targetPlayer, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | Strikes needed at the player's level of the skill, or -1 if they don't have it. |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | True if the held tool has the target channel. |

## Used in

Members of other types that take, return or hold a `StrikeSuccessionInputStructure`:

[`StrikeSuccessionInput.structure`](/game-api/types/global-s/strikesuccessioninput#m-structure).
