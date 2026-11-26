---
title: "ServerInfoBoard"
description: "Main menu board that shows the selected server's description."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerInfoBoard

A **class** in `Root.Township`, no namespace.

Main menu board that shows the selected server's description.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerInfoBoard()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-descriptiontext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" descriptionText"}</code> | Text renderer for the description. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setserver" /><code>{"void SetServer("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" serverElement)"}</code> | Shows the description of the given server. Passing a null server element clears the text. |
| <Link id="m-setserver-2" /><code>{"void SetServer("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> | Shows the description of the given server. Passing a null server element clears the text. |

## Used in

Members of other types that take, return or hold a `ServerInfoBoard`:

[`ServerSelectionMenu.serverInfoBoard`](/game-api/types/global-s/serverselectionmenu#m-serverinfoboard).
