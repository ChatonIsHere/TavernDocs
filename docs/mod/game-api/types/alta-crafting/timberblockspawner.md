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
| <Link id="m-ctor" /><code>{"TimberBlockSpawner()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>23 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-availablepoints" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/timberblockspawner-chiselingsizepoint">{"TimberBlockSpawner.ChiselingSizePoint"}</Link>{"[] availablePoints"}</code> | <span className="api-desc">The positions on the track, each with the biggest block size it allows.</span> |
| <Link id="m-baseposition" /><code>{"private Vector3 basePosition"}</code> | <span className="api-desc">Local starting position; only x changes as it slides.</span> |
| <Link id="m-baserotation" /><code>{"private Quaternion baserotation"}</code> | <span className="api-desc">Local rotation kept while dragging.</span> |
| <Link id="m-blockspawnmovespeed" /><code>{"private float blockSpawnMoveSpeed"}</code> | <span className="api-desc">Slide speed when moving on its own.</span> |
| <Link id="m-blockunitlength" /><code>{"private float blockUnitLength"}</code> | <span className="api-desc">Serialized value not read in this build.</span> |
| <Link id="m-buiderbasex" /><code>{"private float buiderBaseX"}</code> | <span className="api-desc">`BuilderX` when there is no block or no matching spawn point.</span> |
| <Link id="m-checkingposition" /><code>{"private Coroutine checkingPosition"}</code> | <span className="api-desc">Private: the running `CheckPosition` coroutine. Non null means held.</span> |
| <Link id="m-currentpoint" /><code>{"private int currentPoint"}</code> | <span className="api-desc">Private: index of the current position in `availablePoints`.</span> |
| <Link id="m-deck" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/chisellingdeck">{"ChisellingDeck"}</Link>{" deck"}</code> | <span className="api-desc">The chiselling deck this holder belongs to.</span> |
| <Link id="m-handles" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"[] handles"}</code> | <span className="api-desc">The grab points used to drag the holder.</span> |
| <Link id="m-isinversedup" /><code>{"private bool isInversedUp"}</code> | <span className="api-desc">Private: whether the holder is flipped.</span> |
| <Link id="m-localrigidbody" /><code>{"private Rigidbody localRigidbody"}</code> | <span className="api-desc">Rigidbody on this object, non kinematic only while dragged.</span> |
| <Link id="m-maxvalue" /><code>{"private float maxValue"}</code> | <span className="api-desc">Highest x the holder can slide to.</span> |
| <Link id="m-minvalue" /><code>{"private float minValue"}</code> | <span className="api-desc">Lowest x the holder can slide to.</span> |
| <Link id="m-movingspawnposition" /><code>{"private Coroutine movingSpawnPosition"}</code> | <span className="api-desc">Private: the running slide coroutine.</span> |
| <Link id="m-rotationanimation" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" rotationAnimation"}</code> | <span className="api-desc">Duration and curve of the flip.</span> |
| <Link id="m-rotationcoroutine" /><code>{"private Coroutine rotationCoroutine"}</code> | <span className="api-desc">Private: the running flip coroutine.</span> |
| <Link id="m-rotationhandletransform" /><code>{"private Transform rotationHandleTransform"}</code> | <span className="api-desc">Its rotation sets which way the flip turns.</span> |
| <Link id="m-rotationparent" /><code>{"private Transform rotationParent"}</code> | <span className="api-desc">The transform turned by the flip.</span> |
| <Link id="m-spawnpositions" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/timberblockspawner-sizedspawnpoints">{"TimberBlockSpawner.SizedSpawnPoints"}</Link>{"[] spawnPositions"}</code> | <span className="api-desc">Spawn point and `BuilderX` for each block size.</span> |
| <Link id="m-syncposition" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPosition"}</code> | <span className="api-desc">Private: message for `SyncPosition`.</span> |
| <Link id="m-syncrotation" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncRotation"}</code> | <span className="api-desc">Private: message for `SyncRotation`.</span> |
| <Link id="m-target" /><code>{"private float target"}</code> | <span className="api-desc">X position the holder is at or sliding to.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-builderx" /><code>{"float BuilderX { get; }"}</code> | <span className="api-desc">X position for the wedge display, from the spawn point matching the current block size, or the base value.</span> |
| <Link id="m-isheld" /><code>{"bool IsHeld { get; }"}</code> | <span className="api-desc">True while a player is dragging the holder.</span> |
| <Link id="m-maxsize" /><code><Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" MaxSize { get; }"}</code> | <span className="api-desc">The biggest block size the current position allows.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ensurespace" /><code>{"IEnumerator EnsureSpace() (iterator)"}</code> | <span className="api-desc">Coroutine: if the block is too big for the current position, slides out to the first one that fits and syncs it.</span> |
| <Link id="m-ensurespaceinstant" /><code>{"void EnsureSpaceInstant()"}</code> | <span className="api-desc">Jumps straight to the first position that fits the block, without animating.</span> |
| <Link id="m-getspawnposition" /><code>{"Transform GetSpawnPosition("}<Link to="/mod/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" size)"}</code> | <span className="api-desc">Returns the spawn point for a block size, or null.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the position and rotation sync messages.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the rotation and position to a joining player.</span> |
| <Link id="m-rotate" /><code>{"void Rotate()"}</code> | <span className="api-desc">Server: flips the block holder over and syncs it to clients.</span> |
| <Link id="m-setupstartingposition" /><code>{"bool SetupStartingPosition()"}</code> | <span className="api-desc">Editor: stores the base position and rotation and works out the track limits. Returns whether anything changed.</span> |

<details className="api-private">
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks each handle's grab and release.</span> |
| <Link id="m-checkposition" /><code>{"private IEnumerator CheckPosition() (iterator)"}</code> | <span className="api-desc">Private: while dragged, keeps the holder on its track and picks the nearest position. Moving to a smaller one shrinks the block.</span> |
| <Link id="m-checkrelease" /><code>{"private void CheckRelease("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition)"}</code> | <span className="api-desc">Private: forces a player's hands off the handles. Not called in this build.</span> |
| <Link id="m-isnewplayer" /><code>{"private bool IsNewPlayer("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Private: always returns true. Not called in this build.</span> |
| <Link id="m-moveblockspawn" /><code>{"private IEnumerator MoveBlockSpawn() (iterator)"}</code> | <span className="api-desc">Private: drops all hands, slides to `target` and then makes the handles usable again.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Private, editor: draws a sphere at each position.</span> |
| <Link id="m-rotation" /><code>{"private IEnumerator Rotation() (iterator)"}</code> | <span className="api-desc">Private: animates the 180 degree flip, then tells the block it is upside down or not.</span> |
| <Link id="m-snappoint" /><code>{"private void SnapPoint("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Private: when the last handle is let go, stops dragging and the local player syncs where it stopped.</span> |
| <Link id="m-startcheckingposition" /><code>{"private void StartCheckingPosition("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Private: on grab, stops any slide and starts `CheckPosition`.</span> |
| <Link id="m-startrotation" /><code>{"private void StartRotation()"}</code> | <span className="api-desc">Private: starts the flip animation if it is not already running.</span> |
| <Link id="m-syncposition-2" /><code>{"private void SyncPosition("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Private: syncs the target position and slides there; the server relays it to other players.</span> |
| <Link id="m-syncrotation-2" /><code>{"private void SyncRotation("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool value)"}</code> | <span className="api-desc">Private: syncs whether the holder is flipped; clients flip to match.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TimberBlockSpawner`:

<div className="api-used-in">

[`ChisellingDeck.blockPositioner`](/mod/game-api/types/alta-crafting/chisellingdeck#m-blockpositioner), [`ChisellingDeck.BlockPositioner`](/mod/game-api/types/alta-crafting/chisellingdeck#m-blockpositioner-2).

</div>
