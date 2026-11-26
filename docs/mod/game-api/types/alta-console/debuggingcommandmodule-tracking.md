---
title: "DebuggingCommandModule.Tracking"
description: "Console module debug tracking for following an entity by a name you give it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebuggingCommandModule.Tracking

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `debug tracking` for following an entity by a name you give it. Needs the `server_owner` permission.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`DebuggingCommandModule`](/mod/game-api/types/alta-console/debuggingcommandmodule)
- **Attributes** `Module`, `WithPermissionOnly`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/entityinfo">{"EntityInfo"}</Link>{" Get(string name)"}</code> | <span className="api-desc">Command `get`: info on the tracked entity with that name.</span> |
| <Link id="m-remove" /><code>{"static void Remove(string name)"}</code> | <span className="api-desc">Command `remove`: stops tracking that name.</span> |
| <Link id="m-track" /><code>{"static void Track(uint entityId, string name)"}</code> | <span className="api-desc">Command `track`: starts tracking an entity id under a name. Throws if the entity isn't found.</span> |
