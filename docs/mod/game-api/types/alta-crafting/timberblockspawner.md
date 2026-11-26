---
title: "TimberBlockSpawner"
description: "The sliding block holder on a chiselling deck (deck.BlockPositioner)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimberBlockSpawner

A **class** in `Root.Township`, `Alta.Carpentry`.

The sliding block holder on a chiselling deck (`deck.BlockPositioner`). Players drag it by its handles between set positions, and the position sets the biggest block allowed. It can also flip the block over.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`ChiselingSizePoint`](/mod/game-api/types/alta-crafting/timberblockspawner-chiselingsizepoint), [`SizedSpawnPoints`](/mod/game-api/types/alta-crafting/timberblockspawner-sizedspawnpoints)
- **Documented in** [Farming, woodcutting and carpentry](/mod/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimberBlockSpawner()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>23 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-availablepoints" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/timberblockspawner-chiselingsizepoint">{"TimberBlockSpawner.ChiselingSizePoint"}</Link>{"[] availablePoints"}</code> | The positions on the track, each with the biggest block size it allows. |
| <Link id="m-baseposition" /><code>{"private Vector3 basePosition"}</code> | Local starting position; only x changes as it slides. |
| <Link id="m-baserotation" /><code>{"private Quaternion baserotation"}</code> | Local rotation kept while dragging. |
| <Link id="m-blockspawnmovespeed" /><code>{"private float blockSpawnMoveSpeed"}</code> | Slide speed when moving on its own. |
| <Link id="m-blockunitlength" /><code>{"private float blockUnitLength"}</code> | Serialized value not read in this build. |
| <Link id="m-buiderbasex" /><code>{"private float buiderBaseX"}</code> | `BuilderX` when there is no block or no matching spawn point. |
| <Link id="m-checkingposition" /><code>{"private Coroutine checkingPosition"}</code> | Private: the running `CheckPosition` coroutine. Non null means held. |
| <Link id="m-currentpoint" /><code>{"private int currentPoint"}</code> | Private: index of the current position in `availablePoints`. |
| <Link id="m-deck" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/chisellingdeck">{"ChisellingDeck"}</Link>{" deck"}</code> | The chiselling deck this holder belongs to. |
| <Link id="m-handles" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"[] handles"}</code> | The grab points used to drag the holder. |
| <Link id="m-isinversedup" /><code>{"private bool isInversedUp"}</code> | Private: whether the holder is flipped. |
| <Link id="m-localrigidbody" /><code>{"private Rigidbody localRigidbody"}</code> | Rigidbody on this object, non kinematic only while dragged. |
| <Link id="m-maxvalue" /><code>{"private float maxValue"}</code> | Highest x the holder can slide to. |
| <Link id="m-minvalue" /><code>{"private float minValue"}</code> | Lowest x the holder can slide to. |
| <Link id="m-movingspawnposition" /><code>{"private Coroutine movingSpawnPosition"}</code> | Private: the running slide coroutine. |
| <Link id="m-rotationanimation" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" rotationAnimation"}</code> | Duration and curve of the flip. |
| <Link id="m-rotationcoroutine" /><code>{"private Coroutine rotationCoroutine"}</code> | Private: the running flip coroutine. |
| <Link id="m-rotationhandletransform" /><code>{"private Transform rotationHandleTransform"}</code> | Its rotation sets which way the flip turns. |
| <Link id="m-rotationparent" /><code>{"private Transform rotationParent"}</code> | The transform turned by the flip. |
| <Link id="m-spawnpositions" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/timberblockspawner-sizedspawnpoints">{"TimberBlockSpawner.SizedSpawnPoints"}</Link>{"[] spawnPositions"}</code> | Spawn point and `BuilderX` for each block size. |
| <Link id="m-syncposition" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPosition"}</code> | Private: message for `SyncPosition`. |
| <Link id="m-syncrotation" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncRotation"}</code> | Private: message for `SyncRotation`. |
| <Link id="m-target" /><code>{"private float target"}</code> | X position the holder is at or sliding to. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-builderx" /><code>{"float BuilderX { get; }"}</code> | X position for the wedge display, from the spawn point matching the current block size, or the base value. |
| <Link id="m-isheld" /><code>{"bool IsHeld { get; }"}</code> | True while a player is dragging the holder. |
| <Link id="m-maxsize" /><code><Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" MaxSize { get; }"}</code> | The biggest block size the current position allows. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ensurespace" /><code>{"IEnumerator EnsureSpace() (iterator)"}</code> | Coroutine: if the block is too big for the current position, slides out to the first one that fits and syncs it. |
| <Link id="m-ensurespaceinstant" /><code>{"void EnsureSpaceInstant()"}</code> | Jumps straight to the first position that fits the block, without animating. |
| <Link id="m-getspawnposition" /><code>{"Transform GetSpawnPosition("}<Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" size)"}</code> | Returns the spawn point for a block size, or null. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the position and rotation sync messages. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the rotation and position to a joining player. |
| <Link id="m-rotate" /><code>{"void Rotate()"}</code> | Server: flips the block holder over and syncs it to clients. |
| <Link id="m-setupstartingposition" /><code>{"bool SetupStartingPosition()"}</code> | Editor: stores the base position and rotation and works out the track limits. Returns whether anything changed. |

<details>
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks each handle's grab and release. |
| <Link id="m-checkposition" /><code>{"private IEnumerator CheckPosition() (iterator)"}</code> | Private: while dragged, keeps the holder on its track and picks the nearest position. Moving to a smaller one shrinks the block. |
| <Link id="m-checkrelease" /><code>{"private void CheckRelease("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition)"}</code> | Private: forces a player's hands off the handles. Not called in this build. |
| <Link id="m-isnewplayer" /><code>{"private bool IsNewPlayer("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Private: always returns true. Not called in this build. |
| <Link id="m-moveblockspawn" /><code>{"private IEnumerator MoveBlockSpawn() (iterator)"}</code> | Private: drops all hands, slides to `target` and then makes the handles usable again. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Private, editor: draws a sphere at each position. |
| <Link id="m-rotation" /><code>{"private IEnumerator Rotation() (iterator)"}</code> | Private: animates the 180 degree flip, then tells the block it is upside down or not. |
| <Link id="m-snappoint" /><code>{"private void SnapPoint("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Private: when the last handle is let go, stops dragging and the local player syncs where it stopped. |
| <Link id="m-startcheckingposition" /><code>{"private void StartCheckingPosition("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Private: on grab, stops any slide and starts `CheckPosition`. |
| <Link id="m-startrotation" /><code>{"private void StartRotation()"}</code> | Private: starts the flip animation if it is not already running. |
| <Link id="m-syncposition-2" /><code>{"private void SyncPosition("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Private: syncs the target position and slides there; the server relays it to other players. |
| <Link id="m-syncrotation-2" /><code>{"private void SyncRotation("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool value)"}</code> | Private: syncs whether the holder is flipped; clients flip to match. |

</details>

## Used in

Members of other types that take, return or hold a `TimberBlockSpawner`:

[`ChisellingDeck.blockPositioner`](/mod/game-api/types/alta-crafting/chisellingdeck#m-blockpositioner), [`ChisellingDeck.BlockPositioner`](/mod/game-api/types/alta-crafting/chisellingdeck#m-blockpositioner-2).
