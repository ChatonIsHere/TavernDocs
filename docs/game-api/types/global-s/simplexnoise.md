---
title: "SimplexNoise"
description: "Simplex noise in 2, 3 or 4 dimensions, with per-instance offsets added to the inputs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimplexNoise

A **class** in `Root.Township`, no namespace.

Simplex noise in 2, 3 or 4 dimensions, with per-instance offsets added to the inputs.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested types** [`Grad`](/game-api/types/global-s/simplexnoise-grad)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SimplexNoise(double offsetX, double offsetY, double offsetZ, double offsetW)"}</code> |

## Fields

<details>
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-f2" /><code>{"private static double F2"}</code> | 2D skew factor for simplex noise. |
| <Link id="m-f3" /><code>{"private static double F3"}</code> | 3D skew factor. |
| <Link id="m-f4" /><code>{"private static double F4"}</code> | 4D skew factor. |
| <Link id="m-g2" /><code>{"private static double G2"}</code> | 2D unskew factor. |
| <Link id="m-g3" /><code>{"private static double G3"}</code> | 3D unskew factor. |
| <Link id="m-g4" /><code>{"private static double G4"}</code> | 4D unskew factor. |
| <Link id="m-grad3" /><code>{"private static "}<Link to="/game-api/types/global-s/simplexnoise-grad">{"SimplexNoise.Grad"}</Link>{"[] grad3"}</code> | The 12 gradient directions for 2D and 3D noise. |
| <Link id="m-grad4" /><code>{"private static "}<Link to="/game-api/types/global-s/simplexnoise-grad">{"SimplexNoise.Grad"}</Link>{"[] grad4"}</code> | The 32 gradient directions for 4D noise. |
| <Link id="m-offsetw" /><code>{"private double offsetW"}</code> | Added to the w input, so noise objects with different offsets give different patterns. |
| <Link id="m-offsetx" /><code>{"private double offsetX"}</code> | Added to the x input. |
| <Link id="m-offsety" /><code>{"private double offsetY"}</code> | Added to the y input. |
| <Link id="m-offsetz" /><code>{"private double offsetZ"}</code> | Added to the z input. |
| <Link id="m-p" /><code>{"private static short[] p"}</code> | The fixed 256-entry permutation table. All instances share it, so the offsets are the only seed. |
| <Link id="m-perm" /><code>{"private short[] perm"}</code> | `p` doubled to 512 entries to avoid wrapping. |
| <Link id="m-permmod12" /><code>{"private short[] permMod12"}</code> | `perm` values mod 12, to index `grad3`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-noise" /><code>{"double Noise(double xin, double yin)"}</code> | Noise value at the point, in the range -1 to 1. |
| <Link id="m-noise-2" /><code>{"double Noise(double xin, double yin, double zin)"}</code> | Noise value at the point, in the range -1 to 1. |
| <Link id="m-noise-3" /><code>{"double Noise(double x, double y, double z, double w)"}</code> | Noise value at the point, in the range -1 to 1. |
| <Link id="m-noise01" /><code>{"double Noise01(double x, double y)"}</code> | Noise value at the point, rescaled to 0 to 1. |
| <Link id="m-noise01-2" /><code>{"double Noise01(double x, double y, double z)"}</code> | Noise value at the point, rescaled to 0 to 1. |
| <Link id="m-noise01-3" /><code>{"double Noise01(double x, double y, double z, double w)"}</code> | Noise value at the point, rescaled to 0 to 1. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dot" /><code>{"private static double dot("}<Link to="/game-api/types/global-s/simplexnoise-grad">{"SimplexNoise.Grad"}</Link>{" g, double x, double y)"}</code> | Dot product of a gradient with a 2D, 3D or 4D offset. |
| <Link id="m-dot-2" /><code>{"private static double dot("}<Link to="/game-api/types/global-s/simplexnoise-grad">{"SimplexNoise.Grad"}</Link>{" g, double x, double y, double z)"}</code> | Dot product of a gradient with a 2D, 3D or 4D offset. |
| <Link id="m-dot-3" /><code>{"private static double dot("}<Link to="/game-api/types/global-s/simplexnoise-grad">{"SimplexNoise.Grad"}</Link>{" g, double x, double y, double z, double w)"}</code> | Dot product of a gradient with a 2D, 3D or 4D offset. |
| <Link id="m-fastfloor" /><code>{"private static int fastfloor(double x)"}</code> | Floor of a double as an int, faster than `Math.Floor`. |

</details>

## Used in

Members of other types that take, return or hold a `SimplexNoise`:

[`GenerationBase.SimplexNoise`](/game-api/types/alta-world-generation/generationbase#m-simplexnoise), [`IGenerator.SimplexNoise`](/game-api/types/alta-world-generation/igenerator#m-simplexnoise), [`LineDraw.Cylinder3D`](/game-api/types/alta-world-generation/linedraw#m-cylinder3d), [`ForestGeneration.noise`](/game-api/types/alta-world-generation/forestgeneration#m-noise), [`ForestGeneration.SimplexNoise`](/game-api/types/alta-world-generation/forestgeneration#m-simplexnoise), [`BiomeSphereManager.GetBiome`](/game-api/types/global-a-b/biomespheremanager#m-getbiome), [`ForestBiome.GetScore`](/game-api/types/global-e-h/forestbiome#m-getscore).
