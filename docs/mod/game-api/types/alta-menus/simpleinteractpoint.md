---
title: "SimpleInteractPoint"
description: "A basic button-style Interactable that raises Interacted on grab and Released on let go, and can be disabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimpleInteractPoint

A **class** in `Root.Township`, `Alta.UserInterface`.

A basic button-style `Interactable` that raises `Interacted` on grab and `Released` on let go, and can be disabled.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`Interactable`](/mod/game-api/types/global-i-l/interactable)
- **Derived types** [`LabelledInteractPoint`](/mod/game-api/types/alta-menus/labelledinteractpoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SimpleInteractPoint()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buttondisabled" /><code>{"private Action ButtonDisabled"}</code> | Private callback run whenever `IsDisabled` is set. `OnEnable` adds `OnButtonDisabled` again each time it runs. |
| <Link id="m-interacted" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" interacted"}</code> | Event behind `Interacted`, can also be set in the inspector. |
| <Link id="m-isdisabled" /><code>{"private bool isDisabled"}</code> | Backing field for `IsDisabled`. |
| <Link id="m-released" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" released"}</code> | Event behind `Released`, can also be set in the inspector. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdisabled-2" /><code>{"bool IsDisabled { get; set; }"}</code> | While true, grabs and releases raise nothing. Disabling while held raises `Released` once. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-interacted-2" /><code>{"event Action Interacted"}</code> | Raised when the point is grabbed while enabled. |
| <Link id="m-released-2" /><code>{"event Action Released"}</code> | Raised when the point is let go while enabled. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onbuttondisabled" /><code>{"protected virtual void OnButtonDisabled()"}</code> | Override to react when `IsDisabled` is set. Empty here. |
| <Link id="m-onenable" /><code>{"protected virtual void OnEnable()"}</code> | Hooks the grab and release handlers. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unhooks the grab and release handlers. |
| <Link id="m-oninteract" /><code>{"private void OnInteract("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" __, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" _)"}</code> | Raises `Interacted` unless disabled. |
| <Link id="m-onrelease" /><code>{"private void OnRelease("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" __, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" _)"}</code> | Raises `Released` unless disabled. |

</details>
