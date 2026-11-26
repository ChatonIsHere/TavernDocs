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
| <Link id="m-ctor" /><code>{"SimpleInteractPoint()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buttondisabled" /><code>{"private Action ButtonDisabled"}</code> | <span className="api-desc">Private callback run whenever `IsDisabled` is set. `OnEnable` adds `OnButtonDisabled` again each time it runs.</span> |
| <Link id="m-interacted" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" interacted"}</code> | <span className="api-desc">Event behind `Interacted`, can also be set in the inspector.</span> |
| <Link id="m-isdisabled" /><code>{"private bool isDisabled"}</code> | <span className="api-desc">Backing field for `IsDisabled`.</span> |
| <Link id="m-released" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" released"}</code> | <span className="api-desc">Event behind `Released`, can also be set in the inspector.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdisabled-2" /><code>{"bool IsDisabled { get; set; }"}</code> | <span className="api-desc">While true, grabs and releases raise nothing. Disabling while held raises `Released` once.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-interacted-2" /><code>{"event Action Interacted"}</code> | <span className="api-desc">Raised when the point is grabbed while enabled.</span> |
| <Link id="m-released-2" /><code>{"event Action Released"}</code> | <span className="api-desc">Raised when the point is let go while enabled.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onbuttondisabled" /><code>{"protected virtual void OnButtonDisabled()"}</code> | <span className="api-desc">Override to react when `IsDisabled` is set. Empty here.</span> |
| <Link id="m-onenable" /><code>{"protected virtual void OnEnable()"}</code> | <span className="api-desc">Hooks the grab and release handlers.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unhooks the grab and release handlers.</span> |
| <Link id="m-oninteract" /><code>{"private void OnInteract("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" __, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" _)"}</code> | <span className="api-desc">Raises `Interacted` unless disabled.</span> |
| <Link id="m-onrelease" /><code>{"private void OnRelease("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" __, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" _)"}</code> | <span className="api-desc">Raises `Released` unless disabled.</span> |

</details>
