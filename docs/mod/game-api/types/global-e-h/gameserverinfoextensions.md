---
title: "GameServerInfoExtensions"
description: "Extension methods on GameServerInfo for joining a server and naming its save folder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameServerInfoExtensions

A **static class** in `Root.Township`, the global namespace.

Extension methods on `GameServerInfo` for joining a server and naming its save folder.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Attributes** `Extension`

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfoldername" /><code>{"static string GetFolderName("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" serverInfo)"}</code> | <span className="api-desc">Save folder name for a server: its ID. The private overload builds the old "ID - Name" form.</span> |
| <Link id="m-getoldfoldername" /><code>{"static string GetOldFolderName("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" serverInfo)"}</code> | <span className="api-desc">Old save folder name, "ID - Name", for finding saves made before the ID-only naming.</span> |
| <Link id="m-joinserverasync" /><code>{"static async Task<"}<Link to="/mod/game-api/types/assembly-api-models/serverjoinresult">{"ServerJoinResult"}</Link>{"> JoinServerAsync("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" gameServer)"}</code> | <span className="api-desc">Asks the API to join the server; dev servers and ID -1 skip the API and connect locally (loopback, port 1757).</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getfoldername-2" /><code>{"private static string GetFolderName(int id, string name)"}</code> | <span className="api-desc">Save folder name for a server: its ID. The private overload builds the old "ID - Name" form.</span> |

</details>
