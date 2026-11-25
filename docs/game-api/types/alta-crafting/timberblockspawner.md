---
title: "TimberBlockSpawner"
description: "class TimberBlockSpawner in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimberBlockSpawner

A **class** in `Root.Township`, `Alta.Carpentry`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`ChiselingSizePoint`](/game-api/types/alta-crafting/timberblockspawner-chiselingsizepoint), [`SizedSpawnPoints`](/game-api/types/alta-crafting/timberblockspawner-sizedspawnpoints)
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TimberBlockSpawner()"}</code> |

## Fields

<details>
<summary>23 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-availablepoints" /><code>{"private "}<Link to="/game-api/types/alta-crafting/timberblockspawner-chiselingsizepoint">{"TimberBlockSpawner.ChiselingSizePoint"}</Link>{"[] availablePoints"}</code> |
| <Link id="m-baseposition" /><code>{"private Vector3 basePosition"}</code> |
| <Link id="m-baserotation" /><code>{"private Quaternion baserotation"}</code> |
| <Link id="m-blockspawnmovespeed" /><code>{"private float blockSpawnMoveSpeed"}</code> |
| <Link id="m-blockunitlength" /><code>{"private float blockUnitLength"}</code> |
| <Link id="m-buiderbasex" /><code>{"private float buiderBaseX"}</code> |
| <Link id="m-checkingposition" /><code>{"private Coroutine checkingPosition"}</code> |
| <Link id="m-currentpoint" /><code>{"private int currentPoint"}</code> |
| <Link id="m-deck" /><code>{"private "}<Link to="/game-api/types/alta-crafting/chisellingdeck">{"ChisellingDeck"}</Link>{" deck"}</code> |
| <Link id="m-handles" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"[] handles"}</code> |
| <Link id="m-isinversedup" /><code>{"private bool isInversedUp"}</code> |
| <Link id="m-localrigidbody" /><code>{"private Rigidbody localRigidbody"}</code> |
| <Link id="m-maxvalue" /><code>{"private float maxValue"}</code> |
| <Link id="m-minvalue" /><code>{"private float minValue"}</code> |
| <Link id="m-movingspawnposition" /><code>{"private Coroutine movingSpawnPosition"}</code> |
| <Link id="m-rotationanimation" /><code>{"private "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" rotationAnimation"}</code> |
| <Link id="m-rotationcoroutine" /><code>{"private Coroutine rotationCoroutine"}</code> |
| <Link id="m-rotationhandletransform" /><code>{"private Transform rotationHandleTransform"}</code> |
| <Link id="m-rotationparent" /><code>{"private Transform rotationParent"}</code> |
| <Link id="m-spawnpositions" /><code>{"private "}<Link to="/game-api/types/alta-crafting/timberblockspawner-sizedspawnpoints">{"TimberBlockSpawner.SizedSpawnPoints"}</Link>{"[] spawnPositions"}</code> |
| <Link id="m-syncposition" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPosition"}</code> |
| <Link id="m-syncrotation" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncRotation"}</code> |
| <Link id="m-target" /><code>{"private float target"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-builderx" /><code>{"float BuilderX { get; }"}</code> |
| <Link id="m-isheld" /><code>{"bool IsHeld { get; }"}</code> |
| <Link id="m-maxsize" /><code><Link to="/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" MaxSize { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-ensurespace" /><code>{"IEnumerator EnsureSpace() (iterator)"}</code> |
| <Link id="m-ensurespaceinstant" /><code>{"void EnsureSpaceInstant()"}</code> |
| <Link id="m-getspawnposition" /><code>{"Transform GetSpawnPosition("}<Link to="/game-api/types/alta-crafting/chiselblocksize">{"ChiselBlockSize"}</Link>{" size)"}</code> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-rotate" /><code>{"void Rotate()"}</code> |
| <Link id="m-setupstartingposition" /><code>{"bool SetupStartingPosition()"}</code> |

<details>
<summary>12 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-checkposition" /><code>{"private IEnumerator CheckPosition() (iterator)"}</code> |
| <Link id="m-checkrelease" /><code>{"private void CheckRelease("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition)"}</code> |
| <Link id="m-isnewplayer" /><code>{"private bool IsNewPlayer("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-moveblockspawn" /><code>{"private IEnumerator MoveBlockSpawn() (iterator)"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-rotation" /><code>{"private IEnumerator Rotation() (iterator)"}</code> |
| <Link id="m-snappoint" /><code>{"private void SnapPoint("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-startcheckingposition" /><code>{"private void StartCheckingPosition("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-startrotation" /><code>{"private void StartRotation()"}</code> |
| <Link id="m-syncposition-2" /><code>{"private void SyncPosition("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-syncrotation-2" /><code>{"private void SyncRotation("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool value)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `TimberBlockSpawner`:

[`ChisellingDeck.blockPositioner`](/game-api/types/alta-crafting/chisellingdeck#m-blockpositioner), [`ChisellingDeck.BlockPositioner`](/game-api/types/alta-crafting/chisellingdeck#m-blockpositioner-2).
