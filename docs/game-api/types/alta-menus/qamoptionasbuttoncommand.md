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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`ServerCommandDefinitionBase`](/game-api/types/alta-menus/servercommanddefinitionbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"QamOptionAsButtonCommand()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code>{"private "}<Link to="/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{" action"}</code> | The quick access menu action to run. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-runcommandonclient" /><code>{"override void RunCommandOnClient()"}</code> | Runs `action` with the higher hand's controller. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getcontrollerhack" /><code>{"private static "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" GetControllerHack()"}</code> | Returns whichever of the local player's hand controllers is held higher. |

</details>
