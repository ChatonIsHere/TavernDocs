---
title: "ModsCommandModule"
description: "TavernLib's modmanager console module, with list (every mod in Mods and its state) and addrepo (adds a trusted mod source after checking its index)."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModsCommandModule

A **static class** in `TavernLib`, `TavernLib.ModulePorts`.

TavernLib's `modmanager` console module, with `list` (every mod in `Mods` and its state) and `addrepo` (adds a trusted mod source after checking its index). Server.

- **Listed in** [TavernLib.ModulePorts](/mod/tavernlib-api/types/moduleports)
- **Attributes** `Module`
- **Documented in** [ModsCommandModule](/mod/tavernlib-api/types/moduleports/modscommandmodule), [Internals](/mod/tavernlib-api/internals)

## Methods

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addrepo" /><code>{"private static string AddRepo(string url)"}</code> | <span className="api-desc">`modmanager addrepo`: server only, checks that a URL serves a mod index and adds it to `mod_repos.json` as a trusted source.</span> |
| <Link id="m-list" /><code>{"private static string List()"}</code> | <span className="api-desc">`modmanager list`: server only, lists the community mods in `Mods/` with their state.</span> |
| <Link id="m-listfor" /><code>{"internal static string ListFor(string gameDir)"}</code> | <span className="api-desc">Internal: the `modmanager list` text for a game folder: tracked mods with version, state and targets, then untracked ones. Flags damaged installs.</span> |
| <Link id="m-reposhorthand" /><code>{"private static string RepoShorthand(string url)"}</code> | <span className="api-desc">Builds the "owner/repo" shorthand from a repo URL's path.</span> |
| <Link id="m-state" /><code>{"private static string State(bool enabled)"}</code> | <span className="api-desc">Returns "enabled" or "disabled".</span> |
| <Link id="m-targets" /><code>{"private static string Targets("}<Link to="/mod/tavernlib-api/types/backend-mods/modrecord">{"ModRecord"}</Link>{" record)"}</code> | <span className="api-desc">Lists the targets a mod record is installed for, or "nothing".</span> |

</details>
