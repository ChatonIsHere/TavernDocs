---
title: "ExtraArrowUpdater"
description: "Bow component that spawns extra arrows next to the knocked one, keeps them lined up while the string is drawn, and fires them with the main shot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ExtraArrowUpdater

A **class** in `Root.Township`, the global namespace.

Bow component that spawns extra arrows next to the knocked one, keeps them lined up while the string is drawn, and fires them with the main shot. Used by the multi-arrow and light beam skills; the server spawns and syncs the arrows.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`ExtraArrowData`](/mod/game-api/types/global-e-h/extraarrowupdater-extraarrowdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ExtraArrowUpdater()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alignarrows" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" alignArrows"}</code> | <span className="api-desc">Handle for the registered late update that runs `AlignExtraArrows`.</span> |
| <Link id="m-arrowimpacttool" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" arrowImpactTool"}</code> | <span className="api-desc">`ImpactTool` of the knocked arrow, used to scale extra arrow damage.</span> |
| <Link id="m-bowstring" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" bowString"}</code> | <span className="api-desc">The `BowString` this updater serves.</span> |
| <Link id="m-interactingplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" interactingPlayer"}</code> | <span className="api-desc">Player holding the bow string, or null.</span> |
| <Link id="m-isaligningarrows" /><code>{"private bool isAligningArrows"}</code> | <span className="api-desc">True while extra arrows are synced and following the knocked arrow; late joiners get them only then.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-spawnedextraarrows" /><code>{"private List<"}<Link to="/mod/game-api/types/global-e-h/extraarrowupdater-extraarrowdata">{"ExtraArrowUpdater.ExtraArrowData"}</Link>{"> spawnedExtraArrows"}</code> | <span className="api-desc">Backing list for `SpawnedExtraArrows`.</span> |
| <Link id="m-stopaligningarrows" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" stopAligningArrows"}</code> | <span className="api-desc">Network message that tells clients to clear their extra arrows.</span> |
| <Link id="m-syncextraarrows" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<List<"}<Link to="/mod/game-api/types/global-e-h/extraarrowupdater-extraarrowdata">{"ExtraArrowUpdater.ExtraArrowData"}</Link>{">> syncExtraArrows"}</code> | <span className="api-desc">Network message that sends a list of extra arrows to clients.</span> |
| <Link id="m-unsyncedextraarrows" /><code>{"private List<"}<Link to="/mod/game-api/types/global-e-h/extraarrowupdater-extraarrowdata">{"ExtraArrowUpdater.ExtraArrowData"}</Link>{"> unsyncedExtraArrows"}</code> | <span className="api-desc">Arrows created since the last sync; cleared once sent.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-spawnedextraarrows-2" /><code>{"List<"}<Link to="/mod/game-api/types/global-e-h/extraarrowupdater-extraarrowdata">{"ExtraArrowUpdater.ExtraArrowData"}</Link>{"> SpawnedExtraArrows { get; }"}</code> | <span className="api-desc">The extra arrows currently attached to the bow.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-knockedarrow" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" KnockedArrow { get; }"}</code> | <span className="api-desc">The pickup currently docked on the bow string, or null.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createextraarrow" /><code><Link to="/mod/game-api/types/global-i-l/ishootable">{"IShootable"}</Link>{" CreateExtraArrow(Vector3 arrowLocalOffset, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" extraArrowPrefab, float damageMultiplier)"}</code> | <span className="api-desc">Spawns an extra arrow from the prefab at a local offset, sets its damage from the knocked arrow and owner, and turns off its collisions. Returns null with no knocked arrow.</span> |
| <Link id="m-destroyallextraarrows" /><code>{"void DestroyAllExtraArrows()"}</code> | <span className="api-desc">Destroys every spawned extra arrow entity and clears the list.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the sync methods and hooks the bow string's shoot, dock and grab events.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the current extra arrows to a joining player if they are being aligned.</span> |
| <Link id="m-syncextraarrowsandstartupdating" /><code>{"void SyncExtraArrowsAndStartUpdating()"}</code> | <span className="api-desc">Server: sends newly created arrows to the chunk and starts aligning them each frame.</span> |

<details className="api-private">
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alignextraarrows" /><code>{"private void AlignExtraArrows()"}</code> | <span className="api-desc">Late update: moves each extra arrow to the knocked arrow's position plus its offset and copies its rotation.</span> |
| <Link id="m-cleararrowimpacttool" /><code>{"private void ClearArrowImpactTool("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Clears `arrowImpactTool` when an arrow leaves the string dock.</span> |
| <Link id="m-clearbowstringplayerinteractor" /><code>{"private void ClearBowStringPlayerInteractor("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Clears `interactingPlayer` when the bow string is let go.</span> |
| <Link id="m-disableextraarrowcollisions" /><code>{"private void DisableExtraArrowCollisions("}<Link to="/mod/game-api/types/global-e-h/extraarrowupdater-extraarrowdata">{"ExtraArrowUpdater.ExtraArrowData"}</Link>{" spawnedArrow)"}</code> | <span className="api-desc">Turns off the new arrow's `ColliderGroup` and stores it on the arrow data.</span> |
| <Link id="m-getarrowimpacttool" /><code>{"private void GetArrowImpactTool("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Stores the docked arrow's `ImpactTool` when an arrow is knocked, for damage scaling.</span> |
| <Link id="m-getbowstringplayerinteractor" /><code>{"private void GetBowStringPlayerInteractor("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Stores the player who grabbed the bow string, used as damage owner and for collision ignoring.</span> |
| <Link id="m-ignorecollisionsbetweenarrows" /><code>{"private void IgnoreCollisionsBetweenArrows("}<Link to="/mod/game-api/types/global-e-h/extraarrowupdater-extraarrowdata">{"ExtraArrowUpdater.ExtraArrowData"}</Link>{" newArrow)"}</code> | <span className="api-desc">Makes a new extra arrow ignore the other extra arrows, the knocked arrow, the bow and the player's body.</span> |
| <Link id="m-removeextraarrows" /><code>{"private void RemoveExtraArrows()"}</code> | <span className="api-desc">Stops aligning and clears the list without destroying. On the server, tells clients to stop too.</span> |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> | <span className="api-desc">Editor reset: fills `bowString` from the same object.</span> |
| <Link id="m-shootextraarrows" /><code>{"private void ShootExtraArrows("}<Link to="/mod/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" arg1, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" shotEntity, Vector3 shotVelocity)"}</code> | <span className="api-desc">Runs when the bow fires: unparents and shoots each extra arrow with the main velocity. Server re-enables their colliders after 0.07 seconds.</span> |
| <Link id="m-startaligningarrowsonclient" /><code>{"private void StartAligningArrowsOnClient()"}</code> | <span className="api-desc">Client: registers `AlignExtraArrows` on late update after the arrows are received.</span> |
| <Link id="m-stopaligningarrows-2" /><code>{"private void StopAligningArrows("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Receive handler for the stop message; clears the extra arrows on the client.</span> |
| <Link id="m-syncextraarrows-2" /><code>{"private void SyncExtraArrows("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, List<"}<Link to="/mod/game-api/types/global-e-h/extraarrowupdater-extraarrowdata">{"ExtraArrowUpdater.ExtraArrowData"}</Link>{"> arrowsToSync)"}</code> | <span className="api-desc">Writes or reads the arrow entity IDs and offsets. Clients parent the arrows to the bow, disable their colliders and start aligning.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ExtraArrowUpdater`:

<div className="api-used-in">

[`BowString.extraArrowUpdater`](/mod/game-api/types/global-a-b/bowstring#m-extraarrowupdater), [`BowString.ExtraArrowUpdater`](/mod/game-api/types/global-a-b/bowstring#m-extraarrowupdater-2).

</div>
