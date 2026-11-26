---
title: "ParticleDestination"
description: "Where PooledParticleSystemManipulator sends particles: the player's hands, the player's body or custom targets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ParticleDestination

An **enum** in `Root.Township`, the global namespace.

Where `PooledParticleSystemManipulator` sends particles: the player's hands, the player's body or custom targets.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)

## Values

| Member |
| --- |
| <Link id="m-custom" /><code>{"Custom = 2"}</code> |
| <Link id="m-playerbody" /><code>{"PlayerBody = 1"}</code> |
| <Link id="m-playerhands" /><code>{"PlayerHands = 0"}</code> |

## Used in

Members of other types that take, return or hold a `ParticleDestination`:

[`PooledParticleSystemManipulator.GetParticleTargets`](/mod/game-api/types/game-other-namespaces/pooledparticlesystemmanipulator#m-getparticletargets), [`PooledParticleSystemManipulator.MoveToPlayer`](/mod/game-api/types/game-other-namespaces/pooledparticlesystemmanipulator#m-movetoplayer), [`PooledParticleSystemManipulator.ParticleMovementRoutine`](/mod/game-api/types/game-other-namespaces/pooledparticlesystemmanipulator#m-particlemovementroutine), [`VfxData.particleDestination`](/mod/game-api/types/game-other-namespaces/vfxdata#m-particledestination), [`VfxData.ParticleDestination`](/mod/game-api/types/game-other-namespaces/vfxdata#m-particledestination-2).
