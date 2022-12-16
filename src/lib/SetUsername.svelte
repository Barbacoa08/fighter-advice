<script lang="ts">
  export let username: string = "";

  let newUsername: string = username;

  let updatedUsername = "";
  const handleUpdate = async () => {
    const result = await fetch("/user", {
      method: "POST",
      body: JSON.stringify({ username: newUsername }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    updatedUsername = (await result.json()).username;
  };

  const handleGet = async () => {
    const result = await fetch("/user");

    updatedUsername = (await result.json()).username;
  };
</script>

<div>
  <label>
    <span>Set Username</span>
    <input type="text" bind:value={newUsername} />
  </label>

  <button on:click={handleUpdate}>Update</button>
</div>

<div>
  <p>Current Username: {username}</p>
  <p>New Username: {updatedUsername}</p>
</div>

<div>
  <button on:click={handleGet}>Pull `locals.user.username`</button>
  <aside>Sets `temp` var to pulled value</aside>
</div>
