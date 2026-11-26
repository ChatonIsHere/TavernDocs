---
title: "BlockingCharge"
description: "Profession skill: blocking a hit with a valid item at good enough effectiveness adds a charge to the strike succession input of a linked skill."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BlockingCharge

A **class** in `Root.Township`, the global namespace.

Profession skill: blocking a hit with a valid item at good enough effectiveness adds a charge to the strike succession input of a linked skill. Called by `ImpactTool` on the server for players who unlocked it.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`ProfessionSkill<BlockingCharge>`](/mod/game-api/types/global-p/professionskill-t), [`IStrikeSuccessionModifier`](/mod/game-api/types/global-i-l/istrikesuccessionmodifier)
- **Derived types** [`BlockingCharge`](/mod/game-api/types/global-a-b/blockingcharge), [`BlockingCharge.Create`](/mod/game-api/types/global-a-b/blockingcharge-create)
- **Nested types** [`Create`](/mod/game-api/types/global-a-b/blockingcharge-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BlockingCharge()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-minimumeffectiveness" /><code>{"private float minimumEffectiveness"}</code> | Lowest hit effectiveness that counts (0.2 by default). |
| <Link id="m-modifiedskill" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupbasedskill">{"PickupBasedSkill"}</Link>{" modifiedSkill"}</code> | The pickup skill whose `StrikeSuccessionInput` gets the charge. |
| <Link id="m-validitems" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{"[] validItems"}</code> | Items that count as blocking with. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-istrikesuccessionmodifier-targetskill" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupbasedskill">{"PickupBasedSkill"}</Link>{" IStrikeSuccessionModifier.TargetSkill { get; }"}</code> | The skill whose strike succession this charges (`modifiedSkill`). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applycharge" /><code>{"void ApplyCharge("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" hitPickup, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" bestHit)"}</code> | If the hit is effective enough and the hit pickup is a valid item, adds a strike to the linked skill's input on each held item, and runs this skill if any counted. |
