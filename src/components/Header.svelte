<script>
        import { user } from "../stores/user.js";
        import { logoutUser } from "../utils/storage.js";
        import { goto } from "$app/navigation";

        function logout() {
                logoutUser();
                user.set(null);
                goto('/');
        }
</script>

<nav>
        <a href="/">Home</a>
        <a href="/characters">Characters</a>
        <a href="/lightcones">Lightcones</a>
        <a href="/tierlist">Tier List</a>
        {#if $user}
                {#if $user.isMaster}<a href="/admin">Admin</a>{/if}
                <button onclick={logout}>Logout</button>
        {:else}
                <a href="/login">Login</a>
        {/if}
</nav>

<style>
        nav {
                background: #1e1e1e;
                padding: 1rem;
                display: flex;
                gap: 1rem;
        }
        nav a,
        nav button {
                color: #e0e0e0;
                text-decoration: none;
        }
        nav button {
                background: none;
                border: none;
                cursor: pointer;
        }
</style>
