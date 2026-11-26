---
title: "PowerStrike"
description: "Charged skill asset: a strike with a tool in a given path that is effective enough deals extra damage."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PowerStrike

A **class** in `Root.Township`, the global namespace.

Charged skill asset: a strike with a tool in a given path that is effective enough deals extra damage. Works with strike succession input.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`PickupBasedSkill`](/mod/game-api/types/global-p/pickupbasedskill), [`IStrikeSuccessionModifier`](/mod/game-api/types/global-i-l/istrikesuccessionmodifier)
- **Derived types** [`PowerStrike.Create`](/mod/game-api/types/global-p/powerstrike-create)
- **Nested types** [`Create`](/mod/game-api/types/global-p/powerstrike-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PowerStrike()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-damagemultiplier" /><code>{"private float damageMultiplier"}</code> | <span className="api-desc">Damage multiplier on the strike (default 1.5).</span> |
| <Link id="m-minimumeficiency" /><code>{"private float minimumEficiency"}</code> | <span className="api-desc">Lowest hit effectiveness that counts (default 0.7).</span> |
| <Link id="m-path" /><code>{"private "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path"}</code> | <span className="api-desc">Backing field for `Path`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-path-2" /><code><Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" Path { get; }"}</code> | <span className="api-desc">The progression path whose hits count.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-istrikesuccessionmodifier-targetskill" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupbasedskill">{"PickupBasedSkill"}</Link>{" IStrikeSuccessionModifier.TargetSkill { get; }"}</code> | <span className="api-desc">Returns this skill.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-executewithhit" /><code>{"override void ExecuteWithHit("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit = true)"}</code> | <span className="api-desc">Multiplies the hit's damage by `damageMultiplier`, then runs the base skill.</span> |
| <Link id="m-validateexecutionhit" /><code>{"override bool ValidateExecutionHit("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | <span className="api-desc">True if the hit is in `path` and its effectiveness is at least `minimumEficiency`.</span> |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | <span className="api-desc">True if the held item is a tool.</span> |
