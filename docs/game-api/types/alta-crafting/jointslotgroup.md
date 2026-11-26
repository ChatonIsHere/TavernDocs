---
title: "JointSlotGroup"
description: "Groups several joint slots so only a set number of them (default 1) can be used at once."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JointSlotGroup

A **class** in `Root.Township`, `Alta.Crafting`.

Groups several joint slots so only a set number of them (default 1) can be used at once. It counts as used when any child slot is.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`, [`IJointSlotComponent`](/game-api/types/alta-crafting/ijointslotcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JointSlotGroup()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-additionaltargets" /><code>{"private Transform[] additionalTargets"}</code> | Extra transforms whose joint slots belong to the group. `Awake` does not process them in this build. |
| <Link id="m-maximum" /><code>{"private int maximum"}</code> | How many child slots can be used at once. |
| <Link id="m-targets" /><code>{"private MonoBehaviour[] targets"}</code> | Child joint slot components in the group. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasspace" /><code>{"bool HasSpace { get; }"}</code> | True while fewer children are used than the maximum. |
| <Link id="m-isused" /><code>{"bool IsUsed { get; }"}</code> | True if any child slot is used. |
| <Link id="m-used" /><code>{"HashSet<"}<Link to="/game-api/types/alta-crafting/ijointslotcomponent">{"IJointSlotComponent"}</Link>{"> Used { get; }"}</code> | The child slots currently in use. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-crafting-ijointslotcomponent-isdestroyed" /><code>{"private bool Alta.Crafting.IJointSlotComponent.IsDestroyed { get; }"}</code> | True once this component has been destroyed. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-isavailable" /><code>{"event "}<Link to="/game-api/types/alta-crafting/isjointavailable">{"IsJointAvailable"}</Link>{" isAvailable"}</code> | Raised to ask whether the group is available; children route their checks through it. |
| <Link id="m-usedchanged" /><code>{"event Action<"}<Link to="/game-api/types/alta-crafting/ijointslotcomponent">{"IJointSlotComponent"}</Link>{"> UsedChanged"}</code> | Raised when the set of used children changes. |

## Methods

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the child slots in `targets` and raises `UsedChanged` if any start used. |
| <Link id="m-childchanged" /><code>{"private void ChildChanged("}<Link to="/game-api/types/alta-crafting/ijointslotcomponent">{"IJointSlotComponent"}</Link>{" child)"}</code> | Adds or removes a child from `Used` when its used state changes, and raises `UsedChanged`. |
| <Link id="m-isavailable-2" /><code>{"private void IsAvailable(ref bool isAvailable)"}</code> | Availability check for each child: asks this group's own listeners while unused, then requires space. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: renames the object to show the group's maximum. |
| <Link id="m-process" /><code>{"private void Process(MonoBehaviour[] targets)"}</code> | Hooks each target that is a joint slot component (or has one) into this group. |
| <Link id="m-process-2" /><code>{"private void Process(Transform[] targets)"}</code> | Hooks each target that is a joint slot component (or has one) into this group. |

</details>
