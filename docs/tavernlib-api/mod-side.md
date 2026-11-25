---
title: TavernMod attribute
description: TavernModAttribute, ModSide and GetModSide.
sidebar_position: 3
---

# TavernMod attribute

`TavernLib.ModdingApi.TavernModAttribute`, `ModSide` and `TavernMelonBaseExtension` in `TavernLib.dll`. Both sides.

A label for which side your mod is for. TavernLib never reads it, so it changes nothing about where your mod loads. That's decided by your manifest's [targets](../mod/publishing/manifest-reference.md#targets). Other mods can read it, for example a mod list that wants to show it.

## Members

`public enum ModSide`

| Value | |
| --- | --- |
| `None` (0) | Not set. Also what `GetModSide` gives for a mod without the attribute. |
| `Server` (1) | |
| `Client` (2) | |
| `Both` (3) | |

`[AttributeUsage(AttributeTargets.Class, Inherited = false)] public class TavernModAttribute : Attribute`

| Member | |
| --- | --- |
| `TavernModAttribute(ModSide side)` | |
| `ModSide Side { get; }` | |

`public static class TavernMelonBaseExtension`

| Member | What it does |
| --- | --- |
| `static ModSide GetModSide(this MelonBase melonMod)` | Reads the attribute from the melon's own class. `None` if it has none. |

## Example

```csharp
using MelonLoader;
using TavernLib.ModdingApi;

[TavernMod(ModSide.Both)]
public class SideMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        LoggerInstance.Msg($"Built for: {this.GetModSide()}");

        foreach (var melon in MelonMod.RegisteredMelons)
            if (melon.GetModSide() == ModSide.Server)
                LoggerInstance.Msg($"{melon.Info.Name} says it's server only");
    }
}
```

## Gotchas

- Put it on the class MelonLoader creates (the one in `MelonInfo`). `Inherited = false`, so a subclass of an attributed base class reads as `None`.
- It's only a label. To make a DLL do the right half at run time, check the side yourself: [Client, server or both](../mod/tavernlib/client-server-or-both.md#telling-them-apart-in-code).
- Calling `GetModSide` on a mod means your mod references TavernLib. That's fine for any mod on a Tavern install.

## See also

- [Client, server or both](../mod/tavernlib/client-server-or-both.md)
