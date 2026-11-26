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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`ServerCommandDefinitionBase`](/mod/game-api/types/alta-menus/servercommanddefinitionbase), [`IUsesMultipleButtons`](/mod/game-api/types/alta-menus/iusesmultiplebuttons)
- **Nested types** [`CommandOptionInfo`](/mod/game-api/types/alta-menus/servermultioptioncommanddefinition-commandoptioninfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerMultiOptionCommandDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-commands" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/servermultioptioncommanddefinition-commandoptioninfo">{"ServerMultiOptionCommandDefinition.CommandOptionInfo"}</Link>{"[] commands"}</code> | <span className="api-desc">The options.</span> |
| <Link id="m-currentcommandindex" /><code>{"private int currentCommandIndex"}</code> | <span className="api-desc">Index of the selected option.</span> |
| <Link id="m-settingdescription" /><code>{"private string settingDescription"}</code> | <span className="api-desc">Backing field for `SettingDescription`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-labels" /><code>{"virtual string[] Labels { get; }"}</code> | <span className="api-desc">Each option's argument text, used as button labels.</span> |
| <Link id="m-settingdescription-2" /><code>{"override string SettingDescription { get; }"}</code> | <span className="api-desc">Description text set on the asset.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-runcommandonclient" /><code>{"override void RunCommandOnClient()"}</code> | <span className="api-desc">Sends the selected option's command through `CommandSync.Instance.RouteCommand`.</span> |
| <Link id="m-setcommandindex" /><code>{"void SetCommandIndex(int index)"}</code> | <span className="api-desc">Picks which option runs.</span> |

## Used in

Members of other types that take, return or hold a `ServerMultiOptionCommandDefinition`:

<div className="api-used-in">

[`ServerMultiCommandAction.optionCommands`](/mod/game-api/types/alta-menus/servermulticommandaction#m-optioncommands).

</div>
