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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ButtonEvents()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-button" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" button"}</code> | <span className="api-desc">The button, filled from the same object by default.</span> |
| <Link id="m-ondisable" /><code>{"private UnityEvent onDisable"}</code> | <span className="api-desc">Fired when the button becomes disabled.</span> |
| <Link id="m-onenable" /><code>{"private UnityEvent onEnable"}</code> | <span className="api-desc">Fired when the button becomes enabled.</span> |
| <Link id="m-onpress" /><code>{"private UnityEvent onPress"}</code> | <span className="api-desc">Fired when the button is pressed.</span> |
| <Link id="m-onrelease" /><code>{"private UnityEvent onRelease"}</code> | <span className="api-desc">Fired when the button is released.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the button's pressed, released and enabled-changed events to the Unity events.</span> |
| <Link id="m-handleenabledchanged" /><code>{"private void HandleEnabledChanged("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | <span className="api-desc">Fires `onEnable` or `onDisable` to match the button's new state.</span> |

</details>
