---
title: "EditorFakeFocusEvents"
description: "Tracks whether the game window has input focus and raises static events when it changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EditorFakeFocusEvents

A **class** in `Root.Township`, the global namespace.

Tracks whether the game window has input focus and raises static events when it changes. `MenuSettings.isAlwaysOnFocus` forces it to count as focused.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EditorFakeFocusEvents()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hasinputfocus" /><code>{"static bool hasInputFocus"}</code> | <span className="api-desc">Whether the window currently has input focus.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-inputfocusacquired" /><code>{"static event Action InputFocusAcquired"}</code> | <span className="api-desc">Raised when the window gains focus.</span> |
| <Link id="m-inputfocuslost" /><code>{"static event Action InputFocusLost"}</code> | <span className="api-desc">Raised when the window loses focus.</span> |

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets `hasInputFocus` from the application's focus state.</span> |
| <Link id="m-onapplicationfocus" /><code>{"private void OnApplicationFocus(bool focus)"}</code> | <span className="api-desc">Updates `hasInputFocus` and raises the matching event.</span> |

</details>
