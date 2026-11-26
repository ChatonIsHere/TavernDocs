---
title: "EmberComposer"
description: "Skill that heats a held meltable item: while active it pours energy into the heat point nearest the hand until the whole item is hot, then fires the skill."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmberComposer

A **class** in `Root.Township`, no namespace.

Skill that heats a held meltable item: while active it pours energy into the heat point nearest the hand until the whole item is hot, then fires the skill.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`PickupBasedSkill`](/game-api/types/global-p/pickupbasedskill)
- **Derived types** [`EmberComposer.Create`](/game-api/types/global-e-h/embercomposer-create)
- **Nested types** [`Create`](/game-api/types/global-e-h/embercomposer-create), [`HeatPointCollectionHandler`](/game-api/types/global-e-h/embercomposer-heatpointcollectionhandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmberComposer()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeeffects" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> activeEffects"}</code> | Fire effect per entity ID. |
| <Link id="m-collectionmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{", "}<Link to="/game-api/types/global-e-h/embercomposer-heatpointcollectionhandler">{"EmberComposer.HeatPointCollectionHandler"}</Link>{"> collectionMap"}</code> | Heat handler per pickup. |
| <Link id="m-energypersecond" /><code>{"private float energyPerSecond"}</code> | Energy added per second. Defaults to 500. |
| <Link id="m-fireeffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" fireEffectDefinition"}</code> | Pooled fire effect; must be an `EmberComposerFireEffect`. |
| <Link id="m-maxtemperaturetoaccept" /><code>{"private float maxTemperatureToAccept"}</code> | The skill won't start if any part is hotter than this. Defaults to 30. |
| <Link id="m-targettemperature" /><code>{"private float targetTemperature"}</code> | Temperature every heat point must reach. Defaults to 1000. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"override void Deregister("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Turns off and removes the heat handler for the input's pickup. |
| <Link id="m-register" /><code>{"override void Register("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Creates a heat handler for the input's pickup. |
| <Link id="m-seteffectactive" /><code>{"override void SetEffectActive("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isEffectActive)"}</code> | Starts or stops heating. Refuses to start if any heat point is above `maxTemperatureToAccept`; stopping runs the skill. |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | True if the held pickup has a `MeltingModel` that triggers abilities. |
| <Link id="m-releasetooleffect" /><code>{"protected override void ReleaseToolEffect("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Releases the fire effect on the entity. |
| <Link id="m-requesttooleffect" /><code>{"protected override void RequestToolEffect("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Spawns the fire effect at the holding hand, pointed at and sized to the item's mesh. |

## Used in

Members of other types that take, return or hold a `EmberComposer`:

[`EmberComposer.HeatPointCollectionHandler.HeatPointCollectionHandler`](/game-api/types/global-e-h/embercomposer-heatpointcollectionhandler#m-ctor).
