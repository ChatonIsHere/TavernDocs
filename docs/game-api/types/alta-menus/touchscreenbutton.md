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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`Button`](/game-api/types/alta-menus/button), [`ITouchScreenButton`](/game-api/types/global-i-l/itouchscreenbutton)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TouchScreenButton()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-touchsize" /><code>{"private Vector2 touchSize"}</code> | Backing field for `ButtonSize`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-buttonsize" /><code>{"Vector2 ButtonSize { get; }"}</code> | The touch area size of the button. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: if the size is zero, copies it from a `BasicTouchScreenButton` on the same object. |

</details>
