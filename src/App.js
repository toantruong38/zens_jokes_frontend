import "./App.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import { getJokes, voteJoke } from "./api/JokesAPI";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function App() {
  const [jokes, setJokes] = useState([]);
  const [cookies, setCookie] = useCookies(["invisibleJokes"]);

  const getInvisibleJokesId = () => {
    return Array.isArray(cookies.invisibleJokes) ? cookies.invisibleJokes : [];
  };

  const dismissJoke = (joke, passive = false) => {
    if (!joke) {
      return;
    }

    const invisibleJokesId = getInvisibleJokesId();
    setCookie("invisibleJokes", [...invisibleJokesId, joke.id]);

    if (!passive) {
      setJokes(jokes.filter((j) => j.id !== joke.id));
    }
  };
  const onJokeVote = (joke, vote) => {
    if (!joke) {
      return;
    }
    voteJoke(joke.id, vote).finally(() => dismissJoke(joke));
  };

  useEffect(() => {
    getJokes().then((_jokes) => {
      const invisibleJokesId = getInvisibleJokesId();

      const visibleJokes = _jokes.filter(
        (j) => invisibleJokesId.indexOf(j.id) === -1
      );

      setJokes(visibleJokes);

      const joke = visibleJokes[0];
      dismissJoke(joke, true);
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <Body joke={jokes[0]} dismissJoke={dismissJoke} onJokeVote={onJokeVote} />
      <Footer />
    </div>
  );
}

export default App;
