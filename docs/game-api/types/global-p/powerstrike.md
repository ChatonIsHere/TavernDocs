---
title: "PowerStrike"
description: "Charged skill asset: a strike with a tool in a given path that is effective enough deals extra damage."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PowerStrike

A **class** in `Root.Township`, no namespace.

Charged skill asset: a strike with a tool in a given path that is effective enough deals extra damage. Works with strike succession input.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PickupBasedSkill`](/game-api/types/global-p/pickupbasedskill), [`IStrikeSuccessionModifier`](/game-api/types/global-i-l/istrikesuccessionmodifier)
- **Derived types** [`PowerStrike.Create`](/game-api/types/global-p/powerstrike-create)
- **Nested types** [`Create`](/game-api/types/global-p/powerstrike-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PowerStrike()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-damagemultiplier" /><code>{"private float damageMultiplier"}</code> | Damage multiplier on the strike (default 1.5). |
| <Link id="m-minimumeficiency" /><code>{"private float minimumEficiency"}</code> | Lowest hit effectiveness that counts (default 0.7). |
| <Link id="m-path" /><code>{"private "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path"}</code> | Backing field for `Path`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-path-2" /><code><Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" Path { get; }"}</code> | The progression path whose hits count. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-istrikesuccessionmodifier-targetskill" /><code>{"private "}<Link to="/game-api/types/global-p/pickupbasedskill">{"PickupBasedSkill"}</Link>{" IStrikeSuccessionModifier.TargetSkill { get; }"}</code> | Returns this skill. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-executewithhit" /><code>{"override void ExecuteWithHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit = true)"}</code> | Multiplies the hit's damage by `damageMultiplier`, then runs the base skill. |
| <Link id="m-validateexecutionhit" /><code>{"override bool ValidateExecutionHit("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | True if the hit is in `path` and its effectiveness is at least `minimumEficiency`. |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | True if the held item is a tool. |
