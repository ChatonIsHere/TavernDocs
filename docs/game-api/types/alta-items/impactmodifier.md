---
title: "ImpactModifier"
description: "class ImpactModifier in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactModifier

A **class** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ImpactModifier()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-basepart" /><code>{"private "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" basePart"}</code> |
| <Link id="m-isforwholetool" /><code>{"private bool isForWholeTool"}</code> |
| <Link id="m-isonlywhenwielded" /><code>{"private bool isOnlyWhenWielded"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-maps" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{", "}<Link to="/game-api/types/alta-items/impactormap">{"ImpactorMap"}</Link>{"> maps"}</code> |
| <Link id="m-modifiers" /><code>{"private "}<Link to="/game-api/types/alta-items/impactmodifiercomponent">{"ImpactModifierComponent"}</Link>{"[] modifiers"}</code> |
| <Link id="m-trackedtool" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" trackedTool"}</code> |

</details>

## Events

| Member |
| --- |
| <Link id="m-onmodifiedhit" /><code>{"event Action<"}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{"> OnModifiedHit"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-deregisterslot" /><code>{"private void DeregisterSlot("}<Link to="/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{" point)"}</code> |
| <Link id="m-modifyhit" /><code>{"private void ModifyHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> |
| <Link id="m-onrootchanged" /><code>{"private void OnRootChanged("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart)"}</code> |
| <Link id="m-registerimpactormap" /><code>{"private void RegisterImpactorMap("}<Link to="/game-api/types/alta-items/impactormap">{"ImpactorMap"}</Link>{" map)"}</code> |
| <Link id="m-registerslot" /><code>{"private void RegisterSlot("}<Link to="/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{" point)"}</code> |

</details>
