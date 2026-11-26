---
title: "CommandContext"
description: "Who ran a console command and with what: the calling user, their group permissions, the raw text and a selection."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandContext

A **class** in `Root.Township`, `Alta.Console`.

Who ran a console command and with what: the calling user, their group permissions, the raw text and a selection. Passed to requirement checks.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Documented in** [Writing commands](/mod/game-api/console-and-utilities/commands#commandcontext)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommandContext("}<Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" user)"}</code> | Creates a `CommandContext` from `user` and `groupPermissions`. |
| <Link id="m-ctor-2" /><code>{"CommandContext("}<Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" user, IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"> groupPermissions)"}</code> | Creates a `CommandContext` from `user` and `groupPermissions`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-callinguser" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" CallingUser { get; }"}</code> | The user who ran the command, with their permissions. |
| <Link id="m-creationtime" /><code>{"DateTime CreationTime { get; }"}</code> | When the context was made. |
| <Link id="m-grouppermissions" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"> "}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{" { get; }"}</code> | The caller's group permissions; empty if none were given. |
| <Link id="m-rawcommand" /><code>{"string RawCommand { get; set; }"}</code> | The command text as typed. |
| <Link id="m-selection" /><code><Link to="/mod/game-api/types/alta-console/altaselection">{"AltaSelection"}</Link>{" Selection { get; }"}</code> | Selection state commands can read or change. |

## Used in

Members of other types that take, return or hold a `CommandContext`:

[`Command.GetCommandPartInternal`](/mod/game-api/types/alta-console/command#m-getcommandpartinternal), [`Command.GetCommandsInternal`](/mod/game-api/types/alta-console/command#m-getcommandsinternal), [`CommandCollection.GetParts`](/mod/game-api/types/alta-console/commandcollection#m-getparts), [`CommandCollection.Search`](/mod/game-api/types/alta-console/commandcollection#m-search), [`CommandContextExtensions.GetDebugInfo`](/mod/game-api/types/alta-console/commandcontextextensions#m-getdebuginfo), [`CommandPart.GetCommandPart`](/mod/game-api/types/alta-console/commandpart#m-getcommandpart), [`CommandPart.GetCommandPartInternal`](/mod/game-api/types/alta-console/commandpart#m-getcommandpartinternal), [`CommandPart.GetCommands`](/mod/game-api/types/alta-console/commandpart#m-getcommands), [`CommandPart.GetCommandsInternal`](/mod/game-api/types/alta-console/commandpart#m-getcommandsinternal), [`CommandPart.RequirementsAreMet`](/mod/game-api/types/alta-console/commandpart#m-requirementsaremet), [`CommandService.CurrentContext`](/mod/game-api/types/alta-console/commandservice#m-currentcontext), [`CommandService.defaultContext`](/mod/game-api/types/alta-console/commandservice#m-defaultcontext), [`CommandService.Handle`](/mod/game-api/types/alta-console/commandservice#m-handle), [`CommandService.Search`](/mod/game-api/types/alta-console/commandservice#m-search), [`GroupPermissionAttribute.Check`](/mod/game-api/types/alta-console/grouppermissionattribute#m-check), [`Module.GetCommandPartInternal`](/mod/game-api/types/alta-console/module#m-getcommandpartinternal), [`Module.GetCommandsInternal`](/mod/game-api/types/alta-console/module#m-getcommandsinternal), [`NonSimpleServerAttribute.Check`](/mod/game-api/types/alta-console/nonsimpleserverattribute#m-check), [`NotAllowedInRemoteAttribute.Check`](/mod/game-api/types/alta-console/notallowedinremoteattribute#m-check), [`RequirementAttribute.Check`](/mod/game-api/types/alta-console/requirementattribute#m-check-2), [`WebSocketCommandHandler.context`](/mod/game-api/types/alta-console/websocketcommandhandler#m-context), [`WithGroupPermissionsOnlyAttribute.Check`](/mod/game-api/types/alta-console/withgrouppermissionsonlyattribute#m-check), [`WithPermissionOnlyAttribute.Check`](/mod/game-api/types/alta-console/withpermissiononlyattribute#m-check).
