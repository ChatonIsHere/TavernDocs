---
title: "AssistedSpawnCommandAction"
description: "class AssistedSpawnCommandAction in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AssistedSpawnCommandAction

A **class** in `Root.Township`, `Alta.Menu`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`ServerMultiCommandAction`](/game-api/types/alta-menus/servermulticommandaction), [`IUseVirtualKeyboard`](/game-api/types/global-i-l/iusevirtualkeyboard)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AssistedSpawnCommandAction()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-assistedcommanddefinition" /><code>{"private "}<Link to="/game-api/types/alta-menus/assistedspawncommanddefinition">{"AssistedSpawnCommandDefinition"}</Link>{" assistedCommandDefinition"}</code> |
| <Link id="m-baseuser" /><code>{"private "}<Link to="/game-api/types/global-i-l/iusevirtualkeyboard">{"IUseVirtualKeyboard"}</Link>{" baseUser"}</code> |
| <Link id="m-progresstext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" progressText"}</code> |
| <Link id="m-submitbutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" submitButton"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-maxcharacterslimit" /><code>{"int MaxCharactersLimit { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-handlekeyboardinput" /><code>{"void HandleKeyboardInput(string input)"}</code> |
| <Link id="m-handlekeyboardsubmit" /><code>{"void HandleKeyboardSubmit()"}</code> |
| <Link id="m-isshowingsecret" /><code>{"bool IsShowingSecret()"}</code> |
| <Link id="m-lostfocus" /><code>{"void LostFocus()"}</code> |
| <Link id="m-next" /><code>{"void Next()"}</code> |
| <Link id="m-previous" /><code>{"void Previous()"}</code> |
| <Link id="m-setsettings" /><code>{"override void SetSettings("}<Link to="/game-api/types/alta-utilities/isettingsfieldaccess">{"ISettingsFieldAccess"}</Link>{" newSettingToDisplay)"}</code> |
| <Link id="m-dynamicbuttonsetup" /><code>{"protected override void DynamicButtonSetup("}<Link to="/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" textButton, int buttonIndex)"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkcansubmitcommand" /><code>{"private void CheckCanSubmitCommand()"}</code> |
| <Link id="m-connectkeyboard" /><code>{"private void ConnectKeyboard("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-setprogresstext" /><code>{"private void SetProgressText()"}</code> |
| <Link id="m-setquantityforcommand" /><code>{"private void SetQuantityForCommand(int quantity)"}</code> |
| <Link id="m-submitcommand" /><code>{"private void SubmitCommand("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> |

</details>
