---
title: "ServerBackup"
description: "A static class in TavernLib, TavernLib.Backend.Server."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerBackup

A **static class** in `TavernLib`, `TavernLib.Backend.Server`.

A **static class** in `TavernLib`, `TavernLib.Backend.Server`.

- **Listed in** [TavernLib.Backend.Server](/tavernlib-api/types/backend-server)
- **Nested types** [`BackupResult`](/tavernlib-api/types/backend-server/serverbackup-backupresult)
- **Documented in** [ServerBackup](/tavernlib-api/types/backend-server/serverbackup), [Internals](/tavernlib-api/internals)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-busy" /><code>{"private static int _busy"}</code> |  |
| <Link id="m-lastsettingserror" /><code>{"private static string _lastSettingsError"}</code> |  |
| <Link id="m-timer" /><code>{"private static Timer _timer"}</code> |  |
| <Link id="m-backupfoldername" /><code>{"private const string BackupFolderName"}</code> |  |
| <Link id="m-checkinterval" /><code>{"private static readonly TimeSpan CheckInterval"}</code> |  |
| <Link id="m-excludedfolders" /><code>{"private static readonly string[] ExcludedFolders"}</code> |  |
| <Link id="m-nameprefix" /><code>{"private const string NamePrefix"}</code> |  |
| <Link id="m-stampformat" /><code>{"private const string StampFormat"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-serverdirectory" /><code>{"static string ServerDirectory { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createbackup" /><code>{"internal static "}<Link to="/tavernlib-api/types/backend-server/serverbackup-backupresult">{"ServerBackup.BackupResult"}</Link>{" CreateBackup(string serverDir, DateTime now)"}</code> |  |
| <Link id="m-enumeratebackupfiles" /><code>{"private static IEnumerable<string> EnumerateBackupFiles(string root) (iterator)"}</code> |  |
| <Link id="m-formatsize" /><code>{"private static string FormatSize(long bytes)"}</code> |  |
| <Link id="m-isdue" /><code>{"internal static bool IsDue(string serverDir, float hours, DateTime nowUtc)"}</code> |  |
| <Link id="m-listbackups" /><code>{"internal static string[] ListBackups(string serverDir)"}</code> |  |
| <Link id="m-prune" /><code>{"internal static int Prune(string serverDir, int maxBackups)"}</code> |  |
| <Link id="m-start" /><code>{"internal static void Start()"}</code> |  |
| <Link id="m-tick" /><code>{"internal static void Tick()"}</code> |  |
| <Link id="m-tryreadsettings" /><code>{"private static bool TryReadSettings(out float hours, out int maxBackups)"}</code> |  |
| <Link id="m-ziptime" /><code>{"private static DateTimeOffset ZipTime(DateTime time)"}</code> |  |
