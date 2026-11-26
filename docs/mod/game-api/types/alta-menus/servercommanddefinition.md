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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`ServerCommandDefinitionBase`](/mod/game-api/types/alta-menus/servercommanddefinitionbase)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerCommandDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-command" /><code>{"private string command"}</code> | <span className="api-desc">The console command text to send.</span> |
| <Link id="m-settingdescription" /><code>{"private string settingDescription"}</code> | <span className="api-desc">Backing field for `SettingDescription`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settingdescription-2" /><code>{"override string SettingDescription { get; }"}</code> | <span className="api-desc">Description shown on the settings panel.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-runcommandonclient" /><code>{"override void RunCommandOnClient()"}</code> | <span className="api-desc">Sends `command` to the server through `CommandSync`.</span> |
