---
title: "FileDownload"
description: "Result type for console commands that write a file for the caller, stored under the game's storage folder in Command Output, one subfolder per calling user."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FileDownload

A **class** in `Root.Township`, `Alta`.

Result type for console commands that write a file for the caller, stored under the game's storage folder in Command Output, one subfolder per calling user. A string converts to it implicitly.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FileDownload(string url)"}</code> | <span className="api-desc">Creates a `FileDownload` from `url`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-folder" /><code>{"static string Folder"}</code> | <span className="api-desc">Root output folder: Command Output inside the game's storage folder.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-downloadurl" /><code>{"string DownloadUrl { get; set; }"}</code> | <span className="api-desc">The file name (serialised as `downloadUrl`) the command output is written to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpath" /><code>{"static string GetPath(string input)"}</code> | <span className="api-desc">Full path for a file in the calling user's output folder. Logs an error and returns the root if there's no command context.</span> |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/mod/game-api/types/alta-utilities/filedownload">{"FileDownload"}</Link>{" op_Implicit(string url)"}</code> | <span className="api-desc">Lets a command return a file name string as a `FileDownload`.</span> |
| <Link id="m-openwrite" /><code>{"StreamWriter OpenWrite()"}</code> | <span className="api-desc">Deletes any old file at this path and opens a new text file for writing.</span> |

## Used in

Members of other types that take, return or hold a `FileDownload`:

<div className="api-used-in">

[`DebuggingCommandModule.CountAllScripts`](/mod/game-api/types/alta-console/debuggingcommandmodule#m-countallscripts), [`DebuggingCommandModule.PrintNames`](/mod/game-api/types/alta-console/debuggingcommandmodule#m-printnames).

</div>
