export function getJokes() {
  return fetch(
    "http://ec2-54-95-91-196.ap-northeast-1.compute.amazonaws.com/api/jokes"
  )
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
  return fetch(
    "http://ec2-54-95-91-196.ap-northeast-1.compute.amazonaws.com/api/vote",
    {
      body: JSON.stringify({ id, vote }),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }
  );
}
