---
title: "InfoDisplayer"
description: "UI component that shows one text line per InfoDisplayerAccess source, kept up to date as their text or enabled state changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InfoDisplayer

A **class** in `Root.Township`, no namespace.

UI component that shows one text line per `InfoDisplayerAccess` source, kept up to date as their text or enabled state changes.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InfoDisplayer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-accesses" /><code>{"private "}<Link to="/game-api/types/global-i-l/infodisplayeraccess">{"InfoDisplayerAccess"}</Link>{"[] accesses"}</code> | Sources whose text is shown. |
| <Link id="m-textprefab" /><code>{"private Text textPrefab"}</code> | Text element copied for each source. |
| <Link id="m-texts" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-i-l/infodisplayeraccess">{"InfoDisplayerAccess"}</Link>{", Text> texts"}</code> | The text element made for each source. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unsubscribes from the sources and hides their text lines. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Subscribes to each source and shows a text line for each enabled one, creating it if needed. |
| <Link id="m-updateenabled" /><code>{"private void UpdateEnabled("}<Link to="/game-api/types/global-i-l/infodisplayeraccess">{"InfoDisplayerAccess"}</Link>{" access)"}</code> | Shows or hides a source's text line when it is enabled or disabled. |
| <Link id="m-updatetext" /><code>{"private void UpdateText("}<Link to="/game-api/types/global-i-l/infodisplayeraccess">{"InfoDisplayerAccess"}</Link>{" access)"}</code> | Updates a source's text line, creating it if needed. |

</details>
