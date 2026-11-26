---
title: "ServerCommandAction"
description: "Client menu button that runs one server command definition, with a short cooldown shared by all such buttons."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerCommandAction

A **class** in `Root.Township`, `Alta.Menu`.

Client menu button that runs one server command definition, with a short cooldown shared by all such buttons.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`MenuGameSetting`](/game-api/types/alta-menus/menugamesetting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerCommandAction()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buttontext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" buttonText"}</code> | Text showing the command's name. |
| <Link id="m-command" /><code>{"private "}<Link to="/game-api/types/alta-menus/servercommanddefinitionbase">{"ServerCommandDefinitionBase"}</Link>{" command"}</code> | The command definition this button runs. |
| <Link id="m-mindelaybetweencommands" /><code>{"private float minDelayBetweenCommands"}</code> | Cooldown in seconds after a command. Default 0.5. |
| <Link id="m-nextcommand" /><code>{"private static float nextCommand"}</code> | Static time before which no button of this type can send again. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendcommand" /><code>{"void SendCommand()"}</code> | Runs the command unless the shared cooldown is still running, then restarts the cooldown. |
| <Link id="m-setsettings" /><code>{"override void SetSettings("}<Link to="/game-api/types/alta-utilities/isettingsfieldaccess">{"ISettingsFieldAccess"}</Link>{" newSettingToDisplay)"}</code> | Takes the command definition and shows its display name on the button. |
