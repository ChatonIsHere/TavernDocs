---
title: "EmberComposer"
description: "Skill that heats a held meltable item: while active it pours energy into the heat point nearest the hand until the whole item is hot, then fires the skill."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmberComposer

A **class** in `Root.Township`, the global namespace.

Skill that heats a held meltable item: while active it pours energy into the heat point nearest the hand until the whole item is hot, then fires the skill.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`PickupBasedSkill`](/mod/game-api/types/global-p/pickupbasedskill)
- **Derived types** [`EmberComposer.Create`](/mod/game-api/types/global-e-h/embercomposer-create)
- **Nested types** [`Create`](/mod/game-api/types/global-e-h/embercomposer-create), [`HeatPointCollectionHandler`](/mod/game-api/types/global-e-h/embercomposer-heatpointcollectionhandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmberComposer()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeeffects" /><code>{"private Dictionary<uint, "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> activeEffects"}</code> | <span className="api-desc">Fire effect per entity ID.</span> |
| <Link id="m-collectionmap" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{", "}<Link to="/mod/game-api/types/global-e-h/embercomposer-heatpointcollectionhandler">{"EmberComposer.HeatPointCollectionHandler"}</Link>{"> collectionMap"}</code> | <span className="api-desc">Heat handler per pickup.</span> |
| <Link id="m-energypersecond" /><code>{"private float energyPerSecond"}</code> | <span className="api-desc">Energy added per second. Defaults to 500.</span> |
| <Link id="m-fireeffectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" fireEffectDefinition"}</code> | <span className="api-desc">Pooled fire effect; must be an `EmberComposerFireEffect`.</span> |
| <Link id="m-maxtemperaturetoaccept" /><code>{"private float maxTemperatureToAccept"}</code> | <span className="api-desc">The skill won't start if any part is hotter than this. Defaults to 30.</span> |
| <Link id="m-targettemperature" /><code>{"private float targetTemperature"}</code> | <span className="api-desc">Temperature every heat point must reach. Defaults to 1000.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"override void Deregister("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">Turns off and removes the heat handler for the input's pickup.</span> |
| <Link id="m-register" /><code>{"override void Register("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">Creates a heat handler for the input's pickup.</span> |
| <Link id="m-seteffectactive" /><code>{"override void SetEffectActive("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isEffectActive)"}</code> | <span className="api-desc">Starts or stops heating. Refuses to start if any heat point is above `maxTemperatureToAccept`; stopping runs the skill.</span> |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | <span className="api-desc">True if the held pickup has a `MeltingModel` that triggers abilities.</span> |
| <Link id="m-releasetooleffect" /><code>{"protected override void ReleaseToolEffect("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Releases the fire effect on the entity.</span> |
| <Link id="m-requesttooleffect" /><code>{"protected override void RequestToolEffect("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Spawns the fire effect at the holding hand, pointed at and sized to the item's mesh.</span> |

## Used in

Members of other types that take, return or hold a `EmberComposer`:

<div className="api-used-in">

[`EmberComposer.HeatPointCollectionHandler.HeatPointCollectionHandler`](/mod/game-api/types/global-e-h/embercomposer-heatpointcollectionhandler#m-ctor).

</div>
