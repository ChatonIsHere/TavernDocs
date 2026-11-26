---
title: "ServerCommandDefinition"
description: "Asset for a menu entry that sends one fixed console command to the server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerCommandDefinition

A **class** in `Root.Township`, `Alta.Menu`.

Asset for a menu entry that sends one fixed console command to the server. Created from the Township, Quick Access Menu, Field Access menu.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`ServerCommandDefinitionBase`](/game-api/types/alta-menus/servercommanddefinitionbase)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerCommandDefinition()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-command" /><code>{"private string command"}</code> | The console command text to send. |
| <Link id="m-settingdescription" /><code>{"private string settingDescription"}</code> | Backing field for `SettingDescription`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settingdescription-2" /><code>{"override string SettingDescription { get; }"}</code> | Description shown on the settings panel. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-runcommandonclient" /><code>{"override void RunCommandOnClient()"}</code> | Sends `command` to the server through `CommandSync`. |
