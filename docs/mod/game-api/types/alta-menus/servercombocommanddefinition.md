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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`ServerCommandDefinitionBase`](/mod/game-api/types/alta-menus/servercommanddefinitionbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerComboCommandDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-commands" /><code>{"private string[] commands"}</code> | <span className="api-desc">Console commands to send, in order.</span> |
| <Link id="m-currentcommandindex" /><code>{"private int currentCommandIndex"}</code> | <span className="api-desc">Index of the command being sent.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | <span className="api-desc">NLog logger; logs each command sent and its result.</span> |
| <Link id="m-settingdescription" /><code>{"private string settingDescription"}</code> | <span className="api-desc">Backing field for `SettingDescription`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settingdescription-2" /><code>{"override string SettingDescription { get; }"}</code> | <span className="api-desc">Description shown on the settings panel.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-commands-2" /><code>{"private string[] Commands { get; }"}</code> | <span className="api-desc">The command list.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-runcommandonclient" /><code>{"override void RunCommandOnClient()"}</code> | <span className="api-desc">Starts sending the command list from the current index.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-oncommandcompleted" /><code>{"private void OnCommandCompleted(string command, string result)"}</code> | <span className="api-desc">Logs the result and sends the next command, or resets to the first when all are done.</span> |
| <Link id="m-runnextcommand" /><code>{"private void RunNextCommand()"}</code> | <span className="api-desc">Sends the current command to the server through `CommandSync`.</span> |

</details>
