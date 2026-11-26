---
title: "ExtraArrowUpdater"
description: "Bow component that spawns extra arrows next to the knocked one, keeps them lined up while the string is drawn, and fires them with the main shot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ExtraArrowUpdater

A **class** in `Root.Township`, no namespace.

Bow component that spawns extra arrows next to the knocked one, keeps them lined up while the string is drawn, and fires them with the main shot. Used by the multi-arrow and light beam skills; the server spawns and syncs the arrows.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`ExtraArrowData`](/game-api/types/global-e-h/extraarrowupdater-extraarrowdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ExtraArrowUpdater()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alignarrows" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" alignArrows"}</code> | Handle for the registered late update that runs `AlignExtraArrows`. |
| <Link id="m-arrowimpacttool" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" arrowImpactTool"}</code> | `ImpactTool` of the knocked arrow, used to scale extra arrow damage. |
| <Link id="m-bowstring" /><code>{"private "}<Link to="/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" bowString"}</code> | The `BowString` this updater serves. |
| <Link id="m-interactingplayer" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" interactingPlayer"}</code> | Player holding the bow string, or null. |
| <Link id="m-isaligningarrows" /><code>{"private bool isAligningArrows"}</code> | True while extra arrows are synced and following the knocked arrow; late joiners get them only then. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-spawnedextraarrows" /><code>{"private List<"}<Link to="/game-api/types/global-e-h/extraarrowupdater-extraarrowdata">{"ExtraArrowUpdater.ExtraArrowData"}</Link>{"> spawnedExtraArrows"}</code> | Backing list for `SpawnedExtraArrows`. |
| <Link id="m-stopaligningarrows" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" stopAligningArrows"}</code> | Network message that tells clients to clear their extra arrows. |
| <Link id="m-syncextraarrows" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<List<"}<Link to="/game-api/types/global-e-h/extraarrowupdater-extraarrowdata">{"ExtraArrowUpdater.ExtraArrowData"}</Link>{">> syncExtraArrows"}</code> | Network message that sends a list of extra arrows to clients. |
| <Link id="m-unsyncedextraarrows" /><code>{"private List<"}<Link to="/game-api/types/global-e-h/extraarrowupdater-extraarrowdata">{"ExtraArrowUpdater.ExtraArrowData"}</Link>{"> unsyncedExtraArrows"}</code> | Arrows created since the last sync; cleared once sent. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-spawnedextraarrows-2" /><code>{"List<"}<Link to="/game-api/types/global-e-h/extraarrowupdater-extraarrowdata">{"ExtraArrowUpdater.ExtraArrowData"}</Link>{"> SpawnedExtraArrows { get; }"}</code> | The extra arrows currently attached to the bow. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-knockedarrow" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" KnockedArrow { get; }"}</code> | The pickup currently docked on the bow string, or null. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createextraarrow" /><code><Link to="/game-api/types/global-i-l/ishootable">{"IShootable"}</Link>{" CreateExtraArrow(Vector3 arrowLocalOffset, "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" extraArrowPrefab, float damageMultiplier)"}</code> | Spawns an extra arrow from the prefab at a local offset, sets its damage from the knocked arrow and owner, and turns off its collisions. Returns null with no knocked arrow. |
| <Link id="m-destroyallextraarrows" /><code>{"void DestroyAllExtraArrows()"}</code> | Destroys every spawned extra arrow entity and clears the list. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the sync methods and hooks the bow string's shoot, dock and grab events. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current extra arrows to a joining player if they are being aligned. |
| <Link id="m-syncextraarrowsandstartupdating" /><code>{"void SyncExtraArrowsAndStartUpdating()"}</code> | Server: sends newly created arrows to the chunk and starts aligning them each frame. |

<details>
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alignextraarrows" /><code>{"private void AlignExtraArrows()"}</code> | Late update: moves each extra arrow to the knocked arrow's position plus its offset and copies its rotation. |
| <Link id="m-cleararrowimpacttool" /><code>{"private void ClearArrowImpactTool("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Clears `arrowImpactTool` when an arrow leaves the string dock. |
| <Link id="m-clearbowstringplayerinteractor" /><code>{"private void ClearBowStringPlayerInteractor("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Clears `interactingPlayer` when the bow string is let go. |
| <Link id="m-disableextraarrowcollisions" /><code>{"private void DisableExtraArrowCollisions("}<Link to="/game-api/types/global-e-h/extraarrowupdater-extraarrowdata">{"ExtraArrowUpdater.ExtraArrowData"}</Link>{" spawnedArrow)"}</code> | Turns off the new arrow's `ColliderGroup` and stores it on the arrow data. |
| <Link id="m-getarrowimpacttool" /><code>{"private void GetArrowImpactTool("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Stores the docked arrow's `ImpactTool` when an arrow is knocked, for damage scaling. |
| <Link id="m-getbowstringplayerinteractor" /><code>{"private void GetBowStringPlayerInteractor("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Stores the player who grabbed the bow string, used as damage owner and for collision ignoring. |
| <Link id="m-ignorecollisionsbetweenarrows" /><code>{"private void IgnoreCollisionsBetweenArrows("}<Link to="/game-api/types/global-e-h/extraarrowupdater-extraarrowdata">{"ExtraArrowUpdater.ExtraArrowData"}</Link>{" newArrow)"}</code> | Makes a new extra arrow ignore the other extra arrows, the knocked arrow, the bow and the player's body. |
| <Link id="m-removeextraarrows" /><code>{"private void RemoveExtraArrows()"}</code> | Stops aligning and clears the list without destroying. On the server, tells clients to stop too. |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> | Editor reset: fills `bowString` from the same object. |
| <Link id="m-shootextraarrows" /><code>{"private void ShootExtraArrows("}<Link to="/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" arg1, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" shotEntity, Vector3 shotVelocity)"}</code> | Runs when the bow fires: unparents and shoots each extra arrow with the main velocity. Server re-enables their colliders after 0.07 seconds. |
| <Link id="m-startaligningarrowsonclient" /><code>{"private void StartAligningArrowsOnClient()"}</code> | Client: registers `AlignExtraArrows` on late update after the arrows are received. |
| <Link id="m-stopaligningarrows-2" /><code>{"private void StopAligningArrows("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Receive handler for the stop message; clears the extra arrows on the client. |
| <Link id="m-syncextraarrows-2" /><code>{"private void SyncExtraArrows("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, List<"}<Link to="/game-api/types/global-e-h/extraarrowupdater-extraarrowdata">{"ExtraArrowUpdater.ExtraArrowData"}</Link>{"> arrowsToSync)"}</code> | Writes or reads the arrow entity IDs and offsets. Clients parent the arrows to the bow, disable their colliders and start aligning. |

</details>

## Used in

Members of other types that take, return or hold a `ExtraArrowUpdater`:

[`BowString.extraArrowUpdater`](/game-api/types/global-a-b/bowstring#m-extraarrowupdater), [`BowString.ExtraArrowUpdater`](/game-api/types/global-a-b/bowstring#m-extraarrowupdater-2).
