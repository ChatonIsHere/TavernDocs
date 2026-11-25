---
title: "TerrainInfo"
description: "class TerrainInfo in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TerrainInfo

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`SingletonBehaviour<TerrainInfo>`](/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`TerrainInfo`](/game-api/types/global-t-x/terraininfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TerrainInfo()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-splatmapdivider" /><code>{"const int SplatMapDivider"}</code> |  |
| <Link id="m-splatcontrol" /><code>{"private static readonly int _SplatControl"}</code> |  |
| <Link id="m-instantiatedsplat" /><code>{"private Texture2D instantiatedSplat"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-sourcesplat" /><code>{"private Texture2D sourceSplat"}</code> |  |
| <Link id="m-terrain" /><code>{"private Terrain terrain"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-offset" /><code>{"Vector3 Offset { get; private set; }"}</code> |  |
| <Link id="m-size" /><code>{"Vector3 Size { get; private set; }"}</code> |  |
| <Link id="m-splat" /><code>{"Texture2D Splat { get; }"}</code> |  |
| <Link id="m-terraindata" /><code>{"TerrainData TerrainData { get; private set; }"}</code> |  |
| <Link id="m-unit" /><code>{"Vector3 Unit { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getheightandnormalatposition" /><code>{"float GetHeightAndNormalAtPosition(float x, float z, out Vector3 normal)"}</code> |  |
| <Link id="m-getheightatposition" /><code>{"float GetHeightAtPosition("}<Link to="/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" access, float x, float z)"}</code> |  |
| <Link id="m-getheightatposition-2" /><code>{"float GetHeightAtPosition(float x, float z)"}</code> |  |
| <Link id="m-getnormalatposition" /><code>{"Vector3 GetNormalAtPosition(float x, float z)"}</code> |  |
| <Link id="m-getsegment" /><code><Link to="/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" GetSegment(float x, float y, float width, float height, bool isHeight = true, bool isSplat = true)"}</code> |  |
| <Link id="m-getsegment-2" /><code><Link to="/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" GetSegment(Bounds bounds, bool isHeight = true, bool isSplat = true)"}</code> |  |
| <Link id="m-getsteepnessatposition" /><code>{"float GetSteepnessAtPosition(float x, float z)"}</code> |  |
| <Link id="m-initializeeditor" /><code>{"void InitializeEditor()"}</code> |  |
| <Link id="m-isabove" /><code>{"bool IsAbove(Vector3 point, float lenience = 0)"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |

## Used in

Members of other types that take, return or hold a `TerrainInfo`:

[`ForestGenerator.terrain`](/game-api/types/alta-world-generation/forestgenerator#m-terrain), [`TerrainAccess.ApplyTo`](/game-api/types/global-t-x/terrainaccess#m-applyto), [`TerrainAccess.Terrain`](/game-api/types/global-t-x/terrainaccess#m-terrain), [`TerrainAccess.TerrainAccess`](/game-api/types/global-t-x/terrainaccess#m-ctor).
