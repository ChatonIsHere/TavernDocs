---
title: "ServerMultiOptionCommandDefinition"
description: "Menu command asset with several fixed commands, one per button."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerMultiOptionCommandDefinition

A **class** in `Root.Township`, `Alta.Menu`.

Menu command asset with several fixed commands, one per button. The chosen one is routed to the server when run.

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

| Member | What it is |
| --- | --- |
| <Link id="m-commands" /><code>{"private "}<Link to="/game-api/types/alta-menus/servermultioptioncommanddefinition-commandoptioninfo">{"ServerMultiOptionCommandDefinition.CommandOptionInfo"}</Link>{"[] commands"}</code> | The options. |
| <Link id="m-currentcommandindex" /><code>{"private int currentCommandIndex"}</code> | Index of the selected option. |
| <Link id="m-settingdescription" /><code>{"private string settingDescription"}</code> | Backing field for `SettingDescription`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-labels" /><code>{"virtual string[] Labels { get; }"}</code> | Each option's argument text, used as button labels. |
| <Link id="m-settingdescription-2" /><code>{"override string SettingDescription { get; }"}</code> | Description text set on the asset. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-runcommandonclient" /><code>{"override void RunCommandOnClient()"}</code> | Sends the selected option's command through `CommandSync.Instance.RouteCommand`. |
| <Link id="m-setcommandindex" /><code>{"void SetCommandIndex(int index)"}</code> | Picks which option runs. |

## Used in

Members of other types that take, return or hold a `ServerMultiOptionCommandDefinition`:

[`ServerMultiCommandAction.optionCommands`](/game-api/types/alta-menus/servermulticommandaction#m-optioncommands).
