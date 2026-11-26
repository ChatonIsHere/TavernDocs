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
- **Documented in** [Internals](/mod/tavernlib-api/internals)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DocumentModule()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filename" /><code>{"private const string FileName"}</code> | <span className="api-desc">Name `Documentation.zip` for the export.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for the module.</span> |
| <Link id="m-writer" /><code>{"private static XmlTextWriter writer"}</code> | <span className="api-desc">The XML writer for the page being built.</span> |

</details>

## Methods

<details className="api-private">
<summary>18 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-body" /><code>{"private static void Body()"}</code> | <span className="api-desc">Writes the page's `body` element.</span> |
| <Link id="m-content" /><code>{"private static void Content()"}</code> | <span className="api-desc">Writes the page content for all modules, or for one module or command.</span> |
| <Link id="m-content-2" /><code>{"private static void Content("}<Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{" module, string address = \"\")"}</code> | <span className="api-desc">Writes the page content for all modules, or for one module or command.</span> |
| <Link id="m-content-3" /><code>{"private static void Content("}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command, string address = \"\")"}</code> | <span className="api-desc">Writes the page content for all modules, or for one module or command.</span> |
| <Link id="m-document" /><code>{"private static "}<Link to="/mod/game-api/types/alta-utilities/filedownload">{"FileDownload"}</Link>{" Document()"}</code> | <span className="api-desc">Builds an HTML page of all console commands (or, in the helper overload, one block for a module or command), zips it, and opens it.</span> |
| <Link id="m-document-2" /><code>{"private static void Document("}<Link to="/mod/game-api/types/alta-console/basepart">{"BasePart"}</Link>{" part, XmlTextWriter writer, int level, Action content)"}</code> | <span className="api-desc">Builds an HTML page of all console commands (or, in the helper overload, one block for a module or command), zips it, and opens it.</span> |
| <Link id="m-elementclassopen" /><code>{"private static void ElementClassOpen(string element, string className)"}</code> | <span className="api-desc">Opens an element with a class and leaves it open.</span> |
| <Link id="m-getaliases" /><code>{"private static string GetAliases("}<Link to="/mod/game-api/types/alta-console/commandpart">{"CommandPart"}</Link>{" part)"}</code> | <span className="api-desc">Joins a command or module's aliases, skipping the first one.</span> |
| <Link id="m-head" /><code>{"private static void Head()"}</code> | <span className="api-desc">Writes the page's `head` element with its meta tags, title and stylesheets.</span> |
| <Link id="m-link" /><code>{"private static void Link(string rel, string type, string href, string media = null)"}</code> | <span className="api-desc">Writes a `link` element for a stylesheet or icon.</span> |
| <Link id="m-meta" /><code>{"private static void Meta(params string[] keyValues)"}</code> | <span className="api-desc">Writes a `meta` element from key and value pairs.</span> |
| <Link id="m-navigation" /><code>{"private static void Navigation()"}</code> | <span className="api-desc">Writes the sidebar entries for all modules, or for one module or command.</span> |
| <Link id="m-navigation-2" /><code>{"private static void Navigation("}<Link to="/mod/game-api/types/alta-console/module">{"Module"}</Link>{" module, string address = \"#\")"}</code> | <span className="api-desc">Writes the sidebar entries for all modules, or for one module or command.</span> |
| <Link id="m-navigation-3" /><code>{"private static void Navigation("}<Link to="/mod/game-api/types/alta-console/command">{"Command"}</Link>{" command, string address = \"#\")"}</code> | <span className="api-desc">Writes the sidebar entries for all modules, or for one module or command.</span> |
| <Link id="m-script" /><code>{"private static void Script(string src)"}</code> | <span className="api-desc">Writes one `script` element for a source file.</span> |
| <Link id="m-scripts" /><code>{"private static void Scripts()"}</code> | <span className="api-desc">Adds the page's script tags.</span> |
| <Link id="m-sectionheading" /><code>{"private static void SectionHeading(string heading)"}</code> | <span className="api-desc">Writes a section heading with a back to top link.</span> |
| <Link id="m-topsection" /><code>{"private static void TopSection()"}</code> | <span className="api-desc">Writes the page's title banner.</span> |

</details>
