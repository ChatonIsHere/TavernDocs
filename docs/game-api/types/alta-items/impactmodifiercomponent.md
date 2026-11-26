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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ImpactModifierMultiplier`](/game-api/types/alta-items/impactmodifiermultiplier), [`ImpactModifierStatAffect`](/game-api/types/alta-items/impactmodifierstataffect)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected ImpactModifierComponent()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaulteffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" defaultEffect"}</code> | Backing field for `Effect`, the pooled effect for hits this modifier applies to. |
| <Link id="m-defaultsound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" defaultSound"}</code> | Backing field for `SoundEffect`, the sound set for hits this modifier applies to. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-effect" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" Effect { get; }"}</code> | The pooled effect spawned on the hit item when this modifier applies. |
| <Link id="m-impactmodifiervaluemultiplier" /><code>{"float ImpactModifierValueMultiplier { get; set; }"}</code> | Scales the modifier's strength. `ImpactTool` sets it per hit from the item's physical material and impactor parameters. |
| <Link id="m-soundeffect" /><code><Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" SoundEffect { get; }"}</code> | The default sound set for this modifier. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modifyhit" /><code>{"abstract void ModifyHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | Applies the modifier to a tool hit. |

## Used in

Members of other types that take, return or hold a `ImpactModifierComponent`:

[`ImpactModifier.modifiers`](/game-api/types/alta-items/impactmodifier#m-modifiers), [`ImpactorStatParameters.impactModifier`](/game-api/types/global-i-l/impactorstatparameters#m-impactmodifier), [`ImpactorStatParameters.ImpactModifier`](/game-api/types/global-i-l/impactorstatparameters#m-impactmodifier-2).
