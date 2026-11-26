---
title: Creatures and AI
description: How the game's creatures think, move, fight, spawn and die, and where to hook them.
sidebar_position: 1
---

# Creatures and AI

Every creature in the game is an `Agent`: a component from `Alta.Intelligence` in `Root.Township` that picks an action, runs it, and picks again. Spriggulls, turabadas, wyrms, goteras, phantoms and the rest are each one subclass. This section covers that framework, the creatures built on it, how they move, how they deal and take damage, and how they spawn.

## The AI runs on the server

Creature AI is server only. The code makes sure of it in three places (checked in the server build, whose AI code is the same as the client download's):

- `Target.Initialize` (the base of every `Agent`) turns off the AI component on a client, and by default its whole GameObject too. It also only registers targets on the server.
- `Agent.InitializeAsServer` is where an agent sets up its brain and registers with `AgentUpdater`. Clients never call it.
- `AgentUpdater` only starts ticking agents once `GeneralGameEvents.ServerStarted` fires (or straight away if a `ServerHandler` already exists).

Clients just see the result: the creature's position through its network transform, its animations through `NetworkAnimator`, and a few things the server sends on purpose (channel events, a wyrm surfacing, a phantom fading). So a creature mod is almost always a **server mod**. Clients don't need it unless you change something they draw.

The one big exception is **creature melee hits on players**. Hits from collision hitboxes (the spriggull's beak, the wyrm's scythes) are detected only by the victim's client, which reports them to the server. Trigger hitboxes (turabada and babu attacks, gotera vines) are probably seen by the server too. See [Combat, damage and death](combat-and-damage.md#a-creatures-melee-hit-on-a-player).

## How a creature thinks

1. `AgentUpdater` ticks every registered agent in the physics update (`FixedUpdate`), under the update module "AI Agent Updater".
2. Each tick, every agent updates its current action. A few agents (15 a tick in the main world scene, 5 by the code's default) also get to make a new decision: whoever has waited longest, weighted toward creatures near players.
3. To decide, the agent's `ActionDecider` scores every action in its current `ActionSet` against every possible target, and starts the best one.
4. Possible targets come from `TargetCollector`s (anything alive within a radius, 20 m by default) and from whoever hurt the creature.
5. Actions move the creature through `Director`, `Navigator` and `Walker` (pathfinding on the server's navmesh), play animations, and fire channel events that the prefab turns into attacks and effects.

## Pages in this section

| Page | What it covers |
| --- | --- |
| [Agent](agent.md) | The base class of every creature: members, lifecycle, finding instances |
| [AgentUpdater](agent-updater.md) | The scheduler that ticks agents, its priorities and costs |
| [Actions and decisions](actions-and-decisions.md) | Action components, action sets, scoring, AI hooks and channel events |
| [Targets and senses](targets-and-senses.md) | What a creature can target, how it notices players, and aggression |
| [Movement and pathfinding](movement-and-pathfinding.md) | `Director`, `Navigator`, `Walker` and the navmesh |
| [Combat, damage and death](combat-and-damage.md) | How creatures hit, get hit, die and drop things |
| [Spawning and despawning](spawning-and-despawning.md) | The creature side of populations |
| [Common creatures](common-creatures.md) | Spriggull, turabada, wyrm and gotera in detail |
| [Other creatures](other-creatures.md) | Phantom, firebug, schmeechee and the rest |
| [Creature data](creature-data.md) | Health, damage, senses, drops and populations from the shipped prefabs |

## Creature classes

All in `Alta.Intelligence`, all derived from `Agent<TThis>`:

| Class | What it is |
| --- | --- |
| `Spriggull` | Beaked creature that wanders, eats food items, nests at night and jump-attacks |
| `Turabada` | Walking fighter with fist combos, a blocking stance and heal or self-destruct spheres; eight ore variants |
| `Wyrm` | Burrowing creature: hidden underground until it emerges to bite, spin and spit |
| `Gotera`, `GreaterGotera` | Tree creatures that walk, plant themselves and attack with vines, seed sprays and darts; the greater gotera is a 150-health boss |
| `Phantom`, `PlayerLikeSpectralGhost` | Night creatures that materialize and fade at day |
| `FireBug` | A firefly you can catch and shake for light |
| `Schmeechee` | Mushroom critter you can pick up |
| `Babu`, `Dragonfly`, `DeathFern` | The babu, a tusked animal that gives off the "Swine" sense; `Dragonfly` also drives the Dais herd animals; `DeathFern` drives ferns, geysers and other stationary hazards |

[Creature data](creature-data.md#which-prefab-uses-which-class) lists which shipped prefab uses which class, and the generated [Creatures reference](../reference/creatures.md) has every creature prefab with its hash, health, stats and action sets. Find creatures by component type rather than by name: one class covers many prefabs. At runtime `agent.Entity.OriginalName` gives the prefab's name.

## Finding creatures

On the server:

- `UnityEngine.Object.FindObjectsOfType<Agent>()` finds every active agent. On a client it finds nothing, because the AI objects are turned off there.
- `AgentUpdater.AgentCount` is how many agents are being ticked (alive ones).
- `Agent<Spriggull>.SpawnedCount` (and so on for each class) counts instances that exist. It goes up in `Awake` on any machine, so clients count too.
- A postfix on `Agent.InitializeAsServer` sees every creature as it spawns. [Agent](agent.md#tracking-creatures) has an example.
- A creature that came from a population has `agent.PopulationItem`, which points back to its `PopulationSample`.

This console command counts creatures by type, and freezes or restarts all of them. It uses the game's own console (see [Console commands](../../tavernlib/console-commands.md) for registering it).

```csharp
using System.Linq;
using System.Text;
using Alta.Console;
using Alta.Intelligence;
using UnityEngine;

[Module("creatures", "Creature tools")]
public static class CreatureCommands
{
    [Command("list", "Counts the creatures the server is running")]
    [ServerOnly]
    public static string List()
    {
        var text = new StringBuilder();
        foreach (var group in Object.FindObjectsOfType<Agent>().GroupBy(a => a.GetType().Name))
            text.AppendLine($"{group.Key}: {group.Count()}");
        text.Append($"Registered with AgentUpdater: {AgentUpdater.AgentCount}");
        return text.ToString();
    }

    [Command("freeze", "Stops or restarts every creature's AI")]
    [ServerOnly]
    public static string Freeze(bool frozen)
    {
        int count = 0;
        foreach (var agent in Object.FindObjectsOfType<Agent>())
        {
            if (!agent.IsAlive) continue;
            agent.IsEnabled = !frozen;
            count++;
        }
        return $"{(frozen ? "Froze" : "Restarted")} {count} creatures";
    }
}
```

## Where to hook

| You want to | Hook | Page |
| --- | --- | --- |
| Know when a creature spawns | Postfix `Agent.InitializeAsServer` | [Agent](agent.md) |
| See what creatures decide | Postfix `ActionComponent.HandleUsed` | [Actions and decisions](actions-and-decisions.md) |
| Change how fast they move | Postfix a navigation action's `OnStart` (`ActiveWander`, `ActiveFollow`) | [Movement and pathfinding](movement-and-pathfinding.md) |
| Hide a player from creatures | Prefix `Agent.AddTarget` | [Targets and senses](targets-and-senses.md) |
| Change damage either way | Prefix `PlayerHealth.ReceiveDamage` or `HealthObject.ReceiveDamage` | [Combat, damage and death](combat-and-damage.md) |
| Cap or block spawns | Prefix `PopulationSample.CheckSpawned` | [Spawning and despawning](spawning-and-despawning.md) |
| Remove one attack from a creature | Edit its `ActionSet` after `InitializeAsServer` | [Common creatures](common-creatures.md) |

:::warning[Generic types]
Most of the framework is generic: `Agent<TThis>`, `ActionDecider<TAgent>`, `BasicAction<TAgent, TActive, TSettings>`, `ActiveNavigation<...>`. Mono shares one compiled body between closed generic types over reference types, so a patch on one of them can land on every creature type, or not apply at all. Patch a non-generic type, or a concrete subclass's own override (like `ActiveWander.OnStart` or `Wyrm.ChangeAction`), and check `__instance`'s type inside your patch.
:::

## Not covered here

- The A* Pathfinding Project library itself (`Pathfinding`, `AstarPath`, `Seeker`, `RichPath`). This section only covers how the game uses it.
- The population system as a whole (ecosystems, spawn areas, saving). That's in [Populations and spawners](../world/populations.md); [Spawning and despawning](spawning-and-despawning.md) covers what matters for creatures.
- The impact system in general (weapons, tools, detectors). That's in [Impacts and hit detection](../items/impacts.md); [Combat, damage and death](combat-and-damage.md) covers the creature side.
- `Intelligence`, `KnowledgeHolder`, `Atom`, `Term`, `Compound` and `History` in `Alta.Intelligence` are an unfinished logic system. The only code using them is a test in `Intelligence.Awake`. Creatures don't use it.
