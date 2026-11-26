---
title: "InfoDisplayer"
description: "UI component that shows one text line per InfoDisplayerAccess source, kept up to date as their text or enabled state changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InfoDisplayer

A **class** in `Root.Township`, the global namespace.

UI component that shows one text line per `InfoDisplayerAccess` source, kept up to date as their text or enabled state changes.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InfoDisplayer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-accesses" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/infodisplayeraccess">{"InfoDisplayerAccess"}</Link>{"[] accesses"}</code> | <span className="api-desc">Sources whose text is shown.</span> |
| <Link id="m-textprefab" /><code>{"private Text textPrefab"}</code> | <span className="api-desc">Text element copied for each source.</span> |
| <Link id="m-texts" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-i-l/infodisplayeraccess">{"InfoDisplayerAccess"}</Link>{", Text> texts"}</code> | <span className="api-desc">The text element made for each source.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unsubscribes from the sources and hides their text lines.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Subscribes to each source and shows a text line for each enabled one, creating it if needed.</span> |
| <Link id="m-updateenabled" /><code>{"private void UpdateEnabled("}<Link to="/mod/game-api/types/global-i-l/infodisplayeraccess">{"InfoDisplayerAccess"}</Link>{" access)"}</code> | <span className="api-desc">Shows or hides a source's text line when it is enabled or disabled.</span> |
| <Link id="m-updatetext" /><code>{"private void UpdateText("}<Link to="/mod/game-api/types/global-i-l/infodisplayeraccess">{"InfoDisplayerAccess"}</Link>{" access)"}</code> | <span className="api-desc">Updates a source's text line, creating it if needed.</span> |

</details>
