---
title: "ServerComboCommandDefinition"
description: "A menu command that sends a list of console commands to the server one after another, each after the last one's result comes back."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerComboCommandDefinition

A **class** in `Root.Township`, `Alta.Menu`.

A menu command that sends a list of console commands to the server one after another, each after the last one's result comes back. Client side.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`ServerCommandDefinitionBase`](/game-api/types/alta-menus/servercommanddefinitionbase)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerComboCommandDefinition()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-commands" /><code>{"private string[] commands"}</code> | Console commands to send, in order. |
| <Link id="m-currentcommandindex" /><code>{"private int currentCommandIndex"}</code> | Index of the command being sent. |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | NLog logger; logs each command sent and its result. |
| <Link id="m-settingdescription" /><code>{"private string settingDescription"}</code> | Backing field for `SettingDescription`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settingdescription-2" /><code>{"override string SettingDescription { get; }"}</code> | Description shown on the settings panel. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-commands-2" /><code>{"private string[] Commands { get; }"}</code> | The command list. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-runcommandonclient" /><code>{"override void RunCommandOnClient()"}</code> | Starts sending the command list from the current index. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-oncommandcompleted" /><code>{"private void OnCommandCompleted(string command, string result)"}</code> | Logs the result and sends the next command, or resets to the first when all are done. |
| <Link id="m-runnextcommand" /><code>{"private void RunNextCommand()"}</code> | Sends the current command to the server through `CommandSync`. |

</details>
