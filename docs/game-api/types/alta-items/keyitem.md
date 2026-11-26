---
title: "KeyItem"
description: "A pickup that works as a key."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KeyItem

A **class** in `Root.Township`, `Alta.Inventory`.

A pickup that works as a key. While inside a lock it's held at the lock's position and facing, after the player's IK runs.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`Pickup`](/game-api/types/global-p/pickup)
- **Derived types** [`KeyItemEvent`](/game-api/types/alta-items/keyitemevent), [`KeyUnityEvent`](/game-api/types/alta-items/keyunityevent)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"KeyItem()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colliderstodisable" /><code>{"private GameObject[] collidersToDisable"}</code> | Objects moved to the Hand Triggers layer by `SetColliders(false)` and back to Default with true. |
| <Link id="m-tipoffset" /><code>{"private Vector3 tipOffset"}</code> | Backing field for `TipOffset`, the key tip's local offset. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isinsidelock" /><code>{"bool IsInsideLock { get; set; }"}</code> | Whether the key is in a lock. Set by the lock. |
| <Link id="m-lockposition" /><code>{"Vector3 LockPosition { get; set; }"}</code> | Where the key is held while in a lock. |
| <Link id="m-lookatlock" /><code>{"Vector3 LookAtLock { get; set; }"}</code> | Direction the key faces while in a lock. |
| <Link id="m-tipoffset-2" /><code>{"Vector3 TipOffset { get; }"}</code> | Local offset of the key's tip. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-assessscore" /><code>{"override bool AssessScore("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out float score)"}</code> | Can't be grabbed while the component is disabled. |
| <Link id="m-finishinteraction" /><code>{"override void FinishInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Lets go normally, but treats a key inside a lock as mid-interaction so it stays put. |
| <Link id="m-setcolliders" /><code>{"void SetColliders(bool enabled)"}</code> | Moves the key's set colliders to the Default layer, or to Hand Triggers to turn their collisions off. |
| <Link id="m-ondisable" /><code>{"protected override void OnDisable()"}</code> | Stops following the holder's IK. |
| <Link id="m-ondrawgizmosselected" /><code>{"protected override void OnDrawGizmosSelected()"}</code> | Draws the key's tip in the editor. |
| <Link id="m-onenable" /><code>{"protected override void OnEnable()"}</code> | Starts following the holder's IK when grabbed. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-deregisterik" /><code>{"private void DeRegisterIK("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Unhooks `Reposition` from the holding player's IK updates when the interaction ends. |
| <Link id="m-registerik" /><code>{"private void RegisterIK("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Hooks `Reposition` into the holding player's IK updates when a player starts holding the key. |
| <Link id="m-reposition" /><code>{"private void Reposition()"}</code> | After IK runs, snaps the key to `LockPosition` facing `LookAtLock` while it's inside a lock. |

</details>

## Used in

Members of other types that take, return or hold a `KeyItem`:

[`Lock.currentKey`](/game-api/types/alta-items/lock#m-currentkey), [`Lock.SetupKey`](/game-api/types/alta-items/lock#m-setupkey).
