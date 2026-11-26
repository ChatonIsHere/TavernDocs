---
title: "SimplexNoise"
description: "Simplex noise in 2, 3 or 4 dimensions, with per-instance offsets added to the inputs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimplexNoise

A **class** in `Root.Township`, the global namespace.

Simplex noise in 2, 3 or 4 dimensions, with per-instance offsets added to the inputs.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested types** [`Grad`](/mod/game-api/types/global-s/simplexnoise-grad)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SimplexNoise(double offsetX, double offsetY, double offsetZ, double offsetW)"}</code> | <span className="api-desc">Creates a `SimplexNoise` from `offsetX`, `offsetY`, `offsetZ` and `offsetW`.</span> |

## Fields

<details className="api-private">
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-f2" /><code>{"private static double F2"}</code> | <span className="api-desc">2D skew factor for simplex noise.</span> |
| <Link id="m-f3" /><code>{"private static double F3"}</code> | <span className="api-desc">3D skew factor.</span> |
| <Link id="m-f4" /><code>{"private static double F4"}</code> | <span className="api-desc">4D skew factor.</span> |
| <Link id="m-g2" /><code>{"private static double G2"}</code> | <span className="api-desc">2D unskew factor.</span> |
| <Link id="m-g3" /><code>{"private static double G3"}</code> | <span className="api-desc">3D unskew factor.</span> |
| <Link id="m-g4" /><code>{"private static double G4"}</code> | <span className="api-desc">4D unskew factor.</span> |
| <Link id="m-grad3" /><code>{"private static "}<Link to="/mod/game-api/types/global-s/simplexnoise-grad">{"SimplexNoise.Grad"}</Link>{"[] grad3"}</code> | <span className="api-desc">The 12 gradient directions for 2D and 3D noise.</span> |
| <Link id="m-grad4" /><code>{"private static "}<Link to="/mod/game-api/types/global-s/simplexnoise-grad">{"SimplexNoise.Grad"}</Link>{"[] grad4"}</code> | <span className="api-desc">The 32 gradient directions for 4D noise.</span> |
| <Link id="m-offsetw" /><code>{"private double offsetW"}</code> | <span className="api-desc">Added to the w input, so noise objects with different offsets give different patterns.</span> |
| <Link id="m-offsetx" /><code>{"private double offsetX"}</code> | <span className="api-desc">Added to the x input.</span> |
| <Link id="m-offsety" /><code>{"private double offsetY"}</code> | <span className="api-desc">Added to the y input.</span> |
| <Link id="m-offsetz" /><code>{"private double offsetZ"}</code> | <span className="api-desc">Added to the z input.</span> |
| <Link id="m-p" /><code>{"private static short[] p"}</code> | <span className="api-desc">The fixed 256-entry permutation table. All instances share it, so the offsets are the only seed.</span> |
| <Link id="m-perm" /><code>{"private short[] perm"}</code> | <span className="api-desc">`p` doubled to 512 entries to avoid wrapping.</span> |
| <Link id="m-permmod12" /><code>{"private short[] permMod12"}</code> | <span className="api-desc">`perm` values mod 12, to index `grad3`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-noise" /><code>{"double Noise(double xin, double yin)"}</code> | <span className="api-desc">Noise value at the point, in the range -1 to 1.</span> |
| <Link id="m-noise-2" /><code>{"double Noise(double xin, double yin, double zin)"}</code> | <span className="api-desc">Noise value at the point, in the range -1 to 1.</span> |
| <Link id="m-noise-3" /><code>{"double Noise(double x, double y, double z, double w)"}</code> | <span className="api-desc">Noise value at the point, in the range -1 to 1.</span> |
| <Link id="m-noise01" /><code>{"double Noise01(double x, double y)"}</code> | <span className="api-desc">Noise value at the point, rescaled to 0 to 1.</span> |
| <Link id="m-noise01-2" /><code>{"double Noise01(double x, double y, double z)"}</code> | <span className="api-desc">Noise value at the point, rescaled to 0 to 1.</span> |
| <Link id="m-noise01-3" /><code>{"double Noise01(double x, double y, double z, double w)"}</code> | <span className="api-desc">Noise value at the point, rescaled to 0 to 1.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dot" /><code>{"private static double dot("}<Link to="/mod/game-api/types/global-s/simplexnoise-grad">{"SimplexNoise.Grad"}</Link>{" g, double x, double y)"}</code> | <span className="api-desc">Dot product of a gradient with a 2D, 3D or 4D offset.</span> |
| <Link id="m-dot-2" /><code>{"private static double dot("}<Link to="/mod/game-api/types/global-s/simplexnoise-grad">{"SimplexNoise.Grad"}</Link>{" g, double x, double y, double z)"}</code> | <span className="api-desc">Dot product of a gradient with a 2D, 3D or 4D offset.</span> |
| <Link id="m-dot-3" /><code>{"private static double dot("}<Link to="/mod/game-api/types/global-s/simplexnoise-grad">{"SimplexNoise.Grad"}</Link>{" g, double x, double y, double z, double w)"}</code> | <span className="api-desc">Dot product of a gradient with a 2D, 3D or 4D offset.</span> |
| <Link id="m-fastfloor" /><code>{"private static int fastfloor(double x)"}</code> | <span className="api-desc">Floor of a double as an int, faster than `Math.Floor`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SimplexNoise`:

<div className="api-used-in">

[`GenerationBase.SimplexNoise`](/mod/game-api/types/alta-world-generation/generationbase#m-simplexnoise), [`IGenerator.SimplexNoise`](/mod/game-api/types/alta-world-generation/igenerator#m-simplexnoise), [`LineDraw.Cylinder3D`](/mod/game-api/types/alta-world-generation/linedraw#m-cylinder3d), [`ForestGeneration.noise`](/mod/game-api/types/alta-world-generation/forestgeneration#m-noise), [`ForestGeneration.SimplexNoise`](/mod/game-api/types/alta-world-generation/forestgeneration#m-simplexnoise), [`BiomeSphereManager.GetBiome`](/mod/game-api/types/global-a-b/biomespheremanager#m-getbiome), [`ForestBiome.GetScore`](/mod/game-api/types/global-e-h/forestbiome#m-getscore).

</div>
