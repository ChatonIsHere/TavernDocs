---
title: "VersionDisplay"
description: "Shows the game's build version on a 3D text label."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VersionDisplay

A **class** in `Root.Township`, `Alta.UI`.

Shows the game's build version on a 3D text label. Also runs in the editor.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VersionDisplay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-version3dlabel" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" version3dLabel"}</code> | <span className="api-desc">The text that shows the version.</span> |
| <Link id="m-versionprefix" /><code>{"private string versionPrefix"}</code> | <span className="api-desc">Text put before the version number.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Calls `UpdateLabel`.</span> |
| <Link id="m-updatelabel" /><code>{"private void UpdateLabel()"}</code> | <span className="api-desc">Sets the label to the prefix plus `BuildVersion.CurrentVersion`.</span> |

</details>
