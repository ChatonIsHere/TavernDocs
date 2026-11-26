---
title: "TextBoard"
description: "Pickup with a UI text that registers a Textboard console module while enabled, with commands to add text, clear it and change its colour."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TextBoard

A **class** in `Root.Township`, the global namespace.

Pickup with a UI text that registers a `Textboard` console module while enabled, with commands to add text, clear it and change its colour. It goes kinematic when let go.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TextBoard()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-module" /><code>{"private static "}<Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{" module"}</code> | <span className="api-desc">The registered console module; static, so only the latest board gets commands.</span> |
| <Link id="m-text" /><code>{"private Text text"}</code> | <span className="api-desc">The UI text shown on the board.</span> |

</details>

## Methods

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"private void Add(string message)"}</code> | <span className="api-desc">Console command `add`: appends a line to the board.</span> |
| <Link id="m-becomekinematic" /><code>{"private void BecomeKinematic("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Makes the rigidbody kinematic when the player lets go.</span> |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | <span className="api-desc">Console command `clear`: empties the board.</span> |
| <Link id="m-color" /><code>{"private void Color(float r, float g, float b, float a = 1)"}</code> | <span className="api-desc">Console command `color`: sets the text colour from r, g, b and optional a.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Removes the console module and the release listener.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Registers the console module (replacing any older one) and listens for the pickup being released.</span> |

</details>
