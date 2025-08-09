<script>
        import { onMount } from 'svelte';
        import { getData } from '../../utils/storage.js';

        let characters = $state([]);
        onMount(() => {
                characters = getData('characters');
        });
</script>

<h1>Character Codex</h1>
<ul>
        {#each characters as c}
                <li>{c.name} - {c.role} ({c.tier})</li>
        {/each}
</ul>
