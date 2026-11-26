---
title: "DatabaseSettingsFile"
description: "A settings \"file\" stored through the Alta web API's settings endpoint instead of on disk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DatabaseSettingsFile

A **class** in `Root.Township`, `Alta.Utilities`.

A settings "file" stored through the Alta web API's settings endpoint instead of on disk. Most file operations do nothing.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`IAltaFile`](/mod/game-api/types/assembly-other/ialtafile)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DatabaseSettingsFile(string name)"}</code> | <span className="api-desc">Creates a `DatabaseSettingsFile` from `name`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-readingtask" /><code>{"private Task readingTask"}</code> | <span className="api-desc">The API read in progress, or null.</span> |
| <Link id="m-writingtask" /><code>{"private Task writingTask"}</code> | <span className="api-desc">The API write in progress, or null.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code><Link to="/mod/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Content { get; set; }"}</code> | <span className="api-desc">The last content read or to be written.</span> |
| <Link id="m-fullname" /><code>{"string FullName { get; }"}</code> | <span className="api-desc">Same as `Name`, the settings key.</span> |
| <Link id="m-haschanged" /><code>{"bool HasChanged { get; }"}</code> | <span className="api-desc">Always true.</span> |
| <Link id="m-isexisting" /><code>{"bool IsExisting { get; }"}</code> | <span className="api-desc">Always true.</span> |
| <Link id="m-isreading" /><code>{"bool IsReading { get; private set; }"}</code> | <span className="api-desc">Meant to show a read is running. It's cleared as soon as the read starts, so it's rarely true.</span> |
| <Link id="m-iswriting" /><code>{"bool IsWriting { get; private set; }"}</code> | <span className="api-desc">True while a write is running.</span> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">The settings key used with the API.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"void Delete(bool isDeletingBackup = false)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-deleteasync" /><code>{"Task DeleteAsync(bool isDeletingBackup = false)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-finishreading" /><code>{"void FinishReading()"}</code> | <span className="api-desc">Blocks until a running read finishes.</span> |
| <Link id="m-finishwriting" /><code>{"void FinishWriting()"}</code> | <span className="api-desc">Blocks until a running write finishes.</span> |
| <Link id="m-moveto" /><code>{"void MoveTo("}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-queueunload" /><code>{"void QueueUnload()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-queueunloadasync" /><code>{"Task QueueUnloadAsync()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-readasync" /><code>{"Task<T> ReadAsync<T>()"}</code> | <span className="api-desc">Fetches the settings text from the API and reads it into a new content object. Empty text leaves it at defaults.</span> |
| <Link id="m-readasync-2" /><code>{"async Task<T> ReadAsync<T>(Func<T> create)"}</code> | <span className="api-desc">Fetches the settings text from the API and reads it into a new content object. Empty text leaves it at defaults.</span> |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-resethaschanged" /><code>{"void ResetHasChanged()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-writeasync" /><code>{"async void WriteAsync()"}</code> | <span className="api-desc">Writes `Content` to text and sends it to the API, waiting for any earlier write first.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-readinternal" /><code>{"private async Task<T> ReadInternal<T>(Func<T> create)"}</code> | <span className="api-desc">Fetches the settings text by name from the web API settings client and parses it into a new content object.</span> |
| <Link id="m-writeinternal" /><code>{"private async Task WriteInternal()"}</code> | <span className="api-desc">Serialises the content to text and sends it to the web API settings client under this name.</span> |

</details>
