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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`Pickup`](/mod/game-api/types/global-p/pickup)
- **Derived types** [`KeyItemEvent`](/mod/game-api/types/alta-items/keyitemevent), [`KeyUnityEvent`](/mod/game-api/types/alta-items/keyunityevent)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"KeyItem()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colliderstodisable" /><code>{"private GameObject[] collidersToDisable"}</code> | <span className="api-desc">Objects moved to the Hand Triggers layer by `SetColliders(false)` and back to Default with true.</span> |
| <Link id="m-tipoffset" /><code>{"private Vector3 tipOffset"}</code> | <span className="api-desc">Backing field for `TipOffset`, the key tip's local offset.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isinsidelock" /><code>{"bool IsInsideLock { get; set; }"}</code> | <span className="api-desc">Whether the key is in a lock. Set by the lock.</span> |
| <Link id="m-lockposition" /><code>{"Vector3 LockPosition { get; set; }"}</code> | <span className="api-desc">Where the key is held while in a lock.</span> |
| <Link id="m-lookatlock" /><code>{"Vector3 LookAtLock { get; set; }"}</code> | <span className="api-desc">Direction the key faces while in a lock.</span> |
| <Link id="m-tipoffset-2" /><code>{"Vector3 TipOffset { get; }"}</code> | <span className="api-desc">Local offset of the key's tip.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-assessscore" /><code>{"override bool AssessScore("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out float score)"}</code> | <span className="api-desc">Can't be grabbed while the component is disabled.</span> |
| <Link id="m-finishinteraction" /><code>{"override void FinishInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Lets go normally, but treats a key inside a lock as mid-interaction so it stays put.</span> |
| <Link id="m-setcolliders" /><code>{"void SetColliders(bool enabled)"}</code> | <span className="api-desc">Moves the key's set colliders to the Default layer, or to Hand Triggers to turn their collisions off.</span> |
| <Link id="m-ondisable" /><code>{"protected override void OnDisable()"}</code> | <span className="api-desc">Stops following the holder's IK.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"protected override void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the key's tip in the editor.</span> |
| <Link id="m-onenable" /><code>{"protected override void OnEnable()"}</code> | <span className="api-desc">Starts following the holder's IK when grabbed.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-deregisterik" /><code>{"private void DeRegisterIK("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Unhooks `Reposition` from the holding player's IK updates when the interaction ends.</span> |
| <Link id="m-registerik" /><code>{"private void RegisterIK("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Hooks `Reposition` into the holding player's IK updates when a player starts holding the key.</span> |
| <Link id="m-reposition" /><code>{"private void Reposition()"}</code> | <span className="api-desc">After IK runs, snaps the key to `LockPosition` facing `LookAtLock` while it's inside a lock.</span> |

</details>

## Used in

Members of other types that take, return or hold a `KeyItem`:

<div className="api-used-in">

[`Lock.currentKey`](/mod/game-api/types/alta-items/lock#m-currentkey), [`Lock.SetupKey`](/mod/game-api/types/alta-items/lock#m-setupkey).

</div>
