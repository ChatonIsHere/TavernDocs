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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`SettingsFieldAccess`](/game-api/types/alta-utilities/settingsfieldaccess)
- **Derived types** [`AssistedSpawnCommandDefinition`](/game-api/types/alta-menus/assistedspawncommanddefinition), [`QamOptionAsButtonCommand`](/game-api/types/alta-menus/qamoptionasbuttoncommand), [`ServerComboCommandDefinition`](/game-api/types/alta-menus/servercombocommanddefinition), [`ServerCommandDefinition`](/game-api/types/alta-menus/servercommanddefinition), [`ServerMultiOptionCommandDefinition`](/game-api/types/alta-menus/servermultioptioncommanddefinition)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected ServerCommandDefinitionBase()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-runcommandonclient" /><code>{"abstract void RunCommandOnClient()"}</code> | Client: sends the command. `ServerCommandDefinition` routes its command string through `CommandSync.Instance`. |

## Used in

Members of other types that take, return or hold a `ServerCommandDefinitionBase`:

[`ServerCommandAction.command`](/game-api/types/alta-menus/servercommandaction#m-command).
