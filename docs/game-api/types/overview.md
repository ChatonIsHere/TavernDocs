---
title: Type browser
description: "Every type in the game's own code, by namespace, with its kind, base type, public member count and the page that documents it."
sidebar_position: 1
---

# Type browser

A list of every type in Alta's code: `Root.Township` and the `Alta.*` assemblies of the server build. It's for finding things. Most types have no page of their own; when one does, the last column links to it.

5722 types are listed, 692 of them with a hand-written page.

## Pages

| Page | Types | With a page |
| --- | --- | --- |
| [Networking and servers](alta-networking.md) | 201 | 31 |
| [World, chunks and saving](alta-world.md) | 172 | 25 |
| [World generation](alta-world-generation.md) | 339 | 74 |
| [Creatures and AI](alta-intelligence.md) | 267 | 76 |
| [Items, inventory and logic](alta-items.md) | 289 | 82 |
| [Crafting and making](alta-crafting.md) | 252 | 75 |
| [Stats, effects, heat and liquid](alta-stats-effects.md) | 185 | 73 |
| [Players and characters](alta-player.md) | 250 | 20 |
| [Customization and screenshots](alta-customization.md) | 144 | 9 |
| [Console, logging and analytics](alta-console.md) | 139 | 16 |
| [Menus, UI and platforms](alta-menus.md) | 128 | 0 |
| [Utilities and other Alta namespaces](alta-utilities.md) | 206 | 6 |
| [ATT, Features and other game namespaces](game-other-namespaces.md) | 233 | 16 |
| [No namespace: A to B](global-a-b.md) | 195 | 13 |
| [No namespace: C to D](global-c-d.md) | 275 | 15 |
| [No namespace: E to H](global-e-h.md) | 291 | 27 |
| [No namespace: I to L](global-i-l.md) | 295 | 10 |
| [No namespace: M to O](global-m-o.md) | 170 | 8 |
| [No namespace: P](global-p.md) | 327 | 39 |
| [No namespace: Q to R](global-q-r.md) | 114 | 4 |
| [No namespace: S](global-s.md) | 315 | 16 |
| [No namespace: T to X](global-t-x.md) | 249 | 13 |
| [Alta.Api.Client](assembly-api-client.md) | 121 | 2 |
| [Alta.Api.DataTransferModels](assembly-api-models.md) | 277 | 4 |
| [Other Alta assemblies](assembly-other.md) | 288 | 38 |

## The columns

| Column | What it shows |
| --- | --- |
| Type | The type name. Nested types are written `Outer.Inner`. Generic types show their type parameters. |
| Kind | `class`, `struct`, `interface`, `enum`, `delegate` or `record`, with `static` or `abstract` for classes. A type that isn't public says so (`internal`, `private`), and so does a public nested type inside a non-public one. You can still reach those through att-stubs' publicized `Root.Township` or Harmony's `AccessTools`. |
| Base | The base class and interfaces, as declared, at most three. For an enum it's the underlying type. |
| Public members | Public fields, properties, methods, events, constructors and operators declared in the type itself, each overload counted once. Inherited members and nested types aren't counted. For an enum it's the number of values; for an interface, every member. |
| Documented in | The hand-written page (or two) that covers the type, found by its name in a heading or a table cell. The text after it is the first line of that page's description, when there is one. |

## What is listed

- Every top-level type, public or not.
- Nested types only when they're public all the way out. The editor menu path classes nested in `AltaMenuItemBase` are counted on its row instead.
- Compiler-made types (async state machines, lambdas' closures) aren't in the decompiled source, so they aren't here.

## What is skipped

Third-party libraries built into `Root.Township` are left out. The game uses them, but they're documented by their makers:

| Library | Types skipped |
| --- | --- |
| Steamworks.NET | 351 |
| Wwise (Audiokinetic) Unity integration | 208 |
| A\* Pathfinding Project | 199 |
| FinalIK | 108 |
| I2 Localization | 79 |
| Triangle.NET | 60 |
| FlyingWorm Console Pro | 59 |
| Discord Game SDK | 56 |
| QuickLod | 38 |
| Agones game server SDK | 12 |
| Amplify Impostors | 11 |
| VTL ListView | 9 |
| YuME map editor | 9 |
| CSharpCompiler (runtime C\# compiling) | 7 |
| Stylized Water Shader | 6 |
| MHLab PATCH | 3 |
| MegaSplat and Vertex Painter Pro | 3 |
| Unity post-processing stack | 3 |
| UnityHeapEx (heap dumps) | 2 |
| Discord RPC | 1 |
| Gaia | 1 |
| VacuumBreather PID controller | 1 |

Their namespaces are `AK`, `Agones`, `AmplifyImpostors`, `CSharpCompiler`, `Discord`, `FlyingWormConsole3`, `Gaia`, `I2`, `JBooth`, `MHLab`, `Pathfinding`, `QuickLod`, `RootMotion`, `Steamworks`, `StylizedWaterShader`, `TriangleNet`, `UnityEngine.PostProcessing`, `UnityHeapEx`, `VTL`, `VacuumBreather`. Wwise's types with no namespace (names starting with `Ak` or `AK`, and its `Wwise...Reference` types) are skipped too, and so are a few loose third-party scripts: `AILerp`, `AstarPath`, `BlockManager`, `ConsoleProDebug`, `DiscordRpc`, `LodObserverLamp`, `LodStructureEmpty`, `MegaSplatTerrainManager`, `Seeker`, `SingleNodeBlocker`, `SteamManager`, `TurnBasedAI` and the `YuME_` map editor types.

Other assemblies in `Managed` (Unity, kcp2k, VContainer, NLog, Fleck, Newtonsoft.Json and so on) aren't Alta's and aren't listed. Four small assemblies of Alta's aren't listed either, because they weren't decompiled with the rest: `AltaPlatformSdk`, `AltaSocketsNETFramework`, `Township.Core.Runtime` and `Township.PostProcessing`.

## How this list is made

A script reads the decompiled server build (ILSpy output) with pattern matching, not a compiler. Counts can be off by one or two for an unusual declaration, and a type declared in an odd way could be missing. Check the type in att-stubs or a decompiler before you rely on a detail. The links to hand-written pages are found by name, so a type that shares its name with another can miss its link.

## See also

- [Game API](../overview.md) for how the game fits together.
- [Log line index](../patching/log-messages.md) to find the type behind a log line.
