---
title: "BasicPopulationItem"
description: "Added to a spawned population entity (such as an animal) to tie it to its BasicPopulation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicPopulationItem

A **class** in `Root.Township`, `Alta.Populations`.

Added to a spawned population entity (such as an animal) to tie it to its `BasicPopulation`. Moving ones follow chunk changes and switch population. Server side.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IPopulationItem`](/mod/game-api/types/alta-world-generation/ipopulationitem)
- **Nested types** [`PopulationItemEventHandler`](/mod/game-api/types/alta-world-generation/basicpopulationitem-populationitemeventhandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicPopulationItem()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentchunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" currentChunk"}</code> | <span className="api-desc">The location chunk the item was last seen in, used by `CheckMoved` to spot chunk changes.</span> |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | <span className="api-desc">Cached transform of the entity.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle for the registered `CheckMoved` update, removed when the item is destroyed or unloaded.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" Definition { get; set; }"}</code> | <span className="api-desc">The population setup it was spawned from.</span> |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | <span className="api-desc">The spawned network entity.</span> |
| <Link id="m-population" /><code><Link to="/mod/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" Population { get; set; }"}</code> | <span className="api-desc">The population that currently counts this item. Changes when a moving item enters another chunk's population, null if that chunk has none.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-removed" /><code>{"event "}<Link to="/mod/game-api/types/alta-world-generation/basicpopulationitem-populationitemeventhandler">{"BasicPopulationItem.PopulationItemEventHandler"}</Link>{" Removed"}</code> | <span className="api-desc">Raised when the item is removed from its population.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"static "}<Link to="/mod/game-api/types/alta-world-generation/basicpopulationitem">{"BasicPopulationItem"}</Link>{" Create("}<Link to="/mod/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" population, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Adds the component to an entity, links it to the population and, for moving populations, starts checking which chunk it is in.</span> |
| <Link id="m-remove" /><code>{"void Remove()"}</code> | <span className="api-desc">Raises `Removed` and destroys this component. Called when the entity is destroyed, but not when it is only unloaded.</span> |
| <Link id="m-replacewith" /><code>{"void ReplaceWith("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" replacement)"}</code> | <span className="api-desc">Asks the population to replace this item with another entity.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkmoved" /><code>{"private void CheckMoved()"}</code> | <span className="api-desc">Runs on a shared update module for moving items. When the item enters a new chunk it swaps population, or unloads if that chunk isn't loaded.</span> |
| <Link id="m-destroyedbyscene" /><code>{"private void DestroyedByScene("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Handler for the entity's `DestroyedByScene`: stops movement checks and calls `Remove` unless it's just an unload.</span> |
| <Link id="m-getpositionchunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" GetPositionChunk("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Given to the entity as its chunk lookup: finds the location chunk that best contains the item's position.</span> |
| <Link id="m-listenformovement" /><code>{"private void ListenForMovement()"}</code> | <span className="api-desc">Registers `CheckMoved` with the distance-check update module. Called from `Create` for populations marked as moving.</span> |

</details>

## Used in

Members of other types that take, return or hold a `BasicPopulationItem`:

<div className="api-used-in">

[`BasicPopulation.Deregister`](/mod/game-api/types/alta-world-generation/basicpopulation#m-deregister), [`BasicPopulation.items`](/mod/game-api/types/alta-world-generation/basicpopulation#m-items), [`BasicPopulation.Register`](/mod/game-api/types/alta-world-generation/basicpopulation#m-register), [`BasicPopulation.Replace`](/mod/game-api/types/alta-world-generation/basicpopulation#m-replace), [`BasicPopulation.PopulationEventHandler.BeginInvoke`](/mod/game-api/types/alta-world-generation/basicpopulation-populationeventhandler#m-begininvoke), [`BasicPopulation.PopulationEventHandler.Invoke`](/mod/game-api/types/alta-world-generation/basicpopulation-populationeventhandler#m-invoke), [`BasicPopulationItem.PopulationItemEventHandler.BeginInvoke`](/mod/game-api/types/alta-world-generation/basicpopulationitem-populationitemeventhandler#m-begininvoke), [`BasicPopulationItem.PopulationItemEventHandler.Invoke`](/mod/game-api/types/alta-world-generation/basicpopulationitem-populationitemeventhandler#m-invoke), [`BasicPopulationManager.Spawn`](/mod/game-api/types/alta-world-generation/basicpopulationmanager#m-spawn), [`IPopulationManager.Spawn`](/mod/game-api/types/alta-world-generation/ipopulationmanager#m-spawn).

</div>
