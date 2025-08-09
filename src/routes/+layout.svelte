<script>
        import "$styles/app.css";
        import Header from "$components/Header.svelte";
        import { user } from "../stores/user.js";
        import { onMount } from "svelte";
        import { getUser } from "$utils/storage.js";

        let { children } = $props();

        onMount(() => {
                user.set(getUser());
        });
</script>

<Header />
<main id="content">
        {@render children?.()}
</main>
