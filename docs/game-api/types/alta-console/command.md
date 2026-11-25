---
title: "Command"
description: "One console command built from a method with a CommandAttribute."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Command

A **class** in `Root.Township`, `Alta.Console`.

One console command built from a method with a `CommandAttribute`. Matches typed words against its name and parameters and calls the method. The method is called with no instance, so it must be static.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** [`CommandPart`](/game-api/types/alta-console/commandpart)
- **Documented in** [Writing commands](/game-api/console-and-utilities/commands#module-and-command), [Health and damage](/game-api/items/health-and-damage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Command(MethodInfo method, "}<Link to="/game-api/types/alta-console/module">{"Module"}</Link>{" parent, "}<Link to="/game-api/types/alta-console/commandattribute">{"CommandAttribute"}</Link>{" attribute)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-method" /><code>{"private MethodInfo method"}</code> |  |
| <Link id="m-voidtaskresult" /><code>{"private static readonly Type VoidTaskResult"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attribute" /><code><Link to="/game-api/types/alta-console/commandattribute">{"CommandAttribute"}</Link>{" Attribute { get; set; }"}</code> | The `CommandAttribute` the command was made from. |
| <Link id="m-invokecommand" /><code>{"Func<"}<Link to="/game-api/types/alta-console/progressivehandler">{"ProgressiveHandler"}</Link>{", object[], Task<"}<Link to="/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{">> InvokeCommand { get; private set; }"}</code> | Calls the method with converted arguments and wraps what it returns (awaiting tasks) in a `CommandResult`. |
| <Link id="m-isloggingvalueastable" /><code>{"bool IsLoggingValueAsTable { get; set; }"}</code> | Whether the result is logged as a table. |
| <Link id="m-isprogressive" /><code>{"bool IsProgressive { get; set; }"}</code> | Progressive commands are not supported; invoking one returns an error result. |
| <Link id="m-method-2" /><code>{"MethodInfo Method { get; }"}</code> | Meant to be the method behind the command, but never set in this build, so it is null. |
| <Link id="m-parameters" /><code>{"List<"}<Link to="/game-api/types/alta-console/parameter">{"Parameter"}</Link>{"> Parameters { get; }"}</code> | The command's parameters. A last `string` or array parameter takes all remaining words. |
| <Link id="m-returntype" /><code>{"Type ReturnType { get; }"}</code> | What the method returns, with `Task` unwrapped; `void` for none. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Full command path followed by its parameters. |
| <Link id="m-areparametersviable" /><code>{"private "}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" AreParametersViable(string[] lower, string[] cased, int index)"}</code> |  |
| <Link id="m-attemptconvertarguments" /><code>{"private bool AttemptConvertArguments(int matchedCount, string[] argumentParts, int index, object[] convertedArguments)"}</code> |  |
| <Link id="m-getcommandpartinternal" /><code>{"protected override IEnumerable<"}<Link to="/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{"> GetCommandPartInternal(string[] lower, string[] cased, int index, "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context) (iterator)"}</code> | Returns this command if the words end at its name. |
| <Link id="m-getcommandsinternal" /><code>{"protected override IEnumerable<"}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{"> GetCommandsInternal(string[] lower, string[] cased, int index, "}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context) (iterator)"}</code> | Tries to match the words after the command name to its parameters and returns the result. |
| <Link id="m-invoke" /><code>{"private async Task<"}<Link to="/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{"> Invoke("}<Link to="/game-api/types/alta-console/progressivehandler">{"ProgressiveHandler"}</Link>{" progressivehandler, object[] args)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Command`:

[`CommandCollection.GetParams`](/game-api/types/alta-console/commandcollection#m-getparams), [`CommandCollection.ProcessParam`](/game-api/types/alta-console/commandcollection#m-processparam), [`CommandResult.Command`](/game-api/types/alta-console/commandresult#m-command), [`CommandResult.CommandResult`](/game-api/types/alta-console/commandresult#m-ctor), [`CommandResult.ErrorResult`](/game-api/types/alta-console/commandresult#m-errorresult), [`CommandResult.VoidResult`](/game-api/types/alta-console/commandresult#m-voidresult), [`CommandResult<T>.CommandResult<T>`](/game-api/types/alta-console/commandresult-t#m-ctor), [`BaseCommands.LogCommand`](/game-api/types/alta-console/basecommands#m-logcommand), [`CommandSearchResult.command`](/game-api/types/alta-console/commandsearchresult#m-command), [`CommandSearchResult.CommandSearchResult`](/game-api/types/alta-console/commandsearchresult#m-ctor), [`CommandSearchResult.IncorrectParameterTypes`](/game-api/types/alta-console/commandsearchresult#m-incorrectparametertypes), [`CommandSearchResult.NotEnoughParameters`](/game-api/types/alta-console/commandsearchresult#m-notenoughparameters), [`CommandSearchResult.ParameterParsingFailure`](/game-api/types/alta-console/commandsearchresult#m-parameterparsingfailure), [`CommandSearchResult.Success`](/game-api/types/alta-console/commandsearchresult#m-success-2), [`CommandSearchResult.TooManyParameters`](/game-api/types/alta-console/commandsearchresult#m-toomanyparameters), [`DynamicCommandResult.DynamicCommandResult`](/game-api/types/alta-console/dynamiccommandresult#m-ctor), [`Module.Commands`](/game-api/types/alta-console/module#m-commands), [`Parameter.Command`](/game-api/types/alta-console/parameter#m-command), [`Parameter.Parameter`](/game-api/types/alta-console/parameter#m-ctor).
