---
title: "GachaHandle"
description: "class GachaHandle in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GachaHandle

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GachaHandle()"}</code> |

## Fields

<details>
<summary>21 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-activationcurve" /><code>{"private AnimationCurve activationCurve"}</code> |
| <Link id="m-alignspickupwithhand" /><code>{"private bool alignsPickupWithHand"}</code> |
| <Link id="m-angleactivationthreshold" /><code>{"private float angleActivationThreshold"}</code> |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> |
| <Link id="m-currentinteractor" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" currentInteractor"}</code> |
| <Link id="m-inputrotation" /><code>{"private Quaternion inputRotation"}</code> |
| <Link id="m-isactivated" /><code>{"private bool isActivated"}</code> |
| <Link id="m-isinverted" /><code>{"private bool isInverted"}</code> |
| <Link id="m-ispositionbased" /><code>{"private bool isPositionBased"}</code> |
| <Link id="m-isresettingautomatic" /><code>{"private bool isResettingAutomatic"}</code> |
| <Link id="m-latesthandforward" /><code>{"private Vector3 latestHandForward"}</code> |
| <Link id="m-maxangle" /><code>{"private float maxAngle"}</code> |
| <Link id="m-onactivated" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onActivated"}</code> |
| <Link id="m-onreset" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onReset"}</code> |
| <Link id="m-positioncenter" /><code>{"private Transform positionCenter"}</code> |
| <Link id="m-revertspeed" /><code>{"private float revertSpeed"}</code> |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<float> sync"}</code> |
| <Link id="m-target" /><code>{"private Transform target"}</code> |
| <Link id="m-targetpickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" targetPickup"}</code> |
| <Link id="m-updaterotation" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateRotation"}</code> |
| <Link id="m-worldtolocal" /><code>{"private Matrix4x4 worldToLocal"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-resetactivation" /><code>{"void ResetActivation()"}</code> |

<details>
<summary>9 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-filterinteraction" /><code>{"private void FilterInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-revertrotation" /><code>{"private void RevertRotation()"}</code> |
| <Link id="m-startcheck" /><code>{"private void StartCheck("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-stopcheck" /><code>{"private void StopCheck("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, float angle)"}</code> |
| <Link id="m-updaterotation-2" /><code>{"private void UpdateRotation()"}</code> |

</details>
