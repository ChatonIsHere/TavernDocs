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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkEntityHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Calls the handler with the entity. |

## Used in

Members of other types that take, return or hold a `NetworkEntityHandler`:

[`Cookable.SwappedToBurntVersion`](/mod/game-api/types/alta-crafting/cookable#m-swappedtoburntversion), [`Cookable.SwappedToCookedVersion`](/mod/game-api/types/alta-crafting/cookable#m-swappedtocookedversion), [`StewComponent.HandleCookableStateChange`](/mod/game-api/types/alta-crafting/stewcomponent#m-handlecookablestatechange), [`StewComponent.StopHandlingCookableStateChange`](/mod/game-api/types/alta-crafting/stewcomponent#m-stophandlingcookablestatechange), [`NetworkEntity.ChildAdded`](/mod/game-api/types/alta-networking/networkentity#m-childadded), [`NetworkEntity.ChildRemoved`](/mod/game-api/types/alta-networking/networkentity#m-childremoved), [`NetworkEntity.InitializationFinished`](/mod/game-api/types/alta-networking/networkentity#m-initializationfinished), [`IPopulationRemovalMethod.RemoveFromPopulation`](/mod/game-api/types/alta-world-generation/ipopulationremovalmethod#m-removefrompopulation), [`Pickup.Alta.Populations.IPopulationRemovalMethod.RemoveFromPopulation`](/mod/game-api/types/global-p/pickup#m-alta-populations-ipopulationremovalmethod-removefrompopulation), [`Pickup.removeFromPopulation`](/mod/game-api/types/global-p/pickup#m-removefrompopulation), [`PlayerController.setEntityOwnerHandler`](/mod/game-api/types/global-p/playercontroller#m-setentityownerhandler).
