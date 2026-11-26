---
title: "PageRenderer"
description: "Client: renders page glyphs into render texture materials with its own camera, caching and pooling them per PageData."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PageRenderer

A **class** in `Root.Township`, `Alta.Pages`.

Client: renders page glyphs into render texture materials with its own camera, caching and pooling them per `PageData`. A singleton; does nothing on a headless server.

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

| Member | What it is |
| --- | --- |
| <Link id="m-btnclear" /><code>{"private bool btnClear"}</code> | Inspector button for `Clear`. |
| <Link id="m-btnload" /><code>{"private bool btnLoad"}</code> | Inspector button for `LoadEditor`. |
| <Link id="m-btnsave" /><code>{"private bool btnSave"}</code> | Inspector button for `Save`. |
| <Link id="m-btnsaveas" /><code>{"private bool btnSaveAs"}</code> | Inspector button for `SaveAs`. |
| <Link id="m-camera" /><code>{"private Camera camera"}</code> | Camera that renders the glyphs into page textures. |
| <Link id="m-descriptor" /><code>{"private "}<Link to="/game-api/types/global-s/serializedrendertexturedescriptor">{"SerializedRenderTextureDescriptor"}</Link>{" descriptor"}</code> | Render texture settings for page textures. |
| <Link id="m-fallbackformats" /><code>{"private RenderTextureFormat[] fallBackFormats"}</code> | Render texture formats tried in order if the set one isn't supported. |
| <Link id="m-firstglyph" /><code>{"private "}<Link to="/game-api/types/alta-items/glyphinstance">{"GlyphInstance"}</Link>{" firstGlyph"}</code> | Template glyph cloned for extra glyphs. |
| <Link id="m-glyphs" /><code>{"private List<"}<Link to="/game-api/types/alta-items/glyphinstance">{"GlyphInstance"}</Link>{"> glyphs"}</code> | Glyph objects currently laid out. |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/alta-items/pagerenderer">{"PageRenderer"}</Link>{" instance"}</code> | The singleton. |
| <Link id="m-iscalibrating" /><code>{"private bool isCalibrating"}</code> | Inspector flag; not read in this file. |
| <Link id="m-isfirsttexture" /><code>{"private bool isFirstTexture"}</code> | True until the first render, so the initial temporary target can be released. |
| <Link id="m-page" /><code>{"private "}<Link to="/game-api/types/alta-items/page">{"Page"}</Link>{" page"}</code> | Page loaded by the editor Load button. |
| <Link id="m-pagematerial" /><code>{"private Material pageMaterial"}</code> | Base page material; also returned for empty pages. |
| <Link id="m-pool" /><code>{"private List<Material> pool"}</code> | Unused page materials ready for reuse. |
| <Link id="m-pooldata" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{"> poolData"}</code> | Page data last rendered into each pooled material, so a match can skip re-rendering. |
| <Link id="m-savedpages" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{", Material> savedPages"}</code> | Materials in use, by page data. |
| <Link id="m-usecounts" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{", int> useCounts"}</code> | How many users each page data's material has. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" data)"}</code> | Lays out glyph objects to match the page data, adding or hiding glyphs as needed. |
| <Link id="m-release" /><code>{"static void Release("}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" data)"}</code> | Lowers the use count for page data; at zero the material goes back to the pool. |
| <Link id="m-render" /><code>{"static Material Render("}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" data)"}</code> | Returns a material showing the page data, reusing a cached or pooled one, or rendering a new one. Null on headless. |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cleancamera" /><code>{"private IEnumerator CleanCamera() (iterator)"}</code> | Coroutine that clears the camera's target texture a frame later and releases it. |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | Editor button: removes all but the first glyph and blanks it. |
| <Link id="m-createnewmaterial" /><code>{"private static Material CreateNewMaterial()"}</code> | Clones the page material and gives it a new render texture. |
| <Link id="m-ensurematerialtextureiscreated" /><code>{"private static bool EnsureMaterialTextureIsCreated(Material material)"}</code> | Recreates a material's render texture if it has been lost. |
| <Link id="m-loadeditor" /><code>{"private void LoadEditor()"}</code> | Editor button: loads the `page` field's data. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Makes this the singleton, destroying any older instance. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Empty. |
| <Link id="m-save" /><code>{"private void Save()"}</code> | Editor button; empty in this build. |
| <Link id="m-saveas" /><code>{"private void SaveAs()"}</code> | Editor button; empty in this build. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Gets the camera, picks a supported render texture format and sets an initial target. Skipped on headless. |

</details>

## Used in

Members of other types that take, return or hold a `PageRenderer`:

[`PageProvider.testRenderer`](/game-api/types/global-p/pageprovider#m-testrenderer).
