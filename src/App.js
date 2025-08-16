/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [model, setModel] = useState(false);

  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬독학",
  ]);

  let [따봉, 따봉변경] = useState([0, 0, 0]);

  let [title] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button
        onClick={() => {
          const arrCopy = [...글제목];
          arrCopy.sort();
          글제목변경(arrCopy);
        }}
      >
        가나다순정렬
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자 코트 추천";
          글제목변경(copy);
        }}
      >
        글수정
      </button>

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4 onClick={() => setModel(true)}>
              {글제목[i]}
              <span
                onClick={() => {
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>3월 26일 발행</p>
          </div>
        );
      })}

      <button
        onClick={() => {
          setModel(!model);
        }}
      >
        {글제목[0]}
      </button>
      {model == true ? <Model 글제목변경={글제목변경} 글제목={글제목} /> : null}
    </div>
  );
}

function Model(props) {
  //function 문법 사용시 return 안에가 아닌, 밖에다 사용해야함. 즉, function 밑에 return문을 적어서 사용해야함.
  return (
    //그런 뒤 현재의 return에 축약할 html을 담습니다.
    <div className="model" style={{ background: props.color }}>
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.글제목변경(["여자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
