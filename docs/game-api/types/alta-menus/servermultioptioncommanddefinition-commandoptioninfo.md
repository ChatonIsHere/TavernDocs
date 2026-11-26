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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Nested in** [`ServerMultiOptionCommandDefinition`](/game-api/types/alta-menus/servermultioptioncommanddefinition)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-argument" /><code>{"string Argument"}</code> | Button label for the option (renamed from `buttonLabel`). |
| <Link id="m-command" /><code>{"string command"}</code> | The full console command to run. |

## Used in

Members of other types that take, return or hold a `CommandOptionInfo`:

[`ServerMultiOptionCommandDefinition.commands`](/game-api/types/alta-menus/servermultioptioncommanddefinition#m-commands).
