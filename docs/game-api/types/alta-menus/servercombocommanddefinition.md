---
title: "ServerComboCommandDefinition"
description: "class ServerComboCommandDefinition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerComboCommandDefinition

A **class** in `Root.Township`, `Alta.Menu`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`ServerCommandDefinitionBase`](/game-api/types/alta-menus/servercommanddefinitionbase)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerComboCommandDefinition()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-commands" /><code>{"private string[] commands"}</code> |
| <Link id="m-currentcommandindex" /><code>{"private int currentCommandIndex"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> |
| <Link id="m-settingdescription" /><code>{"private string settingDescription"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-settingdescription-2" /><code>{"override string SettingDescription { get; }"}</code> |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-commands-2" /><code>{"private string[] Commands { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-runcommandonclient" /><code>{"override void RunCommandOnClient()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-oncommandcompleted" /><code>{"private void OnCommandCompleted(string command, string result)"}</code> |
| <Link id="m-runnextcommand" /><code>{"private void RunNextCommand()"}</code> |

</details>
