---
title: "ServerConfigFile<T>"
description: "The base class every TavernLib config file uses."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerConfigFile&lt;T&gt;

An **abstract class** in `TavernLib`, `TavernLib.Backend.Server.Configs`.

The base class every TavernLib config file uses.

- **Listed in** [TavernLib.Backend.Server.Configs](/tavernlib-api/types/backend-server-configs)
- **Derived types** [`ConsoleTokenFile`](/tavernlib-api/types/backend-remoteconsole/consoletokenfile), [`ModsListConfig`](/tavernlib-api/types/backend-server-configs/modslistconfig), [`ServerSettingsConfig`](/tavernlib-api/types/backend-server-configs/serversettingsconfig), [`TavernServerConfig`](/tavernlib-api/types/backend-server-configs/tavernserverconfig), [`TrustedReposConfig`](/tavernlib-api/types/backend-server-configs/trustedreposconfig), [`UserConfigFile`](/tavernlib-api/types/backend-server-configs/userconfigfile), [`WhitelistRequestsConfigFile`](/tavernlib-api/types/backend-server-configs/whitelistrequestsconfigfile)
- **Documented in** [ServerConfigFile](/tavernlib-api/config/server-config-file)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ServerConfigFile(string filePath)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-sync" /><code>{"private readonly object _sync"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lastread" /><code>{"T LastRead { get; private set; }"}</code> |  |
| <Link id="m-readable" /><code>{"bool Readable { get; private set; }"}</code> |  |
| <Link id="m-filename" /><code>{"private string FileName { get; }"}</code> |  |
| <Link id="m-filepath" /><code>{"private string FilePath { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-read" /><code>{"T Read()"}</code> |  |
| <Link id="m-readfromfile" /><code>{"virtual void ReadFromFile()"}</code> |  |
| <Link id="m-update" /><code>{"void Update(Func<T, bool> change)"}</code> |  |
| <Link id="m-writetofile" /><code>{"virtual void WriteToFile()"}</code> |  |
| <Link id="m-accept" /><code>{"private T Accept(T config)"}</code> |  |
| <Link id="m-tidy" /><code>{"protected virtual bool Tidy(T config)"}</code> |  |
| <Link id="m-write" /><code>{"private void Write(T config)"}</code> |  |
