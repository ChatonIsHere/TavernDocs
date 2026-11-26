---
title: "ServerBackup"
description: "Timed zip backups of the server's world folder (Servers\\-1) into its Backups folder, for servers not run by the launcher."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerBackup

A **static class** in `TavernLib`, `TavernLib.Backend.Server`.

Timed zip backups of the server's world folder (`Servers\-1`) into its `Backups` folder, for servers not run by the launcher. Server; started from `Tavern` unless `/launcherauth` is given.

- **Listed in** [TavernLib.Backend.Server](/tavernlib-api/types/backend-server)
- **Nested types** [`BackupResult`](/tavernlib-api/types/backend-server/serverbackup-backupresult)
- **Documented in** [ServerBackup](/tavernlib-api/types/backend-server/serverbackup), [Internals](/tavernlib-api/internals)

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-busy" /><code>{"private static int _busy"}</code> | Set to 1 while a backup runs, so two never run at once. |
| <Link id="m-lastsettingserror" /><code>{"private static string _lastSettingsError"}</code> | The last settings read error that was logged, so the same one isn't logged every minute. |
| <Link id="m-timer" /><code>{"private static Timer _timer"}</code> | The timer that calls `Tick` once a minute. |
| <Link id="m-backupfoldername" /><code>{"private const string BackupFolderName"}</code> | Name of the folder inside the server data folder that holds the backup zips. |
| <Link id="m-checkinterval" /><code>{"private static readonly TimeSpan CheckInterval"}</code> | How often the timer checks whether a backup is due (60 seconds). |
| <Link id="m-excludedfolders" /><code>{"private static readonly string[] ExcludedFolders"}</code> | Top-level folders left out of a backup: `Backups` and `Logs`. |
| <Link id="m-nameprefix" /><code>{"private const string NamePrefix"}</code> | Start of every backup file name (`ServerBackup_`). |
| <Link id="m-stampformat" /><code>{"private const string StampFormat"}</code> | Date and time format used in a backup file name. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-serverdirectory" /><code>{"static string ServerDirectory { get; }"}</code> | `A Township Tale\Servers\-1`, the Tavern server's world folder. |

## Methods

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createbackup" /><code>{"internal static "}<Link to="/tavernlib-api/types/backend-server/serverbackup-backupresult">{"ServerBackup.BackupResult"}</Link>{" CreateBackup(string serverDir, DateTime now)"}</code> | Internal: zips the folder (leaving out `Backups` and `Logs`) to `ServerBackup_<time>.zip`. Files in use are skipped; any other failure leaves no zip. |
| <Link id="m-enumeratebackupfiles" /><code>{"private static IEnumerable<string> EnumerateBackupFiles(string root) (iterator)"}</code> | Yields every file under the server folder, skipping the excluded top-level folders and anything it can't list. |
| <Link id="m-formatsize" /><code>{"private static string FormatSize(long bytes)"}</code> | Turns a byte count into a short `MB` or `KB` text for the log. |
| <Link id="m-isdue" /><code>{"internal static bool IsDue(string serverDir, float hours, DateTime nowUtc)"}</code> | Internal: true when backups are on and the newest backup is at least that many hours old, or there is none yet. |
| <Link id="m-listbackups" /><code>{"internal static string[] ListBackups(string serverDir)"}</code> | Internal: the finished backup zips in the `Backups` folder, oldest first. |
| <Link id="m-prune" /><code>{"internal static int Prune(string serverDir, int maxBackups)"}</code> | Internal: deletes the oldest backups so at most that many remain (0 keeps all). Returns how many it removed. |
| <Link id="m-start" /><code>{"internal static void Start()"}</code> | Internal: starts a timer that checks once a minute whether a backup is due. |
| <Link id="m-tick" /><code>{"internal static void Tick()"}</code> | Internal: one check. Re-reads `server_backup_time` and `server_backup_max_backups`, backs up if due, then prunes. Never runs two at once. |
| <Link id="m-tryreadsettings" /><code>{"private static bool TryReadSettings(out float hours, out int maxBackups)"}</code> | Reads the backup interval in hours and the number of backups to keep from `server_settings.json`; false if it can't be read. |
| <Link id="m-ziptime" /><code>{"private static DateTimeOffset ZipTime(DateTime time)"}</code> | Clamps a file time into the 1980 to 2107 range a zip can store. |

</details>
