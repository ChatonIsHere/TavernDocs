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
| <Link id="m-ctor" /><code>{"TextureOutput()"}</code> | <span className="api-desc">Creates a `TextureOutput` from `a`, `n`, `s`, `sr`, `c`, `nc` and `i`.</span> |
| <Link id="m-ctor-2" /><code>{"TextureOutput(bool a, string n, "}<Link to="/mod/game-api/types/global-t-x/texturescale">{"TextureScale"}</Link>{" s, bool sr, "}<Link to="/mod/game-api/types/global-t-x/texturechannels">{"TextureChannels"}</Link>{" c, "}<Link to="/mod/game-api/types/global-t-x/texturecompression">{"TextureCompression"}</Link>{" nc, "}<Link to="/mod/game-api/types/global-i-l/imageformat">{"ImageFormat"}</Link>{" i)"}</code> | <span className="api-desc">Creates a `TextureOutput` from `a`, `n`, `s`, `sr`, `c`, `nc` and `i`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-active" /><code>{"bool Active"}</code> | <span className="api-desc">Whether this output is written at all.</span> |
| <Link id="m-channels" /><code><Link to="/mod/game-api/types/global-t-x/texturechannels">{"TextureChannels"}</Link>{" Channels"}</code> | <span className="api-desc">Which colour channels the texture holds.</span> |
| <Link id="m-compression" /><code><Link to="/mod/game-api/types/global-t-x/texturecompression">{"TextureCompression"}</Link>{" Compression"}</code> | <span className="api-desc">Compression to use for the texture. Defaults to normal.</span> |
| <Link id="m-imageformat" /><code><Link to="/mod/game-api/types/global-i-l/imageformat">{"ImageFormat"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/imageformat">{"ImageFormat"}</Link></code> | <span className="api-desc">File format to write. Defaults to TGA.</span> |
| <Link id="m-index" /><code>{"int Index"}</code> | <span className="api-desc">Slot index of this output, -1 when unset.</span> |
| <Link id="m-name" /><code>{"string Name"}</code> | <span className="api-desc">Name of the output texture.</span> |
| <Link id="m-overridemask" /><code><Link to="/mod/game-api/types/global-m-o/overridemask">{"OverrideMask"}</Link>{" "}<Link to="/mod/game-api/types/global-m-o/overridemask">{"OverrideMask"}</Link></code> | <span className="api-desc">Which of these settings override the defaults.</span> |
| <Link id="m-scale" /><code><Link to="/mod/game-api/types/global-t-x/texturescale">{"TextureScale"}</Link>{" Scale"}</code> | <span className="api-desc">Output size relative to the source. Defaults to full size.</span> |
| <Link id="m-srgb" /><code>{"bool SRGB"}</code> | <span className="api-desc">Whether the texture is sRGB (colour) rather than linear data.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code><Link to="/mod/game-api/types/global-t-x/textureoutput">{"TextureOutput"}</Link>{" Clone()"}</code> | <span className="api-desc">Returns a shallow copy of these settings.</span> |

## Used in

Members of other types that take, return or hold a `TextureOutput`:

<div className="api-used-in">

[`AmplifyImpostorAsset.OverrideOutput`](/mod/game-api/types/global-a-b/amplifyimpostorasset#m-overrideoutput), [`AmplifyImpostorBakePreset.Output`](/mod/game-api/types/global-a-b/amplifyimpostorbakepreset#m-output).

</div>
