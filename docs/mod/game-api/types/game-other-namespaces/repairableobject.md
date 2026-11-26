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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RepairableObject(uint targetHash, "}<Link to="/mod/game-api/types/game-other-namespaces/repairableobjectbuildstate">{"RepairableObjectBuildState"}</Link>{" requirement)"}</code> | <span className="api-desc">Creates a `RepairableObject` from `targetHash` and `requirement`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-requirement" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/repairableobjectbuildstate">{"RepairableObjectBuildState"}</Link>{" requirement"}</code> | <span className="api-desc">Backing field for `Requirement`.</span> |
| <Link id="m-targethash" /><code>{"private uint targetHash"}</code> | <span className="api-desc">Backing field for `TargetHash`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-requirement-2" /><code><Link to="/mod/game-api/types/game-other-namespaces/repairableobjectbuildstate">{"RepairableObjectBuildState"}</Link>{" Requirement { get; }"}</code> | <span className="api-desc">The `RepairableObjectBuildState` the object must be in.</span> |
| <Link id="m-targethash-2" /><code>{"uint TargetHash { get; }"}</code> | <span className="api-desc">Hash of the repairable object this entry checks.</span> |

## Used in

Members of other types that take, return or hold a `RepairableObject`:

<div className="api-used-in">

[`RepairableObjectComparisonCondition.repairableObjects`](/mod/game-api/types/game-other-namespaces/repairableobjectcomparisoncondition#m-repairableobjects).

</div>
