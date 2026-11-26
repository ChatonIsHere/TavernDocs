---
title: "CommandSync.CommandSyncInfo"
description: "Network payload the server sends back after running a command from the quick access menu: the command's full name and its result text."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandSync.CommandSyncInfo

A **private struct** in `Root.Township`, `ATT.Character.QuickAccessMenu`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Network payload the server sends back after running a command from the quick access menu: the command's full name and its result text.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Nested in** [`CommandSync`](/mod/game-api/types/game-other-namespaces/commandsync)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommandSyncInfo("}<Link to="/mod/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{" commandResult)"}</code> | <span className="api-desc">Creates a `CommandSync.CommandSyncInfo` from `commandResult`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-commandname" /><code>{"readonly string CommandName"}</code> | <span className="api-desc">Full name of the command that ran.</span> |
| <Link id="m-result" /><code>{"readonly string Result"}</code> | <span className="api-desc">The command's result string.</span> |

## Used in

Members of other types that take, return or hold a `CommandSyncInfo`:

<div className="api-used-in">

[`CommandSync.syncCommandConfirmation`](/mod/game-api/types/game-other-namespaces/commandsync#m-synccommandconfirmation), [`CommandSync.SyncCommandConfirmation`](/mod/game-api/types/game-other-namespaces/commandsync#m-synccommandconfirmation-2).

</div>
