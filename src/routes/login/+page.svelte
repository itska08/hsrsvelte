<script>
        import { setUser } from '../../utils/storage.js';
        import { user } from '../../stores/user.js';
        import { goto } from '$app/navigation';

        let username = $state('');
        let password = $state('');

        function submit(event) {
                event.preventDefault();
                const isMaster = username === 'master' && password === 'masterpass';
                const u = { username, isMaster };
                setUser(u);
                user.set(u);
                goto('/');
        }
</script>

<h1>Login</h1>
<form onsubmit={submit}>
        <label>Username <input bind:value={username} /></label>
        <label>Password <input type="password" bind:value={password} /></label>
        <button type="submit">Login</button>
</form>
