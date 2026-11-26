---
title: "StrikeSuccessionInputStructure"
description: "Skill input asset for skills that trigger after a number of good strikes in a row (a combo leading to a power strike)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StrikeSuccessionInputStructure

A **class** in `Root.Township`, the global namespace.

Skill input asset for skills that trigger after a number of good strikes in a row (a combo leading to a power strike).

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`SkillInputStructure`](/mod/game-api/types/global-s/skillinputstructure)
- **Derived types** [`StrikeSuccessionInputStructure.Create`](/mod/game-api/types/global-s/strikesuccessioninputstructure-create)
- **Nested types** [`Create`](/mod/game-api/types/global-s/strikesuccessioninputstructure-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StrikeSuccessionInputStructure()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cooldowntime" /><code>{"private float coolDownTime"}</code> | <span className="api-desc">Backing field for `CoolDownTime`. Default 2 seconds.</span> |
| <Link id="m-minimumeficiency" /><code>{"private float minimumEficiency"}</code> | <span className="api-desc">Backing field for `MinimumEficiency`. Default 0.7.</span> |
| <Link id="m-strikesrequiredperlevel" /><code>{"private int[] strikesRequiredPerLevel"}</code> | <span className="api-desc">Strikes needed for a power strike at each skill level; `GetStrikeCount` reads it. Default 3 then 2.</span> |
| <Link id="m-targetchannel" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" targetChannel"}</code> | <span className="api-desc">Backing field for `TargetChannel`. The held tool must have this impact channel.</span> |
| <Link id="m-timeforcombobuild" /><code>{"private float timeForComboBuild"}</code> | <span className="api-desc">Backing field for `TimeForComboBuild`. Default 5 seconds.</span> |
| <Link id="m-timeforpowerstrike" /><code>{"private float timeForPowerStrike"}</code> | <span className="api-desc">Backing field for `TimeForPowerStrike`. Default 5 seconds.</span> |
| <Link id="m-timetoresetafterthrown" /><code>{"private float timeToResetAfterThrown"}</code> | <span className="api-desc">Backing field for `TimeToResetAfterThrown`. Default 3 seconds.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cooldowntime-2" /><code>{"float CoolDownTime { get; }"}</code> | <span className="api-desc">Seconds after a combo before a new one can start.</span> |
| <Link id="m-minimumeficiency-2" /><code>{"float MinimumEficiency { get; }"}</code> | <span className="api-desc">Hits less effective than this don't count.</span> |
| <Link id="m-targetchannel-2" /><code><Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" TargetChannel { get; }"}</code> | <span className="api-desc">Impact channel both the tool and the target must have.</span> |
| <Link id="m-timeforcombobuild-2" /><code>{"float TimeForComboBuild { get; }"}</code> | <span className="api-desc">Seconds allowed to land the next strike while building the combo.</span> |
| <Link id="m-timeforpowerstrike-2" /><code>{"float TimeForPowerStrike { get; }"}</code> | <span className="api-desc">Seconds allowed to land the power strike once the combo is built.</span> |
| <Link id="m-timetoresetafterthrown-2" /><code>{"float TimeToResetAfterThrown { get; }"}</code> | <span className="api-desc">Seconds after the tool is thrown before the combo resets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getnewinput" /><code>{"override "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" GetNewInput()"}</code> | <span className="api-desc">Creates a new `StrikeSuccessionInput`.</span> |
| <Link id="m-getstrikecount" /><code>{"int GetStrikeCount("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" targetPlayer, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | <span className="api-desc">Strikes needed at the player's level of the skill, or -1 if they don't have it.</span> |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | <span className="api-desc">True if the held tool has the target channel.</span> |

## Used in

Members of other types that take, return or hold a `StrikeSuccessionInputStructure`:

<div className="api-used-in">

[`StrikeSuccessionInput.structure`](/mod/game-api/types/global-s/strikesuccessioninput#m-structure).

</div>
