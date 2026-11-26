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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IPopulationItem`](/game-api/types/alta-world-generation/ipopulationitem)
- **Nested types** [`PopulationItemEventHandler`](/game-api/types/alta-world-generation/basicpopulationitem-populationitemeventhandler)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BasicPopulationItem()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentchunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" currentChunk"}</code> | The location chunk the item was last seen in, used by `CheckMoved` to spot chunk changes. |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | Cached transform of the entity. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Handle for the registered `CheckMoved` update, removed when the item is destroyed or unloaded. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" Definition { get; set; }"}</code> | The population setup it was spawned from. |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | The spawned network entity. |
| <Link id="m-population" /><code><Link to="/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" Population { get; set; }"}</code> | The population that currently counts this item. Changes when a moving item enters another chunk's population, null if that chunk has none. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-removed" /><code>{"event "}<Link to="/game-api/types/alta-world-generation/basicpopulationitem-populationitemeventhandler">{"BasicPopulationItem.PopulationItemEventHandler"}</Link>{" Removed"}</code> | Raised when the item is removed from its population. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"static "}<Link to="/game-api/types/alta-world-generation/basicpopulationitem">{"BasicPopulationItem"}</Link>{" Create("}<Link to="/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" population, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Adds the component to an entity, links it to the population and, for moving populations, starts checking which chunk it is in. |
| <Link id="m-remove" /><code>{"void Remove()"}</code> | Raises `Removed` and destroys this component. Called when the entity is destroyed, but not when it is only unloaded. |
| <Link id="m-replacewith" /><code>{"void ReplaceWith("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" replacement)"}</code> | Asks the population to replace this item with another entity. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkmoved" /><code>{"private void CheckMoved()"}</code> | Runs on a shared update module for moving items. When the item enters a new chunk it swaps population, or unloads if that chunk isn't loaded. |
| <Link id="m-destroyedbyscene" /><code>{"private void DestroyedByScene("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Handler for the entity's `DestroyedByScene`: stops movement checks and calls `Remove` unless it's just an unload. |
| <Link id="m-getpositionchunk" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" GetPositionChunk("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Given to the entity as its chunk lookup: finds the location chunk that best contains the item's position. |
| <Link id="m-listenformovement" /><code>{"private void ListenForMovement()"}</code> | Registers `CheckMoved` with the distance-check update module. Called from `Create` for populations marked as moving. |

</details>

## Used in

Members of other types that take, return or hold a `BasicPopulationItem`:

[`BasicPopulation.Deregister`](/game-api/types/alta-world-generation/basicpopulation#m-deregister), [`BasicPopulation.items`](/game-api/types/alta-world-generation/basicpopulation#m-items), [`BasicPopulation.Register`](/game-api/types/alta-world-generation/basicpopulation#m-register), [`BasicPopulation.Replace`](/game-api/types/alta-world-generation/basicpopulation#m-replace), [`BasicPopulation.PopulationEventHandler.BeginInvoke`](/game-api/types/alta-world-generation/basicpopulation-populationeventhandler#m-begininvoke), [`BasicPopulation.PopulationEventHandler.Invoke`](/game-api/types/alta-world-generation/basicpopulation-populationeventhandler#m-invoke), [`BasicPopulationItem.PopulationItemEventHandler.BeginInvoke`](/game-api/types/alta-world-generation/basicpopulationitem-populationitemeventhandler#m-begininvoke), [`BasicPopulationItem.PopulationItemEventHandler.Invoke`](/game-api/types/alta-world-generation/basicpopulationitem-populationitemeventhandler#m-invoke), [`BasicPopulationManager.Spawn`](/game-api/types/alta-world-generation/basicpopulationmanager#m-spawn), [`IPopulationManager.Spawn`](/game-api/types/alta-world-generation/ipopulationmanager#m-spawn).
