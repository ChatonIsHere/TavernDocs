---
title: "ServerMultiOptionCommandDefinition"
description: "class ServerMultiOptionCommandDefinition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerMultiOptionCommandDefinition

A **class** in `Root.Township`, `Alta.Menu`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`ServerCommandDefinitionBase`](/game-api/types/alta-menus/servercommanddefinitionbase), [`IUsesMultipleButtons`](/game-api/types/alta-menus/iusesmultiplebuttons)
- **Nested types** [`CommandOptionInfo`](/game-api/types/alta-menus/servermultioptioncommanddefinition-commandoptioninfo)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerMultiOptionCommandDefinition()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-commands" /><code>{"private "}<Link to="/game-api/types/alta-menus/servermultioptioncommanddefinition-commandoptioninfo">{"ServerMultiOptionCommandDefinition.CommandOptionInfo"}</Link>{"[] commands"}</code> |
| <Link id="m-currentcommandindex" /><code>{"private int currentCommandIndex"}</code> |
| <Link id="m-settingdescription" /><code>{"private string settingDescription"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-labels" /><code>{"virtual string[] Labels { get; }"}</code> |
| <Link id="m-settingdescription-2" /><code>{"override string SettingDescription { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-runcommandonclient" /><code>{"override void RunCommandOnClient()"}</code> |
| <Link id="m-setcommandindex" /><code>{"void SetCommandIndex(int index)"}</code> |

## Used in

Members of other types that take, return or hold a `ServerMultiOptionCommandDefinition`:

[`ServerMultiCommandAction.optionCommands`](/game-api/types/alta-menus/servermulticommandaction#m-optioncommands).
