---
title: "CommandSearchResult"
description: "struct CommandSearchResult in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandSearchResult

A **struct** in `Root.Township`, `Alta.Console`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommandSearchResult("}<Link to="/game-api/types/alta-console/commandresultsuccess">{"CommandResultSuccess"}</Link>{" success, "}<Link to="/game-api/types/alta-console/command">{"Command"}</Link>{" command, object[] arguments = null)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code>{"object[] arguments"}</code> |  |
| <Link id="m-command" /><code><Link to="/game-api/types/alta-console/command">{"Command"}</Link>{" command"}</code> |  |
| <Link id="m-success" /><code><Link to="/game-api/types/alta-console/commandresultsuccess">{"CommandResultSuccess"}</Link>{" success"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-incorrectparametertypes" /><code>{"static "}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" IncorrectParameterTypes("}<Link to="/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> |  |
| <Link id="m-notenoughparameters" /><code>{"static "}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" NotEnoughParameters("}<Link to="/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> |  |
| <Link id="m-parameterparsingfailure" /><code>{"static "}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" ParameterParsingFailure("}<Link to="/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> |  |
| <Link id="m-success-2" /><code>{"static "}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" Success("}<Link to="/game-api/types/alta-console/command">{"Command"}</Link>{" command, object[] arguments)"}</code> |  |
| <Link id="m-toomanyparameters" /><code>{"static "}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" TooManyParameters("}<Link to="/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> |  |

## Used in

Members of other types that take, return or hold a `CommandSearchResult`:

[`Command.AreParametersViable`](/game-api/types/alta-console/command#m-areparametersviable), [`Command.GetCommandsInternal`](/game-api/types/alta-console/command#m-getcommandsinternal), [`CommandCollection.Search`](/game-api/types/alta-console/commandcollection#m-search), [`CommandPart.GetCommands`](/game-api/types/alta-console/commandpart#m-getcommands), [`CommandPart.GetCommandsInternal`](/game-api/types/alta-console/commandpart#m-getcommandsinternal), [`RepeatCommandModule.Handler`](/game-api/types/alta-console/repeatcommandmodule#m-handler), [`RepeatCommandModule.Repeat`](/game-api/types/alta-console/repeatcommandmodule#m-repeat-2), [`CommandService.CustomHandler`](/game-api/types/alta-console/commandservice#m-customhandler), [`CommandService.HandleMatchedCommand`](/game-api/types/alta-console/commandservice#m-handlematchedcommand), [`CommandService.LastCommand`](/game-api/types/alta-console/commandservice#m-lastcommand), [`CommandService.Search`](/game-api/types/alta-console/commandservice#m-search), [`Module.GetCommandsInternal`](/game-api/types/alta-console/module#m-getcommandsinternal).
