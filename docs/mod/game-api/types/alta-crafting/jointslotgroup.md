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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`, [`IJointSlotComponent`](/mod/game-api/types/alta-crafting/ijointslotcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JointSlotGroup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-additionaltargets" /><code>{"private Transform[] additionalTargets"}</code> | <span className="api-desc">Extra transforms whose joint slots belong to the group. `Awake` does not process them in this build.</span> |
| <Link id="m-maximum" /><code>{"private int maximum"}</code> | <span className="api-desc">How many child slots can be used at once.</span> |
| <Link id="m-targets" /><code>{"private MonoBehaviour[] targets"}</code> | <span className="api-desc">Child joint slot components in the group.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasspace" /><code>{"bool HasSpace { get; }"}</code> | <span className="api-desc">True while fewer children are used than the maximum.</span> |
| <Link id="m-isused" /><code>{"bool IsUsed { get; }"}</code> | <span className="api-desc">True if any child slot is used.</span> |
| <Link id="m-used" /><code>{"HashSet<"}<Link to="/mod/game-api/types/alta-crafting/ijointslotcomponent">{"IJointSlotComponent"}</Link>{"> Used { get; }"}</code> | <span className="api-desc">The child slots currently in use.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-crafting-ijointslotcomponent-isdestroyed" /><code>{"private bool Alta.Crafting.IJointSlotComponent.IsDestroyed { get; }"}</code> | <span className="api-desc">True once this component has been destroyed.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-isavailable" /><code>{"event "}<Link to="/mod/game-api/types/alta-crafting/isjointavailable">{"IsJointAvailable"}</Link>{" isAvailable"}</code> | <span className="api-desc">Raised to ask whether the group is available; children route their checks through it.</span> |
| <Link id="m-usedchanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-crafting/ijointslotcomponent">{"IJointSlotComponent"}</Link>{"> UsedChanged"}</code> | <span className="api-desc">Raised when the set of used children changes.</span> |

## Methods

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the child slots in `targets` and raises `UsedChanged` if any start used.</span> |
| <Link id="m-childchanged" /><code>{"private void ChildChanged("}<Link to="/mod/game-api/types/alta-crafting/ijointslotcomponent">{"IJointSlotComponent"}</Link>{" child)"}</code> | <span className="api-desc">Adds or removes a child from `Used` when its used state changes, and raises `UsedChanged`.</span> |
| <Link id="m-isavailable-2" /><code>{"private void IsAvailable(ref bool isAvailable)"}</code> | <span className="api-desc">Availability check for each child: asks this group's own listeners while unused, then requires space.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: renames the object to show the group's maximum.</span> |
| <Link id="m-process" /><code>{"private void Process(MonoBehaviour[] targets)"}</code> | <span className="api-desc">Hooks each target that is a joint slot component (or has one) into this group.</span> |
| <Link id="m-process-2" /><code>{"private void Process(Transform[] targets)"}</code> | <span className="api-desc">Hooks each target that is a joint slot component (or has one) into this group.</span> |

</details>
