---
title: "Part"
description: "A prefab piece for the PAGaC procedural building generator, with the rule that says where it can go and its offset inside a grid cell."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Part

A **class** in `Root.Township`, `Alta.PAGaC`.

A prefab piece for the PAGaC procedural building generator, with the rule that says where it can go and its offset inside a grid cell. A ScriptableObject asset.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/mod/game-api/types/assembly-other/generalvalue)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Part()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Backing field for `Position`.</span> |
| <Link id="m-prefab" /><code>{"private GameObject prefab"}</code> | <span className="api-desc">Backing field for `Prefab`.</span> |
| <Link id="m-rotation" /><code>{"private Vector3 rotation"}</code> | <span className="api-desc">Backing field for `Rotation`.</span> |
| <Link id="m-rule" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/rule">{"Rule"}</Link>{" rule"}</code> | <span className="api-desc">Backing field for `Rule`.</span> |
| <Link id="m-scale" /><code>{"private Vector3 scale"}</code> | <span className="api-desc">Backing field for `Scale`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> | <span className="api-desc">Local offset of the prefab inside its cell, rotated with the placement.</span> |
| <Link id="m-prefab-2" /><code>{"GameObject Prefab { get; }"}</code> | <span className="api-desc">Prefab that `Constructor` instantiates where the rule fits.</span> |
| <Link id="m-rotation-2" /><code>{"Vector3 Rotation { get; }"}</code> | <span className="api-desc">Extra Euler rotation applied on top of the placement's 90 degree turn.</span> |
| <Link id="m-rule-2" /><code><Link to="/mod/game-api/types/alta-world-generation/rule">{"Rule"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/rule">{"Rule"}</Link>{" { get; }"}</code> | <span className="api-desc">Grid rule that decides where this part can be placed.</span> |
| <Link id="m-scale-2" /><code>{"Vector3 Scale { get; }"}</code> | <span className="api-desc">Local scale given to each instantiated prefab.</span> |

## Used in

Members of other types that take, return or hold a `Part`:

<div className="api-used-in">

[`OptionSet.Evaluate`](/mod/game-api/types/alta-world-generation/optionset#m-evaluate), [`PartChance.part`](/mod/game-api/types/alta-world-generation/partchance#m-part), [`PartChance.Part`](/mod/game-api/types/alta-world-generation/partchance#m-part-2), [`RuleOptionSet.Evaluate`](/mod/game-api/types/alta-world-generation/ruleoptionset#m-evaluate).

</div>
