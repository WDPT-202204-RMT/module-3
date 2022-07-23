import ReactPlayer from "react-player";
import Greeting from "./components/Greeting";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import StudentList from "./components/StudentList";

function genAlert() {
  alert("test");
}

const studentData = {
  name: "Matteo",
  info: {
    country: "Italy",
  },
};

const studentDataBis = {
  name: "Enes",
  info: {
    country: "France",
  },
};

function App() {
  return (
    <div className="App">
      <Navbar title="Demo" alert={genAlert} />
      <Greeting target="Ironhack" />
      <Greeting target="France" />
      <Greeting target="Spain" />
      <Greeting target="World" />
      <StudentList>
        <StudentCard student={studentData} />
        <StudentCard student={studentDataBis} />
      </StudentList>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        light={true}
      />
    </div>
  );
}

export default App;
