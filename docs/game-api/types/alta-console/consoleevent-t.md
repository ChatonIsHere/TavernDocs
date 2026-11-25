---
title: "ConsoleEvent<T>"
description: "A named event that remote console clients can subscribe to over the websocket."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleEvent&lt;T&gt;

A **class** in `Root.Township`, `Alta.Console`.

A named event that remote console clients can subscribe to over the websocket. Creating one registers it; invoking it queues the data to be sent on a background thread.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** [`ConsoleEvent`](/game-api/types/alta-console/consoleevent), [`IConsoleEvent`](/game-api/types/alta-console/iconsoleevent)
- **Documented in** [Console, utilities and Alta assemblies](/game-api/console-and-utilities/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ConsoleEvent(string name)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-type" /><code>{"Type Type { get; }"}</code> | The data type the event sends. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"override void Deregister()"}</code> | Removes all listeners and unregisters the event. |
| <Link id="m-invoke" /><code>{"void Invoke(Func<T> getData)"}</code> | If anyone is subscribed, gets the data from the function and queues it as a subscription message. |

## Used in

Members of other types that take, return or hold a `ConsoleEvent&lt;T>`:

[`ConsoleEvents.AtmBalanceChanged`](/game-api/types/alta-console/consoleevents#m-atmbalancechanged), [`ConsoleEvents.CommandExecuted`](/game-api/types/alta-console/consoleevents#m-commandexecuted), [`ConsoleEvents.InventoryChanged`](/game-api/types/alta-console/consoleevents#m-inventorychanged), [`ConsoleEvents.ObjectKilled`](/game-api/types/alta-console/consoleevents#m-objectkilled), [`ConsoleEvents.PlayerJoined`](/game-api/types/alta-console/consoleevents#m-playerjoined), [`ConsoleEvents.PlayerKilled`](/game-api/types/alta-console/consoleevents#m-playerkilled), [`ConsoleEvents.PlayerLeft`](/game-api/types/alta-console/consoleevents#m-playerleft), [`ConsoleEvents.PlayerMovedChunk`](/game-api/types/alta-console/consoleevents#m-playermovedchunk), [`ConsoleEvents.PlayerStateChanged`](/game-api/types/alta-console/consoleevents#m-playerstatechanged), [`ConsoleEvents.PopulationModified`](/game-api/types/alta-console/consoleevents#m-populationmodified), [`ConsoleEvents.ServerSettingsChanged`](/game-api/types/alta-console/consoleevents#m-serversettingschanged), [`ConsoleEvents.SocialTabletPlayerBanned`](/game-api/types/alta-console/consoleevents#m-socialtabletplayerbanned), [`ConsoleEvents.SocialTabletPlayerReported`](/game-api/types/alta-console/consoleevents#m-socialtabletplayerreported), [`ConsoleEvents.TradeDeckUsed`](/game-api/types/alta-console/consoleevents#m-tradedeckused), [`ConsoleEvents.TrialFinished`](/game-api/types/alta-console/consoleevents#m-trialfinished), [`ConsoleEvents.TrialStarted`](/game-api/types/alta-console/consoleevents#m-trialstarted), [`ConsoleLogEvents.LogEvents`](/game-api/types/alta-console/consolelogevents#m-logevents), [`ServerDiagnosticsManager.ServerProfile`](/game-api/types/global-s/serverdiagnosticsmanager#m-serverprofile).
