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
| <Link id="m-ctor" /><code>{"ServerMultiCommandAction()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-issetup" /><code>{"protected bool isSetUp"}</code> | <span className="api-desc">Set once the buttons are built, so `SetSettings` only runs once.</span> |

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buttonparent" /><code>{"private Transform buttonParent"}</code> | <span className="api-desc">Transform the buttons are spawned under.</span> |
| <Link id="m-buttonprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" buttonPrefab"}</code> | <span className="api-desc">Prefab for each option button.</span> |
| <Link id="m-buttontext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" buttonText"}</code> | <span className="api-desc">Text showing the command's name.</span> |
| <Link id="m-mindelaybetweencommands" /><code>{"private float minDelayBetweenCommands"}</code> | <span className="api-desc">Cooldown in seconds after a command. Default 0.5.</span> |
| <Link id="m-nextcommand" /><code>{"private static float nextCommand"}</code> | <span className="api-desc">Static time before which no control of this type can send again.</span> |
| <Link id="m-optioncommands" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/servermultioptioncommanddefinition">{"ServerMultiOptionCommandDefinition"}</Link>{" optionCommands"}</code> | <span className="api-desc">The multi-option command definition.</span> |
| <Link id="m-pressablelayer" /><code>{"private const string pressableLayer"}</code> | <span className="api-desc">Layer name `OnlyOnPlayerHMD`. The code passes the same string directly.</span> |
| <Link id="m-width" /><code>{"private float width"}</code> | <span className="api-desc">Length of the row the buttons are spread across.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setsettings" /><code>{"override void SetSettings("}<Link to="/mod/game-api/types/alta-utilities/isettingsfieldaccess">{"ISettingsFieldAccess"}</Link>{" newSettingToDisplay)"}</code> | <span className="api-desc">First call only: takes the multi-option command and builds its buttons.</span> |
| <Link id="m-dynamicbuttonsetup" /><code>{"protected virtual void DynamicButtonSetup("}<Link to="/mod/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" textButton, int buttonIndex)"}</code> | <span className="api-desc">Wires a button to send the command with its option index. Overridden by subclasses.</span> |
| <Link id="m-setupcontrolview" /><code>{"protected void SetupControlView("}<Link to="/mod/game-api/types/alta-menus/iusesmultiplebuttons">{"IUsesMultipleButtons"}</Link>{" multiCommandOptions)"}</code> | <span className="api-desc">Shows the command name and spawns a button per label, spaced evenly along `width` and on the `OnlyOnPlayerHMD` layer.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Editor: draws the line the buttons are laid out along.</span> |
| <Link id="m-sendcommand" /><code>{"private void SendCommand(int commandIndex)"}</code> | <span className="api-desc">Sets the option index and runs the command, unless the shared cooldown is running.</span> |

</details>
