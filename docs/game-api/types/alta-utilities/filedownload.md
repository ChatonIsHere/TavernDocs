---
title: "FileDownload"
description: "class FileDownload in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FileDownload

A **class** in `Root.Township`, `Alta`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FileDownload(string url)"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-folder" /><code>{"static string Folder"}</code> |

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-downloadurl" /><code>{"string DownloadUrl { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getpath" /><code>{"static string GetPath(string input)"}</code> |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/game-api/types/alta-utilities/filedownload">{"FileDownload"}</Link>{" op_Implicit(string url)"}</code> |
| <Link id="m-openwrite" /><code>{"StreamWriter OpenWrite()"}</code> |

## Used in

Members of other types that take, return or hold a `FileDownload`:

[`DebuggingCommandModule.CountAllScripts`](/game-api/types/alta-console/debuggingcommandmodule#m-countallscripts), [`DebuggingCommandModule.PrintNames`](/game-api/types/alta-console/debuggingcommandmodule#m-printnames).
