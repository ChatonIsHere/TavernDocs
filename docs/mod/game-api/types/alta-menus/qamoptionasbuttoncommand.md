---
title: "QamOptionAsButtonCommand"
description: "Client: a menu command that runs a quick access menu action, as if picked from that menu."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QamOptionAsButtonCommand

A **class** in `Root.Township`, `Alta.Menu`.

Client: a menu command that runs a quick access menu action, as if picked from that menu.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`ServerCommandDefinitionBase`](/mod/game-api/types/alta-menus/servercommanddefinitionbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"QamOptionAsButtonCommand()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{" action"}</code> | <span className="api-desc">The quick access menu action to run.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-runcommandonclient" /><code>{"override void RunCommandOnClient()"}</code> | <span className="api-desc">Runs `action` with the higher hand's controller.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getcontrollerhack" /><code>{"private static "}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" GetControllerHack()"}</code> | <span className="api-desc">Returns whichever of the local player's hand controllers is held higher.</span> |

</details>
