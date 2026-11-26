---
title: Your first mod
description: Set up a mod project, build it against the game or att-stubs, and load it in the game.
---

# Your first mod

This makes a mod that logs a line when it loads. It's the smallest thing that proves your setup works. Everything else builds on it.

## What you need

- The [.NET SDK](https://dotnet.microsoft.com/download) (8 or newer).
- The .NET Framework 4.8 targeting pack. Visual Studio installs it with the ".NET desktop development" workload. Without Visual Studio, install the [.NET Framework 4.8 Developer Pack](https://dotnet.microsoft.com/download/dotnet-framework/net48).
- An editor: Visual Studio, Rider or VS Code with the C# extension.
- Something to build against: either your game with MelonLoader installed (run the launcher's [Setup](../../play/getting-started/set-up-the-game.md) on it), or [att-stubs](game-files-or-stubs.md). If you're not sure, start with your game. You need it to test anyway.

## 1. Make the project

```powershell
mkdir HelloTavern
cd HelloTavern
git init
```

Make `HelloTavern.csproj`:

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <!-- GameDir comes from Local.props (not committed) or -p:GameDir=... -->
  <Import Project="Local.props" Condition="Exists('Local.props')" />

  <PropertyGroup>
    <TargetFramework>net48</TargetFramework>
    <LangVersion>latest</LangVersion>
    <AssemblyName>HelloTavern</AssemblyName>
    <RootNamespace>HelloTavern</RootNamespace>
    <Version>1.0.0</Version>
    <AppendTargetFrameworkToOutputPath>false</AppendTargetFrameworkToOutputPath>
    <Managed>$(GameDir)\A Township Tale_Data\Managed\</Managed>
    <MelonLoaderDir>$(GameDir)\MelonLoader\net35\</MelonLoaderDir>
  </PropertyGroup>

  <!-- A clear error instead of a hundred missing types when GameDir is wrong. -->
  <Target Name="CheckGameDir" BeforeTargets="ResolveAssemblyReferences">
    <Error Condition="'$(GameDir)' == '' Or !Exists('$(Managed)Root.Township.dll')"
           Text="Set GameDir to an A Township Tale install with MelonLoader (in Local.props, or -p:GameDir=...). Got '$(GameDir)'." />
  </Target>

  <ItemGroup>
    <!-- Private="false": the game already has these, so don't copy them next to your DLL. -->
    <Reference Include="Root.Township" HintPath="$(Managed)Root.Township.dll" Private="false" />
    <Reference Include="UnityEngine.CoreModule" HintPath="$(Managed)UnityEngine.CoreModule.dll" Private="false" />
    <Reference Include="MelonLoader" HintPath="$(MelonLoaderDir)MelonLoader.dll" Private="false" />
    <Reference Include="0Harmony" HintPath="$(MelonLoaderDir)0Harmony.dll" Private="false" />
  </ItemGroup>

</Project>
```

Add more `Reference` lines as you need other game assemblies, like `Alta.Core.Runtime` or `UnityEngine.PhysicsModule`. They're all in the game's `A Township Tale_Data\Managed` folder.

## 2. Tell it where the game is

Make `Local.props` next to the project, with your game folder:

```xml
<Project>
  <PropertyGroup>
    <GameDir>C:\Games\Alta\A Township Tale</GameDir>
  </PropertyGroup>
</Project>
```

This file is just for your PC, so keep it out of Git. Make `.gitignore`:

```
bin/
obj/
.vs/
.idea/
*.user
Local.props
```

## 3. Write the mod

Make `HelloTavernMod.cs`:

```csharp
using MelonLoader;

[assembly: MelonInfo(typeof(HelloTavern.HelloTavernMod), "HelloTavern", "1.0.0", "Placeholder", "https://github.com/Placeholder/HelloTavern")]
[assembly: MelonGame("Alta", "A Township Tale")]

namespace HelloTavern;

public class HelloTavernMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        LoggerInstance.Msg("Hello from the Tavern!");
    }
}
```

`MelonInfo` tells MelonLoader your mod's name, version, author and link. Keep the version the same as the one in the `.csproj`.

## 4. Build it

```powershell
dotnet build -c Release
```

Your mod is `bin\Release\HelloTavern.dll`. If the build says to set `GameDir`, check the path in `Local.props` points at the folder with `A Township Tale.exe` in it, and that Setup has been run on it.

## 5. Try it

1. Close the game if it's open.
2. Copy `HelloTavern.dll` into the game's `Mods` folder.
3. Start the game from the launcher. Tick **Show MelonLoader** first so you get the log window.
4. Look for `Hello from the Tavern!` in the MelonLoader window, or in `MelonLoader\Latest.log` in the game folder.

The launcher's Mod Manager shows your mod as **Untracked**, since it didn't come from a mod source. That's expected while you're working on it.

## Running on the server too

The same DLL loads on a server if it's in the server's `Mods` folder. To tell them apart in code, check the command line. Servers start with `/start_server`:

```csharp
public static bool IsServer { get; } =
    System.Environment.GetCommandLineArgs().Any(a => string.Equals(a, "/start_server", System.StringComparison.OrdinalIgnoreCase));
```

(Add `using System.Linq;` at the top.) See [Client, server or both](../tavernlib/client-server-or-both.md).

## Next

- Patch the game with Harmony. The [Harmony docs](https://harmony.pardeike.net/articles/intro.html) cover it, and MelonLoader applies `[HarmonyPatch]` classes in your mod for you. [Harmony in A Township Tale](../game-api/patching/harmony.md) covers what's different in this game, and [Known patch points](../game-api/patching/known-patch-points.md) lists methods other mods already patch.
- Find your way around the game's code: [Game API](../game-api/overview.md).
- Give it settings players can change: [Mod settings](mod-settings.md).
- Build it on GitHub and release it: [Building on GitHub](building-on-github.md).

## Something went wrong?

See [Modding troubleshooting](../troubleshooting.md).
