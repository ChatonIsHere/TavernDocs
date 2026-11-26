---
title: "TouchScreenButton"
description: "A UI Button with a touch area size, for the in-world touch screen menus."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TouchScreenButton

A **class** in `Root.Township`, `Alta.Meta.UI`.

A UI `Button` with a touch area size, for the in-world touch screen menus.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`Button`](/mod/game-api/types/alta-menus/button), [`ITouchScreenButton`](/mod/game-api/types/global-i-l/itouchscreenbutton)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TouchScreenButton()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-touchsize" /><code>{"private Vector2 touchSize"}</code> | <span className="api-desc">Backing field for `ButtonSize`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-buttonsize" /><code>{"Vector2 ButtonSize { get; }"}</code> | <span className="api-desc">The touch area size of the button.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: if the size is zero, copies it from a `BasicTouchScreenButton` on the same object.</span> |

</details>
