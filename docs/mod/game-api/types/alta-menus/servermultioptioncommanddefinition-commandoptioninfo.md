---
title: "ServerMultiOptionCommandDefinition.CommandOptionInfo"
description: "One option in a ServerMultiOptionCommandDefinition: the command to run and its button text."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerMultiOptionCommandDefinition.CommandOptionInfo

A **private struct** in `Root.Township`, `Alta.Menu`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One option in a `ServerMultiOptionCommandDefinition`: the command to run and its button text.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Nested in** [`ServerMultiOptionCommandDefinition`](/mod/game-api/types/alta-menus/servermultioptioncommanddefinition)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-argument" /><code>{"string Argument"}</code> | <span className="api-desc">Button label for the option (renamed from `buttonLabel`).</span> |
| <Link id="m-command" /><code>{"string command"}</code> | <span className="api-desc">The full console command to run.</span> |

## Used in

Members of other types that take, return or hold a `CommandOptionInfo`:

<div className="api-used-in">

[`ServerMultiOptionCommandDefinition.commands`](/mod/game-api/types/alta-menus/servermultioptioncommanddefinition#m-commands).

</div>
