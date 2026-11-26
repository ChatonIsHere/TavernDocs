---
title: "ServerConfigFile<T>"
description: "The base class for TavernLib's JSON files."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerConfigFile&lt;T&gt;

An **abstract class** in `TavernLib`, `TavernLib.Backend.Server.Configs`.

The base class for TavernLib's JSON files. Reads into a `T`, writes through a temp file with a `.bak`, and holds a per-object lock so changes don't interleave. Subclass it for your own mod's file.

- **Listed in** [TavernLib.Backend.Server.Configs](/tavernlib-api/types/backend-server-configs)
- **Derived types** [`ConsoleTokenFile`](/tavernlib-api/types/backend-remoteconsole/consoletokenfile), [`ModsListConfig`](/tavernlib-api/types/backend-server-configs/modslistconfig), [`ServerSettingsConfig`](/tavernlib-api/types/backend-server-configs/serversettingsconfig), [`TavernServerConfig`](/tavernlib-api/types/backend-server-configs/tavernserverconfig), [`TrustedReposConfig`](/tavernlib-api/types/backend-server-configs/trustedreposconfig), [`UserConfigFile`](/tavernlib-api/types/backend-server-configs/userconfigfile), [`WhitelistRequestsConfigFile`](/tavernlib-api/types/backend-server-configs/whitelistrequestsconfigfile)
- **Documented in** [ServerConfigFile](/tavernlib-api/config/server-config-file)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ServerConfigFile(string filePath)"}</code> | Stores the path of the config file. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sync" /><code>{"private readonly object _sync"}</code> | Lock that keeps reads and writes of the file from interleaving. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lastread" /><code>{"T LastRead { get; private set; }"}</code> | The object from the last good read. `new T()` before the first one. |
| <Link id="m-readable" /><code>{"bool Readable { get; private set; }"}</code> | False until the file has been read once, and again after any read fails. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filename" /><code>{"private string FileName { get; }"}</code> | The file's name without its folder, used in log messages. |
| <Link id="m-filepath" /><code>{"private string FilePath { get; set; }"}</code> | Path of the config file on disk. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-read" /><code>{"T Read()"}</code> | Reads the file into a new object and makes it `LastRead`. A missing file is created with defaults; an empty or broken one throws. |
| <Link id="m-readfromfile" /><code>{"virtual void ReadFromFile()"}</code> | Calls `Read`. Subclasses may add to it, as `ServerSettingsConfig` does. |
| <Link id="m-update" /><code>{"void Update(Func<T, bool> change)"}</code> | Reads the file, passes it to the change, and writes it back if the change returns true, all under the lock. |
| <Link id="m-writetofile" /><code>{"virtual void WriteToFile()"}</code> | Writes `LastRead` as it is, which can throw away changes made to the file since. Prefer `Update`. |
| <Link id="m-tidy" /><code>{"protected virtual bool Tidy(T config)"}</code> | Called after each read to fix the object up. Return true to have it written back. Does nothing in the base. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-accept" /><code>{"private T Accept(T config)"}</code> | Makes a freshly read config `LastRead` and marks the file readable. |
| <Link id="m-write" /><code>{"private void Write(T config)"}</code> | Writes the config to a temp file, then swaps it in and keeps the old file as `.bak`. |

</details>
