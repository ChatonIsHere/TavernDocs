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
| <Link id="m-ctor" /><code>{"Part()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Backing field for `Position`. |
| <Link id="m-prefab" /><code>{"private GameObject prefab"}</code> | Backing field for `Prefab`. |
| <Link id="m-rotation" /><code>{"private Vector3 rotation"}</code> | Backing field for `Rotation`. |
| <Link id="m-rule" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/rule">{"Rule"}</Link>{" rule"}</code> | Backing field for `Rule`. |
| <Link id="m-scale" /><code>{"private Vector3 scale"}</code> | Backing field for `Scale`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> | Local offset of the prefab inside its cell, rotated with the placement. |
| <Link id="m-prefab-2" /><code>{"GameObject Prefab { get; }"}</code> | Prefab that `Constructor` instantiates where the rule fits. |
| <Link id="m-rotation-2" /><code>{"Vector3 Rotation { get; }"}</code> | Extra Euler rotation applied on top of the placement's 90 degree turn. |
| <Link id="m-rule-2" /><code><Link to="/mod/game-api/types/alta-world-generation/rule">{"Rule"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/rule">{"Rule"}</Link>{" { get; }"}</code> | Grid rule that decides where this part can be placed. |
| <Link id="m-scale-2" /><code>{"Vector3 Scale { get; }"}</code> | Local scale given to each instantiated prefab. |

## Used in

Members of other types that take, return or hold a `Part`:

[`OptionSet.Evaluate`](/mod/game-api/types/alta-world-generation/optionset#m-evaluate), [`PartChance.part`](/mod/game-api/types/alta-world-generation/partchance#m-part), [`PartChance.Part`](/mod/game-api/types/alta-world-generation/partchance#m-part-2), [`RuleOptionSet.Evaluate`](/mod/game-api/types/alta-world-generation/ruleoptionset#m-evaluate).
