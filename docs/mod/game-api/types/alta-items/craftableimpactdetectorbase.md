---
title: "CraftableImpactDetectorBase"
description: "Base for an impact detector on a crafted part that listens to the collisions of whichever ImpactTool the part's root has, and only counts contacts a..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CraftableImpactDetectorBase

An **abstract class** in `Root.Township`, `Alta.Impact`.

Base for an impact detector on a crafted part that listens to the collisions of whichever `ImpactTool` the part's root has, and only counts contacts a subclass accepts.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`ImpactDetector`](/mod/game-api/types/alta-items/impactdetector)
- **Derived types** [`ChiselingTool`](/mod/game-api/types/alta-crafting/chiselingtool), [`CraftableImpactDetector`](/mod/game-api/types/alta-items/craftableimpactdetector)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected CraftableImpactDetectorBase()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-craftingpart" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart"}</code> | <span className="api-desc">The crafting part in the parents whose root tool is tracked.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-registeredtool" /><code><Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" RegisteredTool { get; private set; }"}</code> | <span className="api-desc">The impact tool whose collisions are being listened to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Follows the crafting part's root tool, or the `ImpactTool` on this object if there's no part.</span> |
| <Link id="m-updatetool" /><code>{"protected virtual void UpdateTool("}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" registeringTool)"}</code> | <span className="api-desc">Moves the collision hook from the old tool to the new one.</span> |
| <Link id="m-validatecontatpoint" /><code>{"protected abstract bool ValidateContatPoint(ContactPoint point)"}</code> | <span className="api-desc">Subclasses return whether a contact point belongs to this detector.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops listening to the tool's collisions.</span> |
| <Link id="m-rootset" /><code>{"private void RootSet("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" root)"}</code> | <span className="api-desc">Called when the part's root changes; switches to the new root's impact tool.</span> |
| <Link id="m-validatecollision" /><code>{"private void ValidateCollision(Collision collision)"}</code> | <span className="api-desc">Passes the collision on to `OnCollisionEnter` if any contact point passes `ValidateContatPoint`.</span> |

</details>
