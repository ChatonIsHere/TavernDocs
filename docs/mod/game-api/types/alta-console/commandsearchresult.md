---
title: "CommandSearchResult"
description: "The outcome of matching console input to a command: which command was found, whether its arguments fit, and the parsed arguments."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandSearchResult

A **struct** in `Root.Township`, `Alta.Console`.

The outcome of matching console input to a command: which command was found, whether its arguments fit, and the parsed arguments.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommandSearchResult("}<Link to="/mod/game-api/types/alta-console/commandresultsuccess">{"CommandResultSuccess"}</Link>{" success, "}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command, object[] arguments = null)"}</code> | <span className="api-desc">Creates a `CommandSearchResult` from `success`, `command` and `arguments`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code>{"object[] arguments"}</code> | <span className="api-desc">The parsed argument values, ready to pass to the command. Null on failure results.</span> |
| <Link id="m-command" /><code><Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command"}</code> | <span className="api-desc">The command the input matched, even when the match failed on its arguments.</span> |
| <Link id="m-success" /><code><Link to="/mod/game-api/types/alta-console/commandresultsuccess">{"CommandResultSuccess"}</Link>{" success"}</code> | <span className="api-desc">Whether the match worked, or which way it failed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-incorrectparametertypes" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" IncorrectParameterTypes("}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> | <span className="api-desc">Makes a failed result for a command whose arguments didn't match its parameter types.</span> |
| <Link id="m-notenoughparameters" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" NotEnoughParameters("}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> | <span className="api-desc">Makes a failed result for a command that was given too few arguments.</span> |
| <Link id="m-parameterparsingfailure" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" ParameterParsingFailure("}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> | <span className="api-desc">Makes a failed result for a command whose arguments couldn't be parsed.</span> |
| <Link id="m-success-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" Success("}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command, object[] arguments)"}</code> | <span className="api-desc">Makes a successful result holding the command and its parsed arguments.</span> |
| <Link id="m-toomanyparameters" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" TooManyParameters("}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command)"}</code> | <span className="api-desc">Makes a failed result for a command that was given too many arguments.</span> |

## Used in

Members of other types that take, return or hold a `CommandSearchResult`:

<div className="api-used-in">

[`Command.AreParametersViable`](/mod/game-api/types/alta-console/command#m-areparametersviable), [`Command.GetCommandsInternal`](/mod/game-api/types/alta-console/command#m-getcommandsinternal), [`CommandCollection.Search`](/mod/game-api/types/alta-console/commandcollection#m-search), [`CommandPart.GetCommands`](/mod/game-api/types/alta-console/commandpart#m-getcommands), [`CommandPart.GetCommandsInternal`](/mod/game-api/types/alta-console/commandpart#m-getcommandsinternal), [`RepeatCommandModule.Handler`](/mod/game-api/types/alta-console/repeatcommandmodule#m-handler), [`RepeatCommandModule.Repeat`](/mod/game-api/types/alta-console/repeatcommandmodule#m-repeat-2), [`CommandService.CustomHandler`](/mod/game-api/types/alta-console/commandservice#m-customhandler), [`CommandService.HandleMatchedCommand`](/mod/game-api/types/alta-console/commandservice#m-handlematchedcommand), [`CommandService.LastCommand`](/mod/game-api/types/alta-console/commandservice#m-lastcommand), [`CommandService.Search`](/mod/game-api/types/alta-console/commandservice#m-search), [`Module.GetCommandsInternal`](/mod/game-api/types/alta-console/module#m-getcommandsinternal).

</div>
