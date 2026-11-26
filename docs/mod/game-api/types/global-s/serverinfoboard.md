---
title: "ServerInfoBoard"
description: "Main menu board that shows the selected server's description."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerInfoBoard

A **class** in `Root.Township`, the global namespace.

Main menu board that shows the selected server's description.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerInfoBoard()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-descriptiontext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" descriptionText"}</code> | <span className="api-desc">Text renderer for the description.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setserver" /><code>{"void SetServer("}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" serverElement)"}</code> | <span className="api-desc">Shows the description of the given server. Passing a null server element clears the text.</span> |
| <Link id="m-setserver-2" /><code>{"void SetServer("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> | <span className="api-desc">Shows the description of the given server. Passing a null server element clears the text.</span> |

## Used in

Members of other types that take, return or hold a `ServerInfoBoard`:

<div className="api-used-in">

[`ServerSelectionMenu.serverInfoBoard`](/mod/game-api/types/global-s/serverselectionmenu#m-serverinfoboard).

</div>
