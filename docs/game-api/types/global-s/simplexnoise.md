---
title: "SimplexNoise"
description: "class SimplexNoise in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimplexNoise

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested types** [`Grad`](/game-api/types/global-s/simplexnoise-grad)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SimplexNoise(double offsetX, double offsetY, double offsetZ, double offsetW)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-f2" /><code>{"private static double F2"}</code> |  |
| <Link id="m-f3" /><code>{"private static double F3"}</code> |  |
| <Link id="m-f4" /><code>{"private static double F4"}</code> |  |
| <Link id="m-g2" /><code>{"private static double G2"}</code> |  |
| <Link id="m-g3" /><code>{"private static double G3"}</code> |  |
| <Link id="m-g4" /><code>{"private static double G4"}</code> |  |
| <Link id="m-grad3" /><code>{"private static "}<Link to="/game-api/types/global-s/simplexnoise-grad">{"SimplexNoise.Grad"}</Link>{"[] grad3"}</code> |  |
| <Link id="m-grad4" /><code>{"private static "}<Link to="/game-api/types/global-s/simplexnoise-grad">{"SimplexNoise.Grad"}</Link>{"[] grad4"}</code> |  |
| <Link id="m-offsetw" /><code>{"private double offsetW"}</code> |  |
| <Link id="m-offsetx" /><code>{"private double offsetX"}</code> |  |
| <Link id="m-offsety" /><code>{"private double offsetY"}</code> |  |
| <Link id="m-offsetz" /><code>{"private double offsetZ"}</code> |  |
| <Link id="m-p" /><code>{"private static short[] p"}</code> |  |
| <Link id="m-perm" /><code>{"private short[] perm"}</code> |  |
| <Link id="m-permmod12" /><code>{"private short[] permMod12"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-noise" /><code>{"double Noise(double xin, double yin)"}</code> |  |
| <Link id="m-noise-2" /><code>{"double Noise(double xin, double yin, double zin)"}</code> |  |
| <Link id="m-noise-3" /><code>{"double Noise(double x, double y, double z, double w)"}</code> |  |
| <Link id="m-noise01" /><code>{"double Noise01(double x, double y)"}</code> |  |
| <Link id="m-noise01-2" /><code>{"double Noise01(double x, double y, double z)"}</code> |  |
| <Link id="m-noise01-3" /><code>{"double Noise01(double x, double y, double z, double w)"}</code> |  |
| <Link id="m-dot" /><code>{"private static double dot("}<Link to="/game-api/types/global-s/simplexnoise-grad">{"SimplexNoise.Grad"}</Link>{" g, double x, double y)"}</code> |  |
| <Link id="m-dot-2" /><code>{"private static double dot("}<Link to="/game-api/types/global-s/simplexnoise-grad">{"SimplexNoise.Grad"}</Link>{" g, double x, double y, double z)"}</code> |  |
| <Link id="m-dot-3" /><code>{"private static double dot("}<Link to="/game-api/types/global-s/simplexnoise-grad">{"SimplexNoise.Grad"}</Link>{" g, double x, double y, double z, double w)"}</code> |  |
| <Link id="m-fastfloor" /><code>{"private static int fastfloor(double x)"}</code> |  |

## Used in

Members of other types that take, return or hold a `SimplexNoise`:

[`GenerationBase.SimplexNoise`](/game-api/types/alta-world-generation/generationbase#m-simplexnoise), [`IGenerator.SimplexNoise`](/game-api/types/alta-world-generation/igenerator#m-simplexnoise), [`LineDraw.Cylinder3D`](/game-api/types/alta-world-generation/linedraw#m-cylinder3d), [`ForestGeneration.noise`](/game-api/types/alta-world-generation/forestgeneration#m-noise), [`ForestGeneration.SimplexNoise`](/game-api/types/alta-world-generation/forestgeneration#m-simplexnoise), [`BiomeSphereManager.GetBiome`](/game-api/types/global-a-b/biomespheremanager#m-getbiome), [`ForestBiome.GetScore`](/game-api/types/global-e-h/forestbiome#m-getscore).
