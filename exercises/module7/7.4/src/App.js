import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  useMatch,
} from "react-router-dom";
import { Input, Button, Form } from "antd";
import {
  BookOutlined,
  UserOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css"; //TODO est ce que c'est vraiment utile ?

const Menu = () => {
  const padding = {
    paddingRight: 5,
  };
  return (
    <div>
      <Link style={padding} to="/">
        anecdotes
      </Link>
      <Link style={padding} to="/create">
        create new
      </Link>
      <Link style={padding} to="/about">
        about
      </Link>
    </div>
  );
};

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map((anecdote) => (
        <li key={anecdote.id}>
          <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>

    <em>
      An anecdote is a brief, revealing account of an individual person or an
      incident. Occasionally humorous, anecdotes differ from jokes because their
      primary purpose is not simply to provoke laughter but to reveal a truth
      more general than the brief tale itself, such as to characterize a person
      by delineating a specific quirk or trait, to communicate an abstract idea
      about a person, place, or thing through the concrete details of a short
      narrative. An anecdote is "a story with a point."
    </em>

    <p>
      Software engineering is full of excellent anecdotes, at this app you can
      find the best and add more.
    </p>
  </div>
);

const Footer = () => (
  <div>
    Anecdote app for <a href="https://fullstackopen.com/">Full Stack Open</a>.
    See{" "}
    <a href="https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js">
      https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js
    </a>{" "}
    for the source code.
  </div>
);

const CreateNew = ({ addNew, setTimedNotification }) => {
  const navigate = useNavigate();

  const handleFinish = ({ content, author, info }) => {
    addNew({
      content,
      author,
      info,
      votes: 0,
    });
    setTimedNotification(content);
    navigate("/");
  };

  const handleFinishFailed = (errorInfo) => {
    alert("Nul Germain !");
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
      >
        <Form.Item
          label="Content"
          name="content"
          rules={[{ required: true, message: "Please input the content!" }]}
        >
          <Input prefix={<BookOutlined />} />
        </Form.Item>
        <Form.Item
          label="Author"
          name="author"
          rules={[{ required: true, message: "Please input the author!" }]}
        >
          <Input suffix={<UserOutlined />} />
        </Form.Item>
        <Form.Item
          label="Url for more info"
          name="info"
          rules={[{ required: true, message: "Please input the url!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            create <CheckCircleOutlined />
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const anecdoteById = (id, anecdotes) => anecdotes.find((a) => a.id === id);

const Anecdote = ({ anecdotes }) => {
  const id = Number(useParams().id);
  const anecdote = anecdoteById(id, anecdotes);

  return (
    <div>
      <h2>
        {anecdote.content} by {anecdote.author}
      </h2>
      <p>has {anecdote.votes} votes</p>
      <p>
        for more info see <a href={anecdote.info}>{anecdote.info}</a>
      </p>
    </div>
  );
};

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: "If it hurts, do it more often",
      author: "Jez Humble",
      info: "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
      votes: 0,
      id: 1,
    },
    {
      content: "Premature optimization is the root of all evil",
      author: "Donald Knuth",
      info: "http://wiki.c2.com/?PrematureOptimization",
      votes: 0,
      id: 2,
    },
  ]);

  const [notification, setNotification] = useState("");
  const setTimedNotification = (anecdoteName) => {
    setNotification('A new anecdote "' + anecdoteName + '" was created !');
    setTimeout(() => setNotification(""), 5000);
  };

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
  };

  const vote = (id) => {
    const anecdote = anecdoteById(id, anecdotes);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  };

  return (
    <div>
      <Router>
        <h1>Software anecdotes</h1>
        <Menu />
        <p>{notification}</p>
        <Routes>
          <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/create"
            element={
              <CreateNew
                addNew={addNew}
                setTimedNotification={setTimedNotification}
              />
            }
          />
          <Route
            path="/anecdotes/:id"
            element={<Anecdote anecdotes={anecdotes} />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
