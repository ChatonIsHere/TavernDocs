---
title: "CosmeticMeshPartBase<T>"
description: "A cosmetic part that adds a mesh with its own texture to the character, coloured with two cosmetic colours."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticMeshPartBase&lt;T&gt;

A **class** in `Root.Township`, `Alta.Customization`.

A cosmetic part that adds a mesh with its own texture to the character, coloured with two cosmetic colours. Attaching it adds an input to the character's cosmetic packer and repacks.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`CustomizationVisualPart<T>`](/mod/game-api/types/alta-customization/customizationvisualpart-targuments), [`ICosmeticMeshPartBase`](/mod/game-api/types/alta-customization/icosmeticmeshpartbase), [`ICustomizationPart`](/mod/game-api/types/alta-customization/icustomizationpart)
- **Derived types** [`CosmeticEyePart`](/mod/game-api/types/alta-customization/cosmeticeyepart), [`CosmeticMeshPart`](/mod/game-api/types/alta-customization/cosmeticmeshpart), [`SkinMeshPart`](/mod/game-api/types/alta-customization/skinmeshpart)
- **Nested types** [`TextureCache`](/mod/game-api/types/alta-customization/cosmeticmeshpartbase-t-texturecache)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticMeshPartBase()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidimpededlods" /><code>{"private Mesh[] androidImpededLods"}</code> | <span className="api-desc">Android LOD meshes used when the part is impeded (covered by another item). Serialized but the packer reads `impededLods`.</span> |
| <Link id="m-androidlods" /><code>{"private Mesh[] androidLods"}</code> | <span className="api-desc">Android LOD meshes. Serialized but the packer reads `lods`.</span> |
| <Link id="m-androidnormal" /><code>{"private Texture2D androidNormal"}</code> | <span className="api-desc">Android normal map. Serialized but not used by the getters.</span> |
| <Link id="m-androidtexture" /><code>{"private Texture2D androidTexture"}</code> | <span className="api-desc">Android diffuse texture. Serialized but not used by the getters.</span> |
| <Link id="m-copycolorfrom" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/customizationvisualpart">{"CustomizationVisualPart"}</Link>{" copyColorFrom"}</code> | <span className="api-desc">Another part whose colours this part shares; colour changes are passed on to it and the packer copies from its input.</span> |
| <Link id="m-impededlods" /><code>{"private Mesh[] impededLods"}</code> | <span className="api-desc">LOD meshes used when the part's arguments are marked impeded (for example hair under a hat).</span> |
| <Link id="m-isalphablending" /><code>{"private bool isAlphaBlending"}</code> | <span className="api-desc">Whether the part is packed into the transparent meshes and drawn alpha blended.</span> |
| <Link id="m-isalphablendingandroid" /><code>{"private bool isAlphaBlendingAndroid"}</code> | <span className="api-desc">Android version of `isAlphaBlending`. Serialized but not read.</span> |
| <Link id="m-iscolorlocked" /><code>{"private bool isColorLocked"}</code> | <span className="api-desc">When set, `ApplyColorToArguments` refuses to recolour this part.</span> |
| <Link id="m-isdisabledonandroid" /><code>{"private bool isDisabledOnAndroid"}</code> | <span className="api-desc">Serialized flag to skip the part on Android, but `IsDisabledOnAndroid` always returns false in this build.</span> |
| <Link id="m-isgeneratingbackfaces" /><code>{"private bool isGeneratingBackFaces"}</code> | <span className="api-desc">When set, the mesh packer adds reversed triangles so the part shows from both sides.</span> |
| <Link id="m-isshowninfirstperson" /><code>{"private bool isShownInFirstPerson"}</code> | <span className="api-desc">When false the part is packed into the head meshes, which are hidden in first person.</span> |
| <Link id="m-lods" /><code>{"private Mesh[] lods"}</code> | <span className="api-desc">LOD meshes for this part, highest detail first.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-normal" /><code>{"private Texture2D normal"}</code> | <span className="api-desc">Normal map packed into the character's normal atlas.</span> |
| <Link id="m-originallink" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/editorlink">{"EditorLink"}</Link>{" originalLink"}</code> | <span className="api-desc">Editor link back to the source asset.</span> |
| <Link id="m-texture" /><code>{"private Texture2D texture"}</code> | <span className="api-desc">Diffuse texture packed into the character's atlas.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-copycolorfrom-2" /><code><Link to="/mod/game-api/types/alta-customization/icosmeticmeshpartbase">{"ICosmeticMeshPartBase"}</Link>{" CopyColorFrom { get; }"}</code> | <span className="api-desc">Another part whose colours this part shares, if any.</span> |
| <Link id="m-impededlods-2" /><code>{"Mesh[] ImpededLods { get; }"}</code> | <span className="api-desc">LOD meshes used instead when the part's arguments are marked impeded. If empty, the part is skipped then.</span> |
| <Link id="m-isalphablending-2" /><code>{"bool IsAlphaBlending { get; }"}</code> | <span className="api-desc">Whether the part uses alpha blending.</span> |
| <Link id="m-isdisabledonandroid-2" /><code>{"bool IsDisabledOnAndroid { get; }"}</code> | <span className="api-desc">Always false in this build, whatever the inspector says.</span> |
| <Link id="m-isgeneratingbackfaces-2" /><code>{"bool IsGeneratingBackFaces { get; }"}</code> | <span className="api-desc">Whether back faces are generated for the mesh.</span> |
| <Link id="m-istexturesharingforced" /><code>{"virtual bool IsTextureSharingForced { get; }"}</code> | <span className="api-desc">Whether the packer must share this part's texture. False in the base class.</span> |
| <Link id="m-lods-2" /><code>{"Mesh[] Lods { get; }"}</code> | <span className="api-desc">The part's LOD meshes.</span> |
| <Link id="m-normal-2" /><code>{"Texture2D Normal { get; }"}</code> | <span className="api-desc">The part's normal map.</span> |
| <Link id="m-texture-2" /><code>{"Texture2D Texture { get; }"}</code> | <span className="api-desc">The part's diffuse texture.</span> |
| <Link id="m-workingindex" /><code>{"int WorkingIndex { get; set; }"}</code> | <span className="api-desc">Index the packer uses while working on this part.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applycolortoarguments" /><code>{"bool ApplyColorToArguments("}<Link to="/mod/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" color, bool isPrimary, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> | <span className="api-desc">Sets the primary or secondary colour on this part and the part it copies from. False if locked or unchanged.</span> |
| <Link id="m-getcustompickupcolors" /><code>{"virtual void GetCustomPickupColors(out "}<Link to="/mod/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" primary, out "}<Link to="/mod/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" secondary)"}</code> | <span className="api-desc">Colours to use when the part is shown as a pickup. Null in the base class.</span> |
| <Link id="m-attach" /><code>{"protected override void Attach("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | <span className="api-desc">Adds this part to the character's cosmetic packer and repacks. Logs an error if it is already there.</span> |
| <Link id="m-changearguments" /><code>{"protected override void ChangeArguments("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | <span className="api-desc">Updates the part's colours in the packer and repacks.</span> |
| <Link id="m-createinput" /><code>{"protected virtual "}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker-input">{"CosmeticPacker.Input"}</Link>{" CreateInput("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | <span className="api-desc">Builds the packer input: part id, colours, first-person visibility, blending and blit materials.</span> |
| <Link id="m-detach" /><code>{"protected override void Detach("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Removes this part from the packer, cleans its materials and repacks.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor hook; empty in this build.</span> |

</details>
