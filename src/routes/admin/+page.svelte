<script>
        import { user } from '../../stores/user.js';
        import { getData, setData } from '../../utils/storage.js';
        import { onMount } from 'svelte';

        let characterName = $state('');
        let role = $state('DPS');
        let tier = $state('T0');
        let lightconeName = $state('');
        let characters = $state([]);
        let lightcones = $state([]);

        onMount(() => {
                characters = getData('characters');
                lightcones = getData('lightcones');
        });

        function addCharacter(event) {
                event.preventDefault();
                characters = [...characters, { name: characterName, role, tier }];
                setData('characters', characters);
                characterName = '';
        }

        function addLightcone(event) {
                event.preventDefault();
                lightcones = [...lightcones, { name: lightconeName }];
                setData('lightcones', lightcones);
                lightconeName = '';
        }
</script>

{#if $user && $user.isMaster}
        <h1>Admin Panel</h1>
        <section>
                <h2>Add Character</h2>
                <form onsubmit={addCharacter}>
                        <input placeholder="Name" bind:value={characterName} />
                        <select bind:value={role}>
                                <option>DPS</option>
                                <option>Support DPS</option>
                                <option>Amplifier</option>
                                <option>Sustain</option>
                        </select>
                        <select bind:value={tier}>
                                <option>T0</option>
                                <option>T0.5</option>
                                <option>T1</option>
                                <option>T2</option>
                                <option>T3</option>
                                <option>T4</option>
                                <option>T5</option>
                        </select>
                        <button type="submit">Add</button>
                </form>
        </section>
        <section>
                <h2>Add Lightcone</h2>
                <form onsubmit={addLightcone}>
                        <input placeholder="Name" bind:value={lightconeName} />
                        <button type="submit">Add</button>
                </form>
        </section>
{:else}
        <h1>Not authorized</h1>
{/if}
