---
title: "KeyItem"
description: "class KeyItem in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KeyItem

A **class** in `Root.Township`, `Alta.Inventory`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`Pickup`](/game-api/types/global-p/pickup)
- **Derived types** [`KeyItemEvent`](/game-api/types/alta-items/keyitemevent), [`KeyUnityEvent`](/game-api/types/alta-items/keyunityevent)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"KeyItem()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-colliderstodisable" /><code>{"private GameObject[] collidersToDisable"}</code> |  |
| <Link id="m-tipoffset" /><code>{"private Vector3 tipOffset"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isinsidelock" /><code>{"bool IsInsideLock { get; set; }"}</code> |  |
| <Link id="m-lockposition" /><code>{"Vector3 LockPosition { get; set; }"}</code> |  |
| <Link id="m-lookatlock" /><code>{"Vector3 LookAtLock { get; set; }"}</code> |  |
| <Link id="m-tipoffset-2" /><code>{"Vector3 TipOffset { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-assessscore" /><code>{"override bool AssessScore("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out float score)"}</code> |  |
| <Link id="m-finishinteraction" /><code>{"override void FinishInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-setcolliders" /><code>{"void SetColliders(bool enabled)"}</code> |  |
| <Link id="m-deregisterik" /><code>{"private void DeRegisterIK("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-ondisable" /><code>{"protected override void OnDisable()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"protected override void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-onenable" /><code>{"protected override void OnEnable()"}</code> |  |
| <Link id="m-registerik" /><code>{"private void RegisterIK("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-reposition" /><code>{"private void Reposition()"}</code> |  |

## Used in

Members of other types that take, return or hold a `KeyItem`:

[`Lock.currentKey`](/game-api/types/alta-items/lock#m-currentkey), [`Lock.SetupKey`](/game-api/types/alta-items/lock#m-setupkey).
