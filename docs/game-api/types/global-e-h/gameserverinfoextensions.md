---
title: "GameServerInfoExtensions"
description: "Extension methods on GameServerInfo for joining a server and naming its save folder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameServerInfoExtensions

A **static class** in `Root.Township`, no namespace.

Extension methods on `GameServerInfo` for joining a server and naming its save folder.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Attributes** `Extension`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfoldername" /><code>{"static string GetFolderName("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" serverInfo)"}</code> | Save folder name for a server: its ID. The private overload builds the old "ID - Name" form. |
| <Link id="m-getoldfoldername" /><code>{"static string GetOldFolderName("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" serverInfo)"}</code> | Old save folder name, "ID - Name", for finding saves made before the ID-only naming. |
| <Link id="m-joinserverasync" /><code>{"static async Task<"}<Link to="/game-api/types/assembly-api-models/serverjoinresult">{"ServerJoinResult"}</Link>{"> JoinServerAsync("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" gameServer)"}</code> | Asks the API to join the server; dev servers and ID -1 skip the API and connect locally (loopback, port 1757). |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getfoldername-2" /><code>{"private static string GetFolderName(int id, string name)"}</code> | Save folder name for a server: its ID. The private overload builds the old "ID - Name" form. |

</details>
