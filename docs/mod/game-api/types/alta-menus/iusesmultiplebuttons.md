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
| <Link id="m-displayname" /><code>{"string DisplayName { get; }"}</code> | <span className="api-desc">Name shown for the command.</span> |
| <Link id="m-labels" /><code>{"string[] Labels { get; }"}</code> | <span className="api-desc">Text for each button.</span> |

## Used in

Members of other types that take, return or hold a `IUsesMultipleButtons`:

<div className="api-used-in">

[`ServerMultiCommandAction.SetupControlView`](/mod/game-api/types/alta-menus/servermulticommandaction#m-setupcontrolview).

</div>
