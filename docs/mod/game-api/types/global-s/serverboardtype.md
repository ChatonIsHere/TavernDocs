---
title: "ServerBoardType"
description: "Which list a server board in the menu shows: public servers, my servers, open servers or discover."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerBoardType

An **enum** in `Root.Township`, the global namespace.

Which list a server board in the menu shows: public servers, my servers, open servers or discover.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)

## Values

| Member |
| --- |
| <Link id="m-discoverservers" /><code>{"DiscoverServers = 3"}</code> |
| <Link id="m-myservers" /><code>{"MyServers = 1"}</code> |
| <Link id="m-openservers" /><code>{"OpenServers = 2"}</code> |
| <Link id="m-publicserver" /><code>{"PublicServer = 0"}</code> |

## Used in

Members of other types that take, return or hold a `ServerBoardType`:

[`ServerBoard.type`](/mod/game-api/types/global-s/serverboard#m-type), [`ServerBoard.Type`](/mod/game-api/types/global-s/serverboard#m-type-2), [`ServerSelectionMenu.boardsByType`](/mod/game-api/types/global-s/serverselectionmenu#m-boardsbytype), [`ServerSelectionMenu.SelectServer`](/mod/game-api/types/global-s/serverselectionmenu#m-selectserver), [`ServerSelectionMenu.startingBoard`](/mod/game-api/types/global-s/serverselectionmenu#m-startingboard), [`ServerSelectionMenu.SwitchToBoard`](/mod/game-api/types/global-s/serverselectionmenu#m-switchtoboard-2).
