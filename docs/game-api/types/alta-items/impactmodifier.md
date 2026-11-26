---
title: "ImpactModifier"
description: "Server: changes hits made by a crafted tool (damage multipliers, stat changes) by running a list of ImpactModifierComponents on them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactModifier

A **class** in `Root.Township`, `Alta.Impact`.

Server: changes hits made by a crafted tool (damage multipliers, stat changes) by running a list of `ImpactModifierComponent`s on them. Covers either the whole tool or the parts attached to its slots.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactModifier()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basepart" /><code>{"private "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" basePart"}</code> | The crafting part whose root or slots are watched. |
| <Link id="m-isforwholetool" /><code>{"private bool isForWholeTool"}</code> | When on, modifies every hit of the whole tool instead of only attached parts. |
| <Link id="m-isonlywhenwielded" /><code>{"private bool isOnlyWhenWielded"}</code> | When on, only modifies hits while the tool's pickup is held. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger; logs when a slot is registered twice. |
| <Link id="m-maps" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{", "}<Link to="/game-api/types/alta-items/impactormap">{"ImpactorMap"}</Link>{"> maps"}</code> | The `ImpactorMap` registered for each slot. |
| <Link id="m-modifiers" /><code>{"private "}<Link to="/game-api/types/alta-items/impactmodifiercomponent">{"ImpactModifierComponent"}</Link>{"[] modifiers"}</code> | The modifier assets run on each hit. |
| <Link id="m-trackedtool" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" trackedTool"}</code> | The root impact tool hooked when `isForWholeTool` is on. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onmodifiedhit" /><code>{"event Action<"}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{"> OnModifiedHit"}</code> | Raised after the modifiers have changed a hit. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: hooks the root tool, or each slot's attached part, plus any `ImpactorMap` on this object. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-deregisterslot" /><code>{"private void DeregisterSlot("}<Link to="/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{" point)"}</code> | Unhooks the impact generators of the part that left a slot. |
| <Link id="m-modifyhit" /><code>{"private void ModifyHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | Runs every modifier on the hit and raises `OnModifiedHit`, if wielding isn't required or the tool is held. |
| <Link id="m-onrootchanged" /><code>{"private void OnRootChanged("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart)"}</code> | Moves the hit hook to the new root's `ImpactTool`. |
| <Link id="m-registerimpactormap" /><code>{"private void RegisterImpactorMap("}<Link to="/game-api/types/alta-items/impactormap">{"ImpactorMap"}</Link>{" map)"}</code> | Hooks every impact generator in an `ImpactorMap` so its hits get modified. |
| <Link id="m-registerslot" /><code>{"private void RegisterSlot("}<Link to="/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{" point)"}</code> | Hooks the `ImpactorMap` of the part just attached to a slot. |

</details>
