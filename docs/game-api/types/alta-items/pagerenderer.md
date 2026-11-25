---
title: "PageRenderer"
description: "class PageRenderer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PageRenderer

A **class** in `Root.Township`, `Alta.Pages`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PageRenderer()"}</code> |

## Fields

<details>
<summary>18 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-btnclear" /><code>{"private bool btnClear"}</code> |
| <Link id="m-btnload" /><code>{"private bool btnLoad"}</code> |
| <Link id="m-btnsave" /><code>{"private bool btnSave"}</code> |
| <Link id="m-btnsaveas" /><code>{"private bool btnSaveAs"}</code> |
| <Link id="m-camera" /><code>{"private Camera camera"}</code> |
| <Link id="m-descriptor" /><code>{"private "}<Link to="/game-api/types/global-s/serializedrendertexturedescriptor">{"SerializedRenderTextureDescriptor"}</Link>{" descriptor"}</code> |
| <Link id="m-fallbackformats" /><code>{"private RenderTextureFormat[] fallBackFormats"}</code> |
| <Link id="m-firstglyph" /><code>{"private "}<Link to="/game-api/types/alta-items/glyphinstance">{"GlyphInstance"}</Link>{" firstGlyph"}</code> |
| <Link id="m-glyphs" /><code>{"private List<"}<Link to="/game-api/types/alta-items/glyphinstance">{"GlyphInstance"}</Link>{"> glyphs"}</code> |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/alta-items/pagerenderer">{"PageRenderer"}</Link>{" instance"}</code> |
| <Link id="m-iscalibrating" /><code>{"private bool isCalibrating"}</code> |
| <Link id="m-isfirsttexture" /><code>{"private bool isFirstTexture"}</code> |
| <Link id="m-page" /><code>{"private "}<Link to="/game-api/types/alta-items/page">{"Page"}</Link>{" page"}</code> |
| <Link id="m-pagematerial" /><code>{"private Material pageMaterial"}</code> |
| <Link id="m-pool" /><code>{"private List<Material> pool"}</code> |
| <Link id="m-pooldata" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{"> poolData"}</code> |
| <Link id="m-savedpages" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{", Material> savedPages"}</code> |
| <Link id="m-usecounts" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{", int> useCounts"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" data)"}</code> |
| <Link id="m-release" /><code>{"static void Release("}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" data)"}</code> |
| <Link id="m-render" /><code>{"static Material Render("}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" data)"}</code> |

<details>
<summary>10 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-cleancamera" /><code>{"private IEnumerator CleanCamera() (iterator)"}</code> |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> |
| <Link id="m-createnewmaterial" /><code>{"private static Material CreateNewMaterial()"}</code> |
| <Link id="m-ensurematerialtextureiscreated" /><code>{"private static bool EnsureMaterialTextureIsCreated(Material material)"}</code> |
| <Link id="m-loadeditor" /><code>{"private void LoadEditor()"}</code> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-save" /><code>{"private void Save()"}</code> |
| <Link id="m-saveas" /><code>{"private void SaveAs()"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PageRenderer`:

[`PageProvider.testRenderer`](/game-api/types/global-p/pageprovider#m-testrenderer).
