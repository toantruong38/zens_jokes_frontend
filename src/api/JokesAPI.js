export function getJokes() {
  return fetch("http://localhost:3001/jokes")
    .then(async (res) => {
      if (res.status !== 200) {
        return [];
      }

      const body = await res.json();
      return body.jokes;
    })
    .catch(() => []);
}

export function voteJoke(id, vote) {
  return fetch("http://localhost:3001/vote", {
    body: JSON.stringify({ id, vote }),
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
}