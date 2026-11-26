---
title: "ButtonEvents"
description: "Exposes a game Button's press, release and enabled changes as Unity events for wiring in the inspector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ButtonEvents

A **class** in `Root.Township`, `Alta.Meta.UI`.

Exposes a game `Button`'s press, release and enabled changes as Unity events for wiring in the inspector.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ButtonEvents()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-button" /><code>{"private "}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" button"}</code> | The button, filled from the same object by default. |
| <Link id="m-ondisable" /><code>{"private UnityEvent onDisable"}</code> | Fired when the button becomes disabled. |
| <Link id="m-onenable" /><code>{"private UnityEvent onEnable"}</code> | Fired when the button becomes enabled. |
| <Link id="m-onpress" /><code>{"private UnityEvent onPress"}</code> | Fired when the button is pressed. |
| <Link id="m-onrelease" /><code>{"private UnityEvent onRelease"}</code> | Fired when the button is released. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the button's pressed, released and enabled-changed events to the Unity events. |
| <Link id="m-handleenabledchanged" /><code>{"private void HandleEnabledChanged("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | Fires `onEnable` or `onDisable` to match the button's new state. |

</details>
