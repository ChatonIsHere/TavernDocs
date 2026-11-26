---
title: "ServerMultiCommandAction"
description: "Client menu control that builds one button per option of a multi-option server command and sends the chosen option."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerMultiCommandAction

A **class** in `Root.Township`, `Alta.Menu`.

Client menu control that builds one button per option of a multi-option server command and sends the chosen option. Base for `AssistedSpawnCommandAction`.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`MenuGameSetting`](/mod/game-api/types/alta-menus/menugamesetting)
- **Derived types** [`AssistedSpawnCommandAction`](/mod/game-api/types/alta-menus/assistedspawncommandaction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerMultiCommandAction()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-issetup" /><code>{"protected bool isSetUp"}</code> | Set once the buttons are built, so `SetSettings` only runs once. |

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buttonparent" /><code>{"private Transform buttonParent"}</code> | Transform the buttons are spawned under. |
| <Link id="m-buttonprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" buttonPrefab"}</code> | Prefab for each option button. |
| <Link id="m-buttontext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" buttonText"}</code> | Text showing the command's name. |
| <Link id="m-mindelaybetweencommands" /><code>{"private float minDelayBetweenCommands"}</code> | Cooldown in seconds after a command. Default 0.5. |
| <Link id="m-nextcommand" /><code>{"private static float nextCommand"}</code> | Static time before which no control of this type can send again. |
| <Link id="m-optioncommands" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/servermultioptioncommanddefinition">{"ServerMultiOptionCommandDefinition"}</Link>{" optionCommands"}</code> | The multi-option command definition. |
| <Link id="m-pressablelayer" /><code>{"private const string pressableLayer"}</code> | Layer name `OnlyOnPlayerHMD`. The code passes the same string directly. |
| <Link id="m-width" /><code>{"private float width"}</code> | Length of the row the buttons are spread across. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setsettings" /><code>{"override void SetSettings("}<Link to="/mod/game-api/types/alta-utilities/isettingsfieldaccess">{"ISettingsFieldAccess"}</Link>{" newSettingToDisplay)"}</code> | First call only: takes the multi-option command and builds its buttons. |
| <Link id="m-dynamicbuttonsetup" /><code>{"protected virtual void DynamicButtonSetup("}<Link to="/mod/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" textButton, int buttonIndex)"}</code> | Wires a button to send the command with its option index. Overridden by subclasses. |
| <Link id="m-setupcontrolview" /><code>{"protected void SetupControlView("}<Link to="/mod/game-api/types/alta-menus/iusesmultiplebuttons">{"IUsesMultipleButtons"}</Link>{" multiCommandOptions)"}</code> | Shows the command name and spawns a button per label, spaced evenly along `width` and on the `OnlyOnPlayerHMD` layer. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Editor: draws the line the buttons are laid out along. |
| <Link id="m-sendcommand" /><code>{"private void SendCommand(int commandIndex)"}</code> | Sets the option index and runs the command, unless the shared cooldown is running. |

</details>
