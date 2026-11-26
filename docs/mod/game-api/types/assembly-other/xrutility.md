---
title: "XRUtility"
description: "Works out which XR mode to start in from the command line: /fly for no VR, -vrmode or /vrmode with valve or openvr for the Valve loader, and OpenXR otherwise."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# XRUtility

A **static class** in `Alta.XRManagement`, the global namespace.

Works out which XR mode to start in from the command line: `/fly` for no VR, `-vrmode` or `/vrmode` with `valve` or `openvr` for the Valve loader, and OpenXR otherwise.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Documented in** [Startup and app state](/mod/game-api/console-and-utilities/startup-and-app-state)

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultmode" /><code>{"private const "}<Link to="/mod/game-api/types/assembly-other/townshipxrmode">{"TownshipXRMode"}</Link>{" DefaultMode"}</code> | <span className="api-desc">The mode used when nothing on the command line says otherwise (OpenXR).</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcommandxrmode" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/townshipxrmode">{"TownshipXRMode"}</Link>{" GetCommandXRMode()"}</code> | <span className="api-desc">Reads the XR mode from the command line.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-containsvalvekeyword" /><code>{"private static bool ContainsValveKeyword(string commandString)"}</code> | <span className="api-desc">True when the argument is exactly `valve` or `openvr`.</span> |
| <Link id="m-getcommandmode" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-other/townshipxrmode">{"TownshipXRMode"}</Link>{" GetCommandMode(IReadOnlyList<string> args, "}<Link to="/mod/game-api/types/assembly-other/townshipxrmode">{"TownshipXRMode"}</Link>{" commandMode)"}</code> | <span className="api-desc">Returns Valve when the `vrmode` argument names it; otherwise logs a warning and keeps the default.</span> |

</details>
