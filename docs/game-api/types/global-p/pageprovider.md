---
title: "PageProvider"
description: "abstract class PageProvider in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PageProvider

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`GeneratedPageProvider<T>`](/game-api/types/global-e-h/generatedpageprovider-t), [`StaticPageProvider`](/game-api/types/global-s/staticpageprovider)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PageProvider()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-btnrandomtest" /><code>{"private bool btnRandomTest"}</code> |  |
| <Link id="m-btntest" /><code>{"private bool btnTest"}</code> |  |
| <Link id="m-providers" /><code>{"private static Dictionary<int, "}<Link to="/game-api/types/global-p/pageprovider">{"PageProvider"}</Link>{"> providers"}</code> |  |
| <Link id="m-spawnweight" /><code>{"private float spawnWeight"}</code> |  |
| <Link id="m-testrenderer" /><code>{"protected "}<Link to="/game-api/types/alta-items/pagerenderer">{"PageRenderer"}</Link>{" testRenderer"}</code> |  |
| <Link id="m-totalspawnweight" /><code>{"private static float totalSpawnWeight"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"abstract int Identifier { get; }"}</code> |  |
| <Link id="m-providers-2" /><code>{"static Dictionary<int, "}<Link to="/game-api/types/global-p/pageprovider">{"PageProvider"}</Link>{"> Providers { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-findproviders" /><code>{"static void FindProviders()"}</code> |  |
| <Link id="m-getrandom" /><code>{"abstract "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GetRandom()"}</code> |  |
| <Link id="m-getrandomspawn" /><code>{"static "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GetRandomSpawn()"}</code> |  |
| <Link id="m-load" /><code>{"abstract "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" Load("}<Link to="/game-api/types/alta-items/pageinstancesavedata">{"PageInstanceSaveData"}</Link>{" saveData)"}</code> |  |
| <Link id="m-save" /><code>{"abstract void Save("}<Link to="/game-api/types/alta-items/pageinstancesavedata">{"PageInstanceSaveData"}</Link>{" saveData, "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page)"}</code> |  |
| <Link id="m-serialize" /><code>{"abstract void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-test" /><code>{"protected abstract void Test()"}</code> |  |
| <Link id="m-testrandom" /><code>{"protected void TestRandom()"}</code> |  |

## Used in

Members of other types that take, return or hold a `PageProvider`:

[`PageData.PageData`](/game-api/types/alta-items/pagedata#m-ctor), [`PageData.Provider`](/game-api/types/alta-items/pagedata#m-provider).
