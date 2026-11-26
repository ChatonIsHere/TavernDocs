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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`MenuGameSetting`](/mod/game-api/types/alta-menus/menugamesetting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerCommandAction()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buttontext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" buttonText"}</code> | <span className="api-desc">Text showing the command's name.</span> |
| <Link id="m-command" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/servercommanddefinitionbase">{"ServerCommandDefinitionBase"}</Link>{" command"}</code> | <span className="api-desc">The command definition this button runs.</span> |
| <Link id="m-mindelaybetweencommands" /><code>{"private float minDelayBetweenCommands"}</code> | <span className="api-desc">Cooldown in seconds after a command. Default 0.5.</span> |
| <Link id="m-nextcommand" /><code>{"private static float nextCommand"}</code> | <span className="api-desc">Static time before which no button of this type can send again.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendcommand" /><code>{"void SendCommand()"}</code> | <span className="api-desc">Runs the command unless the shared cooldown is still running, then restarts the cooldown.</span> |
| <Link id="m-setsettings" /><code>{"override void SetSettings("}<Link to="/mod/game-api/types/alta-utilities/isettingsfieldaccess">{"ISettingsFieldAccess"}</Link>{" newSettingToDisplay)"}</code> | <span className="api-desc">Takes the command definition and shows its display name on the button.</span> |
