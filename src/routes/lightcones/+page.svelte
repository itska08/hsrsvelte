<script>
        import { onMount } from 'svelte';
        import { getData } from '../../utils/storage.js';

        let lightcones = $state([]);
        onMount(() => {
                lightcones = getData('lightcones');
        });
</script>

<h1>Lightcone Codex</h1>
<ul>
        {#each lightcones as l}
                <li>{l.name}</li>
        {/each}
</ul>
