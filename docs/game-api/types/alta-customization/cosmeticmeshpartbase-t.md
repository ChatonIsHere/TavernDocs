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

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`CustomizationVisualPart<T>`](/game-api/types/alta-customization/customizationvisualpart-targuments), [`ICosmeticMeshPartBase`](/game-api/types/alta-customization/icosmeticmeshpartbase), [`ICustomizationPart`](/game-api/types/alta-customization/icustomizationpart)
- **Derived types** [`CosmeticEyePart`](/game-api/types/alta-customization/cosmeticeyepart), [`CosmeticMeshPart`](/game-api/types/alta-customization/cosmeticmeshpart), [`SkinMeshPart`](/game-api/types/alta-customization/skinmeshpart)
- **Nested types** [`TextureCache`](/game-api/types/alta-customization/cosmeticmeshpartbase-t-texturecache)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticMeshPartBase()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-androidimpededlods" /><code>{"private Mesh[] androidImpededLods"}</code> |  |
| <Link id="m-androidlods" /><code>{"private Mesh[] androidLods"}</code> |  |
| <Link id="m-androidnormal" /><code>{"private Texture2D androidNormal"}</code> |  |
| <Link id="m-androidtexture" /><code>{"private Texture2D androidTexture"}</code> |  |
| <Link id="m-copycolorfrom" /><code>{"private "}<Link to="/game-api/types/alta-customization/customizationvisualpart">{"CustomizationVisualPart"}</Link>{" copyColorFrom"}</code> |  |
| <Link id="m-impededlods" /><code>{"private Mesh[] impededLods"}</code> |  |
| <Link id="m-isalphablending" /><code>{"private bool isAlphaBlending"}</code> |  |
| <Link id="m-isalphablendingandroid" /><code>{"private bool isAlphaBlendingAndroid"}</code> |  |
| <Link id="m-iscolorlocked" /><code>{"private bool isColorLocked"}</code> |  |
| <Link id="m-isdisabledonandroid" /><code>{"private bool isDisabledOnAndroid"}</code> |  |
| <Link id="m-isgeneratingbackfaces" /><code>{"private bool isGeneratingBackFaces"}</code> |  |
| <Link id="m-isshowninfirstperson" /><code>{"private bool isShownInFirstPerson"}</code> |  |
| <Link id="m-lods" /><code>{"private Mesh[] lods"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-normal" /><code>{"private Texture2D normal"}</code> |  |
| <Link id="m-originallink" /><code>{"private "}<Link to="/game-api/types/global-e-h/editorlink">{"EditorLink"}</Link>{" originalLink"}</code> |  |
| <Link id="m-texture" /><code>{"private Texture2D texture"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-copycolorfrom-2" /><code><Link to="/game-api/types/alta-customization/icosmeticmeshpartbase">{"ICosmeticMeshPartBase"}</Link>{" CopyColorFrom { get; }"}</code> | Another part whose colours this part shares, if any. |
| <Link id="m-impededlods-2" /><code>{"Mesh[] ImpededLods { get; }"}</code> | LOD meshes used instead when the part's arguments are marked impeded. If empty, the part is skipped then. |
| <Link id="m-isalphablending-2" /><code>{"bool IsAlphaBlending { get; }"}</code> | Whether the part uses alpha blending. |
| <Link id="m-isdisabledonandroid-2" /><code>{"bool IsDisabledOnAndroid { get; }"}</code> | Always false in this build, whatever the inspector says. |
| <Link id="m-isgeneratingbackfaces-2" /><code>{"bool IsGeneratingBackFaces { get; }"}</code> | Whether back faces are generated for the mesh. |
| <Link id="m-istexturesharingforced" /><code>{"virtual bool IsTextureSharingForced { get; }"}</code> | Whether the packer must share this part's texture. False in the base class. |
| <Link id="m-lods-2" /><code>{"Mesh[] Lods { get; }"}</code> | The part's LOD meshes. |
| <Link id="m-normal-2" /><code>{"Texture2D Normal { get; }"}</code> | The part's normal map. |
| <Link id="m-texture-2" /><code>{"Texture2D Texture { get; }"}</code> | The part's diffuse texture. |
| <Link id="m-workingindex" /><code>{"int WorkingIndex { get; set; }"}</code> | Index the packer uses while working on this part. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applycolortoarguments" /><code>{"bool ApplyColorToArguments("}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" color, bool isPrimary, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> | Sets the primary or secondary colour on this part and the part it copies from. False if locked or unchanged. |
| <Link id="m-getcustompickupcolors" /><code>{"virtual void GetCustomPickupColors(out "}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" primary, out "}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" secondary)"}</code> | Colours to use when the part is shown as a pickup. Null in the base class. |
| <Link id="m-attach" /><code>{"protected override void Attach("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | Adds this part to the character's cosmetic packer and repacks. Logs an error if it is already there. |
| <Link id="m-changearguments" /><code>{"protected override void ChangeArguments("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | Updates the part's colours in the packer and repacks. |
| <Link id="m-createinput" /><code>{"protected virtual "}<Link to="/game-api/types/alta-customization/cosmeticpacker-input">{"CosmeticPacker.Input"}</Link>{" CreateInput("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | Builds the packer input: part id, colours, first-person visibility, blending and blit materials. |
| <Link id="m-detach" /><code>{"protected override void Detach("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> | Removes this part from the packer, cleans its materials and repacks. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
