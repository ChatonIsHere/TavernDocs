---
title: "ServerMultiCommandAction"
description: "class ServerMultiCommandAction in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerMultiCommandAction

A **class** in `Root.Township`, `Alta.Menu`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`MenuGameSetting`](/game-api/types/alta-menus/menugamesetting)
- **Derived types** [`AssistedSpawnCommandAction`](/game-api/types/alta-menus/assistedspawncommandaction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerMultiCommandAction()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-buttonparent" /><code>{"private Transform buttonParent"}</code> |  |
| <Link id="m-buttonprefab" /><code>{"private "}<Link to="/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" buttonPrefab"}</code> |  |
| <Link id="m-buttontext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" buttonText"}</code> |  |
| <Link id="m-issetup" /><code>{"protected bool isSetUp"}</code> |  |
| <Link id="m-mindelaybetweencommands" /><code>{"private float minDelayBetweenCommands"}</code> |  |
| <Link id="m-nextcommand" /><code>{"private static float nextCommand"}</code> |  |
| <Link id="m-optioncommands" /><code>{"private "}<Link to="/game-api/types/alta-menus/servermultioptioncommanddefinition">{"ServerMultiOptionCommandDefinition"}</Link>{" optionCommands"}</code> |  |
| <Link id="m-pressablelayer" /><code>{"private const string pressableLayer"}</code> |  |
| <Link id="m-width" /><code>{"private float width"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setsettings" /><code>{"override void SetSettings("}<Link to="/game-api/types/alta-utilities/isettingsfieldaccess">{"ISettingsFieldAccess"}</Link>{" newSettingToDisplay)"}</code> |  |
| <Link id="m-dynamicbuttonsetup" /><code>{"protected virtual void DynamicButtonSetup("}<Link to="/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" textButton, int buttonIndex)"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
| <Link id="m-sendcommand" /><code>{"private void SendCommand(int commandIndex)"}</code> |  |
| <Link id="m-setupcontrolview" /><code>{"protected void SetupControlView("}<Link to="/game-api/types/alta-menus/iusesmultiplebuttons">{"IUsesMultipleButtons"}</Link>{" multiCommandOptions)"}</code> |  |
