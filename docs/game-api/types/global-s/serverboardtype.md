---
title: "ServerBoardType"
description: "Which list a server board in the menu shows: public servers, my servers, open servers or discover."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerBoardType

An **enum** in `Root.Township`, no namespace.

Which list a server board in the menu shows: public servers, my servers, open servers or discover.

- **Listed in** [No namespace: S](/game-api/types/global-s)

## Values

| Member |
| --- |
| <Link id="m-discoverservers" /><code>{"DiscoverServers = 3"}</code> |
| <Link id="m-myservers" /><code>{"MyServers = 1"}</code> |
| <Link id="m-openservers" /><code>{"OpenServers = 2"}</code> |
| <Link id="m-publicserver" /><code>{"PublicServer = 0"}</code> |

## Used in

Members of other types that take, return or hold a `ServerBoardType`:

[`ServerBoard.type`](/game-api/types/global-s/serverboard#m-type), [`ServerBoard.Type`](/game-api/types/global-s/serverboard#m-type-2), [`ServerSelectionMenu.boardsByType`](/game-api/types/global-s/serverselectionmenu#m-boardsbytype), [`ServerSelectionMenu.SelectServer`](/game-api/types/global-s/serverselectionmenu#m-selectserver), [`ServerSelectionMenu.startingBoard`](/game-api/types/global-s/serverselectionmenu#m-startingboard), [`ServerSelectionMenu.SwitchToBoard`](/game-api/types/global-s/serverselectionmenu#m-switchtoboard-2).
