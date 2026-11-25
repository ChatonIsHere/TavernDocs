---
title: "NetworkEntityHandler"
description: "Callback that takes a NetworkEntity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkEntityHandler

A **delegate** in `Root.Township`, `Alta.Networking`.

Callback that takes a `NetworkEntity`. Used by events such as `Cookable.SwappedToCookedVersion` and an entity's `InitializationFinished`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkEntityHandler(object object, IntPtr method)"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Calls the handler with the entity. |

## Used in

Members of other types that take, return or hold a `NetworkEntityHandler`:

[`Cookable.SwappedToBurntVersion`](/game-api/types/alta-crafting/cookable#m-swappedtoburntversion), [`Cookable.SwappedToCookedVersion`](/game-api/types/alta-crafting/cookable#m-swappedtocookedversion), [`StewComponent.HandleCookableStateChange`](/game-api/types/alta-crafting/stewcomponent#m-handlecookablestatechange), [`StewComponent.StopHandlingCookableStateChange`](/game-api/types/alta-crafting/stewcomponent#m-stophandlingcookablestatechange), [`NetworkEntity.ChildAdded`](/game-api/types/alta-networking/networkentity#m-childadded), [`NetworkEntity.ChildRemoved`](/game-api/types/alta-networking/networkentity#m-childremoved), [`NetworkEntity.InitializationFinished`](/game-api/types/alta-networking/networkentity#m-initializationfinished), [`IPopulationRemovalMethod.RemoveFromPopulation`](/game-api/types/alta-world-generation/ipopulationremovalmethod#m-removefrompopulation), [`Pickup.Alta.Populations.IPopulationRemovalMethod.RemoveFromPopulation`](/game-api/types/global-p/pickup#m-alta-populations-ipopulationremovalmethod-removefrompopulation), [`Pickup.removeFromPopulation`](/game-api/types/global-p/pickup#m-removefrompopulation), [`PlayerController.setEntityOwnerHandler`](/game-api/types/global-p/playercontroller#m-setentityownerhandler).
