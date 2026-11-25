---
title: Console events
description: Subscriptions on the websocket console, every event the game defines and when it fires, log events, and how to add your own.
sidebar_position: 6
---

# Console events

`Alta.Console.ConsoleEvent<T>`, `ConsoleEventProcessor`, `ConsoleEvents` and `ConsoleLogEvents` in `Root.Township`. Raised on the server; delivered on a background thread.

A websocket console session can subscribe to named events. Each time one fires, the session gets a message with `"type": "Subscription"`, the event's name in `eventType` and the event's data in `data`.

## Subscribing

These are commands, sent like any other over the websocket:

| Command | What it does |
| --- | --- |
| `websocket subscriptions` | Lists every registered event with its name and data type. |
| `websocket subscribe <name>` | Subscribes this session. Answers `Success`, `Unchanged` (already subscribed) or `NotFound`. |
| `websocket unsubscribe <name>` | Unsubscribes. |

They only work over the websocket console: anywhere else they throw "Must be called via Websocket". A session's subscriptions end when it closes.

## The game's events

`ConsoleEvents` holds these. "Where" is the code that raises it.

| Name | Data | Where |
| --- | --- | --- |
| `PlayerStateChanged` | `PlayerStateChangeData` | A player entering or leaving a player state (`PlayerStateBase`). |
| `PlayerJoined` | `PlayerJoinLeaveData` | Never raised by the game. TavernLib raises it from `Player.InitializePlayerOnServer`. |
| `PlayerLeft` | `PlayerJoinLeaveData` | Never raised by the game. TavernLib raises it when the connection handler's `UserLeft` fires. |
| `PlayerKilled` | `PlayerKilledData` | A player dying (`DeadState`). |
| `PopulationModified` | `PopulationEventData` | A population member spawning or being lost (`PopulationAnalytics`, actions `Spawned` and `Lost` only). |
| `TradeDeckUsed` | `TradingLogger.TradeDeckSale` | A trade deck sale (`TradingLogger`). |
| `PlayerMovedChunk` | `PlayerMoveChunkData` | A player crossing into another chunk (`PlayerChunkManager`). |
| `ObjectKilled` | `ObjectKilledData` | Something with health dying (`HealthObject`). |
| `TrialStarted`, `TrialFinished` | `TrialEventData` | A combat trial starting or ending (`TrialLogic`). |
| `InventoryChanged` | `InventoryChangeData` | A player picking up, dropping, docking or undocking an item (`PickupEventStreamLogger`). |
| `AtmBalanceChanged` | `AtmBalanceChangeData` | An ATM balance changing (`ATMMachine`). |
| `ServerSettingsChanged` | `ServerSettingsChangeData` | Server settings changing: raised twice, with the old and then the new settings (`ServerSettingsChangeLogger`). |
| `CommandExecuted` | `CommandExecutedData` | A websocket console command finishing, with the line, whether it worked and its text. |
| `SocialTabletPlayerBanned`, `SocialTabletPlayerReported` | `SocialTabletPlayerBanData`, `SocialTabletPlayerReportData` | Bans and reports from the social tablet (`RecentPlayerActionPage`). |

### Log events

`ConsoleLogEvents` adds one event per NLog level: `TraceLog`, `DebugLog`, `InfoLog`, `WarnLog`, `ErrorLog` and `FatalLog`. Their data has `message`, `timeStamp` and `logger`. They're fed from the game's `ServerConsoleTarget`, so they carry what `NLog.config` sends to the server console: everything at Debug and above, plus `Alta.Console.*` loggers at Trace (see [Logging](logging.md#nlogconfig)). Subscribing to `TraceLog` only gets console messages.

Log events are busy. A session subscribed to `DebugLog` on a full server gets a lot of traffic.

## How an event is delivered

1. Code calls `SomeEvent.Invoke(() => data)`. If no session is subscribed, nothing else happens: the lambda isn't even called.
2. Otherwise the lambda runs **on the calling thread** and the result is wrapped in a `ResponseData`.
3. That goes onto a shared queue. One background task (`ConsoleEvent.Processor`) takes items off it and calls each subscriber.
4. For a websocket session, the subscriber serializes the data to JSON and sends it, still on that background thread.

So the data is serialized off the main thread. Build a plain snapshot in the lambda (strings, numbers, small classes), not a live game object, or the serializer may read Unity objects from the wrong thread.

## Your own event

```csharp
public class BellRungData
{
    public string Username;
    public DateTime When;
}

public static class BellEvents
{
    // Registers itself under its name when it's made. Make it once.
    public static readonly ConsoleEvent<BellRungData> BellRung = new ConsoleEvent<BellRungData>("HelloBellRung");

    public static void Raise(Player player)
    {
        // The lambda only runs when someone is subscribed.
        BellRung.Invoke(() => new BellRungData { Username = player.UserInfo.Username, When = DateTime.UtcNow });
    }
}
```

Hosts then send `websocket subscribe HelloBellRung`. Canary does the same with its `Canary*` events.

- Names are global and case-sensitive. A second event with the same name replaces the first, with a warning in the log. Prefix yours with your mod's name.
- `T` must be a class.
- `Deregister()` removes the event and drops its subscribers.
- Raising an event from a client does nothing useful: only the server's remote console has subscribers.

## Listening in a mod

You don't need a websocket to hear an event:

```csharp
// Runs on the console event thread, not Unity's main thread.
ConsoleEventProcessor.Subscribe("PlayerKilled", response => MelonLogger.Msg($"{response.eventType} at {response.timeStamp:O}"));
```

`response.data` is the event's data object. Your handler counts as a subscriber, so from then on the game builds the data for that event every time. Hand any game work back to the main thread with `MainThreadDispatcher.Run`.

For most things a Harmony patch on the code that raises the event is simpler and runs on the main thread.

## Types

| Type | What it is |
| --- | --- |
| `abstract class ConsoleEvent` | Base: `string Name`, `bool HasListeners`, `event Action<WebSocketCommandHandler.ResponseData> Invoked`, `virtual void Deregister()`. |
| `class ConsoleEvent<T> : ConsoleEvent, IConsoleEvent where T : class` | `new ConsoleEvent<T>(string name)` registers it; `void Invoke(Func<T> getData)`; `Type Type`. |
| `interface IConsoleEvent` | `Name`, `Type`, `Invoked`. What `ConsoleEventProcessor` stores. |
| `static class ConsoleEventProcessor` | `IEnumerable<IConsoleEvent> Events`, `Register`, `Deregister`, `bool Subscribe(string type, Action<ResponseData> handler)`, `bool Unsubscribe(...)`. Its static constructor creates the log events and the `ConsoleEvents` ones. |
| `static class ConsoleEvents` | The game's events, as static fields. |
| `static class ConsoleLogEvents` | The six log events. `Initialize()` hooks them to `ServerConsoleLogTarget.LogSentRaw`. |

## See also

- [Remote console](remote-console.md) for the message format.
- [Canary's events](https://github.com/ChatonIsHere/Canary/blob/main/src/CanaryEvents.cs) for a real mod's.
