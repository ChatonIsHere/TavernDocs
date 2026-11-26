---
title: "ImpactModifierComponent"
description: "Base for a ScriptableObject that changes a tool hit, such as applying a stat change, with a default effect and sound."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactModifierComponent

An **abstract class** in `Root.Township`, `Alta.Impact`.

Base for a ScriptableObject that changes a tool hit, such as applying a stat change, with a default effect and sound.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ImpactModifierMultiplier`](/mod/game-api/types/alta-items/impactmodifiermultiplier), [`ImpactModifierStatAffect`](/mod/game-api/types/alta-items/impactmodifierstataffect)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ImpactModifierComponent()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaulteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" defaultEffect"}</code> | Backing field for `Effect`, the pooled effect for hits this modifier applies to. |
| <Link id="m-defaultsound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" defaultSound"}</code> | Backing field for `SoundEffect`, the sound set for hits this modifier applies to. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-effect" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" Effect { get; }"}</code> | The pooled effect spawned on the hit item when this modifier applies. |
| <Link id="m-impactmodifiervaluemultiplier" /><code>{"float ImpactModifierValueMultiplier { get; set; }"}</code> | Scales the modifier's strength. `ImpactTool` sets it per hit from the item's physical material and impactor parameters. |
| <Link id="m-soundeffect" /><code><Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" SoundEffect { get; }"}</code> | The default sound set for this modifier. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modifyhit" /><code>{"abstract void ModifyHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | Applies the modifier to a tool hit. |

## Used in

Members of other types that take, return or hold a `ImpactModifierComponent`:

[`ImpactModifier.modifiers`](/mod/game-api/types/alta-items/impactmodifier#m-modifiers), [`ImpactorStatParameters.impactModifier`](/mod/game-api/types/global-i-l/impactorstatparameters#m-impactmodifier), [`ImpactorStatParameters.ImpactModifier`](/mod/game-api/types/global-i-l/impactorstatparameters#m-impactmodifier-2).
