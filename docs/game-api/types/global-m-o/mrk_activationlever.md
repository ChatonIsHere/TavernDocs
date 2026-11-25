---
title: "MRK_ActivationLever"
description: "A networked, saved activation lever used by some puzzles."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MRK_ActivationLever

A **class** in `Root.Township`, no namespace.

A networked, saved activation lever used by some puzzles.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<MRK_ActivationLeverSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<MRK_ActivationLeverSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`MRK_ActivationLeverSaveData`](/game-api/types/global-m-o/mrk_activationleversavedata)
- **Documented in** [Buttons and levers](/game-api/items/buttons-and-levers)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MRK_ActivationLever()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-columnanimation" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" columnAnimation"}</code> |  |
| <Link id="m-columnmovement" /><code>{"private "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" columnMovement"}</code> |  |
| <Link id="m-costcolumn" /><code>{"private Transform costColumn"}</code> |  |
| <Link id="m-costdefinition" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" costDefinition"}</code> |  |
| <Link id="m-costinput" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" costInput"}</code> |  |
| <Link id="m-costoverflowtarget" /><code>{"private Transform costOverflowTarget"}</code> |  |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> |  |
| <Link id="m-onbecameactive" /><code>{"private UnityEvent onBecameActive"}</code> |  |
| <Link id="m-onbecameinactive" /><code>{"private UnityEvent onBecameInactive"}</code> |  |
| <Link id="m-syncactive" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncActive"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> |  |
| <Link id="m-animatecolumn" /><code>{"private IEnumerator AnimateColumn() (iterator)"}</code> |  |
| <Link id="m-checkquantity" /><code>{"private void CheckQuantity("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-filterinput" /><code>{"private void FilterInput("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> |  |
| <Link id="m-startanimatecolumn" /><code>{"private void StartAnimateColumn()"}</code> |  |
| <Link id="m-syncactive-2" /><code>{"private void SyncActive("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isSnapping)"}</code> |  |
