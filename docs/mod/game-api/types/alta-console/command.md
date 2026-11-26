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

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** [`CommandPart`](/mod/game-api/types/alta-console/commandpart)
- **Documented in** [Writing commands](/mod/game-api/console-and-utilities/commands#module-and-command), [Health and damage](/mod/game-api/items/health-and-damage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Command(MethodInfo method, "}<Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{" parent, "}<Link to="/mod/game-api/types/alta-console/commandattribute">{"CommandAttribute"}</Link>{" attribute)"}</code> | <span className="api-desc">Creates a `Command` from `method`, `parent` and `attribute`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-method" /><code>{"private MethodInfo method"}</code> | <span className="api-desc">The static method the command calls.</span> |
| <Link id="m-voidtaskresult" /><code>{"private static readonly Type VoidTaskResult"}</code> | <span className="api-desc">The runtime's internal `VoidTaskResult` type, used to tell a plain `Task` from one with a result.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attribute" /><code><Link to="/mod/game-api/types/alta-console/commandattribute">{"CommandAttribute"}</Link>{" Attribute { get; set; }"}</code> | <span className="api-desc">The `CommandAttribute` the command was made from.</span> |
| <Link id="m-invokecommand" /><code>{"Func<"}<Link to="/mod/game-api/types/alta-console/progressivehandler">{"ProgressiveHandler"}</Link>{", object[], Task<"}<Link to="/mod/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{">> InvokeCommand { get; private set; }"}</code> | <span className="api-desc">Calls the method with converted arguments and wraps what it returns (awaiting tasks) in a `CommandResult`.</span> |
| <Link id="m-isloggingvalueastable" /><code>{"bool IsLoggingValueAsTable { get; set; }"}</code> | <span className="api-desc">Whether the result is logged as a table.</span> |
| <Link id="m-isprogressive" /><code>{"bool IsProgressive { get; set; }"}</code> | <span className="api-desc">Progressive commands are not supported; invoking one returns an error result.</span> |
| <Link id="m-method-2" /><code>{"MethodInfo Method { get; }"}</code> | <span className="api-desc">Meant to be the method behind the command, but never set in this build, so it is null.</span> |
| <Link id="m-parameters" /><code>{"List<"}<Link to="/mod/game-api/types/alta-console/parameter">{"Parameter"}</Link>{"> Parameters { get; }"}</code> | <span className="api-desc">The command's parameters. A last `string` or array parameter takes all remaining words.</span> |
| <Link id="m-returntype" /><code>{"Type ReturnType { get; }"}</code> | <span className="api-desc">What the method returns, with `Task` unwrapped; `void` for none.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Full command path followed by its parameters.</span> |
| <Link id="m-getcommandpartinternal" /><code>{"protected override IEnumerable<"}<Link to="/mod/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{"> GetCommandPartInternal(string[] lower, string[] cased, int index, "}<Link to="/mod/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context) (iterator)"}</code> | <span className="api-desc">Returns this command if the words end at its name.</span> |
| <Link id="m-getcommandsinternal" /><code>{"protected override IEnumerable<"}<Link to="/mod/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{"> GetCommandsInternal(string[] lower, string[] cased, int index, "}<Link to="/mod/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context) (iterator)"}</code> | <span className="api-desc">Tries to match the words after the command name to its parameters and returns the result.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-areparametersviable" /><code>{"private "}<Link to="/mod/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" AreParametersViable(string[] lower, string[] cased, int index)"}</code> | <span className="api-desc">Checks the argument count against the parameters and converts them. A last string or array parameter takes the rest.</span> |
| <Link id="m-attemptconvertarguments" /><code>{"private bool AttemptConvertArguments(int matchedCount, string[] argumentParts, int index, object[] convertedArguments)"}</code> | <span className="api-desc">Converts each argument with its parameter type's converter. Fails on a null result unless `AllowNull` is set.</span> |
| <Link id="m-invoke" /><code>{"private async Task<"}<Link to="/mod/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{"> Invoke("}<Link to="/mod/game-api/types/alta-console/progressivehandler">{"ProgressiveHandler"}</Link>{" progressivehandler, object[] args)"}</code> | <span className="api-desc">Calls the command method with no instance (so it must be static) and wraps what it returns in a `CommandResult`. Progressive commands return an error.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Command`:

<div className="api-used-in">

[`CommandCollection.GetParams`](/mod/game-api/types/alta-console/commandcollection#m-getparams), [`CommandCollection.ProcessParam`](/mod/game-api/types/alta-console/commandcollection#m-processparam), [`CommandResult.Command`](/mod/game-api/types/alta-console/commandresult#m-command), [`CommandResult.CommandResult`](/mod/game-api/types/alta-console/commandresult#m-ctor), [`CommandResult.ErrorResult`](/mod/game-api/types/alta-console/commandresult#m-errorresult), [`CommandResult.VoidResult`](/mod/game-api/types/alta-console/commandresult#m-voidresult), [`CommandResult<T>.CommandResult<T>`](/mod/game-api/types/alta-console/commandresult-t#m-ctor), [`BaseCommands.LogCommand`](/mod/game-api/types/alta-console/basecommands#m-logcommand), [`CommandSearchResult.command`](/mod/game-api/types/alta-console/commandsearchresult#m-command), [`CommandSearchResult.CommandSearchResult`](/mod/game-api/types/alta-console/commandsearchresult#m-ctor), [`CommandSearchResult.IncorrectParameterTypes`](/mod/game-api/types/alta-console/commandsearchresult#m-incorrectparametertypes), [`CommandSearchResult.NotEnoughParameters`](/mod/game-api/types/alta-console/commandsearchresult#m-notenoughparameters), [`CommandSearchResult.ParameterParsingFailure`](/mod/game-api/types/alta-console/commandsearchresult#m-parameterparsingfailure), [`CommandSearchResult.Success`](/mod/game-api/types/alta-console/commandsearchresult#m-success-2), [`CommandSearchResult.TooManyParameters`](/mod/game-api/types/alta-console/commandsearchresult#m-toomanyparameters), [`DynamicCommandResult.DynamicCommandResult`](/mod/game-api/types/alta-console/dynamiccommandresult#m-ctor), [`Module.Commands`](/mod/game-api/types/alta-console/module#m-commands), [`Parameter.Command`](/mod/game-api/types/alta-console/parameter#m-command), [`Parameter.Parameter`](/mod/game-api/types/alta-console/parameter#m-ctor).

</div>
