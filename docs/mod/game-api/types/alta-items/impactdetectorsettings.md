---
title: "ImpactDetectorSettings"
description: "Asset for how an impact detector reacts to hits: the sounds and effects for critical, good and bad hits, and whether hits wear the tool or give experience."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactDetectorSettings

A **class** in `Root.Township`, `Alta.Impact`.

Asset for how an impact detector reacts to hits: the sounds and effects for critical, good and bad hits, and whether hits wear the tool or give experience.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ImpactDetectorSettings.Create`](/mod/game-api/types/alta-items/impactdetectorsettings-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-items/impactdetectorsettings-create), [`ImpactSettings`](/mod/game-api/types/alta-items/impactdetectorsettings-impactsettings)
- **Documented in** [Impacts and hit detection](/mod/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactDetectorSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affectsdurabilitywhenstruck" /><code>{"private bool affectsDurabilityWhenStruck"}</code> | <span className="api-desc">Backing field for `AffectsDurabilityWhenStruck`. Defaults to true.</span> |
| <Link id="m-bad" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" bad"}</code> | <span className="api-desc">Effect and sound played when the hit is not valid.</span> |
| <Link id="m-baseeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" baseEffect"}</code> | <span className="api-desc">Pooled effect spawned at every valid hit, facing out of the surface, before the good or critical effect.</span> |
| <Link id="m-critical" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" critical"}</code> | <span className="api-desc">Effect and sound played when a valid hit's effectiveness is above `criticalBase`.</span> |
| <Link id="m-criticalbase" /><code>{"private float criticalBase"}</code> | <span className="api-desc">Effectiveness a valid hit must exceed to use the `critical` settings instead of `good`. Defaults to 1.</span> |
| <Link id="m-good" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" good"}</code> | <span className="api-desc">Effect and sound played for a valid hit at or below `criticalBase` effectiveness.</span> |
| <Link id="m-isreflected" /><code>{"private bool isReflected"}</code> | <span className="api-desc">When true, the hit effect faces along the hit direction reflected off the surface instead of back along it.</span> |
| <Link id="m-maximumscale" /><code>{"private float maximumScale"}</code> | <span className="api-desc">Effect scale at full effectiveness. The spawned effect scales between `minimumScale` and this.</span> |
| <Link id="m-minimumscale" /><code>{"private float minimumScale"}</code> | <span className="api-desc">Effect scale at zero effectiveness.</span> |
| <Link id="m-provideexperiencewhenhit" /><code>{"private bool provideExperienceWhenHit"}</code> | <span className="api-desc">Backing field for `ProvideExperienceWhenHit`. Defaults to true.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-affectsdurabilitywhenstruck-2" /><code>{"bool AffectsDurabilityWhenStruck { get; }"}</code> | <span className="api-desc">Whether hitting this wears down the tool. True by default.</span> |
| <Link id="m-lasteffect" /><code><Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" LastEffect { get; private set; }"}</code> | <span className="api-desc">The effect object spawned by the last `PlayEffects`, or null.</span> |
| <Link id="m-provideexperiencewhenhit-2" /><code>{"bool ProvideExperienceWhenHit { get; }"}</code> | <span className="api-desc">Whether hitting this can give experience. True by default.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-playeffects" /><code>{"void PlayEffects("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit)"}</code> | <span className="api-desc">Plays the critical, good or bad sound and effect for a hit, scaled by how effective it was. Without a scale, skips hits with no effect.</span> |
| <Link id="m-playeffects-2" /><code>{"void PlayEffects("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit, float scale)"}</code> | <span className="api-desc">Plays the critical, good or bad sound and effect for a hit, scaled by how effective it was. Without a scale, skips hits with no effect.</span> |

## Used in

Members of other types that take, return or hold a `ImpactDetectorSettings`:

<div className="api-used-in">

[`ForgedModel<TB, TA>.coldEffect`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-coldeffect), [`ForgedModel<TB, TA>.doneEffect`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-doneeffect), [`ForgedModel<TB, TA>.hotEffect`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-hoteffect), [`BoulderDefinition.impactSettings`](/mod/game-api/types/alta-items/boulderdefinition#m-impactsettings), [`BoulderDefinition.ImpactSettings`](/mod/game-api/types/alta-items/boulderdefinition#m-impactsettings-2), [`ImpactDetector.currentSettings`](/mod/game-api/types/alta-items/impactdetector#m-currentsettings), [`ImpactDetector.Settings`](/mod/game-api/types/alta-items/impactdetector#m-settings), [`SparkSecondaryDetector.hitSettings`](/mod/game-api/types/alta-items/sparksecondarydetector#m-hitsettings), [`TreeSpecies.doneEffect`](/mod/game-api/types/alta-crafting/treespecies#m-doneeffect), [`TreeSpecies.DoneEffect`](/mod/game-api/types/alta-crafting/treespecies#m-doneeffect-2), [`TreeSpecies.hitEffect`](/mod/game-api/types/alta-crafting/treespecies#m-hiteffect), [`TreeSpecies.HitEffect`](/mod/game-api/types/alta-crafting/treespecies#m-hiteffect-2).

</div>
