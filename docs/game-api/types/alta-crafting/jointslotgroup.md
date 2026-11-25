---
title: "JointSlotGroup"
description: "class JointSlotGroup in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JointSlotGroup

A **class** in `Root.Township`, `Alta.Crafting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`, [`IJointSlotComponent`](/game-api/types/alta-crafting/ijointslotcomponent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"JointSlotGroup()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-additionaltargets" /><code>{"private Transform[] additionalTargets"}</code> |
| <Link id="m-maximum" /><code>{"private int maximum"}</code> |
| <Link id="m-targets" /><code>{"private MonoBehaviour[] targets"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-hasspace" /><code>{"bool HasSpace { get; }"}</code> |
| <Link id="m-isused" /><code>{"bool IsUsed { get; }"}</code> |
| <Link id="m-used" /><code>{"HashSet<"}<Link to="/game-api/types/alta-crafting/ijointslotcomponent">{"IJointSlotComponent"}</Link>{"> Used { get; }"}</code> |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-alta-crafting-ijointslotcomponent-isdestroyed" /><code>{"private bool Alta.Crafting.IJointSlotComponent.IsDestroyed { get; }"}</code> |

</details>

## Events

| Member |
| --- |
| <Link id="m-isavailable" /><code>{"event "}<Link to="/game-api/types/alta-crafting/isjointavailable">{"IsJointAvailable"}</Link>{" isAvailable"}</code> |
| <Link id="m-usedchanged" /><code>{"event Action<"}<Link to="/game-api/types/alta-crafting/ijointslotcomponent">{"IJointSlotComponent"}</Link>{"> UsedChanged"}</code> |

## Methods

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-childchanged" /><code>{"private void ChildChanged("}<Link to="/game-api/types/alta-crafting/ijointslotcomponent">{"IJointSlotComponent"}</Link>{" child)"}</code> |
| <Link id="m-isavailable-2" /><code>{"private void IsAvailable(ref bool isAvailable)"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-process" /><code>{"private void Process(MonoBehaviour[] targets)"}</code> |
| <Link id="m-process-2" /><code>{"private void Process(Transform[] targets)"}</code> |

</details>
