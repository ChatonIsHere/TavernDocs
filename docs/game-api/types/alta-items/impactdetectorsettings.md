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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ImpactDetectorSettings.Create`](/game-api/types/alta-items/impactdetectorsettings-create)
- **Nested types** [`Create`](/game-api/types/alta-items/impactdetectorsettings-create), [`ImpactSettings`](/game-api/types/alta-items/impactdetectorsettings-impactsettings)
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactDetectorSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-affectsdurabilitywhenstruck" /><code>{"private bool affectsDurabilityWhenStruck"}</code> |  |
| <Link id="m-bad" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" bad"}</code> |  |
| <Link id="m-baseeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" baseEffect"}</code> |  |
| <Link id="m-critical" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" critical"}</code> |  |
| <Link id="m-criticalbase" /><code>{"private float criticalBase"}</code> |  |
| <Link id="m-good" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetectorsettings-impactsettings">{"ImpactDetectorSettings.ImpactSettings"}</Link>{" good"}</code> |  |
| <Link id="m-isreflected" /><code>{"private bool isReflected"}</code> |  |
| <Link id="m-maximumscale" /><code>{"private float maximumScale"}</code> |  |
| <Link id="m-minimumscale" /><code>{"private float minimumScale"}</code> |  |
| <Link id="m-provideexperiencewhenhit" /><code>{"private bool provideExperienceWhenHit"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-affectsdurabilitywhenstruck-2" /><code>{"bool AffectsDurabilityWhenStruck { get; }"}</code> | Whether hitting this wears down the tool. True by default. |
| <Link id="m-lasteffect" /><code><Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" LastEffect { get; private set; }"}</code> | The effect object spawned by the last `PlayEffects`, or null. |
| <Link id="m-provideexperiencewhenhit-2" /><code>{"bool ProvideExperienceWhenHit { get; }"}</code> | Whether hitting this can give experience. True by default. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-playeffects" /><code>{"void PlayEffects("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit)"}</code> | Plays the critical, good or bad sound and effect for a hit, scaled by how effective it was. Without a scale, skips hits with no effect. |
| <Link id="m-playeffects-2" /><code>{"void PlayEffects("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit, float scale)"}</code> | Plays the critical, good or bad sound and effect for a hit, scaled by how effective it was. Without a scale, skips hits with no effect. |

## Used in

Members of other types that take, return or hold a `ImpactDetectorSettings`:

[`ForgedModel<TB, TA>.coldEffect`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-coldeffect), [`ForgedModel<TB, TA>.doneEffect`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-doneeffect), [`ForgedModel<TB, TA>.hotEffect`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-hoteffect), [`BoulderDefinition.impactSettings`](/game-api/types/alta-items/boulderdefinition#m-impactsettings), [`BoulderDefinition.ImpactSettings`](/game-api/types/alta-items/boulderdefinition#m-impactsettings-2), [`ImpactDetector.currentSettings`](/game-api/types/alta-items/impactdetector#m-currentsettings), [`ImpactDetector.Settings`](/game-api/types/alta-items/impactdetector#m-settings), [`SparkSecondaryDetector.hitSettings`](/game-api/types/alta-items/sparksecondarydetector#m-hitsettings), [`TreeSpecies.doneEffect`](/game-api/types/alta-crafting/treespecies#m-doneeffect), [`TreeSpecies.DoneEffect`](/game-api/types/alta-crafting/treespecies#m-doneeffect-2), [`TreeSpecies.hitEffect`](/game-api/types/alta-crafting/treespecies#m-hiteffect), [`TreeSpecies.HitEffect`](/game-api/types/alta-crafting/treespecies#m-hiteffect-2).
