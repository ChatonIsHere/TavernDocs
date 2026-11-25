---
title: "ExtraArrowUpdater"
description: "class ExtraArrowUpdater in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ExtraArrowUpdater

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`ExtraArrowData`](/game-api/types/global-e-h/extraarrowupdater-extraarrowdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ExtraArrowUpdater()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-alignarrows" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" alignArrows"}</code> |  |
| <Link id="m-arrowimpacttool" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" arrowImpactTool"}</code> |  |
| <Link id="m-bowstring" /><code>{"private "}<Link to="/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" bowString"}</code> |  |
| <Link id="m-interactingplayer" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" interactingPlayer"}</code> |  |
| <Link id="m-isaligningarrows" /><code>{"private bool isAligningArrows"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-spawnedextraarrows" /><code>{"private List<"}<Link to="/game-api/types/global-e-h/extraarrowupdater-extraarrowdata">{"ExtraArrowUpdater.ExtraArrowData"}</Link>{"> spawnedExtraArrows"}</code> |  |
| <Link id="m-stopaligningarrows" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" stopAligningArrows"}</code> |  |
| <Link id="m-syncextraarrows" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<List<"}<Link to="/game-api/types/global-e-h/extraarrowupdater-extraarrowdata">{"ExtraArrowUpdater.ExtraArrowData"}</Link>{">> syncExtraArrows"}</code> |  |
| <Link id="m-unsyncedextraarrows" /><code>{"private List<"}<Link to="/game-api/types/global-e-h/extraarrowupdater-extraarrowdata">{"ExtraArrowUpdater.ExtraArrowData"}</Link>{"> unsyncedExtraArrows"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-spawnedextraarrows-2" /><code>{"List<"}<Link to="/game-api/types/global-e-h/extraarrowupdater-extraarrowdata">{"ExtraArrowUpdater.ExtraArrowData"}</Link>{"> SpawnedExtraArrows { get; }"}</code> |  |
| <Link id="m-knockedarrow" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" KnockedArrow { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createextraarrow" /><code><Link to="/game-api/types/global-i-l/ishootable">{"IShootable"}</Link>{" CreateExtraArrow(Vector3 arrowLocalOffset, "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" extraArrowPrefab, float damageMultiplier)"}</code> |  |
| <Link id="m-destroyallextraarrows" /><code>{"void DestroyAllExtraArrows()"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-syncextraarrowsandstartupdating" /><code>{"void SyncExtraArrowsAndStartUpdating()"}</code> |  |
| <Link id="m-alignextraarrows" /><code>{"private void AlignExtraArrows()"}</code> |  |
| <Link id="m-cleararrowimpacttool" /><code>{"private void ClearArrowImpactTool("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-clearbowstringplayerinteractor" /><code>{"private void ClearBowStringPlayerInteractor("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |  |
| <Link id="m-disableextraarrowcollisions" /><code>{"private void DisableExtraArrowCollisions("}<Link to="/game-api/types/global-e-h/extraarrowupdater-extraarrowdata">{"ExtraArrowUpdater.ExtraArrowData"}</Link>{" spawnedArrow)"}</code> |  |
| <Link id="m-getarrowimpacttool" /><code>{"private void GetArrowImpactTool("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-getbowstringplayerinteractor" /><code>{"private void GetBowStringPlayerInteractor("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |  |
| <Link id="m-ignorecollisionsbetweenarrows" /><code>{"private void IgnoreCollisionsBetweenArrows("}<Link to="/game-api/types/global-e-h/extraarrowupdater-extraarrowdata">{"ExtraArrowUpdater.ExtraArrowData"}</Link>{" newArrow)"}</code> |  |
| <Link id="m-removeextraarrows" /><code>{"private void RemoveExtraArrows()"}</code> |  |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> |  |
| <Link id="m-shootextraarrows" /><code>{"private void ShootExtraArrows("}<Link to="/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" arg1, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" shotEntity, Vector3 shotVelocity)"}</code> |  |
| <Link id="m-startaligningarrowsonclient" /><code>{"private void StartAligningArrowsOnClient()"}</code> |  |
| <Link id="m-stopaligningarrows-2" /><code>{"private void StopAligningArrows("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncextraarrows-2" /><code>{"private void SyncExtraArrows("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, List<"}<Link to="/game-api/types/global-e-h/extraarrowupdater-extraarrowdata">{"ExtraArrowUpdater.ExtraArrowData"}</Link>{"> arrowsToSync)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ExtraArrowUpdater`:

[`BowString.extraArrowUpdater`](/game-api/types/global-a-b/bowstring#m-extraarrowupdater), [`BowString.ExtraArrowUpdater`](/game-api/types/global-a-b/bowstring#m-extraarrowupdater-2).
