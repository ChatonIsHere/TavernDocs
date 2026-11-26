---
title: Console
description: What TavernLib changes about console commands, named token paths, Lines, and the modules it adds.
sidebar_position: 9
---

# Console

The server console is the game's own (`Alta.Console` in `Root.Township`). [Console commands](../tavernlib/console-commands.md) shows how to add commands to it. This page is what TavernLib changes about it, and what that means for your commands. Server only, except where it says.

## How your command's answer reaches the console

TavernLib patches `CommandService.HandleMatchedCommand`, which runs every matched command: the game's, TavernLib's and yours.

| Before TavernLib | With TavernLib |
| --- | --- |
| A command that throws shows only "Exception has been thrown by the target of an invocation." | The command's own exception is shown. So `throw new CommandException("Rounds must be 1 or more")` reads as that. |
| A `PlayerList` argument that matches nobody runs the command on nobody, and answers Success. | The command doesn't run. The console gets `No online player matches "x"`, or `No players are online` for `*`. |

So throwing `CommandException` (it has a `string` constructor) is the clean way to refuse. TavernLib's own commands answer refusals as text instead, which works too.

### Lines

`TavernLib.ModulePorts.Lines<T>` in `TavernLib.dll`.

`public class Lines<T>(IEnumerable<T> items) : List<T>(items)`

A list that answers as one item per line in a text console, and as a JSON array in TavernKeeper. `None` when it's empty. Return one instead of a plain `IEnumerable`, which answers as its type name in a text console.

For a structured answer, do what TavernLib's `token` commands do: return a class with `[JsonProperty]` names for TavernKeeper and a `ToString()` for text.

## Example

```csharp
using System.Linq;
using System.Reflection;
using Alta.Console;
using TavernLib.ModulePorts;

[Module("arena", "Arena commands")]
public static class ArenaCommands
{
    [ServerOnly]
    [Command("players", "Lists who's in the arena")]
    public static Lines<string> Players() =>
        new(Player.AllPlayers.OfType<Player>().Select(p => p.UserInfo.Username));

    [ServerOnly]
    [Command("rounds", "Sets how many rounds a match has")]
    public static string Rounds(int rounds)
    {
        if (rounds < 1) throw new CommandException("Rounds must be 1 or more");
        return $"Matches now have {rounds} rounds";
    }

    [Command("whoami", "Which console token ran this")]
    public static string WhoAmI()
    {
        // Read it first, before any await: it's the last command's context.
        var policies = CommandService.CurrentContext?.CallingUser?.Policies;
        var named = policies?.FirstOrDefault(p => p.StartsWith("tavern_token:"));
        return named == null ? "owner token or the server" : "named token " + named.Substring("tavern_token:".Length);
    }
}

public static class Register
{
    public static void OnInitialize() => CommandService.CommandCollection.Collect(Assembly.GetExecutingAssembly());
}
```

## Module names

The game keeps one top-level module per name. When `Collect` finds a module whose name is already taken, it **removes the old module and keeps the new one**, commands and all. Whichever is collected last wins (see [CommandCollection](../game-api/console-and-utilities/commands.md#commandcollection)).

So never reuse a module name that's already there. These are taken:

| Module | Whose |
| --- | --- |
| `mods` | The game's |
| `modmanager` | TavernLib: `list`, `addrepo` |
| `token` | TavernLib: named console tokens |
| `player` | TavernLib: `kick`, `ban`, `list`, `teleport`, stats, `inventory` and `progression` submodules, and more |
| `chunks` | TavernLib |
| `document` | TavernLib: writes an HTML page of every command |

TavernLib collects its commands in its `OnInitializeMelon`, which runs before mods start, so a mod that reuses `player` would replace TavernLib's whole `player` module. The game has many more (`help`, `time`, `select`, `settings`, `wacky`, `world` and so on); [Built-in commands](../game-api/console-and-utilities/built-in-commands.md) lists them, and `document` on a server writes the full list. The server build has no `player`, `chunks` or `document` module of its own, so TavernLib's replace nothing.

Submodules don't clash this way. Add your own top-level module, and use submodules inside it.

## Named token paths

Hosts can make [named tokens](../../host/console-and-tokens.md#named-tokens) that may only run some commands. The rules are worth designing your commands around.

- **A path is what's typed**: the module, any submodules and the command name, lower case, single spaces. `arena players`, `player progression list`. Parameters aren't part of it.
- **A module path grants everything in it**, submodules included. `arena` allows `arena players` and `arena rounds`.
- **A command path also lets the token see its modules**, so `help` and the command search can reach it. It doesn't allow the module's other commands.
- **`repeat` and anything under `token` can't be granted.** `token whoami` is always allowed. A `full` token can run everything else.
- **Hidden, not just refused.** TavernLib checks every module and command as the game searches and lists them (a postfix on `CommandPart.RequirementsAreMet`), so a token doesn't see what it can't run.
- **Paths are checked when the token is made.** `token create` refuses a path the server doesn't have. Collect your commands at start, so a host can make a token for them right away.
- **Only on the websocket console (1760).** The game's other console, TCP port 1758, would run every command as the server itself, so TavernLib closes it as soon as it starts. [Remote console](../game-api/console-and-utilities/remote-console.md) covers both.

So, for your mod:

- Keep module and command names stable. Renaming one breaks every token that names it.
- Put read-only commands and changing commands in separate submodules (`arena info ...` and `arena admin ...`), so a host can grant one without the other.
- `[ServerOnly]` still applies. The token check comes on top of the game's own requirements.

### Who ran a command

The game passes the caller as `CommandService.CurrentContext.CallingUser`, a `UserInfoWithPermissions`. TavernLib marks a named token's login with a policy `tavern_token:<id>` in its `Policies`. The owner token and the server itself have none. The example's `whoami` reads it.

That policy name is how TavernLib's `internal` `ConsoleAuth` works, not an API, so it could change. `CurrentContext` is a static that the game sets for each command, so read it at the very start of your command, before any `await`.

### TokenCommandModule

`TavernLib.ModulePorts.TokenCommandModule` is the `token` module. Its commands are `private`. The public parts are `const string ModuleName = "token"` and the answer types `TokenInfo`, `TokenList` and `LogLines`, which are only useful if you're parsing `token` command output.

## Threading

Websocket console commands are queued onto the main thread (`MainThreadDispatcher.Run` in `WebSocketCommandHandler`), so your command runs there and can touch the game. A command that returns a `Task` can await: Unity's synchronization context brings the rest of it back to the main thread, unless you leave it with `Task.Run` or `ConfigureAwait(false)`. See [Threads, coroutines and the timeline](../game-api/console-and-utilities/threads-coroutines-and-timeline.md).

## What else TavernLib does to the console

- **Logging.** Every command run on 1760 is written to `console_token_log.jsonl` with the token id, address and result. Anything shaped like a token in a command or its output is replaced with `[token]`. The `token` module's own results are kept out of the game's log.
- **The game's broken commands.** `GameCommandPatches` makes these answer properly instead of saying Success having done nothing: `time set` (an unknown keyword), `time ofday` (replaced, so it answers the time), `settings possible`, `select move exact`, `select rotate exact`, `wacky destroy` (an id that doesn't exist, or something it can't destroy) and `world caves teleport` (replaced, so it moves the players and says who it moved). If a game build is missing one of these methods, TavernLib logs a warning and skips that patch. A MonoMod hook fixes the selection search behind `select`.
- **Things TavernLib turns off.** `ServerConsoleManager.StartRemoteConsole` is postfixed to close the game's `remoteConsole` straight away, `CommandSync.RouteCommand` is cancelled, and the console's Alta permission and identity checks are skipped (TavernLib's token check replaces them).

## See also

- [Console commands](../tavernlib/console-commands.md) (how-to)
- [Console and tokens](../../host/console-and-tokens.md) (for hosts)
