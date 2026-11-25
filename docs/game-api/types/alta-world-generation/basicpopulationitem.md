---
title: "BasicPopulationItem"
description: "class BasicPopulationItem in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicPopulationItem

A **class** in `Root.Township`, `Alta.Populations`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IPopulationItem`](/game-api/types/alta-world-generation/ipopulationitem)
- **Nested types** [`PopulationItemEventHandler`](/game-api/types/alta-world-generation/basicpopulationitem-populationitemeventhandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicPopulationItem()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentchunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" currentChunk"}</code> |  |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" Definition { get; set; }"}</code> |  |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> |  |
| <Link id="m-population" /><code><Link to="/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" Population { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-removed" /><code>{"event "}<Link to="/game-api/types/alta-world-generation/basicpopulationitem-populationitemeventhandler">{"BasicPopulationItem.PopulationItemEventHandler"}</Link>{" Removed"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"static "}<Link to="/game-api/types/alta-world-generation/basicpopulationitem">{"BasicPopulationItem"}</Link>{" Create("}<Link to="/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" population, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-remove" /><code>{"void Remove()"}</code> |  |
| <Link id="m-replacewith" /><code>{"void ReplaceWith("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" replacement)"}</code> |  |
| <Link id="m-checkmoved" /><code>{"private void CheckMoved()"}</code> |  |
| <Link id="m-destroyedbyscene" /><code>{"private void DestroyedByScene("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-getpositionchunk" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" GetPositionChunk("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-listenformovement" /><code>{"private void ListenForMovement()"}</code> |  |

## Used in

Members of other types that take, return or hold a `BasicPopulationItem`:

[`BasicPopulation.Deregister`](/game-api/types/alta-world-generation/basicpopulation#m-deregister), [`BasicPopulation.items`](/game-api/types/alta-world-generation/basicpopulation#m-items), [`BasicPopulation.Register`](/game-api/types/alta-world-generation/basicpopulation#m-register), [`BasicPopulation.Replace`](/game-api/types/alta-world-generation/basicpopulation#m-replace), [`BasicPopulation.PopulationEventHandler.BeginInvoke`](/game-api/types/alta-world-generation/basicpopulation-populationeventhandler#m-begininvoke), [`BasicPopulation.PopulationEventHandler.Invoke`](/game-api/types/alta-world-generation/basicpopulation-populationeventhandler#m-invoke), [`BasicPopulationItem.PopulationItemEventHandler.BeginInvoke`](/game-api/types/alta-world-generation/basicpopulationitem-populationitemeventhandler#m-begininvoke), [`BasicPopulationItem.PopulationItemEventHandler.Invoke`](/game-api/types/alta-world-generation/basicpopulationitem-populationitemeventhandler#m-invoke), [`BasicPopulationManager.Spawn`](/game-api/types/alta-world-generation/basicpopulationmanager#m-spawn), [`IPopulationManager.Spawn`](/game-api/types/alta-world-generation/ipopulationmanager#m-spawn).
