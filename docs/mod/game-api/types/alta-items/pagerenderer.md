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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PageRenderer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnclear" /><code>{"private bool btnClear"}</code> | <span className="api-desc">Inspector button for `Clear`.</span> |
| <Link id="m-btnload" /><code>{"private bool btnLoad"}</code> | <span className="api-desc">Inspector button for `LoadEditor`.</span> |
| <Link id="m-btnsave" /><code>{"private bool btnSave"}</code> | <span className="api-desc">Inspector button for `Save`.</span> |
| <Link id="m-btnsaveas" /><code>{"private bool btnSaveAs"}</code> | <span className="api-desc">Inspector button for `SaveAs`.</span> |
| <Link id="m-camera" /><code>{"private Camera camera"}</code> | <span className="api-desc">Camera that renders the glyphs into page textures.</span> |
| <Link id="m-descriptor" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serializedrendertexturedescriptor">{"SerializedRenderTextureDescriptor"}</Link>{" descriptor"}</code> | <span className="api-desc">Render texture settings for page textures.</span> |
| <Link id="m-fallbackformats" /><code>{"private RenderTextureFormat[] fallBackFormats"}</code> | <span className="api-desc">Render texture formats tried in order if the set one isn't supported.</span> |
| <Link id="m-firstglyph" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/glyphinstance">{"GlyphInstance"}</Link>{" firstGlyph"}</code> | <span className="api-desc">Template glyph cloned for extra glyphs.</span> |
| <Link id="m-glyphs" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/glyphinstance">{"GlyphInstance"}</Link>{"> glyphs"}</code> | <span className="api-desc">Glyph objects currently laid out.</span> |
| <Link id="m-instance" /><code>{"private static "}<Link to="/mod/game-api/types/alta-items/pagerenderer">{"PageRenderer"}</Link>{" instance"}</code> | <span className="api-desc">The singleton.</span> |
| <Link id="m-iscalibrating" /><code>{"private bool isCalibrating"}</code> | <span className="api-desc">Inspector flag; not read in this file.</span> |
| <Link id="m-isfirsttexture" /><code>{"private bool isFirstTexture"}</code> | <span className="api-desc">True until the first render, so the initial temporary target can be released.</span> |
| <Link id="m-page" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/page">{"Page"}</Link>{" page"}</code> | <span className="api-desc">Page loaded by the editor Load button.</span> |
| <Link id="m-pagematerial" /><code>{"private Material pageMaterial"}</code> | <span className="api-desc">Base page material; also returned for empty pages.</span> |
| <Link id="m-pool" /><code>{"private List<Material> pool"}</code> | <span className="api-desc">Unused page materials ready for reuse.</span> |
| <Link id="m-pooldata" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{"> poolData"}</code> | <span className="api-desc">Page data last rendered into each pooled material, so a match can skip re-rendering.</span> |
| <Link id="m-savedpages" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{", Material> savedPages"}</code> | <span className="api-desc">Materials in use, by page data.</span> |
| <Link id="m-usecounts" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{", int> useCounts"}</code> | <span className="api-desc">How many users each page data's material has.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"void Load("}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" data)"}</code> | <span className="api-desc">Lays out glyph objects to match the page data, adding or hiding glyphs as needed.</span> |
| <Link id="m-release" /><code>{"static void Release("}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" data)"}</code> | <span className="api-desc">Lowers the use count for page data; at zero the material goes back to the pool.</span> |
| <Link id="m-render" /><code>{"static Material Render("}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" data)"}</code> | <span className="api-desc">Returns a material showing the page data, reusing a cached or pooled one, or rendering a new one. Null on headless.</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cleancamera" /><code>{"private IEnumerator CleanCamera() (iterator)"}</code> | <span className="api-desc">Coroutine that clears the camera's target texture a frame later and releases it.</span> |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | <span className="api-desc">Editor button: removes all but the first glyph and blanks it.</span> |
| <Link id="m-createnewmaterial" /><code>{"private static Material CreateNewMaterial()"}</code> | <span className="api-desc">Clones the page material and gives it a new render texture.</span> |
| <Link id="m-ensurematerialtextureiscreated" /><code>{"private static bool EnsureMaterialTextureIsCreated(Material material)"}</code> | <span className="api-desc">Recreates a material's render texture if it has been lost.</span> |
| <Link id="m-loadeditor" /><code>{"private void LoadEditor()"}</code> | <span className="api-desc">Editor button: loads the `page` field's data.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Makes this the singleton, destroying any older instance.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-save" /><code>{"private void Save()"}</code> | <span className="api-desc">Editor button; empty in this build.</span> |
| <Link id="m-saveas" /><code>{"private void SaveAs()"}</code> | <span className="api-desc">Editor button; empty in this build.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Gets the camera, picks a supported render texture format and sets an initial target. Skipped on headless.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PageRenderer`:

<div className="api-used-in">

[`PageProvider.testRenderer`](/mod/game-api/types/global-p/pageprovider#m-testrenderer).

</div>
