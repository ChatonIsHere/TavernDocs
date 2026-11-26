---
title: "TextureOutput"
description: "Settings for one texture a texture-baking tool writes out: name, size, channels, compression and file format."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TextureOutput

A **class** in `Root.Township`, the global namespace.

Settings for one texture a texture-baking tool writes out: name, size, channels, compression and file format. Editor or tool data, not gameplay.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TextureOutput()"}</code> | Creates a `TextureOutput` from `a`, `n`, `s`, `sr`, `c`, `nc` and `i`. |
| <Link id="m-ctor-2" /><code>{"TextureOutput(bool a, string n, "}<Link to="/mod/game-api/types/global-t-x/texturescale">{"TextureScale"}</Link>{" s, bool sr, "}<Link to="/mod/game-api/types/global-t-x/texturechannels">{"TextureChannels"}</Link>{" c, "}<Link to="/mod/game-api/types/global-t-x/texturecompression">{"TextureCompression"}</Link>{" nc, "}<Link to="/mod/game-api/types/global-i-l/imageformat">{"ImageFormat"}</Link>{" i)"}</code> | Creates a `TextureOutput` from `a`, `n`, `s`, `sr`, `c`, `nc` and `i`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-active" /><code>{"bool Active"}</code> | Whether this output is written at all. |
| <Link id="m-channels" /><code><Link to="/mod/game-api/types/global-t-x/texturechannels">{"TextureChannels"}</Link>{" Channels"}</code> | Which colour channels the texture holds. |
| <Link id="m-compression" /><code><Link to="/mod/game-api/types/global-t-x/texturecompression">{"TextureCompression"}</Link>{" Compression"}</code> | Compression to use for the texture. Defaults to normal. |
| <Link id="m-imageformat" /><code><Link to="/mod/game-api/types/global-i-l/imageformat">{"ImageFormat"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/imageformat">{"ImageFormat"}</Link></code> | File format to write. Defaults to TGA. |
| <Link id="m-index" /><code>{"int Index"}</code> | Slot index of this output, -1 when unset. |
| <Link id="m-name" /><code>{"string Name"}</code> | Name of the output texture. |
| <Link id="m-overridemask" /><code><Link to="/mod/game-api/types/global-m-o/overridemask">{"OverrideMask"}</Link>{" "}<Link to="/mod/game-api/types/global-m-o/overridemask">{"OverrideMask"}</Link></code> | Which of these settings override the defaults. |
| <Link id="m-scale" /><code><Link to="/mod/game-api/types/global-t-x/texturescale">{"TextureScale"}</Link>{" Scale"}</code> | Output size relative to the source. Defaults to full size. |
| <Link id="m-srgb" /><code>{"bool SRGB"}</code> | Whether the texture is sRGB (colour) rather than linear data. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code><Link to="/mod/game-api/types/global-t-x/textureoutput">{"TextureOutput"}</Link>{" Clone()"}</code> | Returns a shallow copy of these settings. |

## Used in

Members of other types that take, return or hold a `TextureOutput`:

[`AmplifyImpostorAsset.OverrideOutput`](/mod/game-api/types/global-a-b/amplifyimpostorasset#m-overrideoutput), [`AmplifyImpostorBakePreset.Output`](/mod/game-api/types/global-a-b/amplifyimpostorbakepreset#m-output).
