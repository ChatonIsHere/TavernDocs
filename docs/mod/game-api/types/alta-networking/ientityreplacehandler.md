---
title: "IEntityReplaceHandler"
description: "A component that carries its state over when its entity is replaced by another (for example an item turning into its cooked version)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IEntityReplaceHandler

An **interface** in `Root.Township`, `Alta.Networking`.

A component that carries its state over when its entity is replaced by another (for example an item turning into its cooked version).

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Derived types** [`ForgedPointCollection`](/mod/game-api/types/alta-crafting/forgedpointcollection), [`CookingPoint`](/mod/game-api/types/alta-crafting/cookingpoint), [`CraftingPart`](/mod/game-api/types/alta-crafting/craftingpart), [`Fire`](/mod/game-api/types/alta-stats-effects/fire), [`LiquidContainer`](/mod/game-api/types/alta-stats-effects/liquidcontainer), [`ICustomTypeReplace`](/mod/game-api/types/alta-networking/icustomtypereplace), [`NetworkRigidbody`](/mod/game-api/types/alta-networking/networkrigidbody), [`AssistGrabInteractable`](/mod/game-api/types/global-a-b/assistgrabinteractable), [`DurabilityModule`](/mod/game-api/types/global-c-d/durabilitymodule), [`Interactable`](/mod/game-api/types/global-i-l/interactable), [`InteractableLastPlayerInteractorHandler`](/mod/game-api/types/global-i-l/interactablelastplayerinteractorhandler), [`PhysicalMaterialPart`](/mod/game-api/types/global-p/physicalmaterialpart)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | <span className="api-desc">The entity this component is on.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-replacedwith" /><code>{"void ReplacedWith("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceFlags)"}</code> | <span className="api-desc">Called with the new entity. Copy state across unless the flags say to skip it.</span> |
