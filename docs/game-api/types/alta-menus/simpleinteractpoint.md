---
title: "SimpleInteractPoint"
description: "class SimpleInteractPoint in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimpleInteractPoint

A **class** in `Root.Township`, `Alta.UserInterface`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`Interactable`](/game-api/types/global-i-l/interactable)
- **Derived types** [`LabelledInteractPoint`](/game-api/types/alta-menus/labelledinteractpoint)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SimpleInteractPoint()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-buttondisabled" /><code>{"private Action ButtonDisabled"}</code> |
| <Link id="m-interacted" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" interacted"}</code> |
| <Link id="m-isdisabled" /><code>{"private bool isDisabled"}</code> |
| <Link id="m-released" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" released"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isdisabled-2" /><code>{"bool IsDisabled { get; set; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-interacted-2" /><code>{"event Action Interacted"}</code> |
| <Link id="m-released-2" /><code>{"event Action Released"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-onbuttondisabled" /><code>{"protected virtual void OnButtonDisabled()"}</code> |
| <Link id="m-onenable" /><code>{"protected virtual void OnEnable()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-oninteract" /><code>{"private void OnInteract("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" __, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" _)"}</code> |
| <Link id="m-onrelease" /><code>{"private void OnRelease("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" __, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" _)"}</code> |

</details>
