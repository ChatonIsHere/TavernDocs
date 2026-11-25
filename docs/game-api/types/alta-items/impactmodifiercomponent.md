---
title: "ImpactModifierComponent"
description: "abstract class ImpactModifierComponent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactModifierComponent

An **abstract class** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ImpactModifierMultiplier`](/game-api/types/alta-items/impactmodifiermultiplier), [`ImpactModifierStatAffect`](/game-api/types/alta-items/impactmodifierstataffect)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ImpactModifierComponent()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-defaulteffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" defaultEffect"}</code> |  |
| <Link id="m-defaultsound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" defaultSound"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-effect" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" Effect { get; }"}</code> |  |
| <Link id="m-impactmodifiervaluemultiplier" /><code>{"float ImpactModifierValueMultiplier { get; set; }"}</code> |  |
| <Link id="m-soundeffect" /><code><Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" SoundEffect { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modifyhit" /><code>{"abstract void ModifyHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ImpactModifierComponent`:

[`ImpactModifier.modifiers`](/game-api/types/alta-items/impactmodifier#m-modifiers), [`ImpactorStatParameters.impactModifier`](/game-api/types/global-i-l/impactorstatparameters#m-impactmodifier), [`ImpactorStatParameters.ImpactModifier`](/game-api/types/global-i-l/impactorstatparameters#m-impactmodifier-2).
