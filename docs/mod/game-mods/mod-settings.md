---
title: Mod settings
description: Give your mod settings with MelonPreferences, and show them on TavernEssentials' Mods board.
---

# Mod settings

Use MelonLoader's preferences for settings. Players can edit them in a file, and if they have [TavernEssentials](https://github.com/ModdingTavern/TavernEssentials), they show up on its **Mods** board in the game with nothing extra from you.

## Making settings

```csharp
using MelonLoader;

public class HelloTavernMod : MelonMod
{
    private MelonPreferences_Entry<bool> _showFps;
    private MelonPreferences_Entry<float> _hudScale;

    public override void OnInitializeMelon()
    {
        var cat = MelonPreferences.CreateCategory("HelloTavern", "Hello Tavern");
        _showFps = cat.CreateEntry("show_fps", true, "Show FPS", "Shows a frame counter on your wrist.");
        _hudScale = cat.CreateEntry("hud_scale", 1.0f, "HUD scale", "Size of the HUD.",
                                    validator: new ValueRange<float>(0.5f, 2f));

        // Apply a change the moment it happens.
        _showFps.OnEntryValueChanged.Subscribe((was, now) => ApplyFps(now));
    }

    private void ApplyFps(bool on) { /* ... */ }
}
```

They're saved in the game folder's `UserData\MelonPreferences.cfg`.

## On the Mods board

The board shows what it can turn into a lever or a dial:

- A `bool` is a lever.
- An `enum` is a dial of its names.
- An `int`, `float` or `double` is a dial, but only with a `ValueRange` (21 steps at most).

Strings, keybinds, `[Flags]` enums, numbers without a range, and hidden entries or categories don't show.

- **Subscribe to `OnEntryValueChanged`** so a change applies straight away. Without it, the board tells the player the change "applies after restart".
- **Add a description** with `[assembly: AssemblyDescription("...")]`. The board shows it with your `MelonInfo` name, version and author.
- **Keep every value one the file can hold.** If a value can't be written (like a `[Flags]` value of several names), nothing in that category saves.

## Server settings

Settings on a server are just as useful, for example a mod's limits or timers. They live in the server's own `UserData\MelonPreferences.cfg`. Say on your mod's page which ones are for hosts.
