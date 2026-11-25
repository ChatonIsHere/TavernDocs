---
title: "EmberComposer"
description: "class EmberComposer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmberComposer

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`PickupBasedSkill`](/game-api/types/global-p/pickupbasedskill)
- **Derived types** [`EmberComposer.Create`](/game-api/types/global-e-h/embercomposer-create)
- **Nested types** [`Create`](/game-api/types/global-e-h/embercomposer-create), [`HeatPointCollectionHandler`](/game-api/types/global-e-h/embercomposer-heatpointcollectionhandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmberComposer()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activeeffects" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> activeEffects"}</code> |  |
| <Link id="m-collectionmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{", "}<Link to="/game-api/types/global-e-h/embercomposer-heatpointcollectionhandler">{"EmberComposer.HeatPointCollectionHandler"}</Link>{"> collectionMap"}</code> |  |
| <Link id="m-energypersecond" /><code>{"private float energyPerSecond"}</code> |  |
| <Link id="m-fireeffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" fireEffectDefinition"}</code> |  |
| <Link id="m-maxtemperaturetoaccept" /><code>{"private float maxTemperatureToAccept"}</code> |  |
| <Link id="m-targettemperature" /><code>{"private float targetTemperature"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"override void Deregister("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |
| <Link id="m-register" /><code>{"override void Register("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |
| <Link id="m-seteffectactive" /><code>{"override void SetEffectActive("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isEffectActive)"}</code> |  |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> |  |
| <Link id="m-releasetooleffect" /><code>{"protected override void ReleaseToolEffect("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-requesttooleffect" /><code>{"protected override void RequestToolEffect("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |

## Used in

Members of other types that take, return or hold a `EmberComposer`:

[`EmberComposer.HeatPointCollectionHandler.HeatPointCollectionHandler`](/game-api/types/global-e-h/embercomposer-heatpointcollectionhandler#m-ctor).
