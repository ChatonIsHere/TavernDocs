---
title: "EditorFakeFocusEvents"
description: "Tracks whether the game window has input focus and raises static events when it changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EditorFakeFocusEvents

A **class** in `Root.Township`, no namespace.

Tracks whether the game window has input focus and raises static events when it changes. `MenuSettings.isAlwaysOnFocus` forces it to count as focused.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EditorFakeFocusEvents()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hasinputfocus" /><code>{"static bool hasInputFocus"}</code> | Whether the window currently has input focus. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-inputfocusacquired" /><code>{"static event Action InputFocusAcquired"}</code> | Raised when the window gains focus. |
| <Link id="m-inputfocuslost" /><code>{"static event Action InputFocusLost"}</code> | Raised when the window loses focus. |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets `hasInputFocus` from the application's focus state. |
| <Link id="m-onapplicationfocus" /><code>{"private void OnApplicationFocus(bool focus)"}</code> | Updates `hasInputFocus` and raises the matching event. |

</details>
