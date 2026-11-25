---
title: "PowerStrike"
description: "class PowerStrike in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PowerStrike

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PickupBasedSkill`](/game-api/types/global-p/pickupbasedskill), [`IStrikeSuccessionModifier`](/game-api/types/global-i-l/istrikesuccessionmodifier)
- **Derived types** [`PowerStrike.Create`](/game-api/types/global-p/powerstrike-create)
- **Nested types** [`Create`](/game-api/types/global-p/powerstrike-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PowerStrike()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-damagemultiplier" /><code>{"private float damageMultiplier"}</code> |  |
| <Link id="m-minimumeficiency" /><code>{"private float minimumEficiency"}</code> |  |
| <Link id="m-path" /><code>{"private "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-path-2" /><code><Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" Path { get; }"}</code> |  |
| <Link id="m-istrikesuccessionmodifier-targetskill" /><code>{"private "}<Link to="/game-api/types/global-p/pickupbasedskill">{"PickupBasedSkill"}</Link>{" IStrikeSuccessionModifier.TargetSkill { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-executewithhit" /><code>{"override void ExecuteWithHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit = true)"}</code> |  |
| <Link id="m-validateexecutionhit" /><code>{"override bool ValidateExecutionHit("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> |  |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> |  |
