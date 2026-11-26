---
title: "RepairableObject"
description: "A game-condition entry naming a repairable object by prefab hash and the build state it must reach."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RepairableObject

A **struct** in `Root.Township`, `Features.Gameplay.GameConditions`.

A game-condition entry naming a repairable object by prefab hash and the build state it must reach.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RepairableObject(uint targetHash, "}<Link to="/game-api/types/game-other-namespaces/repairableobjectbuildstate">{"RepairableObjectBuildState"}</Link>{" requirement)"}</code> | Creates a `RepairableObject` from `targetHash` and `requirement`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-requirement" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/repairableobjectbuildstate">{"RepairableObjectBuildState"}</Link>{" requirement"}</code> | Backing field for `Requirement`. |
| <Link id="m-targethash" /><code>{"private uint targetHash"}</code> | Backing field for `TargetHash`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-requirement-2" /><code><Link to="/game-api/types/game-other-namespaces/repairableobjectbuildstate">{"RepairableObjectBuildState"}</Link>{" Requirement { get; }"}</code> | The `RepairableObjectBuildState` the object must be in. |
| <Link id="m-targethash-2" /><code>{"uint TargetHash { get; }"}</code> | Hash of the repairable object this entry checks. |

## Used in

Members of other types that take, return or hold a `RepairableObject`:

[`RepairableObjectComparisonCondition.repairableObjects`](/game-api/types/game-other-namespaces/repairableobjectcomparisoncondition#m-repairableobjects).
