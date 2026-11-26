---
title: "TextBoard"
description: "Pickup with a UI text that registers a Textboard console module while enabled, with commands to add text, clear it and change its colour."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TextBoard

A **class** in `Root.Township`, no namespace.

Pickup with a UI text that registers a `Textboard` console module while enabled, with commands to add text, clear it and change its colour. It goes kinematic when let go.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TextBoard()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-module" /><code>{"private static "}<Link to="/game-api/types/alta-console/module">{"Module"}</Link>{" module"}</code> | The registered console module; static, so only the latest board gets commands. |
| <Link id="m-text" /><code>{"private Text text"}</code> | The UI text shown on the board. |

</details>

## Methods

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"private void Add(string message)"}</code> | Console command `add`: appends a line to the board. |
| <Link id="m-becomekinematic" /><code>{"private void BecomeKinematic("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Makes the rigidbody kinematic when the player lets go. |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | Console command `clear`: empties the board. |
| <Link id="m-color" /><code>{"private void Color(float r, float g, float b, float a = 1)"}</code> | Console command `color`: sets the text colour from r, g, b and optional a. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Removes the console module and the release listener. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Registers the console module (replacing any older one) and listens for the pickup being released. |

</details>
