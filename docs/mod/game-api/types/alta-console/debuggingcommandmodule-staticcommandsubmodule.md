---
title: "DebuggingCommandModule.StaticCommandSubModule"
description: "Console module debug static for modifiable static objects such as bridges and stairs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebuggingCommandModule.StaticCommandSubModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `debug static` for modifiable static objects such as bridges and stairs. Server only, in play.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`DebuggingCommandModule`](/mod/game-api/types/alta-console/debuggingcommandmodule)
- **Attributes** `Module`, `ServerOnly`, `PlayOnly`

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkmodifiablestatic" /><code>{"private static string CheckModifiableStatic()"}</code> | <span className="api-desc">Command `check-current`: table of every modifiable static hash and whether it is modified.</span> |
| <Link id="m-fixmodifiablestatic" /><code>{"private static string FixModifiableStatic(params uint[] hashes)"}</code> | <span className="api-desc">Command `fix`: marks each given hash as modified (built or fixed).</span> |
| <Link id="m-listmodifiablestatic" /><code>{"private static string ListModifiableStatic()"}</code> | <span className="api-desc">Command `list`: table of the known objects (bridges, stairs, well, shortcuts) with their hashes and state.</span> |
| <Link id="m-setmodifiablestatic" /><code>{"private static string SetModifiableStatic(uint hash, bool state)"}</code> | <span className="api-desc">Command `modify`: sets one hash's modified state.</span> |

</details>
