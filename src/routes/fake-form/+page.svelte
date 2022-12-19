<h2>Fake Form</h2>

<form method="post">
  <label>Name <input required type="text" name="name" /></label>

  <label>Email <input required type="email" name="email" /></label>

  <label>Message <textarea required name="message" /></label>

  <button type="submit">Submit</button>
</form>

<p>Return <a href="/">home</a>?</p>

<style>
  h2 {
    /* text-align: center; */
    max-width: 400px;
    margin: 0 auto 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    max-width: 400px;
    margin: 0 auto;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  button[type="submit"] {
    font-size: var(--font-size-base);
  }
</style>
