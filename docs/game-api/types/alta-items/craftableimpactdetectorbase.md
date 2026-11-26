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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`ImpactDetector`](/game-api/types/alta-items/impactdetector)
- **Derived types** [`ChiselingTool`](/game-api/types/alta-crafting/chiselingtool), [`CraftableImpactDetector`](/game-api/types/alta-items/craftableimpactdetector)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected CraftableImpactDetectorBase()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-craftingpart" /><code>{"private "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart"}</code> | The crafting part in the parents whose root tool is tracked. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-registeredtool" /><code><Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" RegisteredTool { get; private set; }"}</code> | The impact tool whose collisions are being listened to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Follows the crafting part's root tool, or the `ImpactTool` on this object if there's no part. |
| <Link id="m-updatetool" /><code>{"protected virtual void UpdateTool("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" registeringTool)"}</code> | Moves the collision hook from the old tool to the new one. |
| <Link id="m-validatecontatpoint" /><code>{"protected abstract bool ValidateContatPoint(ContactPoint point)"}</code> | Subclasses return whether a contact point belongs to this detector. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops listening to the tool's collisions. |
| <Link id="m-rootset" /><code>{"private void RootSet("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" root)"}</code> | Called when the part's root changes; switches to the new root's impact tool. |
| <Link id="m-validatecollision" /><code>{"private void ValidateCollision(Collision collision)"}</code> | Passes the collision on to `OnCollisionEnter` if any contact point passes `ValidateContatPoint`. |

</details>
