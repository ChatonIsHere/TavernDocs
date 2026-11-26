---
title: "UnityLogUtility"
description: "Converts between Unity log types, NLog levels and the game's LoggingLevel."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UnityLogUtility

A **static class** in `Root.Township`, the global namespace.

Converts between Unity log types, NLog levels and the game's `LoggingLevel`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-converttonloglevel" /><code>{"static LogLevel ConvertToNLogLevel(LogType logType)"}</code> | <span className="api-desc">Maps a Unity `LogType` or a `LoggingLevel` to an NLog level. Unity exceptions become Fatal, asserts become Error.</span> |
| <Link id="m-converttonloglevel-2" /><code>{"static LogLevel ConvertToNLogLevel("}<Link to="/mod/game-api/types/global-i-l/logginglevel">{"LoggingLevel"}</Link>{" logLevel)"}</code> | <span className="api-desc">Maps a Unity `LogType` or a `LoggingLevel` to an NLog level. Unity exceptions become Fatal, asserts become Error.</span> |
| <Link id="m-converttounityloglevel" /><code>{"static LogType ConvertToUnityLogLevel(LogLevel logLevel)"}</code> | <span className="api-desc">Maps an NLog level to a Unity `LogType`: Trace to Info become Log, Warn becomes Warning, Error and Fatal become Error.</span> |
