---
title: "CraftableImpactDetectorBase"
description: "abstract class CraftableImpactDetectorBase in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CraftableImpactDetectorBase

An **abstract class** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`ImpactDetector`](/game-api/types/alta-items/impactdetector)
- **Derived types** [`ChiselingTool`](/game-api/types/alta-crafting/chiselingtool), [`CraftableImpactDetector`](/game-api/types/alta-items/craftableimpactdetector)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected CraftableImpactDetectorBase()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-craftingpart" /><code>{"private "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-registeredtool" /><code><Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" RegisteredTool { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-rootset" /><code>{"private void RootSet("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" root)"}</code> |  |
| <Link id="m-updatetool" /><code>{"protected virtual void UpdateTool("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" registeringTool)"}</code> |  |
| <Link id="m-validatecollision" /><code>{"private void ValidateCollision(Collision collision)"}</code> |  |
| <Link id="m-validatecontatpoint" /><code>{"protected abstract bool ValidateContatPoint(ContactPoint point)"}</code> |  |
