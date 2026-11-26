---
title: "DocumentModule"
description: "TavernLib's document console module: writes an HTML page of every console command into Documentation.zip and opens it."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DocumentModule

A **class** in `TavernLib`, `TavernLib.Debugging`.

TavernLib's `document` console module: writes an HTML page of every console command into `Documentation.zip` and opens it. The first run downloads the page template from Alta's cloud storage. Its command is private.

- **Listed in** [TavernLib.Debugging](/mod/tavernlib-api/types/debugging)
- **Attributes** `Module`
- **Documented in** [DocumentModule](/mod/tavernlib-api/types/debugging/documentmodule), [Internals](/mod/tavernlib-api/internals)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DocumentModule()"}</code> | Created by TavernLib; mods don't make one. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filename" /><code>{"private const string FileName"}</code> | Name `Documentation.zip` for the export. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for the module. |
| <Link id="m-writer" /><code>{"private static XmlTextWriter writer"}</code> | The XML writer for the page being built. |

</details>

## Methods

<details>
<summary>18 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-body" /><code>{"private static void Body()"}</code> | Writes the page's `body` element. |
| <Link id="m-content" /><code>{"private static void Content()"}</code> | Writes the page content for all modules, or for one module or command. |
| <Link id="m-content-2" /><code>{"private static void Content("}<Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{" module, string address = \"\")"}</code> | Writes the page content for all modules, or for one module or command. |
| <Link id="m-content-3" /><code>{"private static void Content("}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command, string address = \"\")"}</code> | Writes the page content for all modules, or for one module or command. |
| <Link id="m-document" /><code>{"private static "}<Link to="/mod/game-api/types/alta-utilities/filedownload">{"FileDownload"}</Link>{" Document()"}</code> | Builds an HTML page of all console commands (or, in the helper overload, one block for a module or command), zips it, and opens it. |
| <Link id="m-document-2" /><code>{"private static void Document("}<Link to="/mod/game-api/types/alta-console/basepart">{"BasePart"}</Link>{" part, XmlTextWriter writer, int level, Action content)"}</code> | Builds an HTML page of all console commands (or, in the helper overload, one block for a module or command), zips it, and opens it. |
| <Link id="m-elementclassopen" /><code>{"private static void ElementClassOpen(string element, string className)"}</code> | Opens an element with a class and leaves it open. |
| <Link id="m-getaliases" /><code>{"private static string GetAliases("}<Link to="/mod/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{" part)"}</code> | Joins a command or module's aliases, skipping the first one. |
| <Link id="m-head" /><code>{"private static void Head()"}</code> | Writes the page's `head` element with its meta tags, title and stylesheets. |
| <Link id="m-link" /><code>{"private static void Link(string rel, string type, string href, string media = null)"}</code> | Writes a `link` element for a stylesheet or icon. |
| <Link id="m-meta" /><code>{"private static void Meta(params string[] keyValues)"}</code> | Writes a `meta` element from key and value pairs. |
| <Link id="m-navigation" /><code>{"private static void Navigation()"}</code> | Writes the sidebar entries for all modules, or for one module or command. |
| <Link id="m-navigation-2" /><code>{"private static void Navigation("}<Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{" module, string address = \"#\")"}</code> | Writes the sidebar entries for all modules, or for one module or command. |
| <Link id="m-navigation-3" /><code>{"private static void Navigation("}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command, string address = \"#\")"}</code> | Writes the sidebar entries for all modules, or for one module or command. |
| <Link id="m-script" /><code>{"private static void Script(string src)"}</code> | Writes one `script` element for a source file. |
| <Link id="m-scripts" /><code>{"private static void Scripts()"}</code> | Adds the page's script tags. |
| <Link id="m-sectionheading" /><code>{"private static void SectionHeading(string heading)"}</code> | Writes a section heading with a back to top link. |
| <Link id="m-topsection" /><code>{"private static void TopSection()"}</code> | Writes the page's title banner. |

</details>
