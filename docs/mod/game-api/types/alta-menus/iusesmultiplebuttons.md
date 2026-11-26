---
title: "IUsesMultipleButtons"
description: "A menu command shown as a row of buttons, one per label."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IUsesMultipleButtons

An **interface** in `Root.Township`, `Alta.Menu`.

A menu command shown as a row of buttons, one per label.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Derived types** [`AssistedSpawnCommandDefinition`](/mod/game-api/types/alta-menus/assistedspawncommanddefinition), [`IHasDynamicArguments`](/mod/game-api/types/alta-menus/ihasdynamicarguments), [`ServerMultiOptionCommandDefinition`](/mod/game-api/types/alta-menus/servermultioptioncommanddefinition)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-displayname" /><code>{"string DisplayName { get; }"}</code> | Name shown for the command. |
| <Link id="m-labels" /><code>{"string[] Labels { get; }"}</code> | Text for each button. |

## Used in

Members of other types that take, return or hold a `IUsesMultipleButtons`:

[`ServerMultiCommandAction.SetupControlView`](/mod/game-api/types/alta-menus/servermulticommandaction#m-setupcontrolview).
