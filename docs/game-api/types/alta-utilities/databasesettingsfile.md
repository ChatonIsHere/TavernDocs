---
title: "DatabaseSettingsFile"
description: "class DatabaseSettingsFile in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DatabaseSettingsFile

A **class** in `Root.Township`, `Alta.Utilities`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`IAltaFile`](/game-api/types/assembly-other/ialtafile)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DatabaseSettingsFile(string name)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-readingtask" /><code>{"private Task readingTask"}</code> |  |
| <Link id="m-writingtask" /><code>{"private Task writingTask"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code><Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Content { get; set; }"}</code> |  |
| <Link id="m-fullname" /><code>{"string FullName { get; }"}</code> |  |
| <Link id="m-haschanged" /><code>{"bool HasChanged { get; }"}</code> |  |
| <Link id="m-isexisting" /><code>{"bool IsExisting { get; }"}</code> |  |
| <Link id="m-isreading" /><code>{"bool IsReading { get; private set; }"}</code> |  |
| <Link id="m-iswriting" /><code>{"bool IsWriting { get; private set; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"void Delete(bool isDeletingBackup = false)"}</code> |  |
| <Link id="m-deleteasync" /><code>{"Task DeleteAsync(bool isDeletingBackup = false)"}</code> |  |
| <Link id="m-finishreading" /><code>{"void FinishReading()"}</code> |  |
| <Link id="m-finishwriting" /><code>{"void FinishWriting()"}</code> |  |
| <Link id="m-moveto" /><code>{"void MoveTo("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder)"}</code> |  |
| <Link id="m-queueunload" /><code>{"void QueueUnload()"}</code> |  |
| <Link id="m-queueunloadasync" /><code>{"Task QueueUnloadAsync()"}</code> |  |
| <Link id="m-readasync" /><code>{"Task<T> ReadAsync<T>()"}</code> |  |
| <Link id="m-readasync-2" /><code>{"async Task<T> ReadAsync<T>(Func<T> create)"}</code> |  |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> |  |
| <Link id="m-resethaschanged" /><code>{"void ResetHasChanged()"}</code> |  |
| <Link id="m-writeasync" /><code>{"async void WriteAsync()"}</code> |  |
| <Link id="m-readinternal" /><code>{"private async Task<T> ReadInternal<T>(Func<T> create)"}</code> |  |
| <Link id="m-writeinternal" /><code>{"private async Task WriteInternal()"}</code> |  |
