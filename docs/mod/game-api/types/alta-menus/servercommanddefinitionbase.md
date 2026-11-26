---
title: "ServerCommandDefinitionBase"
description: "Base for quick access menu settings that run a server command when used, such as ServerCommandDefinition, ServerMultiOptionCommandDefinition and..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerCommandDefinitionBase

An **abstract class** in `Root.Township`, `Alta.Menu`.

Base for quick access menu settings that run a server command when used, such as `ServerCommandDefinition`, `ServerMultiOptionCommandDefinition` and `AssistedSpawnCommandDefinition`.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`SettingsFieldAccess`](/mod/game-api/types/alta-utilities/settingsfieldaccess)
- **Derived types** [`AssistedSpawnCommandDefinition`](/mod/game-api/types/alta-menus/assistedspawncommanddefinition), [`QamOptionAsButtonCommand`](/mod/game-api/types/alta-menus/qamoptionasbuttoncommand), [`ServerComboCommandDefinition`](/mod/game-api/types/alta-menus/servercombocommanddefinition), [`ServerCommandDefinition`](/mod/game-api/types/alta-menus/servercommanddefinition), [`ServerMultiOptionCommandDefinition`](/mod/game-api/types/alta-menus/servermultioptioncommanddefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ServerCommandDefinitionBase()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-runcommandonclient" /><code>{"abstract void RunCommandOnClient()"}</code> | <span className="api-desc">Client: sends the command. `ServerCommandDefinition` routes its command string through `CommandSync.Instance`.</span> |

## Used in

Members of other types that take, return or hold a `ServerCommandDefinitionBase`:

<div className="api-used-in">

[`ServerCommandAction.command`](/mod/game-api/types/alta-menus/servercommandaction#m-command).

</div>
