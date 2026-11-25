---
title: "CommandContext"
description: "One per console session: each websocket connection has its own, and Handle without a context uses one shared default."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandContext

A **class** in `Root.Township`, `Alta.Console`.

One per console session: each websocket connection has its own, and `Handle` without a context uses one shared default.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Documented in** [Writing commands](/game-api/console-and-utilities/commands#commandcontext)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommandContext("}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" user)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"CommandContext("}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" user, IEnumerable<"}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"> groupPermissions)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-callinguser" /><code><Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" CallingUser { get; }"}</code> |  |
| <Link id="m-creationtime" /><code>{"DateTime CreationTime { get; }"}</code> |  |
| <Link id="m-grouppermissions" /><code>{"IEnumerable<"}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"> "}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{" { get; }"}</code> |  |
| <Link id="m-rawcommand" /><code>{"string RawCommand { get; set; }"}</code> |  |
| <Link id="m-selection" /><code><Link to="/game-api/types/alta-console/altaselection">{"AltaSelection"}</Link>{" Selection { get; }"}</code> |  |

## Used in

Members of other types that take, return or hold a `CommandContext`:

[`Command.GetCommandPartInternal`](/game-api/types/alta-console/command#m-getcommandpartinternal), [`Command.GetCommandsInternal`](/game-api/types/alta-console/command#m-getcommandsinternal), [`CommandCollection.GetParts`](/game-api/types/alta-console/commandcollection#m-getparts), [`CommandCollection.Search`](/game-api/types/alta-console/commandcollection#m-search), [`CommandContextExtensions.GetDebugInfo`](/game-api/types/alta-console/commandcontextextensions#m-getdebuginfo), [`CommandPart.GetCommandPart`](/game-api/types/alta-console/commandpart#m-getcommandpart), [`CommandPart.GetCommandPartInternal`](/game-api/types/alta-console/commandpart#m-getcommandpartinternal), [`CommandPart.GetCommands`](/game-api/types/alta-console/commandpart#m-getcommands), [`CommandPart.GetCommandsInternal`](/game-api/types/alta-console/commandpart#m-getcommandsinternal), [`CommandPart.RequirementsAreMet`](/game-api/types/alta-console/commandpart#m-requirementsaremet), [`CommandService.CurrentContext`](/game-api/types/alta-console/commandservice#m-currentcontext), [`CommandService.defaultContext`](/game-api/types/alta-console/commandservice#m-defaultcontext), [`CommandService.Handle`](/game-api/types/alta-console/commandservice#m-handle), [`CommandService.Search`](/game-api/types/alta-console/commandservice#m-search), [`GroupPermissionAttribute.Check`](/game-api/types/alta-console/grouppermissionattribute#m-check), [`Module.GetCommandPartInternal`](/game-api/types/alta-console/module#m-getcommandpartinternal), [`Module.GetCommandsInternal`](/game-api/types/alta-console/module#m-getcommandsinternal), [`NonSimpleServerAttribute.Check`](/game-api/types/alta-console/nonsimpleserverattribute#m-check), [`NotAllowedInRemoteAttribute.Check`](/game-api/types/alta-console/notallowedinremoteattribute#m-check), [`RequirementAttribute.Check`](/game-api/types/alta-console/requirementattribute#m-check-2), [`WebSocketCommandHandler.context`](/game-api/types/alta-console/websocketcommandhandler#m-context), [`WithGroupPermissionsOnlyAttribute.Check`](/game-api/types/alta-console/withgrouppermissionsonlyattribute#m-check), [`WithPermissionOnlyAttribute.Check`](/game-api/types/alta-console/withpermissiononlyattribute#m-check).
