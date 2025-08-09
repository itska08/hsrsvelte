<script>
        import { onMount } from 'svelte';
        import { getData } from '../../utils/storage.js';

        let data = $state([]);
        const categories = ['DPS', 'Support DPS', 'Amplifier', 'Sustain'];
        const tiers = ['T0', 'T0.5', 'T1', 'T2', 'T3', 'T4', 'T5'];
        onMount(() => {
                data = getData('characters');
        });
</script>

<h1>Tier List</h1>
{#each categories as cat}
        <h2>{cat}</h2>
        {#each tiers as tier}
                <h3>{tier}</h3>
                <ul>
                        {#each data.filter(c => c.role === cat && c.tier === tier) as c}
                                <li>{c.name}</li>
                        {/each}
                </ul>
        {/each}
{/each}
